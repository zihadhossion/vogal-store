import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [cartOpen, isCartOpen] = useState(false);

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
        <CartContext.Provider value={{ cartOpen, isCartOpen }}>
            {children}
        </CartContext.Provider>
    )
}