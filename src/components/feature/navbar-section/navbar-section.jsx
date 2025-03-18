import BrandName from "@/components/feature/navbar-section/sub-components/brand-name";
import Time from "@/components/feature/navbar-section/sub-components/time";
import Navigation from "@/components/feature/navbar-section/sub-components/navigation";
import HamburgerMenu from "@/components/feature/navbar-section/sub-components/hamburger-menu";

export default function NavbarSection() {
    return <nav className={"sticky top-0 bg-dark/10 backdrop-blur-lg font-monda z-[999]"}>
        <div className={"container-auto relative flex items-center justify-between h-15 lg:h-20"}>
            <div>
                <BrandName/>
            </div>
            <div className={"hidden lg:inline absolute top-1/2 left-1/2 -translate-1/2"}>
                <Time/>
            </div>
            <div className={"hidden lg:inline"}>
                <Navigation/>
            </div>
            <div className={"lg:hidden"}>
                <HamburgerMenu />
            </div>
        </div>
    </nav>
}