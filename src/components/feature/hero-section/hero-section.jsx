import HeroBackgrounds from "@/components/feature/hero-section/sub-components/hero-background";
import HeroFooter from "@/components/feature/hero-section/sub-components/hero-footer";
import HeroFooterImage from "@/components/feature/hero-section/sub-components/hero-footer-image";
import HeroLabels from "@/components/feature/hero-section/sub-components/hero-labels";

export default function HeroSection() {
    return <section id={"home"}
        className={"h-[calc(100dvh-3.75rem)] lg:h-[calc(100dvh-5rem)] max-h-[45rem] relative overflow-clip"}>
        <HeroBackgrounds/>
        <HeroFooter/>
        <HeroFooterImage/>
        <HeroLabels/>
    </section>
}