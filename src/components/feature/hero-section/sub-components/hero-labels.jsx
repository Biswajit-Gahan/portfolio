"use client";

import ShaikText from "@/components/feature/hero-section/sub-components/shaik-text/shaik-text";
import {useRef} from "react";
import useAnimationObserver from "@/hooks/use-animation-observer";

export default function HeroLabels() {
    const heroLabelsRef = useRef(null);
    const {isIntersect} = useAnimationObserver(heroLabelsRef);

    return <div ref={heroLabelsRef} className={"container-auto relative font-mohave font-bold w-full h-full text-[clamp(5rem,15vw,10rem)]"}>
        <div className={"w-full h-full flex flex-col pt-10 lg:pt-0 lg:justify-center "}>
            <p className={`leading-20 lg:leading-10 hide-element ${isIntersect && "animate-[slide-right_1s_0.4s_forwards]"}`}>HI THERE!</p>
            <div className={"flex flex-col lg:flex-row lg:items-center space-x-10"}>
                <p className={`hide-element ${isIntersect && "animate-[slide-right_1s_0.6s_forwards]"}`}>I AM</p>
                {
                    isIntersect && <ShaikText className={"w-[clamp(12rem,20vw,20rem)]"}/>
                }
            </div>
        </div>
    </div>
}