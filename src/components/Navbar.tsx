import { useState, useEffect, useId } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "../components/LanguageSwitcher";

function Navbar() {
    const location = useLocation();
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const menuId = useId();

    const isActive = (path: string) => location.pathname === path;

    const navItems = [
        { path: "/", label: t("navbar.home") },
        { path: "/about", label: t("navbar.about") },
        { path: "/projects", label: t("navbar.projects") },
        { path: "/cv", label: t("navbar.cv") },
        { path: "/contact", label: t("navbar.contact") },
    ];

    // Ferme le menu mobile à chaque navigation
    useEffect(() => setOpen(false), [location.pathname]);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 dark:bg-gray-900/50 dark:border-gray-700/30 transition-colors duration-300"
            role="navigation"
            aria-label={t("navbar.aria.main")}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Barre du haut */}
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="relative text-2xl font-bold text-white hover:text-blue-300 dark:text-gray-100 dark:hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg px-2 py-1"
                        aria-label={t("navbar.aria.home")}
                        title={t("navbar.aria.home")}
                    >
                        JG
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => {
                            const active = isActive(item.path);
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent ${
                                        active
                                            ? "text-blue-300 dark:text-blue-400"
                                            : "text-white/80 hover:text-white dark:text-gray-300 dark:hover:text-white"
                                    }`}
                                    aria-current={active ? "page" : undefined}
                                >
                                    <span className="relative z-10">{item.label}</span>
                                    {active && (
                                        <motion.span
                                            layoutId="activeTab" // effet fluide entre onglets
                                            className="absolute inset-0 bg-white/10 dark:bg-gray-700/30 rounded-lg"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}

                        <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-white/20 dark:border-gray-600/30">
                            <LanguageSwitcher />
                        </div>
                    </div>

                    <div className="md:hidden flex items-center space-x-3">
                        <LanguageSwitcher />
                        <button
                            type="button"
                            onClick={() => setOpen((v) => !v)}
                            className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
                            aria-controls={menuId}
                            aria-expanded={open}
                            aria-label={open ? t("navbar.aria.close") : t("navbar.aria.open")}
                        >
                            {open ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            key="mobile-menu"
                            id={menuId}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/5 dark:bg-gray-800/20 backdrop-blur-sm rounded-b-2xl border-t border-white/10 dark:border-gray-700/30">
                                {navItems.map((item) => {
                                    const active = isActive(item.path);
                                    return (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            onClick={() => setOpen(false)}
                                            className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent ${
                                                active
                                                    ? "text-blue-300 dark:text-blue-400 bg-white/10 dark:bg-gray-700/30"
                                                    : "text-white/80 hover:text-white hover:bg-white/10 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700/20"
                                            }`}
                                            aria-current={active ? "page" : undefined}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}

export default Navbar;
