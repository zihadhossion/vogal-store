import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import supabase from "../services/supabase";
import { CartContext } from "../context/CartContext";
import { fetchTotalQuantity } from "../features/cart/cartSlice";
import useWindowSize from "../hooks/useWindowSize";
import { BsCart } from "react-icons/bs";
import IconBox from "./IconBox";

function CartIcon({ onHandleClick }) {
    const dispatch = useDispatch();
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const { cartOpen, isCartOpen } = useContext(CartContext);
    const windowWidth = useWindowSize();

    useEffect(() => {
        // Fetch the initial total quantity
        dispatch(fetchTotalQuantity());

        // Set up real-time subscription to changes in the 'cart' table
        const subscription = supabase
            .channel('public:cart')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'cart' }, payload => {
                // console.log('Change received:', payload);

                // Re-fetch the total quantity whenever there's a change
                dispatch(fetchTotalQuantity());
            })
            .subscribe();

        // Clean up subscription on component unmount
        return () => {
            supabase.removeChannel(subscription);
        };
    }, [dispatch]);

    function handleClick() {
        isCartOpen((open) => !open);
    }

    return (
        <>
            <IconBox text={"cart"} svgIcon={<BsCart />} onClick={windowWidth > 992 ? handleClick : onHandleClick}>
                <b className="text-[11px] min-w-4 h-4 text-white bg-black absolute top-0 right-[5px] rounded-2xl leading-4">
                    {totalQuantity}
                </b>
            </IconBox>
        </>
    )
};

export default CartIcon;


