import { createContext, useState, } from "react";
import { useToggleScroll } from "../hooks/useToggleScroll";

export const MenuContext = createContext();

export function MenuContextProvider({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);

    useToggleScroll(menuOpen);

    return (
        <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
            {children}
        </MenuContext.Provider>
    )
}