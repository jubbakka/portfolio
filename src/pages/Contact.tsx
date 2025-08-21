import {useTranslation} from "react-i18next";

export default function Contact() {

    const {t} = useTranslation();
    return (
        <main className="min-h-screen px-4 pt-32 pb-16 bg-slate-900 text-slate-100">
            <section className="container mx-auto px-4 py-24">
                <header className="text-center mb-10">
                    <h1 className="text-4xl md-text-5xl font-bold bg-clip-text mb-4">{t("contact.title")}</h1>
                    <p className="text-slate-400 mt-2 text-lg md:text-xl max-w-2xl mx-auto">
                        {t("contact.subtitle")}
                    </p>
                </header>
            </section>
            <section className="container mx-auto px-4 py-24">
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        box 1
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        box 2
                    </div>
                </div>
            </section>

        </main>

    );
}