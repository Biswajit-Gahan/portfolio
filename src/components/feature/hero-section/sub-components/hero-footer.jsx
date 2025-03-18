function HeroFooterLocation({heading, location}) {
    return <div className={"flex flex-col"}>
        <div className={"flex items-center space-x-2 hide-element animate-[slide-up_1s_1s_forwards]"}>
            <div
                className={`w-2 h-2 rounded-full ${heading.toLowerCase() === "work location" ? "bg-tertiary" : "bg-secondary"} relative after:content-[''] after:absolute  ${heading.toLowerCase() === "work location" ? "after:bg-tertiary" : "after:bg-secondary"} after:w-full after:h-full after:rounded-full after:animate-ping`}/>
            <span className={"text-[0.6rem] lg:text-xs"}>{heading}<span>.</span></span>
        </div>
        <span className={"text-[0.7rem] lg:text-base hide-element animate-[slide-up_1s_1.3s_forwards]"}>{location}</span>
    </div>
}

export default function HeroFooter() {
    return <div className={"absolute bottom-0 left-0 w-full bg-neutral-700/10 py-4"}>
        <div className={"container-auto relative font-monda z-50"}>
            <div className={"flex items-center justify-between"}>
                <HeroFooterLocation heading={"LIVING LOCATION"} location={"Bhubaneswar, Odisha."}/>
                <HeroFooterLocation heading={"WORK LOCATION"} location={"Annapurna Finance."}/>
            </div>
        </div>
    </div>
}