import {useState} from "react";

export default function useHamburgerMenu() {
    const [showHamburger, setShowHamburger] = useState(() => false);

    function toggleHamburgerMenu() {
        setShowHamburger((prevState) => !prevState);
    }

    return {showHamburger, toggleHamburgerMenu};
}