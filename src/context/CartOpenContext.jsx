import { createContext, useState, useEffect } from "react";

export const CartOpenContext = createContext();

export function CartOpenProvider({ children }) {
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
        <CartOpenContext.Provider value={{ cartOpen, isCartOpen }}>
            {children}
        </CartOpenContext.Provider>
    )
}