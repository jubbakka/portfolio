import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

const app = express();
app.use(helmet());
app.use(express.json({ limit: "50kb" }));
app.use(cors({ origin: (process.env.CORS_ORIGIN ?? "http://localhost:5173").split(",") }));

const contactLimiter = rateLimit({ windowMs: 300_000, max: 5 });

function escapeHtml(s: string) {
    return s.replace(/[&<>"']/g, (c) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]!));
}

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
    },
});

transporter.verify().then(() => {
    console.log("SMTP ready");
}).catch(err => {
    console.error("SMTP error:", err);
});

app.post("/api/contact", contactLimiter, async (req, res) => {
    try {
        const { name = "", email = "", message = "" } = req.body;
        if (!name || !email || !message) return res.status(400).json({ error: "Invalid payload" });

        await transporter.sendMail({
            from: `"Portfolio" <${process.env.SMTP_USER}>`,
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

        res.json({ ok: true });
        console.log(`Mail sent from ${email}`);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Mail send failed" });
    }
});

app.listen(process.env.PORT || 3001, () =>
    console.log(`API on http://localhost:${process.env.PORT || 3001}`)
);
