import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../features/cart/cartSlice";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";

export default function QuantityBtnSet({ product }) {
    const dispatch = useDispatch()

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };

    const handleIncrease = (product) => {
        dispatch(increaseQuantity(product));
    };

    const handleDecrease = (product) => {
        dispatch(decreaseQuantity(product));
    };

    function handleInput() {
        console.log("input");
    }

    return (
        <>
            <div className="flex">
                <button onClick={() => handleDecrease(product)} className="cartItemBtn"><FaMinus /></button>
                <input className="cartItemBtn" value={product?.quantity} onChange={handleInput} />
                <button onClick={() => handleIncrease(product)} className="cartItemBtn"><FaPlus /></button>
                <button onClick={() => handleRemoveFromCart(product)} className="ml-2 text-gray-500"><RiDeleteBinLine /></button>
            </div>
        </>
    )
};

