import WIP from "../components/WIP.tsx";
import {GlassCard} from "../components/ui/glass-card.tsx";
import {motion} from "framer-motion";
import {Mail, MapPin, Phone, Send} from "lucide-react";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";


export default function About() {
    const {t} = useTranslation();
    return (
        <main className="min-h-screen px-4 pt-32 pb-16 bg-slate-900 text-slate-100">
            <section className="container mx-auto px-4 py-4">
                <header className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text mb-4">{t("about.title")}</h1>
                    <p className="text-slate-400 mt-2 text-lg md:text-xl max-w-2xl mx-auto">
                        {t("about.subtitle")}
                    </p>
                </header>
            </section>
            <section className="container mx-auto px-4 py-4">
                <div className="grid gap-8 md:grid-cols-2 mb-16">
                    <GlassCard className="p-8 h-full">
                        <h3 className="text-2xl font-bold mb-8">
                            a propos de moi
                        </h3>
                    </GlassCard>
                    <GlassCard className="p-8 h-full">
                        <h3 className="text-2xl font-bold mb-8">
                            mes competences
                        </h3>
                    </GlassCard>
                </div>
                <GlassCard className="mb-16 p-8">
                    <h3 className="text-2xl font-bold mb-8">
                        experiences professionnelles
                    </h3>
                </GlassCard>

                <GlassCard className="mb-16 p-8">
                    <h3 className="text-2xl font-bold mb-8">
                        Passions et loisirs
                    </h3>
                </GlassCard>
            </section>


        </main>

    );
}