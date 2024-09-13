import React, { useContext } from "react";
import { useDispatch, } from "react-redux";
import { Link } from "react-router-dom";
import { CartOpenContext } from "../../context/CartOpenContext";
import { addToCart, } from "../cart/cartSlice";
import "./product.css";
import { CiHeart, CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import 'animate.css';


export default function Product({ product }) {
    const { id, title, image, hoverImage, price, discountPrice, offerPercentage } = product;

    {
        if (image) return (
            <>
                <article className="bg-white">
                    <div className="relative block group/product">
                        <div className="relative">
                            <Link to={`/products/${id}`}>
                                <div className="figure">
                                    <img className="sirv image-main" src={image} alt="" />
                                    <img className="sirv image-hover" src={hoverImage} alt="" />
                                </div>
                            </Link>
                            <ButtonSet product={product} />
                            {offerPercentage && <span className="text-white bg-[#d75e78] p-1 rounded-full absolute top-5 left-5">-{offerPercentage}%</span>}
                        </div>
                        <div className="mt-5 pb-5">
                            <Link to={`/products/${id}`}>
                                <h1>{title}</h1>
                            </Link>
                            <p><span>${price}</span> {discountPrice && <span>${discountPrice}</span>} </p>
                        </div>
                    </div>
                </article>
            </>
        )
    }

    // return (
    //     <>
    //         <article className="bg-white">
    //             <div className="relative block group/product">
    //                 <div className="relative">
    //                     <Link to={`/products/${id}`}>
    //                         <div className="figure">
    //                             <img className="sirv image-main" src={image} alt="" />
    //                             <img className="sirv image-hover" src={hoverImage} alt="" />
    //                         </div>
    //                     </Link>
    //                     <ButtonSet product={product} />
    //                     {offerPercentage && <span className="text-white bg-[#d75e78] p-1 rounded-full absolute top-5 left-5">-{offerPercentage}%</span>}
    //                 </div>
    //                 <div className="mt-5 pb-5">
    //                     <Link to={`/products/${id}`}>
    //                         <h1>{title}</h1>
    //                     </Link>
    //                     <p><span>${price}</span> {discountPrice && <span>${discountPrice}</span>} </p>
    //                 </div>
    //             </div>
    //         </article>
    //     </>
    // )
};


function ButtonSet({ product }) {
    const dispatch = useDispatch();
    const { cartOpen, isCartOpen } = useContext(CartOpenContext);

    const handleAddToCart = (product) => {
        dispatch(addToCart({ ...product }));
        isCartOpen(true);
    };

    const handleAddToWishlist = (product) => {
        dispatch(addToCart({ ...product }));
    };

    return (
        <>
            <div className="w-full flex gap-4 justify-center transition duration-300 ease-out invisible opacity-0 group-hover/product:visible group-hover/product:opacity-100 group-hover/product:animate-up-down">
                <Btn text={"Add to wishlist"}>
                    <CiHeart />
                </Btn>
                <Btn text={"Add to cart"} onClick={() => handleAddToCart(product)}>
                    <BsCart2 />
                </Btn>
                <Btn text={"Quick View"}>
                    <CiSearch />
                </Btn>
            </div>
        </>
    )
}

function Btn({ children, text, onClick }) {

    return (
        <>
            <button className="text-white bg-black w-10 h-10 rounded-md relative flex items-center justify-center leading-9 group/toolTip transition duration-300 ease-in-out hover:bg-orange-600" onClick={onClick}>
                {children}
                <span className="w-[100px] text-xs capitalize bg-slate-800 p-1 rounded-md absolute z-10 bottom-[120%] left-[50%] translate-x-[-50%] opacity-0 invisible transition duration-300 ease-in-out after:content after:absolute after:top-[100%] after:left-[50%] after:ml-[-5px] after:border-4 after:border-solid after:border-[#555_transparent_transparent_transparent] group-hover/toolTip:visible group-hover/toolTip:opacity-100">{text}</span>
            </button>
        </>
    )
}
