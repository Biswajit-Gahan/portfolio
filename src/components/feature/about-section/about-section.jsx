import TagSection from "@/components/feature/about-section/sub-components/tag-section";
import SocialSection from "@/components/feature/about-section/sub-components/social-section";
import AchievementsSection from "@/components/feature/about-section/sub-components/achieve-section";
import PhotoSection from "@/components/feature/about-section/sub-components/photo-section";
import AboutMeSection from "@/components/feature/about-section/sub-components/about-me-section";

export default function AboutSection() {
    return <section id={"about"} className={"container-auto grid grid-rows-12 grid-cols-4 lg:grid-rows-8 lg:grid-cols-8 h-[50rem] lg:h-[42rem] mt-5 lg:mt-8 gap-2.5 lg:gap-4 [&>*]:bg-light/2  [&>*]:rounded-md"}>
        <TagSection />
        <SocialSection />
        <AchievementsSection />
        <PhotoSection />
        <AboutMeSection />
    </section>
}
