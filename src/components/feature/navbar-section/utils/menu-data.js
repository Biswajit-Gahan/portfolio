import {TiSocialFacebook, TiSocialLinkedin} from "react-icons/ti";
import {RiTwitterXFill} from "react-icons/ri";
import {IoLogoInstagram} from "react-icons/io5";

export default {
    hamburgerMenuLinks: [
        {
            href: "#home",
            linkText: "Home",
        },
        {
            href: "#about",
            linkText: "Abut",
        },
        {
            href: "#work",
            linkText: "Work",
        },
        {
            href: "#contact",
            linkText: "contact",
        },
    ],
    socialLinks: [
        {
            image: TiSocialFacebook,
            link: "#",
        },
        {
            image: RiTwitterXFill,
            link: "#",
        },
        {
            image: TiSocialLinkedin,
            link: "https://www.linkedin.com/in/shaiksubhanifintech/",
        },
        {
            image: IoLogoInstagram,
            link: "#",
        },
    ]
}