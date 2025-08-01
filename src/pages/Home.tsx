import {GlassCard} from "../components/ui/glass-card.tsx";
import {Github, Linkedin, Mail} from "lucide-react"
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

export function Home() {
    return (
        <motion.div

            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            className="min-h-screen flex flex-col justify-center items-center px-4 pt-20">
            {/* 1. Effet arrière-plan */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-15">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-gray-200 text-xs font-mono"
                        style={{left: `${i * 5}%`}}
                        animate={{y: ['-100vh', '100vh']}}
                        transition={{
                            repeat: Infinity,
                            duration: Math.random() * 3 + 1,
                            delay: Math.random() * 2,
                            ease: 'linear'
                        }}
                    >
                        {'01010110100101'.split('').map(c => (
                            <div className="opacity-50">{c}</div>
                        ))}
                    </motion.div>
                ))}
            </div>

            {/* 2. Contenu principal */}
            <motion.div
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 1.2, type: 'spring', bounce: 0.3}}
                className="text-center max-w-4xl mx-auto relative z-10"
            >
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent"
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.3, duration: 1, type: "spring"}}
                >

                    <motion.span
                        animate={{
                            textShadow: [
                                "0 0 0px rgba(255,255,255,0)",
                                "0 0 10px rgba(255,255,255,0.5)",
                                "0 0 0px rgba(255,255,255,0)",]
                        }}
                        transition={{repeat: Infinity, duration: 2, delay: 1}}
                    >Ingénieur
                    </motion.span>
                    <br/>
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">

                    <motion.span
                        animate={{backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']}}
                        transition={{repeat: Infinity, duration: 3}}
                    >Fullstack
                    </motion.span>
                    </span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-2xl text-gray-300 mb-8"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.5, duration: 1}}
                >
                    Passionné par le développement web et les technologies modernes, je crée des applications
                    performantes et élégantes.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.9, duration: 0.8}}
                >
                    <Link to="/projects">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                            }}
                            whileTap={{scale: 0.95}}
                            className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"
                                initial={{x: "-100%"}}
                                whileHover={{x: "100%"}}
                                transition={{duration: 0.5}}
                            />
                            <span className="relative z-10">Voir mes projets</span>
                        </motion.button>
                    </Link>

                    <Link to="/contact">
                        <GlassCard hoverable={false} className="px-8 py-4">
                            <motion.span
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                className="text-white font-semibold text-lg cursor-pointer block"
                            >
                                Me contacter
                            </motion.span>
                        </GlassCard>
                    </Link>
                </motion.div>
            </motion.div>
            <motion.div
                className="flex justify-center space-x-6 mb-12"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 1.2, duration: 0.8}}
            >
                {[
                    {Icon: Github, href: "https://github.com/jubbakka", rotation: 5},
                    {Icon: Linkedin, href: "https://linkedin.com/in/juliengourmet", rotation: -5},
                    {Icon: Mail, href: "mailto:juliengourmetch@gmail.com", rotation: 5}
                ].map(({Icon, href, rotation}, index) => (
                    <motion.a
                        key={index}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                            scale: 1.3,
                            rotate: rotation,
                            textShadow: "0 0 20px rgba(255,255,255,0.8)"
                        }}
                        whileTap={{scale: 0.9}}
                        className="text-white/70 hover:text-white transition-colors"
                        animate={{
                            y: [0, -5, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            delay: index * 0.2 + 2,
                        }}
                    >
                        <Icon size={32}/>
                    </motion.a>
                ))}
            </motion.div>


        </motion.div>
    )
        ;
}

export default Home;