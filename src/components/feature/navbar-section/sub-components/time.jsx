"use client"

import useGetTime from "@/components/feature/navbar-section/utils/use-get-time";

export default function Time() {
    const {time} = useGetTime();

    return <p>{time}</p>
}