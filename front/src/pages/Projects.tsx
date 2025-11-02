import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../components/ui/section-title";
import { GlassCard } from "../components/ui/glass-card";

const projectConfigs = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&q=80",
        technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Express", "Node.js"],
        category: "fullstack",
        github: "https://github.com/jubbakka/portfolio",
        demo: "https://julien-gourmet.com"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop&q=80",
        technologies: ["TypeScript", "React", "Vite", "Tailwind CSS"],
        category: "frontend",
        github: "https://github.com/jubbakka/chuv-planning2ICS",
        demo: "https://chuv-planning2-ics.vercel.app"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80",
        technologies: ["Java", "Spring Boot", "H2 Database", "Maven", "REST API"],
        category: "backend",
        github: "https://github.com/jubbakka/API-Factory",
        demo: ""
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop&q=80",
        technologies: ["Java", "Quarkus", "REST API"],
        category: "backend",
        github: "https://github.com/jubbakka/jws-2024",
        demo: ""
    },
];

export const Projects = () => {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState("all");

    const projects = useMemo(() => {
        const translatedProjects = t("projects.items", { returnObjects: true }) as Array<{
            id: number;
            title: string;
            description: string;
            technologies: string[];
            category: string;
        }>;
        
        return translatedProjects.map((project) => {
            const config = projectConfigs.find((c) => c.id === project.id);
            return {
                ...project,
                ...config,
            };
        });
    }, [t]);

    const categories = useMemo(() => {
        const catNames = t("projects.categories", { returnObjects: true }) as Record<string, string>;
        return [
            { id: "all", name: catNames.all },
            { id: "frontend", name: catNames.frontend },
            { id: "backend", name: catNames.backend },
            { id: "fullstack", name: catNames.fullstack }
        ];
    }, [t]);

    const filteredProjects = projects.filter(
        project => selectedCategory === "all" || project.category === selectedCategory
    );

    return (
        <div className="min-h-screen px-4 pt-32 pb-16">
            <div className="max-w-6xl mx-auto">
                <SectionTitle subtitle={t("projects.subtitle")}>
                    {t("projects.title")}
                </SectionTitle>

                {/* Filtres */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                                selectedCategory === category.id
                                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                                    : "bg-white/10 backdrop-blur-lg border border-white/20 text-white/80 hover:bg-white/20"
                            }`}
                        >
                            {category.name}
                        </motion.button>
                    ))}
                </motion.div>

                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <GlassCard className="overflow-hidden h-full">
                                    {project.image && (
                                        <div className="relative">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-48 object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        </div>
                                    )}

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            {project.title}
                                        </h3>
                                        <p className="text-white/70 mb-4 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {project.technologies.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 bg-white/10 backdrop-blur-lg rounded-full text-sm text-white/80"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <div className="flex space-x-4">
                                            {project.github && (
                                                <motion.a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
                                                >
                                                    <Github size={20} />
                                                    <span>{t("projects.buttons.code")}</span>
                                                </motion.a>
                                            )}
                                            {project.demo && (
                                                <motion.a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
                                                >
                                                    <ExternalLink size={20} />
                                                    <span>{t("projects.buttons.demo")}</span>
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;