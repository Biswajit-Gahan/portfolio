"use client";

// import Image from "next/image";
// import heroImage from "@/assets/hero-user.png";
import {useRef} from "react";
import useAnimationObserver from "@/hooks/use-animation-observer";

export default function HeroFooterImage() {
    const heroFooterImageRef = useRef(null);
    const {isIntersect} = useAnimationObserver(heroFooterImageRef);

    return <img ref={heroFooterImageRef} className={`absolute bottom-0 -right-10 h-full w-auto object-contain object-bottom lg:left-1/2 hide-element ${isIntersect && "animate-[slide-right_1s_0.7s_forwards]"}`}
                  src={"assets/hero-user.png"} alt={"shaik"}/>
}