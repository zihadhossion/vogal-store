import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";


export default function NoItem() {
    const navigate = useNavigate();
    const { setIsCartOpen, } = useContext(CartContext);
    const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);

    function handleShop() {
        setIsCartOpen(false);
        navigate("/collections");
    }

    function handleLogin() {
        setIsCartOpen(false);
        navigate("/login")
    }

    return (
        <div className="h-full flex items-center justify-center flex-col">
            <p className="mb-5"><FiShoppingCart className="w-16 h-16 text-[#ddd] fill-white" /></p>
            <p className="mb-6">No Products in the Cart.</p>
            <button onClick={() => handleShop()} className="uppercase text-white bg-black p-[10px_30px] mb-10">Continue shopping</button>
            {!isAuthenticated && <>
                <p className="font-medium uppercase">have an account?</p>
                <p><button onClick={handleLogin}>Log in</button> to check out faster.</p>
            </>}
        </div>
    )
}
