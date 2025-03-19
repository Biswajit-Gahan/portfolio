import HeroSection from "@/components/feature/hero-section/hero-section";
import AboutSection from "@/components/feature/about-section/about-section";
import ExperienceSection from "@/components/feature/experience-section/experience-section";
import DiscussionSection from "@/components/feature/discussion-section/discussion-section";
import FooterSection from "@/components/feature/footer-section/footer-section";
import NavbarSection from "@/components/feature/navbar-section/navbar-section";

export default function Home() {
    return <main className={"home"}>
        {/*NAVBAR SECTION*/}
        <NavbarSection/>

        {/*HERO SECTION*/}
        <HeroSection/>

        {/*ABOUT SECTION*/}
        <AboutSection/>

        {/*EXPERIENCE SECTION*/}
        <ExperienceSection/>

        {/*DISCUSSION SECTION*/}
        <DiscussionSection/>

        {/*FOOTER SECTION*/}
        <FooterSection/>
    </main>
}
