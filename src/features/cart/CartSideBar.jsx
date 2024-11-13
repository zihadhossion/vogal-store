import React, { useContext, useRef, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CartContext } from "../../context/CartContext";
import useClickOutside from "../../hooks/useClickOutside";
import { IoCloseOutline } from "react-icons/io5";
import CartItem from "./CartItem";
import Loader from "../../ui/Loader";
import useCartItems from "./useCartItems";
import useTotalAmount from "./useTotalAmount";
import NoItem from "../../ui/NoItem";

export default function CartSideBar() {
    const { isCartOpen, setIsCartOpen, } = useContext(CartContext);
    const cachedCartItems = useCartItems();

    const cartRef = useRef(null);
    function handleOutside() {
        setIsCartOpen(false);
    }
    useClickOutside(cartRef, handleOutside);

    return (
        <AnimatePresence>
            {isCartOpen && (
                <section className="w-full min-h-screen fixed top-0 right-0 z-50 bg-[rgba(0,0,0,0.5)] flex justify-end transition">
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{
                            opacity: 1,
                            x: "0%",
                            transition: { duration: .3, ease: "easeIn" }
                        }}
                        exit={{
                            opacity: 0,
                            x: "100%",
                            transition: { duration: .2, ease: "easeOut" }
                        }}
                        ref={cartRef}
                        className="relative w-96 bg-white p-[10px_15px] shadow-lg">
                        <SideBar setCartOpen={setIsCartOpen} cachedCartItems={cachedCartItems} />
                    </motion.div>
                </section >
            )}
        </AnimatePresence>
    )
}

function SideBar({ setCartOpen, cachedCartItems }) {
    const isLoading = useSelector((state) => state?.cart?.isLoading);

    return (
        <div className="h-full relative">
            <div className="flex justify-end mb-5">
                <button onClick={() => setCartOpen(false)}>
                    <IoCloseOutline className="w-7 h-7" />
                </button>
            </div>
            {!isLoading ?
                (cachedCartItems.length > 0 ?
                    <CartData cartItems={cachedCartItems} setCartOpen={setCartOpen} /> :
                    <NoItem />) :
                <Loader />}
        </div>
    )
}

function CartData({ cartItems, setCartOpen }) {
    const navigate = useNavigate();
    const cachedTotalAmount = useTotalAmount();

    function handleViewCart() {
        setCartOpen(false);
        navigate("/carts");
    }

    function handleCheckout() {
        setCartOpen(false);
        navigate("/checkout");
    }

    return (
        <>
            <div className="overflow-y-auto h-full pb-[60%]">
                {cartItems?.map((item) => <CartItem key={item.id} product={item} />)}
            </div>
            <div className="cartBtn w-full py-1 bg-white absolute bottom-0">
                <p className="text-[15px] font-semibold mb-2">Total : <span className="ml-[70%]">{cachedTotalAmount}</span></p>
                <p className="mb-3">Tax included. Shipping calculated at checkout.</p>
                <button onClick={handleCheckout} className="block w-full h-11 text-white hover:text-[#9c742e] bg-[#ad7a23] hover:bg-white tracking-wide uppercase mb-3 transition">Proceed to checkout</button>
                <button className="block w-full h-11 text-white hover:text-black bg-black hover:bg-white border tracking-wide uppercase transition" onClick={handleViewCart}>view cart</button>
            </div>
        </>
    )
}