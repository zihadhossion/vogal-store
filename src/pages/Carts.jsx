import React, { useContext, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems } from "../features/cart/cartSlice";
import { useCart } from "../features/cart/useCart";
import CartItem from "../features/cart/CartItem";
import Loader from "../ui/Loader";

export default function Carts() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const { isLoading, error } = useCart();
    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    if (isLoading) return <Loader />

    return (
        <>
            <section className="w-full">
                {cartItems?.map((item, i) => <CartItem key={i} product={item} />)}
            </section>
        </>
    )
};

