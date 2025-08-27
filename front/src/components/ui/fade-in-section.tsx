import { motion } from "framer-motion";
import type {ReactNode} from "react";

interface FadeInSectionProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    duration?: number;
    className?: string;
}

export const FadeInSection = ({
                                  children,
                                  direction = "up",
                                  delay = 0,
                                  duration = 0.6,
                                  className = ""
                              }: FadeInSectionProps) => {
    const directionVariants = {
        up: { y: 50, opacity: 0 },
        down: { y: -50, opacity: 0 },
        left: { x: 50, opacity: 0 },
        right: { x: -50, opacity: 0 },
    };

    return (
        <motion.div
            initial={directionVariants[direction]}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration,
                delay,
                type: "spring",
                stiffness: 100,
                damping: 15
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};