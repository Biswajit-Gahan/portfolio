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
            if(!ref.current) return;
            animationObserver.observe(ref.current);
        })

        return () => {
            refs.forEach(ref => {
                if(!ref.current) return
                animationObserver.unobserve(ref.current);
            })
        }
    }, []);

    return {isIntersect};
}