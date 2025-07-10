import { usePage } from "@inertiajs/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VisionMissionGoals() {
    const { url } = usePage();
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const titleRef = useRef(null);

    // Store cards in ref
    const addToCardsRef = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

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

        // Animation for each card
        cardsRef.current.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: index * 0.15,
                ease: "back.out(1.2)",
            });
        });

        // Background elements animation
        const bgElements = gsap.utils.toArray(".bg-element");
        bgElements.forEach((el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    toggleActions: "play none none none",
                },
                scale: 0,
                opacity: 0,
                duration: 1.5,
                ease: "elastic.out(1, 0.5)",
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#820000] to-[#500000] overflow-hidden"
            id="vision-mission"
        >
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-element bg-[#ff0000] rounded-full opacity-20 transform -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-element bg-[#ff0000] rounded-full opacity-15 transform translate-x-32 translate-y-32"></div>

            <div className="relative max-w-7xl mx-auto">
                <h2
                    ref={titleRef}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
                >
                    Our <span className="text-white font-extrabold">Core</span>{" "}
                    Values
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Vision Card */}
                    <div
                        ref={addToCardsRef}
                        className="bg-white/90 rounded-xl shadow-2xl overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-2xl backdrop-blur-sm"
                    >
                        <div className="h-3 bg-gradient-to-r from-[#ff0000] to-[#820000]"></div>
                        <div className="p-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-red-100/80 flex items-center justify-center mr-4 backdrop-blur-sm">
                                    <svg
                                        className="w-6 h-6 text-red-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Vision
                                </h3>
                            </div>
                            <p className="text-gray-800 leading-relaxed">
                                To be the trusted, innovative and responsibility
                                to achieved the commitment and to peruse the
                                positive perspective to the world, driving
                                progress and sustainability through cutting-edge
                                technology and system practices for more
                                efficient and effective economic.
                            </p>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div
                        ref={addToCardsRef}
                        className="bg-white/90 rounded-xl shadow-2xl overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-2xl backdrop-blur-sm"
                    >
                        <div className="h-3 bg-gradient-to-r from-[#820000] to-[#ff0000]"></div>
                        <div className="p-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-red-100/80 flex items-center justify-center mr-4 backdrop-blur-sm">
                                    <svg
                                        className="w-6 h-6 text-red-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Mission
                                </h3>
                            </div>
                            <p className="text-gray-800 leading-relaxed">
                                Our mission is to responsibly explore and
                                develop, to deliver the resources by aligning
                                our efforts with these core principles, we
                                strive to meet the evolving energy needs of
                                today while paving the way for a brighter and
                                more sustainable future and also can be the
                                countable among the stakeholder.
                            </p>
                        </div>
                    </div>

                    {/* Goals Card */}
                    <div
                        ref={addToCardsRef}
                        className="bg-white/90 rounded-xl shadow-2xl overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-2xl backdrop-blur-sm"
                    >
                        <div className="h-3 bg-gradient-to-r from-[#ff0000] via-[#820000] to-[#ff0000]"></div>
                        <div className="p-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-red-100/80 flex items-center justify-center mr-4 backdrop-blur-sm">
                                    <svg
                                        className="w-6 h-6 text-red-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Goals
                                </h3>
                            </div>
                            <p className="text-gray-800 leading-relaxed">
                                Smart and has a visionary leadership spirit, has
                                commitment and honesty in organizing, to achieve
                                company targets, providing solutions with
                                efficiency and effectiveness according to market
                                needs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Decorative element at bottom */}
                <div className="mt-16 flex justify-center">
                    <div className="w-32 h-1 bg-gradient-to-r from-[#ff0000] to-white rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
