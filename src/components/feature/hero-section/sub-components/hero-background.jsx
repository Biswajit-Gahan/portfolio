import Image from "next/image";
import bgStripe from "@/assets/bg-stripe.svg";

export default function HeroBackgrounds() {
    return <div>
        <Image className={"absolute top-1/2 left-1/2 -translate-y-1/2 hide-element animate-[slide-left_1s_0.2s_forwards]"} src={bgStripe} alt={"background"}/>
    </div>
}