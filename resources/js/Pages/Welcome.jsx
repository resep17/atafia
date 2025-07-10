import AboutSection from "@/Components/Home/AboutSection";
import BusinessLine from "@/Components/Home/BusinessLine";
import CallToAction from "@/Components/Home/CallToAction";
import Collaboration from "@/Components/Home/Collaboration";
import GallerySection from "@/Components/Home/GallerySection";
import HeroSection from "@/Components/Home/HeroSection";
import Structure from "@/Components/Home/Structure";
import VisionMissionGoals from "@/Components/Home/VisionMissionGoals";
import Footer from "@/Layouts/Components/Footer";
import Navbar from "@/Layouts/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen font-sans scroll-smooth">
                <Navbar />

                <HeroSection />

                <AboutSection />

                <VisionMissionGoals />

                <BusinessLine />

                <GallerySection />

                <CallToAction />

                <Collaboration />

                <Footer />
            </div>
        </>
    );
}
