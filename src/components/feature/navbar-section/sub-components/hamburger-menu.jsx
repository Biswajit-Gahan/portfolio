import {HiOutlineDotsVertical} from "react-icons/hi";
import Image from "next/image";
import brandLogo from "@/assets/brand-logo.svg"
import Link from "next/link";
import {TiSocialFacebook, TiSocialLinkedin} from "react-icons/ti";
import {RiTwitterXFill} from "react-icons/ri";
import {IoLogoInstagram} from "react-icons/io5";

export default function HamburgerMenu() {
    const showHamburger = false;
    return <div>
        <HiOutlineDotsVertical size={25}/>
        <div className={`fixed top-0 left-0 w-full h-dvh flex items-end pb-2 transition-transform duration-300 ${showHamburger ? "translate-y-0" : "translate-y-1/2"}`}>
            <div className={"relative w-full before:content-[''] before:absolute before:bg-neutral-700/10 before:w-full before:h-full before:backdrop-blur-lg rounded-2xl mx-2 overflow-clip"}>
                <div className={"w-full relative p-5"}>
                    <Image src={brandLogo} className={"block m-auto"} alt={"shaik"} />
                    <ul className={"flex flex-wrap mt-8 justify-center gap-3"}>
                        <li>
                            <Link className={"bg-neutral-100/10 font-sans text-sm px-6 py-2 block rounded-full"} href={"#"}>Home</Link>
                        </li>
                        <li>
                            <Link className={"bg-neutral-100/10 font-sans text-sm px-6 py-2 block rounded-full"} href={"#"}>About</Link>
                        </li>
                        <li>
                            <Link className={"bg-neutral-100/10 font-sans text-sm px-6 py-2 block rounded-full"} href={"#"}>Work</Link>
                        </li>
                        <li>
                            <Link className={"bg-neutral-100/10 font-sans text-sm px-6 py-2 block rounded-full"} href={"#"}>Contact</Link>
                        </li>
                    </ul>
                    <ul className={"flex mt-8 justify-center gap-2"}>
                        <li className={"flex"}>
                           <Link className={"block p-1.5 bg-neutral-100/10 rounded-full"} href={"#"}>
                               <TiSocialFacebook size={23}/>
                           </Link>
                        </li>
                        <li className={"flex"}>
                           <Link className={"block p-1.5 bg-neutral-100/10 rounded-full"} href={"#"}>
                               <TiSocialLinkedin size={23}/>
                           </Link>
                        </li>
                        <li className={"flex"}>
                           <Link className={"block p-1.5 bg-neutral-100/10 rounded-full"} href={"#"}>
                               <RiTwitterXFill size={23}/>
                           </Link>
                        </li>
                        <li className={"flex"}>
                           <Link className={"block p-1.5 bg-neutral-100/10 rounded-full"} href={"#"}>
                               <IoLogoInstagram size={23}/>
                           </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}