import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {useForm} from "react-hook-form";
import {Mail, Phone, MapPin, Send} from "lucide-react";
import {GlassCard} from "../components/ui/glass-card";
import {useState} from "react";
import {useToast} from "../hooks/use-toast";
import {SectionTitle} from "../components/ui/section-title.tsx";

interface ContactForm {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {t} = useTranslation();
    const {toast} = useToast();
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<ContactForm>();

    const API = import.meta.env.VITE_API_URL ?? "";

    const onSubmit = async (data: ContactForm) => {
        try {
            const response = await fetch(`${API}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                if (response.status === 429) {
                    console.warn("Trop de requêtes:", result);
                    toast({
                        title: t("contact.errors.tooManyRequestsTitle"),
                        description: t("contact.errors.tooManyRequestsDesc"),
                        variant: "destructive",
                    });
                    return;
                }
            }

            toast({
                title: t("contact.form.sent"),
                description: t("contact.form.thankYou"),
                variant: "default",
            });

            reset();
        } catch (error) {
            console.error("Erreur lors de l'envoi:", error);
            toast({
                title: t("contact.errors.sendError"),
                description: t("contact.errors.tryAgain"),
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <main className="min-h-screen px-4 pt-32 pb-16 bg-slate-900 text-slate-100">
            <section className="container mx-auto px-4 py-4">
                <header className="text-center mb-10">
                    <SectionTitle subtitle={t("contact.subtitle")}>
                        {t("contact.title")}
                    </SectionTitle>
                </header>
            </section>
            <section className="container mx-auto px-4 py-10">
                <div className="grid gap-8 md:grid-cols-2">
                    <GlassCard className="p-8 h-full">
                        <h3 className="text-2xl font-bold mb-8">{t("contact.getInTouch")}</h3>
                        <div className="space-y-6">
                            <motion.div
                                whileHover={{x: 10}}
                                className="flex items-center space-x-4">
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
                            </motion.div>

                            <motion.div
                                whileHover={{x: 10}}
                                className="flex items-center space-x-4">
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
                            </motion.div>

                            <motion.div
                                whileHover={{x: 10}}
                                className="flex items-center space-x-4">
                                <div className="w-12 h-12  rounded-2xl flex items-center justify-center">
                                    <MapPin className="text-white" size={20}/>
                                </div>
                                <div>
                                    <p className="text-white font-medium"> {t('contact.info.location')}</p>
                                    <p
                                        className="text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-transparent rounded">
                                        {t('contact.info.address')}
                                    </p>
                                </div>
                            </motion.div>

                            <div className="mt-8 pt-8 border-t border-white/20">
                                <p className="text-white/70 leading-relaxed">
                                    {t("contact.description")}
                                </p>
                            </div>
                        </div>

                    </GlassCard>

                    <GlassCard className="p-8">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-white font-medium mb-2"
                                >
                                    {t('contact.form.name')}
                                </label>
                                <input
                                    id="name"
                                    {...register("name", {required: "Le nom est requis"})}
                                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                                    placeholder={t('contact.form.namePlaceholder')}
                                    aria-describedby={errors.name ? "name-error" : undefined}
                                    aria-invalid={errors.name ? "true" : "false"}
                                />
                                {errors.name && (
                                    <p id="name-error" className="text-red-400 text-sm mt-1" role="alert">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-white font-medium mb-2"
                                >
                                    {t('contact.form.email')}
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    {...register("email", {
                                        required: t('contact.errors.emailRequired'),
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: t('contact.errors.emailInvalid')
                                        }
                                    })}
                                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                                    placeholder={t('contact.form.emailPlaceholder')}
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                    aria-invalid={errors.email ? "true" : "false"}
                                />
                                {errors.email && (
                                    <p id="email-error" className="text-red-400 text-sm mt-1" role="alert">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-white font-medium mb-2"
                                >
                                    {t('contact.form.message')}
                                </label>
                                <textarea
                                    id="message"
                                    {...register("message", {required: t('contact.errors.messageRequired')})}
                                    rows={5}
                                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
                                    placeholder={t('contact.form.messagePlaceholder')}
                                    aria-describedby={errors.message ? "message-error" : undefined}
                                    aria-invalid={errors.message ? "true" : "false"}
                                />
                                {errors.message && (
                                    <p id="message-error" className="text-red-400 text-sm mt-1" role="alert">
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{scale: 1.02}}
                                whileTap={{scale: 0.98}}
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
                                aria-label={isSubmitting ? "Sending message..." : "Send message"}
                            >
                                <Send size={20}/>
                                <span>
                    {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                  </span>
                            </motion.button>
                        </form>
                    </GlassCard>


                </div>
            </section>

        </main>

    );
}