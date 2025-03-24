// import Image from "next/image";
// import circularName from "@/assets/circular-name.svg";
// import brandIcon from "@/assets/brand-icon.svg";
// import brandLogo from "@/assets/brand-logo.svg";
import Link from "next/link";

function NameMarquee({ariaDisabled = true}) {
    return <div aria-disabled={ariaDisabled} className={"flex items-center gap-10"}>
        <p className={"text-[clamp(10rem,5vw,5rem)] font-black italic text-nowrap leading-30 text-neutral-700/50"}>THANK YOU</p>
        <div className={"relative flex items-center justify-center w-[8rem]"}>
            <img src={"assets/circular-name.svg"} className={"absolute animate-[spin_10s_linear_infinite]"} alt={"shaik"} />
            <img src={"assets/brand-icon.svg"} alt={"icon"} />
        </div>
        <p className={"text-[clamp(10rem,5vw,5rem)] font-black italic text-nowrap leading-30 text-neutral-700/50"}>SEE YOU AGAIN</p>
        <div className={"relative flex items-center justify-center w-[8rem]"}>
            <img src={"assets/circular-name.svg"} className={"absolute animate-[spin_10s_linear_infinite]"} alt={"shaik"} />
            <img src={"assets/brand-icon.svg"} alt={"icon"} />
        </div>
    </div>
}

export default function FooterSection() {
    return <section className={"mt-8"}>
        <div className={"flex gradient-mask"}>
            <div className={"flex items-center animate-auto-run"}>
                {
                    Array.from({ length: 4 }).map((_, i) => (
                        <NameMarquee key={i + 1} ariaDisabled={i !== 0} />
                    ))
                }
            </div>
        </div>
        <footer className={"mt-8 bg-neutral-700/50"}>
            <div className={"flex flex-col lg:flex-row font-semibold text-sm text-neutral-500 gap-2.5 items-center justify-between container-auto py-5"}>
                <div className={"flex items-center gap-2"}>
                    <img className={"w-15"} src={"assets/brand-logo.svg"} alt={"shaik"} />
                    <span className={"text-xs font-light"}><Link className={"hover:underline"} href={"/#home"}>SHAIK's Portfolio</Link> | {new Date().getFullYear()}</span>
                </div>
                <hr className={"w-20 h-[0.07rem] bg-neutral-700 border-0 lg:hidden"}/>
                <span className={"text-xs font-light"}>Crafted by <Link className={"hover:underline"} href={"https://www.biswajitgahan.com"} target={"_blank"}>Biswajit Gahan.</Link></span>
            </div>
        </footer>
    </section>
}