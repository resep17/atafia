import React, { useEffect, useRef } from "react";
import { Head } from "@inertiajs/react";

const HeroSection = () => {
    const textRef = useRef(null);

    useEffect(() => {
        // Efek animasi teks
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

    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="relative h-screen w-full overflow-hidden">
                {/* Background image dengan overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero-section.jpg" // Ganti dengan path gambar Anda
                        alt="Mining Background"
                        className="w-full h-full object-cover"
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-[#820000]/80 to-[#ff0000]/60"
                        style={{
                            mixBlendMode: "multiply",
                        }}
                    ></div>
                </div>

                {/* Konten teks */}
                <div
                    ref={textRef}
                    className="relative z-10 h-full flex flex-col items-center justify-center text-center"
                    style={{
                        opacity: 0,
                        transform: "translateY(20px)",
                    }}
                >
                    <div className="p-4 border-4 rounded-[40px]">
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide atmospheric ">
                            <span className="block">WELCOME TO WEBSITE OF</span>
                            <span
                                className="block mt-4 text-5xl md:text-6xl"
                                style={{
                                    textShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                    background:
                                        "linear-gradient(45deg, #fff700, #FFD63A)",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                PT ATAFIA RESOURCES RAYA
                            </span>
                        </h1>
                    </div>

                    <p
                        className="text-xl md:text-2xl text-white mt-10 max-w-2xl leading-relaxed"
                        style={{
                            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                        }}
                    >
                        Your Trusted Partner Company in Your Supply Needs
                    </p>

                    {/* Animated scroll indicator */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div className="w-8 h-14 border-4 border-white rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-white mt-2 rounded-full animate-scroll"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
