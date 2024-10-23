import { createContext, useState, } from "react";
import { useLocation } from "react-router-dom";
import { useToggleScroll } from "../hooks/useToggleScroll";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [cartOpen, isCartOpen] = useState(false);
    let location = useLocation();

    const toggleCartSidebar = () => {
        if (location.pathname !== '/carts') {
            isCartOpen(prevState => !prevState);
        }
    };

    useToggleScroll(cartOpen);

    return (
        <CartContext.Provider value={{ cartOpen, isCartOpen, toggleCartSidebar }}>
            {children}
        </CartContext.Provider>
    )
}