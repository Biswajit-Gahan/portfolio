"use client";

import Link from "next/link";
import {TiSocialFacebook, TiSocialLinkedin} from "react-icons/ti";
import {RiTwitterXFill} from "react-icons/ri";
import {IoLogoInstagram} from "react-icons/io5";
import {useRef} from "react";
import useAnimationObserver from "@/hooks/use-animation-observer";

export default function SocialSection() {
    const socialSectionRef = useRef(null);
    const {isIntersect} = useAnimationObserver(socialSectionRef);

    return <div ref={socialSectionRef} className={`row-start-3 row-end-4 col-start-1 col-end-5 p-4 lg:row-start-1 lg:row-end-2 lg:col-start-6 lg:col-end-9 flex items-center justify-between lg:p-5 hide-element ${isIntersect && "animate-slide-left"}`}>
        <span className={"text-sm"}>Find me on<br/>social platforms</span>
        <ul className={"flex items-center gap-2 lg:gap-3 [&>*]:p-1 [&>*]:inline-block [&>*]:rounded-sm"}>
            <li className={"bg-blue-900"}>
                <Link href={""}><TiSocialFacebook className={"w-6 h-6"}/></Link>
            </li>
            <li className={"bg-neutral-700"}>
                <Link href={""}><RiTwitterXFill className={"w-6 h-6"}/></Link>
            </li>
            <li className={"bg-cyan-600"}>
                <Link href={"https://www.linkedin.com/in/shaiksubhanifintech/"} target={"_blank"}><TiSocialLinkedin className={"w-6 h-6"}/></Link>
            </li>
            <li className={"bg-pink-600"}>
                <Link href={""}><IoLogoInstagram className={"w-6 h-6"}/></Link>
            </li>
        </ul>
    </div>
}