import {motion} from "framer-motion";
import {Hammer, Wrench, Clock, Mail, ArrowLeft, Sparkles} from "lucide-react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";


export default function WIP() {
    const {t} = useTranslation();

    return (
        <main className="min-h-screen px-4 pt-28 pb-16 bg-slate-900 text-slate-100">
            {/* Header */}
            <section className="container mx-auto max-w-5xl">
                <header className="text-center mb-10">
                    <motion.h1
                        initial={{opacity: 0, y: 8}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        className="text-4xl md:text-5xl font-bold tracking-tight"
                    >
                        {t("wip.title.part1")}{" "}
                        <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              {t("wip.title.part2")}
            </span>{" "}
                        🔧
                    </motion.h1>

                    <motion.p
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.15, duration: 0.5}}
                        className="text-slate-400 mt-3 max-w-2xl mx-auto"
                    >
                        {t("wip.subtitle")}
                    </motion.p>
                </header>

                {/* Glass card */}
                <motion.div
                    initial={{opacity: 0, y: 12}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl overflow-hidden"
                >
                    {/* Ambient gradient */}
                    <div
                        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 blur-3xl"/>

                    <div className="p-8 md:p-12">
                        <div className="grid gap-8 md:grid-cols-2 items-center">
                            <div>
                                <div className="flex items-center gap-3 text-slate-300">
                  <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                    <Hammer className="h-5 w-5"/>
                  </span>
                                    <span
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                    <Wrench className="h-5 w-5"/>
                  </span>
                                    <span
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                    <Sparkles className="h-5 w-5"/>
                  </span>
                                </div>

                                <h2 className="mt-6 text-2xl md:text-3xl font-semibold">
                                    {t("wip.lede")}
                                </h2>

                                <p className="mt-3 text-slate-400">
                                    {t("wip.body")}
                                </p>

                                {/* Progress */}
                                <div className="mt-6">
                                    <div className="flex items-center justify-between text-sm text-slate-400">
                                        <span>{t("wip.progress.label")}</span>
                                        <span className="inline-flex items-center gap-1">
                      <Clock className="h-4 w-4"/>
                                            {t("wip.progress.status")}
                    </span>
                                    </div>
                                    <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                                        <div
                                            className="h-2 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400"
                                            style={{width: "62%"}}
                                            aria-label={t("wip.progress.aria", {value: 62})}
                                        />
                                    </div>
                                </div>

                                {/* CTA buttons */}
                                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                    <Link
                                        to="/"
                                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/15 transition"
                                    >
                                        <ArrowLeft className="h-4 w-4"/>
                                        {t("wip.cta.back")}
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:opacity-90 transition shadow-lg"
                                    >
                                        <Mail className="h-4 w-4"/>
                                        {t("wip.cta.contact")}
                                    </Link>
                                </div>
                            </div>

                            {/* Illustration */}
                            <div className="relative">
                                <motion.div
                                    initial={{rotate: -3, scale: 0.98}}
                                    animate={{rotate: 0, scale: 1}}
                                    transition={{type: "spring", stiffness: 80, damping: 12}}
                                    className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-2xl"
                                >
                                    {/* pseudo-terminal */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="h-3 w-3 rounded-full bg-red-400/70"/>
                                        <span className="h-3 w-3 rounded-full bg-yellow-400/70"/>
                                        <span className="h-3 w-3 rounded-full bg-green-400/70"/>
                                    </div>
                                    <pre className="text-sm leading-6 text-slate-300">
{`$ npm run build
> ${t("wip.term.compile")}
> ${t("wip.term.images")}
> ${t("wip.term.api")}
> ${t("wip.term.deploy")}

${t("wip.term.status")}`}
                  </pre>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Footer note inside card */}
                    <div className="border-t border-white/10 bg-white/5 px-6 py-4 text-center text-sm text-slate-400">
                        {t("wip.footer")}
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
