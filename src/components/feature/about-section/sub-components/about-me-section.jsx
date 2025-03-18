"use client";

import {ImQuotesRight} from "react-icons/im";
import {useRef} from "react";
import useAnimationObserver from "@/hooks/use-animation-observer";

export default function AboutMeSection() {
    const aboutMeSectionRef = useRef(null);
    const {isIntersect} = useAnimationObserver(aboutMeSectionRef);

    return <div ref={aboutMeSectionRef} className={`row-start-8 row-end-13 col-start-1 col-end-5 lg:row-start-6 lg:row-end-10 lg:col-start-1 lg:col-end-9 p-4 lg:p-[1.5rem] relative hide-element ${isIntersect && "animate-slide-up"}`}>
        <div className={" pointer-events-none absolute bottom-0 right-5 lg:right-25 [mask:linear-gradient(transparent,bg-light/20,bg-light/20,transparent)] [-webkit-mask:linear-gradient(transparent,bg-light/20,bg-light/20,transparent)]"}>
            <ImQuotesRight size={180} className={"opacity-5"}/>
        </div>
        <div className={"flex items-center gap-3"}>
            <span className={"lg:text-xl text-nowrap"}>About Me</span>
            <div className={"w-full h-0.5 bg-neutral-700"}/>
        </div>
        <div className={"w-full h-[calc(100%-0.5rem-2rem)] mt-[0.5rem] overflow-auto"}>
            <span className={"text-sm lg:text-base lg:tracking-wider font-monda"}>Hello, I am Shaik Mahaboob Subhani. Recognized as a Fintech evangelist in setting the company vision, technology, digital practices and strategies till launch of Fintech portfolio developing new systems. Dexterity to identify gaps, bottlenecks, risks and requirements in robust Fintech technologies and architecture. Insightful experience in prioritizing, winning, launching and developing high-reach & impact Fintech/Technology portfolios. Capability in developing a pipeline of episodic deals, particularly within BFSI industry. Dexterity to identify gaps, bottlenecks, risks and requirements in robust Fintech technologies and architecture. Insightful experience in prioritizing, winning, launching and developing high-reach & impact Fintech/Technology portfolios. Capability in developing a pipeline of episodic deals, particularly within BFSI industry.</span>
        </div>
    </div>
}