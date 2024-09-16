import React, { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { MenuContext } from "../context/MenuContext";


export default function MenuSidebar() {
    return (
        <section className="menu w-full h-full fixed top-0 right-0 z-50 bg-[rgba(0,0,0,0.5)] left-0">
            <div className="w-80 h-full bg-white">
                <div className="flex">
                    <p className="flex-1 text-center p-3 bg-blue-300">Menu</p>
                    <p className="flex-1 text-center p-3 bg-blue-300">Categories</p>
                </div>
            </div>
            <MenuClose />
        </section>
    )
};

function MenuClose() {
    const { menuOpen, setMenuOpen } = useContext(MenuContext);

    function handleMenuClose() {
        setMenuOpen(false);
    }

    return (
        <button className="text-white bg-black absolute top-12 right-[14px] p-2" onClick={handleMenuClose}>
            <IoCloseOutline style={{ width: "25px", height: "25px" }} />
        </button>
    )
}