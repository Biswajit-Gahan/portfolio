"use client";

import Image from "next/image";
import bgStripe from "@/assets/bg-stripe.svg";
import {useRef} from "react";
import useAnimationObserver from "@/hooks/use-animation-observer";

export default function HeroBackgrounds() {
    const heroBackgroundRef = useRef(null);
    const {isIntersect} = useAnimationObserver(heroBackgroundRef);

    return <div>
        <Image ref={heroBackgroundRef} className={`absolute top-1/2 left-1/2 -translate-y-1/2 hide-element ${isIntersect && "animate-slide-left"}`} src={bgStripe} alt={"background"}/>
    </div>
}