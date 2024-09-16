import React, { useContext, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import useClickOutside from "../../hooks/useClickOutside";
import { fetchCartItems } from "./cartSlice";
import { FiShoppingCart } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import CartItem from "./CartItem";
import Loader from "../../ui/Loader";


export default function CartSideBar() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const isLoading = useSelector((state) => state.cart.isLoading);
    const { cartOpen, isCartOpen } = useContext(CartContext);

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    const cartRef = useRef(null);

    function handleOutside() {
        console.log('Clicked outside');
        isCartOpen(false);
    }

    useClickOutside(cartRef, handleOutside);

    return (
        <>
            <section className="w-full h-full fixed top-0 right-0 z-50 bg-[rgba(0,0,0,0.5)] flex justify-end transition-all duration-300">
                <div ref={cartRef} className="relative w-3/12 bg-white p-[10px_15px] transition-all animate-[rightHide_300ms_linear] shadow-lg">
                    <div className="h-full relative">
                        <div className="flex justify-end mb-5">
                            <button onClick={() => isCartOpen(false)}>
                                <IoCloseOutline className="w-7 h-7" />
                            </button>
                        </div>
                        {!isLoading ? (cartItems.length > 0 ? <CartData cartItems={cartItems} isCartOpen={isCartOpen} /> : <NoItem isCartOpen={isCartOpen} />) : <Loader />}
                    </div>
                </div>
            </ section >
        </>
    )
}

function CartData({ cartItems, isCartOpen }) {
    const navigate = useNavigate();

    function handleViewCart() {
        isCartOpen(false);
        navigate("/carts");
    }
    function handleCheckOut() {
        isCartOpen(false);
    }

    return (
        <>
            <div className="overflow-y-auto h-full pb-[50%]">
                {cartItems?.map((item) => <CartItem key={item.id} product={item} />)}
            </div>
            <div className="cartBtn w-full py-1 bg-white absolute bottom-0">
                <button className="bg-[#ad7a23] mb-3">Proceed to checkout</button>
                <button className="bg-black" onClick={handleViewCart}>view cart</button>
            </div>
        </>
    )
}

function NoItem({ isCartOpen }) {
    const navigate = useNavigate();

    function handleShop() {
        isCartOpen(false);
        navigate("/products");
    }

    return (
        <>
            <div className="h-full flex items-center justify-center flex-col">
                <p className="mb-5"><FiShoppingCart className="w-16 h-16 text-[#ddd] fill-white" /></p>
                <p className="mb-6">No Products in the Cart.</p>
                <button onClick={handleShop} className="uppercase text-white bg-black p-[10px_30px] mb-10">Continue shopping</button>
                <p>have an account?</p>
                <p><Link to={""}>Log in</Link>  to check out faster.</p>
            </div>
        </>
    )
}
