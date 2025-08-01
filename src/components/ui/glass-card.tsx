import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
}

export const GlassCard = ({ children, className, hoverable = true }: GlassCardProps) => {
    return (
        <motion.div
            className={cn(
                "bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg",
                "dark:bg-gray-800/20 dark:border-gray-600/30 dark:shadow-gray-900/20",
                hoverable && "hover:bg-white/15 hover:border-white/30 dark:hover:bg-gray-700/30 dark:hover:border-gray-500/40 transition-all duration-300",
                className
            )}
            whileHover={hoverable ? { y: -5, scale: 1.02 } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {children}
        </motion.div>
    );
};
