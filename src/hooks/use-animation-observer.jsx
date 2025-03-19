"use client"

import {useEffect, useState} from "react";

export default function useAnimationObserver(...refs) {
    const [isIntersect, setIsIntersect] = useState(() => false);

    useEffect(() => {
        function observerHandler(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsIntersect(true);
                    animationObserver?.unobserve(entry.target);
                }
            })
        }

        const animationObserver = new IntersectionObserver(observerHandler, {threshold: 0.2});
        refs.forEach(ref => {
            animationObserver.observe(ref.current);
        })

        return () => {
            refs.forEach(ref => {
                animationObserver.unobserve(ref.current);
            })
        }
    }, []);

    return {isIntersect};
}