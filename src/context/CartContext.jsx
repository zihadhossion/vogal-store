import { createContext, useState, } from "react";
import { useLocation } from "react-router-dom";
import { useToggleScroll } from "../hooks/useToggleScroll";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    let location = useLocation();

    const toggleCartSidebar = () => {
        setIsCartOpen((prevIsOpen) => !prevIsOpen && location.pathname === "/carts" ? false : !prevIsOpen);
    };

    useToggleScroll(isCartOpen);

    return (
        <CartContext.Provider value={{ isCartOpen, setIsCartOpen, toggleCartSidebar }}>
            {children}
        </CartContext.Provider>
    )
}