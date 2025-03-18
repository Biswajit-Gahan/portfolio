import Image from "next/image";
import heroImage from "@/assets/hero-user.png";

export default function HeroFooterImage() {
    return <Image className={"absolute bottom-0 -right-10 h-full w-auto object-contain object-bottom lg:left-1/2 hide-element animate-[slide-right_1s_0.7s_forwards]"}
                  src={heroImage} alt={"shaik"}/>
}