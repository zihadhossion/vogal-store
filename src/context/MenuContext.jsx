import { createContext, useState, useEffect } from "react";

export const MenuContext = createContext();

export function MenuContextProvider({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.documentElement.classList.add('overflow-hidden');
            document.documentElement.classList.remove('overflow-x-hidden');
        } else {
            document.documentElement.classList.remove('overflow-hidden');
            document.documentElement.classList.add('overflow-x-hidden');
        }
    }, [menuOpen]);

    return (
        <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
            {children}
        </MenuContext.Provider>
    )
}