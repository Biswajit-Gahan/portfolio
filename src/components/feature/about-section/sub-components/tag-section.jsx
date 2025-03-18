"use client";

import {ImQuotesLeft, ImQuotesRight} from "react-icons/im";
import useAnimationObserver from "@/hooks/use-animation-observer";
import {useRef} from "react";

export default function TagSection() {
    const tagSectionRef = useRef(null);
    const {isIntersect} = useAnimationObserver(tagSectionRef);

    return <div ref={tagSectionRef} className={`row-start-1 row-end-3 col-start-1 col-end-5 lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-6 flex items-center justify-center relative p-5 hide-element ${isIntersect && "animate-slide-right"}`}>
        <div className={"absolute top-5 left-5"}>
            <ImQuotesLeft size={70} className={"opacity-5"}/>
        </div>
        <div className={"absolute bottom-5 right-5"}>
            <ImQuotesRight size={70} className={"opacity-5"}/>
        </div>
        <span className={"text-[clamp(1.5rem,3.5vw,3.5rem)] font-bold relative text-center"}>Turn your ideas into reality.</span>
    </div>
}