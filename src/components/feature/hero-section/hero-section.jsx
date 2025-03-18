import Image from "next/image";
import heroImage from "@/assets/hero-user.png";
import bgStripe from "@/assets/bg-stripe.svg"
import ShaikText from "@/components/feature/hero-section/sub-components/shaik-text/shaik-text";

function HeroFooterLocation({heading, location}) {
    return <div className={"flex flex-col"}>
        <div className={"flex items-center space-x-2"}>
            <div
                className={`w-2 h-2 rounded-full ${heading.toLowerCase() === "work location" ? "bg-tertiary" : "bg-secondary"} relative after:content-[''] after:absolute  ${heading.toLowerCase() === "work location" ? "after:bg-tertiary" : "after:bg-secondary"} after:w-full after:h-full after:rounded-full after:animate-ping`}/>
            <span className={"text-[0.6rem] lg:text-xs"}>{heading}<span>.</span></span>
        </div>
        <span className={"text-[0.7rem] lg:text-base"}>{location}</span>
    </div>
}

function HeroFooter() {
    return <div className={"absolute bottom-0 left-0 w-full bg-neutral-700/10 py-4"}>
        <div className={"container-auto relative font-monda z-50"}>
            <div className={"flex items-center justify-between"}>
                <HeroFooterLocation heading={"LIVING LOCATION"} location={"Bhubaneswar, Odisha."}/>
                <HeroFooterLocation heading={"WORK LOCATION"} location={"Annapurna Finance."}/>
            </div>
        </div>
    </div>
}

function HeroLabels() {
    return <div className={"container-auto relative font-mohave font-bold w-full h-full text-[clamp(5rem,15vw,10rem)]"}>
        <div className={"w-full h-full flex flex-col pt-10 lg:pt-0 lg:justify-center "}>
            <p className={"leading-20 lg:leading-10"}>HI THERE!</p>
            <div className={"flex flex-col lg:flex-row lg:items-center space-x-10"}>
                <p>I AM</p>
                <ShaikText className={"w-[clamp(12rem,20vw,20rem)]"}/>
            </div>
        </div>
    </div>
}

function HeroFooterImage() {
    return <Image className={"absolute bottom-0 -right-10 h-full w-auto object-contain object-bottom lg:left-1/2"}
                  src={heroImage} alt={"shaik"}/>
}

function HeroBackgrounds() {
    return <div>
        <Image className={"absolute top-1/2 left-1/2 -translate-y-1/2"} src={bgStripe} alt={"background"}/>
    </div>
}

export default function HeroSection() {
    return <section
        className={"h-[calc(100dvh-3.75rem)] lg:h-[calc(100dvh-5rem)] max-h-[45rem] relative overflow-clip"}>
        <HeroBackgrounds/>
        <HeroFooter/>
        <HeroFooterImage/>
        <HeroLabels/>
    </section>
}