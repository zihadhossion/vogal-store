import React, { useState, useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { MenuContext } from "../context/MenuContext";


export default function MenuSidebar() {
    return (
        <section className="menu w-full h-full fixed top-0 right-0 z-50 bg-[rgba(0,0,0,0.5)] left-0">
            <div className="w-80 h-full bg-white">
                {/* <div className="flex">
                    <p className="flex-1 text-center p-3 bg-blue-300">Menu</p>
                    <p className="flex-1 text-center p-3 bg-blue-300">Categories</p>
                </div> */}
                <MenuBar />
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
        <button className="text-white bg-black absolute top-12 translate-x-[780%] p-2" onClick={handleMenuClose}>
            <IoCloseOutline style={{ width: "25px", height: "25px" }} />
        </button>
    )
}


const MenuBar = () => {
    // State to manage which menu is active
    const [activeMenu, setActiveMenu] = useState('menu');

    // Menu data (example)
    const menuItems = {
        menu: ['Home', 'Shop', 'Products', 'Features', 'Portfolio', 'Pages', 'Buy Now'],
        categories: [
            "Smartwatches",
            "Smart TVs",
            "Laptops & Computers",
            "Audios & Video",
            "Mobile & Tablets",
            "Cameras",
            "Video Games",
            "Printers & Ink",
            "Headphones",
            "Weekly Deals"
        ],
    };

    return (
        <div>
            {/* Buttons to toggle between Menu and Categories */}
            <div className="text-white bg-black flex justify-between">
                <button className="flex-1" onClick={() => setActiveMenu('menu')} style={{
                    padding: '10px 20px',
                    backgroundColor: activeMenu === 'menu' ? 'white' : 'transparent',
                    color: activeMenu === 'menu' ? 'black' : 'white',
                }}>MENU</button>
                <button className="flex-1" onClick={() => setActiveMenu('categories')} style={{
                    padding: '10px 20px',
                    backgroundColor: activeMenu === 'categories' ? 'white' : 'transparent',
                    color: activeMenu === 'categories' ? 'black' : 'white',
                }}>CATEGORIES</button>
            </div>

            {/* Conditionally render the menu */}
            <ul className="p-3">
                {menuItems[activeMenu].map((item, index) => (
                    <li key={index} className="font-medium p-3 uppercase">
                        {item}
                    </li>
                ))}
            </ul>

            {activeMenu === "menu" ? <>
                <div className="p-5">
                    <div>
                        <span role="img" aria-label="fire">🔥</span> DEAL ZONE
                    </div>
                    <div>
                        NEED HELP? Call: +41 525 523 5687
                    </div>
                </div>
            </> : ""}
        </div >
    );
};

