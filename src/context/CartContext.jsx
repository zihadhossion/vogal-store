import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [cartOpen, isCartOpen] = useState(false);
    let location = useLocation();

    const toggleCartSidebar = () => {
        if (location.pathname !== '/carts') {
            isCartOpen(prevState => !prevState);
        }
    };

    useEffect(() => {
        if (cartOpen) {
            document.documentElement.classList.add('overflow-hidden');
            document.documentElement.classList.remove('overflow-x-hidden');
        } else {
            document.documentElement.classList.remove('overflow-hidden');
            document.documentElement.classList.add('overflow-x-hidden');
        }
    }, [cartOpen]);

    return (
        <CartContext.Provider value={{ cartOpen, isCartOpen, toggleCartSidebar }}>
            {children}
        </CartContext.Provider>
    )
}