import ShaikText from "@/components/feature/hero-section/sub-components/shaik-text/shaik-text";

export default function HeroLabels() {
    return <div className={"container-auto relative font-mohave font-bold w-full h-full text-[clamp(5rem,15vw,10rem)]"}>
        <div className={"w-full h-full flex flex-col pt-10 lg:pt-0 lg:justify-center "}>
            <p className={"leading-20 lg:leading-10 hide-element animate-[slide-right_1s_0.4s_forwards]"}>HI THERE!</p>
            <div className={"flex flex-col lg:flex-row lg:items-center space-x-10"}>
                <p className={"hide-element animate-[slide-right_1s_0.6s_forwards]"}>I AM</p>
                <ShaikText className={"w-[clamp(12rem,20vw,20rem)]"}/>
            </div>
        </div>
    </div>
}