import "dotenv/config";
import express, {type Request, type Response, type NextFunction} from "express";
import nodemailer from "nodemailer";
import helmet from "helmet";
import cors, {type CorsOptionsDelegate} from "cors";
import rateLimit from "express-rate-limit";

const app = express();

app.set("trust proxy", 2);

app.use(helmet());
app.use(express.json({limit: "50kb"}));

/* =====================  C O R S  ===================== */
const allowedOrigins = (process.env.CORS_ORIGIN ?? "")
    .split(",")
    .map(s => s.trim())
    .filter(Boolean);

const corsDelegate: CorsOptionsDelegate = (req, cb) => {
    const origin = (req.headers.origin as string | undefined);
    // Si pas d'origine (ex: Postman) ou origine dans la liste, ok


    const isAllowed = !origin || allowedOrigins.includes(origin);
    cb(null, {
        origin: isAllowed,                         // renvoie Access-Control-Allow-Origin si OK
        methods: ["POST", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
        maxAge: 600,                               // préflight cache 10 min
        credentials: false,
    });
};


app.options("*", cors(corsDelegate));
app.use(cors(corsDelegate));


/* ==================  R A T E   L I M I T  ================== */
const contactLimiter = rateLimit({
    windowMs: 300_000, // 5 minutes
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req) => {
        const xff = req.headers["x-forwarded-for"];
        const ip = Array.isArray(xff) ? xff[0] : xff ? xff.split(",")[0].trim() : req.ip || "unknown";
        return ip;
    },
    handler: (req, res, _next, opts) => {
        const retryAfter = Math.ceil((opts.windowMs ?? 36000_000) / 1000);
        res.setHeader("Retry-After", String(retryAfter));
        return res.status(429).json({error: "Too many requests", retryAfter});
    },
});

/* =====================  U T I L S  ===================== */
function escapeHtml(s: string) {
    return s.replace(/[&<>"']/g, (c) => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}[c]!));
}

/* ==================  M A I L   T R A N S P O R T  ================== */
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465, // true si 465
    auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
    },
});

transporter
    .verify()
    .then(() => console.log("SMTP ready"))
    .catch((err: unknown) => {
        console.error("SMTP error:", err);
    });

/* =====================  R O U T E S  ===================== */
app.get("/health", (_req: Request, res: Response) => res.status(200).send("ok"));

app.post("/api/contact", contactLimiter, async (req: Request, res: Response) => {
    try {
        const {name = "", email = "", message = ""} = (req.body ?? {}) as {
            name: string; email: string; message: string;
        };

        if (!name || !email || !message) {
            return res.status(400).json({error: "Invalid payload"});
        }

        await transporter.sendMail({
            from: `"Portfolio" <${process.env.SMTP_USER}>`, // avec Gmail, doit être ton adresse
            to: process.env.CONTACT_TO!,
            replyTo: `${name} <${email}>`,
            subject: `Nouveau message de ${name}`,
            text: message,
            html: `
        <p><b>Nom:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Message:</b><br>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
        });

        console.log(`Mail sent from ${email}`);
        return res.json({ok: true});
    } catch (e: unknown) {
        console.error(e);
        return res.status(500).json({error: "Mail send failed"});
    }
});

/* =====================  S T A R T  ===================== */
app.listen(process.env.PORT || 3001, () => {
    console.log(`API on http://localhost:${process.env.PORT || 3001}`);
});
