import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const navItems = [
    {path: "/", label: "Home"},
    {path: "/about", label: "About"},
    {path: "/projects", label: "Projects"},
    {path: "/cv", label: "CV"},
    {path: "/contact", label: "Contact"},
];

function Navbar() {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;
    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 dark:bg-gray-900/50 dark:border-gray-700/30 transition-colors duration-300"
            role="navigation" aria-label="Main navigation">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-bold text-white hover:text-blue-300 dark:text-gray-100 dark:hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg px-2 py-1"
                        aria-label="Go to homepage"
                    >
                        JG
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent ${
                                    isActive(item.path)
                                        ? "text-blue-300 dark:text-blue-400"
                                        : "text-white/80 hover:text-white dark:text-gray-300 dark:hover:text-white"
                                }`}
                                aria-current={isActive(item.path) ? "page" : undefined}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <div
                            className="flex items-center space-x-3 ml-6 pl-6 border-l border-white/20 dark:border-gray-600/30">

                        </div>
                    </div>

                    {/* Mobile menu button */}

                </div>

                {/* Mobile Navigation */}

            </div>
        </nav>
    );
}

export default Navbar;