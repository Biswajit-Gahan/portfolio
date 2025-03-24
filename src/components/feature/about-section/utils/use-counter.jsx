import {useEffect, useState} from "react";

export default function useCounter(isIntersect, count) {
    const [counter, setCounter] = useState(0);
    const speed = 350;
    let localCounter = 0;

    useEffect(() => {
        let intervalId = 0;
        if(isIntersect) {
            intervalId = setInterval(() => {
                if(localCounter < count) {
                    let increment = (count / speed);
                    localCounter += increment;
                    setCounter(+localCounter.toFixed(1));
                } else {
                    setCounter(count < 10 ? `0${count}` : count);
                }
            }, 1)
        }

        return () => clearInterval(intervalId);
    }, [isIntersect])

    return {counter};
}