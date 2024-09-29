import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems, fetchTotalAmount } from "../features/cart/cartSlice";
import { CartContext } from "../context/CartContext";
// import { useCart } from "../features/cart/useCart";
import CartItem from "../features/cart/CartItem";
import Loader from "../ui/Loader";
import SectionContainer from "../ui/SectionContainer";
import Table from "../ui/Table";
import QuantityBtnSet from "../ui/QuantityBtnSet";
import useWindowSize from "../hooks/useWindowSize";
import { CiDeliveryTruck } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";


export default function Carts() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const isLoading = useSelector((state) => state.cart.isLoading);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const windowWidth = useWindowSize();


    useEffect(() => {
        dispatch(fetchCartItems());
        dispatch(fetchTotalAmount());
    }, [dispatch]);

    if (isLoading) return <Loader />;


    // return (
    //     <SectionContainer title={"your cart"}>
    //         {cartItems ? (<div className="w-full">
    //             {windowWidth > 767 ? (
    //                 <Table>
    //                     {
    //                         cartItems?.map((item, i) =>
    //                         (<tr className="p-3 border-b border-[#ddd]" key={i}>
    //                             <>
    //                                 <td className="flex items-center">
    //                                     <div>
    //                                         <img src={item?.image} alt="" className="w-20" />
    //                                     </div>
    //                                     {item?.title}
    //                                 </td>
    //                                 <td className="pl-5">{item?.price}</td>
    //                                 <td>
    //                                     <div>
    //                                         <QuantityBtnSet product={item} />
    //                                     </div>
    //                                 </td>
    //                                 <td>${item?.price * item?.quantity}</td>
    //                             </>
    //                         </tr>))
    //                     }
    //                 </Table>
    //             ) :
    //                 <>
    //                     {cartItems?.map((item, i) => <CartItem key={i} product={item} />)}
    //                 </>
    //             }
    //             <Shipping totalPrice={totalAmount} />
    //         </div>) : <NoItem />}
    //     </SectionContainer >
    // )
    return (
        <SectionContainer title={"your cart"}>
            {cartItems?.length > 0 ?
                (<div className="w-full">
                    {windowWidth > 767 ? (
                        <Table><RenderCartItems cartItems={cartItems} /></Table>
                    ) : (
                        <><RenderMobileCartItems cartItems={cartItems} /></>
                    )}
                    <Shipping totalPrice={totalAmount} />
                </div>
                ) : <NoItem />
            }
        </SectionContainer >
    )
};

function NoItem() {
    const navigate = useNavigate();
    const { cartOpen, isCartOpen } = useContext(CartContext);


    function handleShop() {
        isCartOpen(false);
        navigate("/collections");
    }

    return (
        <>
            <div className="h-full flex items-center justify-center flex-col">
                <p className="mb-5"><FiShoppingCart className="w-16 h-16 text-[#ddd] fill-white" /></p>
                <p className="mb-6">No Products in the Cart.</p>
                <button onClick={handleShop} className="uppercase text-white bg-black p-[10px_30px] mb-10">Continue shopping</button>
                <p>have an account?</p>
                <p><Link to={""}>Log in</Link> to check out faster.</p>
            </div>
        </>
    )
}


function Shipping({ totalPrice, price }) {

    return (
        <>
            <div className="bg-[#f5f5f5] p-3 mt-10">
                <p className="font-medium uppercase mb-2"><CiDeliveryTruck style={{ width: "25px", height: "25px" }} />Free Shipping eligible</p>
                <ShipBar />
                <p className="text-base font-semibold uppercase flex justify-between">
                    <span>Total</span><span>${totalPrice} USD</span>
                </p>
                <p>You're saving: <span className="ml-[100%]">{price}</span></p>
                <div className="lg:flex gap-2 mt-4">
                    <Link className="block w-full text-center text-white text-xs bg-black uppercase p-[15px_30px] mb-4 lg:mb-0">
                        Proceed to checkout
                    </Link>
                    <Link to={"/collections"} className="block w-full text-center text-white text-xs bg-black uppercase p-[15px_30px]">
                        Continue shopping
                    </Link>
                </div>
            </div>
        </>
    )
}

function ShipBar() {
    return (
        <>
            <div className="h-2 relative rounded-lg overflow-hidden mb-4">
                <span className="bar h-full block bg-[#fabb4c] absolute top-0 left-0 animate-[barProgress_5s_linear_infinite]"></span>
            </div>
        </>
    )
}

const RenderCartItems = ({ cartItems }) => {
    return cartItems.map((item, i) => (
        <tr className="p-3 border-b border-[#ddd]" key={i}>
            <td className="flex items-center">
                <div>
                    <img src={item?.image} alt={item?.title} className="w-20" />
                </div>
                {item?.title}
            </td>
            <td className="pl-5">${item?.price}</td>
            <td>
                <div>
                    <QuantityBtnSet product={item} />
                </div>
            </td>
            <td>${item?.price * item?.quantity}</td>
        </tr>
    ));
};

const RenderMobileCartItems = ({ cartItems }) => {
    return cartItems.map((item, i) => <CartItem key={i} product={item} />);
};