"use client";

import Image from "next/image";
import userInFrame from "@/assets/user-in-frame.png";
import {useRef} from "react";
import useAnimationObserver from "@/hooks/use-animation-observer";

export default function PhotoSection() {
    const photoSectionRef = useRef(null);
    const {isIntersect} = useAnimationObserver(photoSectionRef);

    return <div ref={photoSectionRef} className={`hidden lg:block lg:row-start-2 lg:row-end-6 lg:col-start-6 lg:col-end-9 overflow-clip hide-element ${isIntersect && "animate-slide-right"}`}>
        <div className={"bg-linear-180 from-primary/20 to-neutral-900/30 w-full h-full"}>
            <Image src={userInFrame} alt={"shaik"} className={"h-full w-auto m-auto"}/>
        </div>
    </div>
}