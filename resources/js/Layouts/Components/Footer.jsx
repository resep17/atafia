import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Footer() {
    const footerRef = useRef(null);
    const logoRef = useRef(null);
    const copyrightRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        // Footer entrance animation
        gsap.from(footerRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
        });

        // Staggered child animations
        gsap.from([logoRef.current, linksRef.current, copyrightRef.current], {
            y: 15,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
            delay: 0.3,
            ease: "back.out(1.2)",
        });

        // Hover effect for links
        const links = gsap.utils.toArray(".footer-link");
        links.forEach((link) => {
            gsap.to(link, {
                scale: 1.05,
                duration: 0.3,
                paused: true,
                ease: "power1.out",
            });

            link.addEventListener("mouseenter", () =>
                gsap.to(link, { scale: 1.05, duration: 0.3 })
            );
            link.addEventListener("mouseleave", () =>
                gsap.to(link, { scale: 1, duration: 0.3 })
            );
        });
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/#about" },
        { name: "Vision", href: "/#vision-mission" },
        { name: "Line Business", href: "/#business-line" },
        { name: "Contact", href: "/contact" },
    ];
    return (
        <footer
            ref={footerRef}
            className="relative bg-gradient-to-b from-[#500000] to-[#820000] text-white overflow-hidden"
        >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full opacity-5 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full opacity-5 transform translate-x-1/4 translate-y-1/4"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="">
                        <img
                            ref={logoRef}
                            src="/images/logo-nav.png"
                            alt="logo"
                            className="w-52 mb-6"
                        />

                        <p className="text-white text-opacity-80 text-sm">
                            Atafia is Providing premium commodity solutions for
                            Indonesia's industrial needs.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 border-b border-white border-opacity-20 pb-2">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {navLinks.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="footer-link text-white text-opacity-80 hover:text-opacity-100 hover:text-red-200 transition-all duration-200 block"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 border-b border-white border-opacity-20 pb-2">
                            Contact Us
                        </h3>
                        <ul className="space-y-3 text-sm text-white text-opacity-80">
                            <li className="flex items-start">
                                <svg
                                    className="w-5 h-5 mr-2 mt-0.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span>
                                    Jl. TB Simatupang No.Kav.1 Cilandak Timur,
                                    Pasar Minggu
                                    <br />
                                    Kota Jakarta Selatan, Indonesia
                                </span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                +62 819-0550-8885
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                hallo@atafiaresources.com
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 border-b border-white border-opacity-20 pb-2">
                            Follow Us
                        </h3>
                        <div className="flex space-x-4">
                            {[
                                "facebook",
                                "twitter",
                                "linkedin",
                                "instagram",
                            ].map((platform, index) => (
                                <a
                                    key={index}
                                    href={`https://${platform}.com/atafia`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-link w-10 h-10 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-200"
                                    aria-label={platform}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d={
                                                platform === "facebook"
                                                    ? "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                    : platform === "twitter"
                                                    ? "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                                    : platform === "linkedin"
                                                    ? "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                                    : "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                            }
                                        />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div
                    ref={copyrightRef}
                    className="border-t border-white border-opacity-20 pt-6 text-center text-sm text-white text-opacity-70"
                >
                    <div className="mb-2">WWW.ATAFIA.COM</div>
                    <div>
                        Copyright ©{new Date().getFullYear()} PT. ATAFIA
                        Resources Raya. All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    );
}
