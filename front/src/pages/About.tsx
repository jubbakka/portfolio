import {motion} from "framer-motion";
import {GlassCard} from "../components/ui/glass-card.tsx";
import {useTranslation} from "react-i18next";
import {BriefcaseIcon} from "lucide-react";

import profileImage from "../images/juliengourmet.jpg";


//todo add more skills and more accuracy on they.
const skills = [
    {name: "JavaScript", level: 90},
    {name: "TypeScript", level: 85},
    {name: "React", level: 80},
    {name: "Node.js", level: 75},
    {name: "CSS", level: 70},
    {name: "HTML", level: 95},
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
                            <p className="text-slate-300 mb-8 leading-relaxed">
                                Passionné par le développement web, j'aime créer des interfaces modernes et
                                intuitives.<br/>
                                Curieux et rigoureux, je me forme en continu sur les nouvelles technologies.<br/>
                                J'apprécie le travail en équipe et le partage de connaissances.<br/>
                                Mon objectif : concevoir des applications performantes et accessibles.<br/>
                                Toujours prêt à relever de nouveaux défis techniques !
                            </p>
                        </GlassCard>
                        <GlassCard className="p-8 h-full">
                            <h3 className="text-2xl font-bold mb-8">
                            Compétences
                            </h3>
                            <div className="space-y-4">
                                {skills.map((skill) => (
                                    <div key={skill.name}>
                                           <div className="flex justify-between mb-1">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full"
                                                style={{width: `${skill.level}%`}}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </div>
                    <GlassCard className="mb-16 p-8">
                        <div className="flex items-center mb-8">
                            <BriefcaseIcon className="w-7 h-7 text-blue-400 mr-3" />
                            <h3 className="text-2xl font-bold tracking-tight font-sans">Expériences Professionnelles</h3>
                        </div>
                        <ol className="relative border-l border-blue-200 ml-4">
                            {experiences.map((exp) => (
                                <li key={exp.title} className="mb-10 ml-6">
                                    <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-400 rounded-full" />
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-lg font-semibold font-sans">{exp.title}</h4>
                                            <span className="text-blue-300 font-medium font-sans">{exp.company}</span>
                                            <p className="text-slate-400 mt-2 font-sans">{exp.description}</p>
                                        </div>
                                        <span className="text-sm text-slate-400 min-w-max ml-4 font-sans">{exp.date}</span>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </GlassCard>

                    <GlassCard className="mb-16 p-8">
                        <h3 className="text-2xl font-bold mb-8">
                            Passions et loisirs
                            //TODO
                        </h3>
                    </GlassCard>
                </section>

            </div>
        </main>

    );
}