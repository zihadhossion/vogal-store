import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "./cartSlice";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";

function CartItem({ product }) {
    const { image, title, price, quantity } = product;
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
            <article className="flex items-center my-2 py-1 border-b border-[#f5f5f5]">
                <div className="w-32">
                    <img src={image} alt="" className="w-full h-full" />
                </div>
                <div>
                    <h3 className="text-sm mb-2">{title}</h3>
                    <p className="text-sm font-medium mb-3">${price}</p>
                    <div className="flex">
                        <button onClick={() => handleDecrease(product)} className="cartItemBtn"><FaMinus /></button>
                        <input className="cartItemBtn" value={quantity} onChange={handleInput} />
                        <button onClick={() => handleIncrease(product)} className="cartItemBtn"><FaPlus /></button>
                        <button onClick={() => handleRemoveFromCart(product)} className="ml-2 text-gray-500"><RiDeleteBinLine /></button>
                    </div>
                </div>
            </article>
        </>
    )
};

export default CartItem;

function Button({ children, onHandleClick }) {
    return (
        <>
            <button onClick={() => handleDecrease(product)}>{children}</button>
        </>
    )
}
