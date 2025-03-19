"use client";

import ExperienceCard from "@/components/feature/experience-section/sub-components/experience-card";
import {useRef} from "react";
import useAnimationObserver from "@/hooks/use-animation-observer";
import experienceCardData from "./utils/experience-card-data";
import useActiveExperienceCard from "@/components/feature/experience-section/utils/use-active-experience-card";

export default function ExperienceSection() {
    const experienceSectionRef = useRef(null);
    const {isIntersect} = useAnimationObserver(experienceSectionRef);
    const {activeCard, handleActiveCard} = useActiveExperienceCard();

    return <section id={"work"} ref={experienceSectionRef} className={"container-auto mt-5 lg:mt-8"}>
        <h1 className={`text-center lg:text-left text-[clamp(1.5rem,3.5vw,4rem)] font-black hide-element ${isIntersect && "animate-slide-up"}`}>MY EXPERIENCE</h1>
        <div className={`mt-4 lg:flex lg:h-[29rem] hide-element ${isIntersect && "animate-[slide-up_0.6s_0.8s_forwards]"}`}>
            {
                experienceCardData.map((card, index) => (
                    <ExperienceCard
                        key={index + 1}
                        companyName={card.companyName}
                        duration={card.duration}
                        position={card.position}
                        companyWebsiteUrl={card.companyWebsiteUrl}
                        companyWebsiteName={card.companyWebsiteName}
                        companyImage={card.companyImage}
                        workDescription={card.workDescription}
                        imageName={card.imageName}
                        active={index === activeCard}
                        onClick={handleActiveCard(index)}
                    />
                ))
            }
        </div>
    </section>
}