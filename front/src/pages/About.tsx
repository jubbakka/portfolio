import {motion} from "framer-motion";
import {GlassCard} from "../components/ui/glass-card.tsx";
import {useTranslation} from "react-i18next";
import {BriefcaseIcon, Heart} from "lucide-react";
import profileImage from "../images/juliengourmet.jpg";
import {FadeInSection} from "../components/ui/fade-in-section.tsx";
import {SectionTitle} from "../components/ui/section-title.tsx";


//todo add more skills and more accuracy on they.
const skills = [
    {name: "JavaScript", level: 90},
    {name: "TypeScript", level: 85},
    {name: "React", level: 80},
    {name: "Node.js", level: 75},
    {name: "CSS", level: 70},
    {name: "HTML", level: 95},
    {name: "Python", level: 60},
    {name: "Django", level: 50},


];

const hobbies = [
    {key: "photography", emoji: "📷"},
    {key: "travel", emoji: "🌍"},
    {key: "hiking", emoji: "🥾"},
    {key: "sports_cars", emoji: "🏎️"}
];


//todo add translation
// review description on each experience
const experiences = [
    {
        title: "Business Analyst",
        company: "NEOSIS - An ELCA Company",
        date: "10.2024 - Présent",
        description: "Analyse des besoins, rédaction des spécifications fonctionnelles, gestion de projet en méthodologie Agile/Scrum. sur le thèmes des prestations Complémentaires du 1ER Pilier sur le produit iPension",
    },
    {
        title: "Développeur Fullstack - Stage de fin d'études",
        company: "ElCA",
        date: "03.2024 - 08.2024",
        description: "Création d'un module pour un portail client d'un fournisseur d'énergie. Utilisation de Drupal, tailwindcss",
    },
    {
        title: "Développeur Fullstack - Stage ",
        company: "EfficientIP",
        date: "09.2022 - 03.2023",
        description: "Gestion et developpement de fonctionnalités pour un CRM interne, utilisation de python Flask et React.",
    }
];

export default function About() {
    const {t} = useTranslation();
    return (
        <main className="min-h-screen px-4 pt-32 pb-16 bg-slate-900 text-slate-100">
            <div className="max-w-6xl mx-auto">
                <SectionTitle subtitle={t("about.subtitle")}>
                    {t("about.title")}
                </SectionTitle>
                <section className="container mx-auto px-4 py-4">
                    <div className="grid gap-8 md:grid-cols-2 mb-16">
                        <FadeInSection direction="left" delay={0.1}>
                            <GlassCard className="p-8 h-full">

                                <motion.div
                                    className="w-32 h-32 mx-auto mb-6 relative overflow-hidden rounded-2xl"
                                    whileHover={{rotate: [0, -5, 5, 0]}}
                                    transition={{duration: 0.5}}
                                >
                                    <motion.img
                                        src={profileImage}
                                        alt="Photo de profil"
                                        className="w-full h-full object-cover"
                                        whileHover={{scale: 1.1}}
                                        transition={{duration: 0.3}}
                                    />
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                                        initial={{opacity: 0}}
                                        whileHover={{opacity: 1}}
                                        transition={{duration: 0.3}}
                                    />
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-2 text-center">
                                    Julien Gourmet
                                </h3>
                                <p className="text-white/70 text-center mb-4">
                                    Ingénieur Full Stack
                                </p>
                                <motion.p
                                    className="text-white/80 leading-relaxed"
                                    animate={{opacity: [0.8, 1, 0.8]}}
                                    transition={{repeat: Infinity, duration: 4, delay: 1}}

                                >
                                    Passionné par le développement web, j'aime créer des interfaces modernes et
                                    intuitives.
                                    Curieux et rigoureux, je me forme en continu sur les nouvelles technologies.
                                    J'apprécie le travail en équipe et le partage de connaissances.
                                    Mon objectif : concevoir des applications performantes et accessibles.
                                    Toujours prêt à relever de nouveaux défis techniques !
                                </motion.p>
                            </GlassCard>
                        </FadeInSection>
                        <FadeInSection direction="right" delay={0.3}>
                            <GlassCard className="p-8 h-full">

                                <h3 className="text-2xl font-bold mb-8">
                                    Compétences
                                </h3>
                                <div className="space-y-4">
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{opacity: 0, x: 20}}
                                            whileInView={{opacity: 1, x: 0}}
                                            viewport={{once: true}}
                                            transition={{delay: index * 0.1 + 0.5}}
                                        >
                                            <div className="flex justify-between mb-2">
                                                <span className="text-white/80">{skill.name}</span>
                                                <motion.span
                                                    className="text-white/60"
                                                    animate={{opacity: [0.6, 1, 0.6]}}
                                                    transition={{repeat: Infinity, duration: 2, delay: index * 0.2}}
                                                >{skill.level}%
                                                </motion.span>
                                            </div>
                                            <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                                                <motion.div
                                                    className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full"
                                                    initial={{width: 0}}
                                                    whileInView={{width: `${skill.level}%`}}
                                                    viewport={{once: true}}
                                                    transition={{
                                                        duration: 1.5,
                                                        delay: index * 0.1 + 0.5,
                                                        type: "spring"
                                                    }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                            </GlassCard>
                        </FadeInSection>
                    </div>
                    <FadeInSection direction="up" delay={0.5} className="mb-16">
                        <GlassCard className="mb-16 p-8">
                            <motion.div
                                className="flex items-center mb-8"
                                whileHover={{x: 5}}
                                transition={{type: "spring", stiffness: 300}}>
                                <motion.div
                                    animate={{rotate: [0, 10, -10, 0]}}
                                    transition={{repeat: Infinity, duration: 4, delay: 1}}
                                >
                                    <BriefcaseIcon className="w-7 h-7 text-blue-400 mr-3"/>

                                </motion.div>
                                <h3 className="text-2xl font-bold text-white">Expériences
                                    Professionnelles</h3>
                            </motion.div>

                            <div className="space-y-6">
                                {experiences.map((exp, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{opacity: 0, x: -30}}
                                        whileInView={{opacity: 1, x: 0}}
                                        viewport={{once: true}}
                                        transition={{duration: 0.6, delay: index * 0.15}}
                                        className="border-l-2 border-blue-400/30 pl-6 relative group"
                                        whileHover={{x: 10, scale: 1.02}}
                                    >
                                        <motion.div
                                            className="absolute -left-2 top-2 w-4 h-4 bg-blue-400 rounded-full"
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                boxShadow: [
                                                    "0 0 0px rgba(59, 130, 246, 0)",
                                                    "0 0 20px rgba(59, 130, 246, 0.8)",
                                                    "0 0 0px rgba(59, 130, 246, 0)",
                                                ]
                                            }}
                                            transition={{repeat: Infinity, duration: 2, delay: index * 0.5 + 2}}
                                        />
                                        <div
                                            className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                            <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                                                {exp.title}
                                            </h4>
                                            <motion.span
                                                className="text-blue-300 text-sm"
                                                animate={{opacity: [0.7, 1, 0.7]}}
                                                transition={{repeat: Infinity, duration: 3, delay: index * 0.3}}
                                            >
                                                {exp.date}
                                            </motion.span>
                                        </div>
                                        <p className="text-blue-200 font-medium mb-2">{exp.company}</p>
                                        <p className="text-white/70">{exp.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </GlassCard>
                    </FadeInSection>

                    <FadeInSection direction="up" delay={0.7} className="mb-16">
                        <GlassCard className="mb-16 p-8">
                            <div className="flex items-center mb-8">
                                <motion.div
                                    animate={{rotate: [0, 10, -10, 0]}}
                                    transition={{repeat: Infinity, duration: 4, delay: 1}}
                                >
                                    <Heart className="w-7 h-7 text-pink-400 mr-3"/>
                                </motion.div>
                                <h3 className="text-2xl font-bold tracking-tight font-sans">Passions</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {hobbies.map((hobby, index) => (
                                    <motion.div
                                        key={hobby.key}
                                        initial={{opacity: 0, scale: 0.8, rotateY: -90}}
                                        whileInView={{opacity: 1, scale: 1, rotateY: 0}}
                                        viewport={{once: true}}
                                        whileHover={{
                                            scale: 1.05,
                                            rotateY: 5,
                                            boxShadow: "0 20px 40px rgba(255,255,255,0.1)"
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.15,
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                        className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                                    >
                                        <div className={"flex items-center mb-2 space-x-4"}>
                                            <span className="text-2xl mb-2">{hobby.emoji}</span>
                                            <h4 className="text-lg font-semibold mb-1">
                                                {t(`about.hobbies.${hobby.key}.title`)}
                                            </h4>
                                        </div>
                                        <p className="text-slate-400">
                                            {t(`about.hobbies.${hobby.key}.desc`)}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </GlassCard>
                    </FadeInSection>
                </section>

            </div>
        </main>

    );
}