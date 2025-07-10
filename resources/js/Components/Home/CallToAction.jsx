import { usePage } from "@inertiajs/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        // Container animation
        gsap.from(containerRef.current, {
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

        // Title animation
        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: 0.2,
            ease: "back.out(1.2)",
        });

        // Content animation
        gsap.from(contentRef.current, {
            scrollTrigger: {
                trigger: contentRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: 0.4,
            ease: "back.out(1.2)",
        });

        // Button animation
        gsap.from(buttonRef.current, {
            scrollTrigger: {
                trigger: buttonRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: 0.6,
            ease: "back.out(1.2)",
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-20 px-4 sm:px-6 lg:px-8  bg-gradient-to-b from-[#820000] to-[#500000] overflow-hidden"
        >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full opacity-10 transform -translate-x-16 translate-y-16"></div>

            <div
                ref={containerRef}
                className="relative max-w-4xl mx-auto text-center"
            >
                <h2
                    ref={titleRef}
                    className="text-3xl md:text-4xl font-bold text-white mb-6"
                >
                    Ready to Partner With Us?
                </h2>

                <div
                    ref={contentRef}
                    className="text-lg text-white opacity-90 mb-10"
                >
                    <p className="mb-4">
                        Discover how PT. Atafia Resources Raya can provide the
                        commodity solutions your business needs.
                    </p>
                    <p>
                        Contact us today to discuss your requirements and how we
                        can work together.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        ref={buttonRef}
                        href="/contact"
                        className="px-8 py-3 bg-white text-red-600 font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                    >
                        Contact Our Team
                    </a>
                    <a
                        href="#about"
                        className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                    >
                        Learn More About Us
                    </a>
                </div>
            </div>

            {/* Additional decorative elements */}
            <div className="absolute left-20 top-1/4 w-6 h-6 bg-white rounded-full opacity-20"></div>
            <div className="absolute right-32 bottom-1/3 w-10 h-10 bg-white rounded-full opacity-20"></div>
        </section>
    );
}
