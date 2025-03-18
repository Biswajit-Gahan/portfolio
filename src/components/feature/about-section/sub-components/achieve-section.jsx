"use client";

import {useRef} from "react";
import useAnimationObserver from "@/hooks/use-animation-observer";

function AchievementCard({bgColor, title, count}) {
    return <div className={`w-full ${bgColor} p-2 rounded-sm flex flex-col items-center justify-center lg:gap-2 text-center`}>
        <span className={"text-[clamp(1.5rem,3.5vw,3rem)] font-bold"}>{count}</span>
        <span className={"text-xs"}>{title}</span>
    </div>
}

export default function AchievementsSection() {
    const achievementSectionRef = useRef(null);
    const {isIntersect} = useAnimationObserver(achievementSectionRef);

    return <div ref={achievementSectionRef} className={`row-start-4 row-end-8 col-start-1 col-end-5 lg:row-start-3 lg:row-end-6 lg:col-start-1 lg:col-end-6 grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-2.5 lg:gap-4 hide-element ${isIntersect && "animate-slide-right"}`}>
        <AchievementCard bgColor={"bg-primary"} count={"19+"} title={"Years of Experience"} />
        <AchievementCard bgColor={"bg-yellow-600"} count={"12+"} title={"Project Completed"} />
        <AchievementCard bgColor={"bg-blue-600"} count={"85+"} title={"Happy Client"}  />
        <AchievementCard bgColor={"bg-green-700"} count={"03"} title={"Leading System Designs"} />
    </div>
}