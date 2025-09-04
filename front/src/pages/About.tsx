import {motion} from "framer-motion";
import {GlassCard} from "../components/ui/glass-card.tsx";
import {useTranslation} from "react-i18next";
import {BriefcaseIcon, Heart} from "lucide-react";
import profileImage from "../images/juliengourmet.jpg";
import {FadeInSection} from "../components/ui/fade-in-section.tsx";
import {SectionTitle} from "../components/ui/section-title.tsx";
import {Icon} from "@iconify/react";

const skills = [
    {name: "JavaScript", level: 90, icon: "simple-icons:javascript"},
    {name: "TypeScript", level: 85, icon: "simple-icons:typescript"},
    {name: "React", level: 70, icon: "simple-icons:react"},
    {name: "Node.js", level: 75, icon: "simple-icons:nodedotjs"},
    {name: "CSS", level: 90, icon: "simple-icons:css3"},
    {name: "HTML", level: 95, icon: "simple-icons:html5"},
    {name: "Python", level: 70, icon: "simple-icons:python"},
];

const hobbies = [
    {key: "photography", emoji: "📷"},
    {key: "travel", emoji: "🌍"},
    {key: "hiking", emoji: "🥾"},
    {key: "sports_cars", emoji: "🏎️"},
];

export default function About() {
    const {t} = useTranslation();
    const experiences = t("about.experiences.items", {returnObjects: true}) as Array<{
        title: string;
        date: string;
        company: string;
        description: string;
    }>;
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
                                        alt={t("about.profile.alt", {defaultValue: "Profile photo"})}
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
                                    {t("about.profile.job_title")}
                                </p>
                                <motion.p
                                    className="text-white/80 leading-relaxed"
                                    animate={{opacity: [0.8, 1, 0.8]}}
                                    transition={{repeat: Infinity, duration: 4, delay: 1}}
                                >
                                    {t("about.profile.description")}
                                </motion.p>
                            </GlassCard>
                        </FadeInSection>
                        <FadeInSection direction="right" delay={0.3}>
                            <GlassCard className="p-8 h-full">
                                <h3 className="text-2xl font-bold mb-8">
                                    {t("about.skills.title")}
                                </h3>
                                <div className="space-y-4">
                                    {skills.sort((a, b) => b.level - a.level).map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{opacity: 0, x: 20}}
                                            whileInView={{opacity: 1, x: 0}}
                                            viewport={{once: true}}
                                            transition={{delay: index * 0.1 + 0.5}}
                                        >
                                            <div className="flex justify-between mb-2">
                                                <div className={"flex items-center space-x-2"}>
                                                <Icon
                                                    icon={skill.icon}
                                                    className="w-6 h-6 text-white"
                                                    aria-label={`${skill.name} logo`}
                                                />
                                                <span className="text-white/80">
                                                    {skill.name}
                                                </span>
                                                </div>
                                                <motion.span
                                                    className="text-white/60"
                                                    animate={{opacity: [0.6, 1, 0.6]}}
                                                    transition={{
                                                        repeat: Infinity,
                                                        duration: 2,
                                                        delay: index * 0.2,
                                                    }}
                                                >
                                                    {skill.level}%
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
                                                        type: "spring",
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
                        <GlassCard className="p-8 bg-white/10 shadow-lg">
                            <motion.div
                                className="flex items-center mb-8"
                                whileHover={{x: 5}}
                                transition={{type: "spring", stiffness: 300}}
                            >
                                <motion.div
                                    animate={{rotate: [0, 10, -10, 0]}}
                                    transition={{repeat: Infinity, duration: 4, delay: 1}}
                                >
                                    <BriefcaseIcon className="w-7 h-7 text-blue-400 mr-3" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white">
                                    {t("about.experiences.title")}
                                </h3>
                            </motion.div>
                            <div className="space-y-8">
                                {experiences.map((exp, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{opacity: 0, x: -30}}
                                        whileInView={{opacity: 1, x: 0}}
                                        viewport={{once: true}}
                                        transition={{duration: 0.6, delay: index * 0.2}}
                                        className="border-l-4 border-blue-400/50 pl-4 md:pl-6 relative group"
                                        whileHover={{x: 10, scale: 1.02}}
                                    >
                                        <motion.div
                                            className="absolute -left-2 top-2 w-4 h-4 bg-blue-400 rounded-full"
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                boxShadow: [
                                                    "0 0 0px rgba(59, 130, 246, 0)",
                                                    "0 0 10px rgba(59, 130, 246, 0.5)",
                                                    "0 0 0px rgba(59, 130, 246, 0)",
                                                ],
                                            }}
                                            transition={{repeat: Infinity, duration: 1.5, delay: index * 0.5 + 2}}
                                        />
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between my-2">
                                            <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                                                {exp.title}
                                            </h4>
                                            <motion.span
                                                className="text-blue-300 text-sm md:text-base"
                                                animate={{opacity: [0.7, 1, 0.7]}}
                                                transition={{repeat: Infinity, duration: 3, delay: index * 0.3}}
                                            >
                                                {exp.date}
                                            </motion.span>
                                        </div>
                                        <p className="text-blue-300 font-semibold mb-2">{exp.company}</p>
                                        <p className="text-white/80 text-sm md:text-base">{exp.description}</p>
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
                                <h3 className="text-2xl font-bold tracking-tight font-sans">
                                    {t("about.hobbies.title")}
                                </h3>
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
                                            boxShadow: "0 20px 40px rgba(255,255,255,0.1)",
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.15,
                                            type: "spring",
                                            stiffness: 100,
                                        }}
                                        className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                                    >
                                        <div className="flex items-center mb-2 space-x-4">
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