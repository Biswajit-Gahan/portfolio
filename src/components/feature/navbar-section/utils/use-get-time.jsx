import {useEffect, useState} from "react";

export default function useGetTime() {
    const [time, setTime] = useState("");

    useEffect(() => {
        let interval = setInterval(() => {
            const currentDate = new Date();
            const weekDay = new Date(currentDate).toLocaleString("en-US", {timeZone: "Asia/Kolkata", weekday: "long"});
            const hourAndMeridian = new Date(currentDate).toLocaleString("en-US", {timeZone: "Asia/Kolkata", hour: "numeric"}, );
            const hour = hourAndMeridian.split(" ")[0];
            const meridian = hourAndMeridian.split(" ")[1];
            const minute = new Date(currentDate).toLocaleString("en-US", {timeZone: "Asia/Kolkata", minute: "2-digit"});

            let date = `${weekDay}, ${hour}:${+minute < 10 ? `0${minute}`: minute} ${meridian}`;
            setTime(date);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return {time};
}