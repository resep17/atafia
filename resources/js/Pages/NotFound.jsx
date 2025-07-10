import React, { useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import {
    FaExclamationTriangle,
    FaHome,
    FaEnvelope,
    FaArrowRight,
} from "react-icons/fa";

const NotFoundPage = () => {
    // Efek partikel
    useEffect(() => {
        const createParticle = () => {
            const particle = document.createElement("div");
            particle.className = "absolute rounded-full bg-white/10";

            // Random size and position
            const size = Math.random() * 10 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;

            // Random animation
            const duration = Math.random() * 20 + 10;
            particle.style.animation = `float ${duration}s linear infinite`;
            particle.style.animationDelay = `${Math.random() * 5}s`;

            document
                .querySelector(".particle-container")
                ?.appendChild(particle);
        };

        // Create 30 particles
        for (let i = 0; i < 30; i++) {
            createParticle();
        }
    }, []);

    return (
        <>
            <Head>
                <title>Page Not Found | PT ATAFIA RESOURCES RAYA</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#820000] to-[#500000] flex items-center justify-center">
                {/* Particle Background */}
                <div className="particle-container fixed inset-0 z-0 overflow-hidden" />

                {/* Glow Effect */}
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                    <div className="absolute w-[300px] h-[300px] rounded-full bg-red-600/20 blur-[100px]" />
                </div>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10 text-center px-6 py-12 max-w-4xl mx-auto"
                >
                    {/* Animated 404 Text */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="mb-8 relative inline-block"
                    >
                        <div className="absolute -inset-4 bg-red-600/30 rounded-full blur-lg" />
                        <h1 className="relative text-9xl font-bold text-white font-montserrat">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                                404
                            </span>
                        </h1>
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                        initial={{ rotate: -20, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ delay: 0.4, type: "spring" }}
                        className="mb-8 inline-block"
                    >
                        <div className="p-6 bg-white/10 backdrop-blur-md rounded-full border-2 border-white/20">
                            <FaExclamationTriangle className="text-red-400 text-5xl" />
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat"
                    >
                        Oops! Page Not Found
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
                    >
                        The page you're looking for doesn't exist or has been
                        moved. Please check the URL or navigate back to our
                        homepage.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link
                            href="/"
                            className="flex items-center px-6 py-3 bg-white text-red-600 rounded-lg font-medium shadow-lg hover:bg-gray-100 transition-all duration-300 group"
                        >
                            <FaHome className="mr-2" />
                            Go to Homepage
                            <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </Link>

                        <Link
                            href="/contact"
                            className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg font-medium shadow-lg hover:bg-red-700 transition-all duration-300 group border border-white/20"
                        >
                            <FaEnvelope className="mr-2" />
                            Contact Support
                            <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </Link>
                    </motion.div>

                    {/* Company Logo/Branding */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.5 }}
                        className="mt-16"
                    >
                        <p className="text-white/70 mb-2">
                            PT ATAFIA RESOURCES RAYA
                        </p>
                        <div className="w-24 h-1 bg-white/30 mx-auto" />
                    </motion.div>
                </motion.div>

                {/* Floating Elements */}
                <div className="absolute bottom-10 left-10 opacity-20">
                    <div className="w-32 h-32 rounded-full bg-red-400 blur-[80px]" />
                </div>
                <div className="absolute top-10 right-10 opacity-20">
                    <div className="w-40 h-40 rounded-full bg-white blur-[80px]" />
                </div>
            </div>

            {/* Animasi CSS */}
            <style jsx>{`
                @keyframes float {
                    0% {
                        transform: translateY(0) translateX(0);
                        opacity: 0;
                    }
                    50% {
                        transform: translateY(-100px) translateX(20px);
                        opacity: 0.6;
                    }
                    100% {
                        transform: translateY(-200px) translateX(0);
                        opacity: 0;
                    }
                }
            `}</style>
        </>
    );
};

export default NotFoundPage;
