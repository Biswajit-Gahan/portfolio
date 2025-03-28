"use client";

// import Image from "next/image";
// import handshakeIcon from "@/assets/handshake-icon.svg";
import {MdOutlineArrowBack} from "react-icons/md";
// import userDiscussionImage from "@/assets/user-discussion.png";
import {useRef} from "react";
import useAnimationObserver from "@/hooks/use-animation-observer";
import Link from "next/link";

export default function DiscussionSection() {
    const discussionSectionRef = useRef(null);
    const {isIntersect} = useAnimationObserver(discussionSectionRef);

    return <section id={"contact"} ref={discussionSectionRef} className={"bg-neutral-600/10 mt-8 overflow-y-clip"}>
        <div className={"container-auto relative lg:min-h-[35rem]"}>
            <img src={"assets/user-discussion.png"} alt={"shaik"} className={`hidden lg:block absolute right-[15%] h-[75%] w-auto bottom-0 hide-element ${isIntersect && "animate-[slide-left_0.6s_0.5s_forwards]"}`} />
            <div className={"py-16"}>
                <div className={"flex flex-col items-center gap-3 lg:flex-row lg:gap-5"}>
                    <img className={`w-20 lg:w-30 hide-element ${isIntersect && "animate-slide-left"}`} src={"assets/handshake-icon.svg"} alt={"brand logo"} />
                    <p className={`text-[clamp(1.8rem,5vw,4rem)] font-black text-center lg:text-left lg:leading-18 bg-gradient-to-r from-[#0467FC] to-[#FF3E9B] inline-block text-transparent bg-clip-text hide-element ${isIntersect && "animate-[slide-left_0.6s_0.4s_forwards]"}`}>Let's Discuss About Your Next Dream Project</p>
                </div>
                <div className={`mt-6 lg:absolute lg:bottom-20 lg:left-[13.9rem] hide-element ${isIntersect && "animate-slide-up"}`}>
                    <p className={"text-center lg:text-left w-full text-xl"}>Tell me about your vision</p>
                    <p className={"text-center lg:text-left text-sm text-neutral-500"}>Connect me using these given links below.</p>
                    <div className={"mt-4 flex gap-2 w-fit m-auto lg:ml-0"}>
                        <Link href={"https://wa.me/9490959786"} target={"_blank"} className={"flex items-center gap-2 px-5 py-3 bg-green-500 rounded-lg group"}>Whatsapp Me <MdOutlineArrowBack className={"rotate-135 group-hover:rotate-180 transition-transform duration-300"}/></Link>
                        <Link href={"mailto:shaikmba@outlook.com"} target={"_blank"} className={"flex items-center gap-2 px-5 py-3 border-1 rounded-lg group"}>Email Me <MdOutlineArrowBack className={"rotate-135 group-hover:rotate-180 transition-transform duration-300"}/></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
}