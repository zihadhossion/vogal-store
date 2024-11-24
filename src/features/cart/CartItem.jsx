import React, { useContext, } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import QuantityBtnSet from "../../ui/QuantityBtnSet";

function CartItem({ product }) {
    const { id, image, title, price, } = product;
    const navigate = useNavigate();
    const { setIsCartOpen } = useContext(CartContext);

    function handleCollection() {
        setIsCartOpen(false);
        navigate(`/collections/${id}`);
    };

    return (
        <article className="flex items-center justify-start gap-7 lg:gap-2 border-b border-[#f5f5f5] py-4">
            <div onClick={handleCollection} className="w-28 cursor-pointer">
                <img src={image} alt="product item" />
            </div>
            <div className="text-sm font-medium">
                <h3 onClick={handleCollection} className="mb-3 cursor-pointer transition">{title}</h3>
                <p className="text-base mb-5">${price}</p>
                <QuantityBtnSet product={product} />
            </div>
        </article>
    )
};

export default CartItem;