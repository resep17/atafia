import { usePage } from "@inertiajs/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Collaboration() {
    const { url } = usePage();
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const logosRef = useRef(null);

    useEffect(() => {
        // Title animation
        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none none",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        });

        // Content animation
        gsap.from(contentRef.current, {
            scrollTrigger: {
                trigger: contentRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            delay: 0.3,
            ease: "power2.out",
        });

        // Logo animations
        const logos = gsap.utils.toArray(".logo-item");
        logos.forEach((logo, index) => {
            gsap.from(logo, {
                scrollTrigger: {
                    trigger: logosRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                y: 50,
                opacity: 0,
                duration: 0.6,
                delay: index * 0.15,
                ease: "back.out(1.2)",
            });

            // Hover effect
            gsap.to(logo, {
                scale: 1.1,
                duration: 0.3,
                paused: true,
                ease: "power1.out",
            });

            logo.addEventListener("mouseenter", () =>
                gsap.to(logo, { scale: 1.1, duration: 0.3 })
            );
            logo.addEventListener("mouseleave", () =>
                gsap.to(logo, { scale: 1, duration: 0.3 })
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    // Replace these with your actual partner logos
    const partners = [
        {
            name: "Partner 1",
            logo: "/images/logo.png",
            description: "Strategic alliance for mining operations",
        },
        {
            name: "Partner 2",
            logo: "/images/logo.png",
            description: "Logistics and distribution partner",
        },
        {
            name: "Partner 3",
            logo: "/images/logo.png",
            description: "Technology and innovation collaborator",
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 overflow-hidden"
            id="collaboration"
        >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#820000] rounded-full opacity-10 transform -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-red-600 rounded-full opacity-10 transform translate-x-16 translate-y-16"></div>

            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2
                        ref={titleRef}
                        className="text-4xl md:text-5xl font-bold text-gray-900"
                    >
                        Our <span className="text-red-600">Collaboration</span>{" "}
                        & Partnership
                    </h2>
                    <div className="mt-4 w-24 h-1 bg-red-600 rounded-full mx-auto"></div>
                </div>

                <div
                    ref={contentRef}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <p className="text-lg text-gray-700 leading-relaxed">
                        At <strong>PT. Atafia Resources Raya</strong>, we
                        believe in the power of strategic partnerships to drive
                        innovation and deliver exceptional value to our clients.
                        Our collaborations with industry leaders enable us to
                        provide comprehensive solutions across the commodity
                        supply chain.
                    </p>
                </div>

                <div
                    ref={logosRef}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8"
                >
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="logo-item flex flex-col items-center group"
                        >
                            {/* Simplified logo container */}
                            <div className="relative w-full flex items-center justify-center mb-6 p-8">
                                {/* Logo with hover effect */}
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-h-32 max-w-full object-contain transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                                />

                                {/* Decorative element (only on hover) */}
                                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-red-600 rounded-lg opacity-0 group-hover:opacity-20 transform rotate-12 group-hover:rotate-0 transition-all duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional decorative elements */}
                <div className="absolute left-1/4 top-1/3 w-8 h-8 bg-red-600 rounded-full opacity-10"></div>
                <div className="absolute right-1/3 bottom-1/4 w-12 h-12 bg-[#820000] rounded-full opacity-10"></div>
            </div>
        </section>
    );
}
