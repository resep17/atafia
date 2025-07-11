import { usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GallerySection() {
    const { url } = usePage();
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const galleryRef = useRef(null);
    const [activeImage, setActiveImage] = useState(null);

    // Sample gallery data - replace with your actual images
    const galleryItems = [
        {
            id: 1,
            image: "/images/gallery/gallery8.jpg",
            title: "Excavated Material Pile",
            description:
                "A large mound of red soil resulting from excavation activities.",
            category: "mining",
        },
        {
            id: 2,
            image: "/images/gallery/gallery1.jpg",
            title: "High-Quality Raw Coal",
            description:
                "A close-up view of a freshly mined lump of raw coal, showcasing its natural texture and luster.",
            category: "logistics",
        },
        {
            id: 3,
            image: "/images/gallery/gallery2.jpg",
            title: "Rock Formations in a Mining Area",
            description:
                "A view of rock cliffs at a mining site, showing geological layers and the scale of the coal mining operation.",
            category: "team",
        },
        {
            id: 4,
            image: "/images/gallery/gallery3.jpg",
            title: "Coal Mining Operation",
            description:
                "A wide view of a coal mining area with heavy equipment such as excavators and hauling trucks in operation, demonstrating efficiency in the mining process.",
            category: "mining",
        },
        {
            id: 5,
            image: "/images/gallery/gallery4.jpg",
            title: "Coal Transportation by Sea",
            description:
                "A barge loaded with coal being pulled by a tugboat across open waters, illustrating the process of coal distribution from the mining site to its final destination.",
            category: "partnership",
        },
        {
            id: 6,
            image: "/images/gallery/gallery5.jpg",
            title: "Coal Stockpile Ready for Loading",
            description:
                "An aerial view of a large coal stockpile near water, ready to be loaded onto barges, illustrating the scale of post-mining storage and logistics.",
            category: "logistics",
        },
        {
            id: 7,
            image: "/images/gallery/gallery6.jpg",
            title: "Mining Area Landscape and Overburden Material",
            description:
                "A wide view of an excavated mining area, showing mounds of soil and rock materials of different colors, reflecting the topography formed by mining activities.",
            category: "facility",
        },
        {
            id: 8,
            image: "/images/gallery/gallery7.jpg",
            title: "Excavated Material Pile",
            description:
                "A large mound of red soil resulting from excavation activities, with a cloudy sky in the background and heavy equipment faintly visible in the distance.",
            category: "team",
        },
    ];

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

        // Gallery items animation
        const items = gsap.utils.toArray(".gallery-item");
        items.forEach((item, index) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: galleryRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                y: 50,
                opacity: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: "power2.out",
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
            id="gallery"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#820000] rounded-full opacity-10 transform -translate-x-16 translate-y-16"></div>
            <div className="absolute inset-0 bg-gray-50/50"></div>

            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2
                        ref={titleRef}
                        className="text-4xl md:text-5xl font-bold text-gray-900"
                    >
                        Our <span className="text-red-600">Gallery</span>
                    </h2>
                    <div className="mt-4 w-24 h-1 bg-red-600 rounded-full mx-auto"></div>
                </div>

                <div
                    ref={galleryRef}
                    className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
                >
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            className="gallery-item relative break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            onMouseEnter={() => setActiveImage(item.id)}
                            onMouseLeave={() => setActiveImage(null)}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                            />

                            {/* Overlay */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 transition-opacity duration-300 ${
                                    activeImage === item.id
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            >
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-300 ${activeImage === item.id ? 'translate-y-0' : 'translate-y-4'}">
                                    <h3 className="text-xl font-bold mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
