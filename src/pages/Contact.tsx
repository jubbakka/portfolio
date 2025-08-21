import {useTranslation} from "react-i18next";

import {Mail, Phone, MapPin} from "lucide-react";
import {GlassCard} from "../components/ui/glass-card";


export default function Contact() {

    const {t} = useTranslation();
    return (
        <main className="min-h-screen px-4 pt-32 pb-16 bg-slate-900 text-slate-100">
            <section className="container mx-auto px-4 py-4">
                <header className="text-center mb-10">
                    <h1 className="text-4xl md-text-5xl font-bold bg-clip-text mb-4">{t("contact.title")}</h1>
                    <p className="text-slate-400 mt-2 text-lg md:text-xl max-w-2xl mx-auto">
                        {t("contact.subtitle")}
                    </p>
                </header>
            </section>
            <section className="container mx-auto px-4 py-24">
                <div className="grid gap-8 md:grid-cols-2">
                    <GlassCard className="p-8 h-full">
                        <h3 className="text-2xl font-bold mb-8">{t("contact.getInTouch")}</h3>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12  rounded-2xl flex items-center justify-center">
                                    <Mail className="text-white" size={20}/>
                                </div>
                                <div>
                                    <p className="text-white font-medium"> {t('contact.info.email')}</p>
                                    <a href="mailto:juliengourmetch@gmail.com"
                                       className="text-white/70 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-transparent rounded"
                                       aria-label={t('contact.aria.email')}>
                                        juliengourmetch@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12  rounded-2xl flex items-center justify-center">
                                    <Phone className="text-white" size={20}/>
                                </div>
                                <div>
                                    <p className="text-white font-medium"> {t('contact.info.phone')}</p>
                                    <a href="tel:+41797106783"
                                       className="text-white/70 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-transparent rounded"
                                       aria-label={t('contact.aria.phone')}>
                                        +41 79 710 67 83
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12  rounded-2xl flex items-center justify-center">
                                    <MapPin className="text-white" size={20}/>
                                </div>
                                <div>
                                    <p className="text-white font-medium"> {t('contact.info.location')}</p>
                                    <a href="mailto:juliengourmetch@gmail.com"
                                       className="text-white/70 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-transparent rounded">
                                        {t('contact.info.address')}
                                    </a>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/20">
                                <p className="text-white/70 leading-relaxed">
                                    {t("contact.disclaimer")}
                                </p>
                            </div>
                        </div>

                    </GlassCard>

                    <GlassCard className="p-8 h-full">
                        <h2 className="text-2xl font-semibold mb-6">{t("contact.contactForm")}</h2>

                    </GlassCard>


                </div>
            </section>

        </main>

    );
}