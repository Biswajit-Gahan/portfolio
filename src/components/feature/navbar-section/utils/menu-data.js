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
            link: "https://www.facebook.com",
        },
        {
            image: RiTwitterXFill,
            link: "https://www.x.com",
        },
        {
            image: TiSocialLinkedin,
            link: "https://www.linkedin.com",
        },
        {
            image: IoLogoInstagram,
            link: "https://www.instagram.com",
        },
    ]
}