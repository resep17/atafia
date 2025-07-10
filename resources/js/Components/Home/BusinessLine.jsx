import { usePage } from "@inertiajs/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BusinessLine() {
    const { url } = usePage();
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const gridRef = useRef(null);

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

        // Grid items animation
        const gridItems = gsap.utils.toArray(".grid-item");
        gridItems.forEach((item, index) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                x: index % 2 === 0 ? -30 : 30,
                opacity: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: "back.out(1.2)",
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 overflow-hidden"
            id="business-line"
        >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#820000] rounded-full opacity-10 transform -translate-x-16 translate-y-16"></div>

            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2
                        ref={titleRef}
                        className="text-4xl md:text-5xl font-bold text-gray-900"
                    >
                        Our <span className="text-red-600">Business</span> Lines
                    </h2>
                    <div className="mt-4 w-24 h-1 bg-red-600 rounded-full mx-auto"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left Column - Content */}
                    <div ref={contentRef} className="lg:w-1/2">
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            <strong>PT. Atafia Resources Raya</strong>, we are
                            dedicated to providing commodity solutions that meet
                            the evolving needs of the Electrical Plant, A
                            Factory Plant and Smelter Plant in Indonesia. Our
                            diverse portfolio covers every aspect in supplying
                            of the Steam Coal and Battery industry, from
                            sourcing to delivery.
                        </p>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                            Here's a closer look at our key operations:
                        </h3>

                        <div className="mb-8 rounded-xl overflow-hidden shadow-lg relative group">
                            <img
                                src={"/images/opration.jpg"}
                                alt="Mining Operations"
                                className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#820000] to-transparent opacity-70"></div>
                        </div>
                    </div>

                    {/* Right Column - Grid */}
                    <div ref={gridRef} className="lg:w-1/2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Grid Items */}
                            <div className="grid-item bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-600">
                                <div className="flex items-start">
                                    <div className="bg-red-100 p-3 rounded-lg mr-4">
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
                                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Sourcing the Commodity
                                    </h3>
                                </div>
                                <p className="mt-3 text-gray-600">
                                    Strategic procurement of high-quality raw
                                    materials from trusted suppliers
                                </p>
                            </div>

                            <div className="grid-item bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-600">
                                <div className="flex items-start">
                                    <div className="bg-red-100 p-3 rounded-lg mr-4">
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
                                                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Supply Chain Management
                                    </h3>
                                </div>
                                <p className="mt-3 text-gray-600">
                                    Efficient coordination from procurement to
                                    delivery ensuring seamless operations
                                </p>
                            </div>

                            <div className="grid-item bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-600">
                                <div className="flex items-start">
                                    <div className="bg-red-100 p-3 rounded-lg mr-4">
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
                                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Distribution & Logistics
                                    </h3>
                                </div>
                                <p className="mt-3 text-gray-600">
                                    Reliable transportation network ensuring
                                    timely delivery to clients
                                </p>
                            </div>

                            <div className="grid-item bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-600">
                                <div className="flex items-start">
                                    <div className="bg-red-100 p-3 rounded-lg mr-4">
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
                                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Partnership in Mining
                                    </h3>
                                </div>
                                <p className="mt-3 text-gray-600">
                                    Collaborative relationships with mining
                                    operations for quality assurance
                                </p>
                            </div>

                            <div className="grid-item bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-600">
                                <div className="flex items-start">
                                    <div className="bg-red-100 p-3 rounded-lg mr-4">
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
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Collaboration & Partnership
                                    </h3>
                                </div>
                                <p className="mt-3 text-gray-600">
                                    Strategic alliances with industry players
                                    for mutual growth
                                </p>
                            </div>

                            <div className="grid-item bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-600">
                                <div className="flex items-start">
                                    <div className="bg-red-100 p-3 rounded-lg mr-4">
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
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Cargo Treatment & Maintaining
                                    </h3>
                                </div>
                                <p className="mt-3 text-gray-600">
                                    Proper handling and quality maintenance
                                    throughout the supply chain
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
