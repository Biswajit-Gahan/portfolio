import Link from "next/link";
import Image from "next/image";
import brandLogo from "@/assets/brand-logo.svg";

export default function BrandName() {
    return <Link href={"/#home"}>
        <Image src={brandLogo} alt={"shaik"} className={"w-[5rem] xl:w-[6.5rem]"} />
    </Link>
}