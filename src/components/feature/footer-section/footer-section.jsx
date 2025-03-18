import Image from "next/image";
import circularName from "@/assets/circular-name.svg";
import brandIcon from "@/assets/brand-icon.svg";
import brandLogo from "@/assets/brand-logo.svg";

function NameMarquee() {
    return <div className={"flex items-center gap-10"}>
        <p className={"text-[clamp(10rem,5vw,5rem)] font-black italic text-nowrap leading-30 text-neutral-700/50"}>THANK YOU</p>
        <div className={"relative flex items-center justify-center w-[8rem]"}>
            <Image src={circularName} className={"absolute animate-[spin_10s_linear_infinite]"} alt={"shaik"} />
            <Image src={brandIcon} alt={"icon"} />
        </div>
    </div>
}

export default function FooterSection() {
    return <section className={"mt-8"}>
        <div className={"flex"}>
            <NameMarquee/>
            <NameMarquee/>
        </div>
        <footer className={"mt-8 bg-neutral-700/50"}>
            <div className={"flex flex-col lg:flex-row font-semibold text-sm text-neutral-500 gap-1 items-center justify-between container-auto py-3"}>
                <div className={"flex items-center gap-2"}>
                    <Image className={"w-15"} src={brandLogo} alt={"shaik"} />
                    <span >SHAIK's Portfolio | {new Date().getFullYear()}</span>
                </div>
                <span>Designed and developed by Biswajit Gahan.</span>
            </div>
        </footer>
    </section>
}