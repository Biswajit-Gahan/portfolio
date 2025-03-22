"use client";

import {HiOutlineDotsVertical} from "react-icons/hi";
import Image from "next/image";
import brandLogo from "@/assets/brand-logo.svg"
import Link from "next/link";
import useHamburgerMenu from "@/components/feature/navbar-section/utils/use-hamburger-menu";
import menuData from "../utils/menu-data";

export default function HamburgerMenu() {
    const {
        showHamburger,
        toggleHamburgerMenu,
    } = useHamburgerMenu();

    return <div>
        <HiOutlineDotsVertical size={25} className={`${showHamburger ? "rotate-90" : "rotate-180"} duration-300 transition-transform`} onClick={toggleHamburgerMenu}/>
        <div className={`fixed pointer-events-none top-0 left-0 w-full h-dvh flex items-end pb-2 transition-transform duration-300 ${showHamburger ? "translate-y-0" : "translate-y-1/2"}`}>
            <div className={"relative pointer-events-auto w-full before:content-[''] before:absolute before:bg-neutral-700/10 before:w-full before:h-full before:backdrop-blur-lg rounded-2xl mx-2 overflow-clip"}>
                <div className={"w-full relative p-5"}>
                    <Image src={brandLogo} className={"block m-auto"} alt={"shaik"} />
                    <ul className={"flex flex-wrap mt-8 justify-center gap-3"}>
                        {
                            menuData.hamburgerMenuLinks.map((menu, index) => (
                                <li onClick={toggleHamburgerMenu} key={index + 1}>
                                    <Link className={"bg-neutral-100/10 font-sans text-sm px-6 py-2 block rounded-full"} href={menu.href}>{menu.linkText}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className={"flex mt-8 justify-center gap-2"}>
                        {
                            menuData.socialLinks.map((social, index) => {
                                const IconComponent = social.image
                                return <li key={index + 1} onClick={toggleHamburgerMenu} className={"flex"}>
                                    <Link className={"block p-1.5 bg-neutral-100/10 rounded-full"} href={social.link} target={"_blank"}>
                                        <IconComponent size={23}/>
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
}