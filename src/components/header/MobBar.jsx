import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RiHome3Line } from "react-icons/ri";
import SearchBox from "../../ui/SearchBox";
import IconBox from "../../ui/IconBox";
import CartIcon from "../../ui/CartIcon";
import AccountIcon from "../../ui/AccountIcon";
import WishListIcon from "../../ui/WishListIcon";
import { MenuContext } from "../../context/MenuContext";


export default function MobBar() {
    return (
        <section className="bg-white w-full">
            <div className="w-full bg-white flex items-center py-4 px-2 fixed top-0 z-40 ">
                <MenuBar />
                <SearchBox />
            </div>
            <BottomFixed />
        </section>
    )
};

function MenuBar() {
    const { menuOpen, setMenuOpen } = useContext(MenuContext);

    function handleMenu() {
        setMenuOpen(true);
    }

    return (
        <div className="min-w-10 max-w-10 flex items-center flex-1 mgr" onClick={handleMenu}>
            <a href="#" className="block p-[5px]">
                <IoMenu className="w-8 h-8" />
            </a>
        </div>
    )
};


function BottomFixed() {
    const navigate = useNavigate();

    function handleHome() {
        navigate('/')
    }
    function handleCart() {
        navigate('/carts')
    }

    return (
        <>
            <div className="bg-white w-full flex justify-around fixed bottom-0 py-3 z-40">
                <IconBox text={"Home"} svgIcon={<RiHome3Line />} onClick={handleHome} />
                <AccountIcon />
                <WishListIcon />
                <CartIcon onHandleClick={handleCart} />
            </div>
        </>
    )
}