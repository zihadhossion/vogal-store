import React, { useContext, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import supabase from "../services/supabase";
import { CartContext } from "../context/CartContext";
import { fetchTotalQuantity } from "../slices/cartSlice";
import useWindowSize from "../hooks/useWindowSize";
import { BsCart } from "react-icons/bs";
import IconBox from "./IconBox";

function CartIcon({ onHandleClick }) {
    const dispatch = useDispatch();
    const totalQuantity = useSelector((state) => state?.cart?.totalQuantity);
    const { toggleCartSidebar } = useContext(CartContext);
    const windowWidth = useWindowSize();

    useEffect(() => {
        if (!totalQuantity) {
            dispatch(fetchTotalQuantity());
        }

        const channel = supabase
            .channel('cart-changes')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'cart' }, (payload) => {
                dispatch(fetchTotalQuantity());
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };

    }, [dispatch, totalQuantity]);

    const cachedTotalQuantity = useMemo(() => {
        return totalQuantity;
    }, [totalQuantity])

    return (
        <IconBox text={"cart"} svgIcon={<BsCart style={{ width: "20px", height: "20px" }} />} onClick={windowWidth > 992 ? toggleCartSidebar : onHandleClick}>
            {cachedTotalQuantity ?
                <>
                    <b className="text-xs min-w-5 h-5 text-white bg-black absolute top-0 right-0 leading-5 rounded-2xl ">
                        {cachedTotalQuantity}
                    </b>
                </> : ""}
        </IconBox>
    )
};

export default CartIcon;