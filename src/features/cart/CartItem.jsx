import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import QuantityBtnSet from "../../ui/QuantityBtnSet";

function CartItem({ product }) {
    const { id, image, title, price, } = product;
    const navigate = useNavigate();
    const { isCartOpen } = useContext(CartContext);

    function handleCollection() {
        isCartOpen(false);
        navigate(`/collections/${id}`);
    };

    return (
        <article className="flex items-center my-2 py-1 border-b border-[#f5f5f5]">
            <div onClick={handleCollection} className="w-32 cursor-pointer">
                <img src={image} alt="" className="w-full h-full" />
            </div>
            <div>
                <h3 onClick={handleCollection} className="font-medium mb-2 cursor-pointer transition">{title}</h3>
                <p className="text-base font-medium mb-3">${price}</p>
                <QuantityBtnSet product={product} />
            </div>
        </article>
    )
};

export default CartItem;
