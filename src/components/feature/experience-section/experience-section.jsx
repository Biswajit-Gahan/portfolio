import {MdOutlineArrowBack} from "react-icons/md";
import {LiaGlobeAmericasSolid} from "react-icons/lia";
import {LuCalendarClock} from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
import annapurnaFinanceLogo from "@/assets/annapurna-finance-logo.png";
import jayamLogo from "@/assets/jayam-logo.png";
import gfkLogo from "@/assets/gfk-logo.png";
import kantarTnsLogo from "@/assets/kantar-tns-logo.png";

function ExperienceCard(
    {
        duration,
        companyName,
        companyWebsiteName,
        companyWebsiteUrl,
        position,
        workDescription,
        companyImage,
        imageName,
        hidden = true,
    }
) {
    return <div className={`lg:flex ${!hidden && "lg:flex-auto"}`}>
        <div className={"flex items-center justify-between lg:flex-col-reverse bg-neutral-600/10 py-3 px-5 lg:py-5 border-1 border-neutral-700/50"}>
            <span className={"lg:[writing-mode:vertical-lr] lg:rotate-180"}>{duration}</span>
            <button className={"flex items-center justify-center p-2 rounded-full border-1 border-neutral-700/50 cursor-pointer"}>
                <MdOutlineArrowBack className={"w-4 h-4 rotate-180"} />
            </button>
        </div>
        <div className={`border-1 bg-neutral-600/10  border-neutral-700/50 p-5 ${hidden && "hidden"} ${!hidden && "lg:w-full"} relative `}>
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
            <Image className={"inline-block mt-10 h-10 w-40 object-contain object-left-bottom opacity-50 lg:absolute lg:bottom-5"} src={companyImage} alt={imageName} />
        </div>
    </div>
}

export default function ExperienceSection() {
    return <section className={"container-auto mt-5 lg:mt-8"}>
        <h1 className={"text-center lg:text-left text-[clamp(1.5rem,3.5vw,4rem)] font-black"}>MY EXPERIENCE</h1>
        <div className={"mt-4 lg:flex lg:h-[29rem]"}>
            <ExperienceCard
                companyName={"Annapurna Finance Private Limited"}
                duration={"2020 - Present"}
                position={"Technology Innovation IT-Head"}
                companyWebsiteUrl={"#"}
                companyWebsiteName={"Annapurna Finance"}
                companyImage={annapurnaFinanceLogo}
                workDescription={"Managing all the in-house software development into digital era."}
                imageName={"Annapurna Finance"}
                hidden={false}
            />

            <ExperienceCard
                companyName={"Jayam Solutions Private Limited"}
                duration={"2018 - 2020"}
                position={"Technology Innovation IT-Head"}
                companyWebsiteUrl={"#"}
                companyWebsiteName={"Jayam Solutions"}
                companyImage={jayamLogo}
                workDescription={"Managing all the in-house software development into digital era."}
                imageName={"Jayam Solutions"}
            />

            <ExperienceCard
                companyName={"GFK Softwares Private Limited"}
                duration={"2016 - 2018"}
                position={"Technology Innovation IT-Head"}
                companyWebsiteUrl={"#"}
                companyWebsiteName={"GFK Softwares"}
                companyImage={gfkLogo}
                workDescription={"Managing all the in-house software development into digital era."}
                imageName={"GFK Softwares"}
            />

            <ExperienceCard
                companyName={"Kantar TNS Private Limited"}
                duration={"2014 - 2016"}
                position={"Technology Innovation IT-Head"}
                companyWebsiteUrl={"#"}
                companyWebsiteName={"Kantar TNS"}
                companyImage={kantarTnsLogo}
                workDescription={"Managing all the in-house software development into digital era."}
                imageName={"Kantar TNS"}
            />
        </div>
    </section>
}