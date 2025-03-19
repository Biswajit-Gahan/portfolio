"use client";

import annapurnaFinanceLogo from "@/assets/annapurna-finance-logo.png";
import jayamLogo from "@/assets/jayam-logo.png";
import gfkLogo from "@/assets/gfk-logo.png";
import kantarTnsLogo from "@/assets/kantar-tns-logo.png";
import ExperienceCard from "@/components/feature/experience-section/sub-components/experience-card";
import {useRef} from "react";
import useAnimationObserver from "@/hooks/use-animation-observer";

export default function ExperienceSection() {
    const experienceSectionRef = useRef(null);
    const {isIntersect} = useAnimationObserver(experienceSectionRef);

    return <section ref={experienceSectionRef} className={"container-auto mt-5 lg:mt-8"}>
        <h1 className={`text-center lg:text-left text-[clamp(1.5rem,3.5vw,4rem)] font-black hide-element ${isIntersect && "animate-slide-up"}`}>MY EXPERIENCE</h1>
        <div className={`mt-4 lg:flex lg:h-[29rem] hide-element ${isIntersect && "animate-[slide-up_0.6s_0.8s_forwards]"}`}>
            <ExperienceCard
                companyName={"Annapurna Finance Private Limited"}
                duration={"2020 - Present"}
                position={"Technology Innovation IT-Head"}
                companyWebsiteUrl={"#"}
                companyWebsiteName={"Annapurna Finance"}
                companyImage={annapurnaFinanceLogo}
                workDescription={"Managing all the in-house software development into digital era."}
                imageName={"Annapurna Finance"}
                hidden={false}
            />

            <ExperienceCard
                companyName={"Jayam Solutions Private Limited"}
                duration={"2018 - 2020"}
                position={"Technology Innovation IT-Head"}
                companyWebsiteUrl={"#"}
                companyWebsiteName={"Jayam Solutions"}
                companyImage={jayamLogo}
                workDescription={"Managing all the in-house software development into digital era."}
                imageName={"Jayam Solutions"}
            />

            <ExperienceCard
                companyName={"GFK Softwares Private Limited"}
                duration={"2016 - 2018"}
                position={"Technology Innovation IT-Head"}
                companyWebsiteUrl={"#"}
                companyWebsiteName={"GFK Softwares"}
                companyImage={gfkLogo}
                workDescription={"Managing all the in-house software development into digital era."}
                imageName={"GFK Softwares"}
            />

            <ExperienceCard
                companyName={"Kantar TNS Private Limited"}
                duration={"2014 - 2016"}
                position={"Technology Innovation IT-Head"}
                companyWebsiteUrl={"#"}
                companyWebsiteName={"Kantar TNS"}
                companyImage={kantarTnsLogo}
                workDescription={"Managing all the in-house software development into digital era."}
                imageName={"Kantar TNS"}
            />
        </div>
    </section>
}