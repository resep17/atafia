import React, { useRef, useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import {
    FaWhatsapp,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "@/Layouts/Components/Navbar";
import Footer from "@/Layouts/Components/Footer";

const ContactSection = () => {
    const textRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Efek animasi saat komponen muncul
        const textElement = textRef.current;
        if (textElement) {
            textElement.style.opacity = 0;
            textElement.style.transform = "translateY(20px)";

            setTimeout(() => {
                textElement.style.transition =
                    "opacity 0.8s ease-out, transform 0.8s ease-out";
                textElement.style.opacity = 1;
                textElement.style.transform = "translateY(0)";
            }, 300);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format pesan untuk WhatsApp
        const whatsappMessage = `Halo, saya ${formData.name} (${formData.email}).\n\n${formData.message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/6281905508885?text=${encodedMessage}`;

        // Animasi submit
        setIsSubmitted(true);
        setTimeout(() => {
            window.open(whatsappUrl, "_blank");
            setIsSubmitted(false);
        }, 1500);
    };

    // Variants untuk animasi framer-motion
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap"
                    rel="stylesheet"
                />
                <title>Contact Us</title>
            </Head>

            <Navbar />

            <div className="relative min-h-screen w-full overflow-hidden">
                {/* Background dengan efek parallax */}
                <div className="fixed inset-0 z-0">
                    <img
                        src="/images/hero-section.jpg"
                        alt="Contact Background"
                        className="w-full h-full object-cover"
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-[#820000]/90 to-[#ff0000]/70"
                        style={{ mixBlendMode: "multiply" }}
                    ></div>
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Partikel dekoratif */}
                <div className="fixed inset-0 z-0 overflow-hidden">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-white/10"
                            style={{
                                width: `${Math.random() * 10 + 5}px`,
                                height: `${Math.random() * 10 + 5}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animation: `float ${
                                    Math.random() * 10 + 10
                                }s linear infinite`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        />
                    ))}
                </div>

                {/* Konten utama */}
                <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
                    <motion.div
                        ref={textRef}
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="w-full max-w-6xl mx-auto"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="text-center mb-12"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat tracking-wide mt-10">
                                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                                    GET IN TOUCH
                                </span>
                            </h1>
                            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                            <p className="text-xl text-white/90 max-w-2xl mx-auto">
                                We'd love to hear from you. Send us a message
                                and we'll respond as soon as possible.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {/* Form Kontak */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white/90 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden p-8 transform transition-all hover:shadow-2xl hover:-translate-y-1"
                            >
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <FaPaperPlane className="text-red-600 mr-2" />
                                    Send Us a Message
                                </h2>

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300"
                                        ></textarea>
                                    </div>

                                    <div>
                                        <motion.button
                                            type="submit"
                                            className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {isSubmitted ? (
                                                <span className="flex items-center">
                                                    <svg
                                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                        ></circle>
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                        ></path>
                                                    </svg>
                                                    Sending...
                                                </span>
                                            ) : (
                                                <span className="flex items-center">
                                                    <FaWhatsapp className="mr-2 text-lg" />
                                                    Send via WhatsApp
                                                </span>
                                            )}
                                        </motion.button>
                                    </div>
                                </form>
                            </motion.div>

                            {/* Informasi Kontak */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden p-8 border border-white/20 transform transition-all hover:shadow-2xl hover:-translate-y-1"
                            >
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                    <FaMapMarkerAlt className="text-red-400 mr-2" />
                                    Contact Information
                                </h2>

                                <div className="space-y-6 mt-10">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-red-600/20 p-3 rounded-lg">
                                            <FaMapMarkerAlt className="h-6 w-6 text-red-400" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium text-white">
                                                Our Address
                                            </h3>
                                            <p className="mt-1 text-white/90">
                                                Jl. TB Simatupang No.Kav.1
                                                Cilandak Timur, Pasar Minggu
                                                <br />
                                                Kota Jakarta Selatan, Indonesia
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-red-600/20 p-3 rounded-lg">
                                            <FaPhone className="h-6 w-6 text-red-400" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium text-white">
                                                Phone Number
                                            </h3>
                                            <p className="mt-1 text-white/90">
                                                +62 819-0550-8885
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-red-600/20 p-3 rounded-lg">
                                            <FaEnvelope className="h-6 w-6 text-red-400" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium text-white">
                                                Email Address
                                            </h3>
                                            <p className="mt-1 text-white/90">
                                                hallo@atafiaresources.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Animasi CSS */}
                <style jsx>{`
                    @keyframes float {
                        0% {
                            transform: translateY(0) translateX(0);
                            opacity: 1;
                        }
                        50% {
                            transform: translateY(-50px) translateX(10px);
                            opacity: 0.8;
                        }
                        100% {
                            transform: translateY(-100px) translateX(0);
                            opacity: 0;
                        }
                    }
                `}</style>
            </div>
        </>
    );
};

export default ContactSection;
