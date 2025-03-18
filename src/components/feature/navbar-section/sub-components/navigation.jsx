import NavItem from "@/components/feature/navbar-section/sub-components/nav-item";

export default function Navigation() {
    return <div className={"flex justify-center items-center space-x-10"}>
        <NavItem number={"01"} navType={"Work"}/>
        <NavItem number={"02"} navType={"About"}/>
        <NavItem number={"03"} navType={"Contact"}/>
    </div>
}