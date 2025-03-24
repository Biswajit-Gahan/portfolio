import {MdOutlineArrowBack} from "react-icons/md";
import Link from "next/link";
import {LiaGlobeAmericasSolid} from "react-icons/lia";
import {LuCalendarClock} from "react-icons/lu";
// import Image from "next/image";

export default function ExperienceCard(
    {
        duration,
        companyName,
        companyWebsiteName,
        companyWebsiteUrl,
        position,
        workDescription,
        companyImage,
        imageName,
        active,
        onClick,
    }
) {
    return <div className={`lg:flex ${active && "lg:flex-auto"} duration-300 transition-all`}>
        <div className={"flex items-center justify-between lg:flex-col-reverse bg-neutral-600/10 py-3 px-5 lg:py-5 border-1 border-neutral-700/50"}>
            <span className={"lg:[writing-mode:vertical-lr] lg:rotate-180"}>{duration}</span>
            <button className={"flex items-center justify-center p-2 rounded-full border-1 border-neutral-700/50 cursor-pointer"} onClick={onClick}>
                <MdOutlineArrowBack className={`w-4 h-4 ${active ? "rotate-180" : "rotate-135"} duration-300 transition-transform`} />
            </button>
        </div>
        <div className={`border-1 bg-neutral-600/10  border-neutral-700/50 p-5 ${!active && "hidden"} ${active ? "lg:w-full" : "lg:w-0"}`}>
            <p className={"text-[clamp(1.3rem,3vw,2rem)] font-black"}>{companyName}</p>
            <Link href={companyWebsiteUrl} className={"flex items-center gap-1 mt-1 text-neutral-500 text-sm underline"}>
                <LiaGlobeAmericasSolid /> {companyWebsiteName}
            </Link>
            <span className={"bg-primary py-1 px-3 text-xs inline-block mt-4 rounded-full"}>Position</span>
            <p className={"mt-1 text-lg"}>{position}</p>
            <div className={"flex items-center gap-1 text-sm mt-1 text-yellow-500"}>
                <LuCalendarClock /> {duration}
            </div>
            <div className={"h-0.5 bg-neutral-700/50 my-4"}/>
            <p className={"text-sm text-neutral-400"}>{workDescription}.</p>
            <img className={"inline-block mt-10 h-10 w-40 object-contain object-left-bottom opacity-50 lg:absolute lg:bottom-5"} src={companyImage} alt={imageName} />
        </div>
    </div>
}