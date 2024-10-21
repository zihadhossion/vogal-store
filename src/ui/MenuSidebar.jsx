import React, { useState, useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { MenuContext } from "../context/MenuContext";
import { AnimatePresence, motion } from "framer-motion";


export default function MenuSidebar() {
    const { menuOpen, setMenuOpen } = useContext(MenuContext);

    return (
        <AnimatePresence>
            {menuOpen && (
                <section className="menu w-full h-full fixed top-0 left-0 z-50 bg-[rgba(0,0,0,0.5)]">
                    <motion.div
                        initial={{ opacity: 1, x: "-100%" }}
                        animate={{
                            opacity: 1,
                            x: "0%",
                            transition: { duration: .25, ease: "easeIn" }
                        }}
                        exit={{
                            opacity: 0,
                            x: "-100%",
                            transition: { duration: .25, ease: "easeOut" }
                        }}
                        className="w-64 xs:w-80 h-full bg-white relative">
                        <MenuBar />
                        <MenuClose onMenuOpen={setMenuOpen} />
                    </motion.div>
                </section>
            )}
        </AnimatePresence>
    )
};

function MenuClose({ onMenuOpen }) {
    function handleMenuClose() {
        onMenuOpen(false);
    }

    return (
        <button className="text-white bg-black absolute top-12 left-[119%] translate-x-[-119%] xs:left-[115%] xs:translate-x-[-115%] p-2" onClick={handleMenuClose}>
            <IoCloseOutline style={{ width: "25px", height: "25px" }} />
        </button>
    )
}

function MenuBar() {
    const [activeMenu, setActiveMenu] = useState('menu');

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