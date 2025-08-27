
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface SectionTitleProps {
    children: React.ReactNode;
    className?: string;
    subtitle?: string;
}

export const SectionTitle = ({ children, className, subtitle }: SectionTitleProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn("text-center mb-12", className)}
        >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-4">
                {children}
            </h2>
            {subtitle && (
                <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};
