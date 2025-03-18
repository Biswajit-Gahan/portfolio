import Link from "next/link";

export default function NavItem({number, navType}) {
    return <Link href={"#"} className={"group flex flex-col space-y-1 w-fit relative"}>
        <div className={"flex items-center space-x-1"}>
            <span className={"text-xs"}>{number}</span>
            <div className={"w-0 group-hover:w-full h-[0.1rem] bg-primary duration-300 ease-in-out"}/>
        </div>
        <span>{navType}</span>
    </Link>
}