import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import supabase from "../services/supabase";
import { CartOpenContext } from "../context/CartOpenContext";
import { fetchTotalQuantity } from "../features/cart/cartSlice";
import useWindowSize from "../hooks/useWindowSize";
import { BsCart } from "react-icons/bs";
import IconBox from "./IconBox";

function CartIcon({ onHandleClick }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isClose, setIsClose] = useState(false);
    const dispatch = useDispatch();
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);


    useEffect(() => {
        // Fetch the initial total quantity
        dispatch(fetchTotalQuantity());

        // Set up real-time subscription to changes in the 'cart' table
        const subscription = supabase
            .channel('public:cart')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'cart' }, payload => {
                console.log('Change received:', payload);

                // Re-fetch the total quantity whenever there's a change
                dispatch(fetchTotalQuantity());
            })
            .subscribe();

        // Clean up subscription on component unmount
        return () => {
            supabase.removeChannel(subscription);
        };
    }, [dispatch]);

    function handleCartOpen() {
        setIsOpen(true);
        document.documentElement.classList.add('overflow-hidden');
        document.documentElement.classList.remove('overflow-x-hidden');
    }

    function handleCartClose() {
        setIsOpen(false)

        document.documentElement.classList.remove('overflow-hidden');
        document.documentElement.classList.add('overflow-x-hidden');
    }
    return (
        <>
            <IconBox text={"cart"} svgIcon={<BsCart />}>
                <b className="text-[11px] min-w-4 h-4 text-white bg-black absolute top-0 right-[5px] rounded-2xl leading-4">
                    {totalQuantity}
                </b>
            </IconBox>
        </>
    )
};

export default CartIcon;


