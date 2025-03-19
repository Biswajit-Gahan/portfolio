import {useState} from "react";

export default function useActiveExperienceCard() {
    const [activeCard, setActiveCard] = useState(() => 0);

    function handleActiveCard(cardNumber) {
        return function () {
            setActiveCard(cardNumber)
        };
    }

    return {activeCard, handleActiveCard};
}