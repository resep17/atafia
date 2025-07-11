import { usePage } from "@inertiajs/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
    const { url } = usePage();
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const contentRef = useRef(null);
    const signatureRef = useRef(null);

    useEffect(() => {
        // Animation setup
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none none",
            },
        });

        tl.from(headingRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        })
            .from(
                contentRef.current.querySelectorAll("p"),
                {
                    y: 30,
                    opacity: 0,
                    stagger: 0.15,
                    duration: 0.7,
                    ease: "power2.out",
                },
                "-=0.4"
            )
            .from(
                signatureRef.current,
                {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.out",
                },
                "-=0.2"
            );

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 overflow-hidden"
            id="about"
        >
            <div className="relative max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left Column - Logo and Heading */}
                    <div className="lg:w-1/3  flex items-center justify-center ">
                        <div className="w-52 rounded-lg overflow-hidden ">
                            <img
                                src={"/images/logo.png"}
                                alt="Mining Operation"
                                className="w-full h-full  object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Column - Content */}

                    <div className="lg:w-2/3 ">
                        <h2
                            ref={headingRef}
                            className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-tight mb-5"
                        >
                            About <span className="text-red-600">ARR</span>
                        </h2>
                        <div ref={contentRef} className=" space-y-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We are{" "}
                                <strong>PT. ATAFIA RESOURCES RAYA</strong>,
                                established in Jakarta - Indonesia on February
                                24, 2023.
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                We are registered as a trading company for Steam
                                Coal and Nickel ore by Indonesian Government -
                                ESDM Jakarta - Indonesia.
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                To support the trading activity and to proof our
                                commitment to our buyers, we also work together
                                with the Miners and the Mining Company for
                                punctuality and best quality.
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                With our good experience in the field of
                                trading, we hope we can support your needs in
                                the future.
                            </p>

                            <div
                                ref={signatureRef}
                                className="mt-10 pt-6 border-t border-gray-200"
                            >
                                <p className="text-lg font-medium text-gray-900">
                                    Sincerely yours,
                                </p>
                                <p className="text-xl font-bold text-red-600 mt-2">
                                    DIRECTOR
                                </p>
                                <div className="mt-4 w-40 h-1 bg-red-600 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
