import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error(
            "404 Error: User attempted to access non-existent route:",
            location.pathname
        );
    }, [location.pathname]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-9xl font-bold mb-4 text-gray-100">404</h1>
                <p className="text-3xl text-gray-400 mb-4">Oops! Page not found</p>
                <a href="/" className="text-blue-300 hover:text-blue-700 underline">
                    Return to Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;
