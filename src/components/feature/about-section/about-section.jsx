import Link from "next/link";
import {TiSocialFacebook, TiSocialLinkedin} from "react-icons/ti";
import {RiTwitterXFill} from "react-icons/ri";
import {IoLogoInstagram} from "react-icons/io5";
import {ImQuotesLeft, ImQuotesRight} from "react-icons/im";
import Image from "next/image";
import userInFrame from "@/assets/user-in-frame.png";

function TagSection() {
    return <div className={"row-start-1 row-end-3 col-start-1 col-end-5 lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-6 flex items-center justify-center relative p-5"}>
        <div className={"absolute top-5 left-5"}>
            <ImQuotesLeft size={70} className={"opacity-5"}/>
        </div>
        <div className={"absolute bottom-5 right-5"}>
            <ImQuotesRight size={70} className={"opacity-5"}/>
        </div>
        <span className={"text-[clamp(1.5rem,3.5vw,3.5rem)] font-bold relative text-center"}>Turn your ideas into reality.</span>
    </div>
}

function SocialSection() {
    return <div className={"row-start-3 row-end-4 col-start-1 col-end-5 p-4 lg:row-start-1 lg:row-end-2 lg:col-start-6 lg:col-end-9 flex items-center justify-between lg:p-5"}>
        <span className={"text-sm"}>Find me on<br/>social platforms</span>
        <ul className={"flex items-center gap-2 lg:gap-3 [&>*]:p-1 [&>*]:inline-block [&>*]:rounded-sm"}>
            <li className={"bg-blue-900"}>
                <Link href={"#"}><TiSocialFacebook className={"w-6 h-6"}/></Link>
            </li>
            <li className={"bg-neutral-700"}>
                <Link href={"#"}><RiTwitterXFill className={"w-6 h-6"}/></Link>
            </li>
            <li className={"bg-cyan-600"}>
                <Link href={"#"}><TiSocialLinkedin className={"w-6 h-6"}/></Link>
            </li>
            <li className={"bg-pink-600"}>
                <Link href={"#"}><IoLogoInstagram className={"w-6 h-6"}/></Link>
            </li>
        </ul>
    </div>
}

function AchievementCard({bgColor, title, count}) {
    return <div className={`w-full ${bgColor} p-2 rounded-sm flex flex-col items-center justify-center lg:gap-2 text-center`}>
        <span className={"text-[clamp(1.5rem,3.5vw,3rem)] font-bold"}>{count}</span>
        <span className={"text-xs"}>{title}</span>
    </div>
}

function AchievementsSection() {
    return <div className={"row-start-4 row-end-8 col-start-1 col-end-5 lg:row-start-3 lg:row-end-6 lg:col-start-1 lg:col-end-6 grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-2.5 lg:gap-4"}>
        <AchievementCard bgColor={"bg-primary"} count={"19+"} title={"Years of Experience"} />
        <AchievementCard bgColor={"bg-yellow-600"} count={"12+"} title={"Project Completed"} />
        <AchievementCard bgColor={"bg-blue-600"} count={"85+"} title={"Happy Client"} />
        <AchievementCard bgColor={"bg-green-700"} count={"03"} title={"Leading System Designs"} />
    </div>
}

function PhotoSection() {
    return <div className={"hidden lg:block lg:row-start-2 lg:row-end-6 lg:col-start-6 lg:col-end-9 overflow-clip"}>
        <div className={"bg-linear-180 from-primary/20 to-neutral-900/30 w-full h-full"}>
            <Image src={userInFrame} alt={"shaik"} className={"h-full w-auto m-auto"}/>
        </div>
    </div>
}

function AboutMeSection() {
    return <div className={"row-start-8 row-end-13 col-start-1 col-end-5 lg:row-start-6 lg:row-end-10 lg:col-start-1 lg:col-end-9 p-4 lg:p-[1.5rem] relative"}>
        <div className={" pointer-events-none absolute bottom-0 right-5 lg:right-25 [mask:linear-gradient(transparent,bg-light/20,bg-light/20,transparent)] [-webkit-mask:linear-gradient(transparent,bg-light/20,bg-light/20,transparent)]"}>
            <ImQuotesRight size={180} className={"opacity-5"}/>
        </div>
        <div className={"flex items-center gap-3"}>
            <span className={"lg:text-xl text-nowrap"}>About Me</span>
            <div className={"w-full h-0.5 bg-neutral-700"}/>
        </div>
        <div className={"w-full h-[calc(100%-0.5rem-2rem)] mt-[0.5rem] overflow-auto"}>
            <span className={"text-sm lg:text-base lg:tracking-wider font-monda"}>Hello, I am Shaik Mahaboob Subhani. Recognized as a Fintech evangelist in setting the company vision, technology, digital practices and strategies till launch of Fintech portfolio developing new systems. Dexterity to identify gaps, bottlenecks, risks and requirements in robust Fintech technologies and architecture. Insightful experience in prioritizing, winning, launching and developing high-reach & impact Fintech/Technology portfolios. Capability in developing a pipeline of episodic deals, particularly within BFSI industry. Dexterity to identify gaps, bottlenecks, risks and requirements in robust Fintech technologies and architecture. Insightful experience in prioritizing, winning, launching and developing high-reach & impact Fintech/Technology portfolios. Capability in developing a pipeline of episodic deals, particularly within BFSI industry.</span>
        </div>
    </div>
}

export default function AboutSection() {
    return <section className={"container-auto grid grid-rows-12 grid-cols-4 lg:grid-rows-8 lg:grid-cols-8 h-[50rem] lg:h-[42rem] mt-5 lg:mt-8 gap-2.5 lg:gap-4 [&>*]:bg-light/2  [&>*]:rounded-md"}>
        <TagSection />
        <SocialSection />
        <AchievementsSection />
        <PhotoSection />
        <AboutMeSection />
    </section>
}
