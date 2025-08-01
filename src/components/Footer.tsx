import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { GlassCard } from "./ui/glass-card";

function Footer () {
    return (
        <footer className="py-8 px-4">
            <GlassCard className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-white/70"
                    >
                        © 2024 Mon Portfolio. Tous droits réservés.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex space-x-4"
                    >
                        <motion.a
                            href="https://github.com/jubbakka"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-white/70 hover:text-white transition-colors"
                        >
                            <Github size={24} />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/juliengourmet"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-white/70 hover:text-white transition-colors"
                        >
                            <Linkedin size={24} />
                        </motion.a>
                        <motion.a
                            href="mailto:juliengourmetch@gmail.com"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-white/70 hover:text-white transition-colors"
                        >
                            <Mail size={24} />
                        </motion.a>
                    </motion.div>
                </div>
            </GlassCard>
        </footer>
    );
};

export default Footer;
