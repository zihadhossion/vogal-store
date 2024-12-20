import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link, useParams, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductsQuery } from '../../services/apiProducts';
import { CartContext } from '../../context/CartContext';
import { addToCart } from "../../slices/cartSlice";
import Modal, { ModalContext } from '../../ui/Modal';
import { FaMinus, FaPlus } from "react-icons/fa6";
import { CiCircleQuestion } from "react-icons/ci";
import useWindowSize from '../../hooks/useWindowSize';
import toast from 'react-hot-toast';
import DotLoader from '../../ui/DotLoader';
import useMouseOverZoom from '../../hooks/useMouseOverZoom';

export default function ProductDetail() {
    const { productId } = useParams();
    const { setIsCartOpen, } = useContext(CartContext);
    const [modalQuantity, setModalQuantity] = useState(1);
    const { isLoading, data: products } = useGetProductsQuery();
    const dispatch = useDispatch();
    const windowWidth = useWindowSize();

    const curProduct = products?.find(item => item?.id === Number(productId));

    // Refs for zoom functionality
    const imageRef = useRef(null);
    const cursorRef = useRef(null);
    const canvasRef = useRef(null);

    // Initialize the zoom functionality
    const { isActive } = useMouseOverZoom(imageRef, canvasRef, cursorRef);

    if (isLoading || !curProduct) return <DotLoader />;
    const { id, title, image, hoverImage, price, discountPrice, offerPercentage, desc } = curProduct;

    const handleAddToCart = (product) => {
        if (windowWidth > 991) {
            setIsCartOpen(true);
        }
        dispatch(addToCart({ ...product, quantity: modalQuantity }));
    };

    const handleDecrease = () => {
        if (modalQuantity > 1) {
            setModalQuantity(prev => prev - 1);
        }
    };

    const handleIncrease = () => {
        setModalQuantity(prev => prev + 1);
    };

    function handleInput(e) {
        let value = e.target.value;

        if (value === "") {
            value = 0;
        } else {
            value = parseInt(e.target.value, 10);
        }
        setModalQuantity(value);
    }

    return (
        <section className='pt-3 md:pt-12'>
            <div className='pageWidth'>
                <article className='grid grid-cols-1 md:grid-cols-[60%_1fr]'>
                    {offerPercentage && <span className='text-xs text-white bg-red-600 p-1.5 absolute lg:left-1/4 lg:-translate-x-1/4 z-10 rounded-full'>{offerPercentage}%</span>}
                    <div className='overflow-hidden flex justify-center'>
                        {windowWidth > 992 ? <>
                            <div className='w-96 relative'>
                                <img ref={imageRef} src={image} alt="product image" className='cursor-crosshair' />
                            </div>
                            {/* The cursor overlay that indicates the zoom area */}
                            <div ref={cursorRef} className='absolute pointer-events-none' />
                            {/* The canvas that shows the zoomed-in portion of the image */}
                            <canvas ref={canvasRef} className='w-64 h-64 absolute top-1/2 -translate-y-1/2 left-10 border border-[#ccc] pointer-events-none'
                                style={{ visibility: isActive ? "visible" : "hidden" }}
                            />
                        </> :
                            <div className='w-96 relative'>
                                <img src={image} alt="product image" className='cursor-crosshair' />
                            </div>
                        }
                    </div>
                    <div className='p-3'>
                        <h1 className='text-base lg:text-2xl font-medium mb-5'>{title}</h1>
                        <div className='font-medium flex items-center gap-5 mb-7'>
                            {discountPrice ?
                                <>
                                    <span className='text-lg lg:text-3xl font-semibold'>${discountPrice}.00</span>
                                    <del className='text-sm lg:text-base text-slate-500'>${price}.00</del>
                                    <span className='text-white text-xs bg-red-600 py-1 px-3 rounded'>Save ${price - discountPrice}.00</span>
                                </>
                                : <span className='text-xl lg:text-3xl font-semibold'>${price}.00</span>
                            }
                        </div>
                        <p className='mb-7'>{desc}</p>
                        <div className='flex justify-between items-center mb-10'>
                            <div className='flex items-center gap-4'>
                                <span className='font-medium'>Quantity</span>
                                <div className='flex items-center gap-1'>
                                    <button onClick={handleDecrease} className="cartItemBtn" disabled={isLoading}><FaMinus /></button>
                                    <input className="w-10 h-7 text-center border border-[#ddd]" type="number" value={modalQuantity || "1"} onChange={handleInput} />
                                    <button onClick={handleIncrease} className="cartItemBtn" disabled={isLoading}><FaPlus /></button>
                                </div>
                            </div>
                            <Modal>
                                <AskQuestion title={title} />
                            </Modal>
                        </div>
                        <div className='flex gap-10'>
                            <button className="w-full text-white text-xs lg:text-sm bg-slate-800 hover:bg-black py-3 mb-3 border rounded uppercase transition" onClick={() => handleAddToCart(curProduct)}>Add to Cart</button>
                            <Link to={"/checkout"} className="block w-full text-center text-white text-xs lg:text-sm bg-yellow-600 hover:bg-yellow-900 py-3 mb-3 border rounded uppercase transition">But it now</Link>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

function AskQuestion({ title }) {
    const user = useSelector((state) => state?.auth?.user);
    const user_metadata = user?.user_metadata;
    const { close } = useContext(ModalContext);

    const [userName, setUserName] = useState(user_metadata?.fullName);
    const [email, setEmail] = useState(user_metadata?.email);
    const [phone, setPhone] = useState(user_metadata?.phone);

    function handleForm(e) {
        e.preventDefault();

        if (userName && email && phone) {
            toast.success("Successfully sent");
            close();
        }
    }

    return (
        <>
            <Modal.Open opens={"ask"}>
                <button>
                    <span><CiCircleQuestion /></span> <span>Ask a question</span>
                </button>
            </Modal.Open>
            <Modal.Window name={"ask"}>
                <div className='p-3'>
                    <h1 className='text-[15px] font-semibold uppercase mb-5'>{title}</h1>
                    <form onSubmit={handleForm}>
                        <input type="text" placeholder='Name' value={userName} onChange={(e) => setUserName(e.target.value)} className='w-full block border py-2 px-5 mb-3 capitalize' />
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full block border py-2 px-5 mb-3' />
                        <input type="number" placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} className='w-full block border py-2 px-5 mb-3' />
                        <input type="text" placeholder='Subject' className='w-full block border py-2 px-5 mb-3 capitalize' />
                        <textarea name="" id="" rows={7} placeholder='Message' className='w-full border py-2 px-5 mb-3 resize-none'>
                        </textarea>
                        <button type='submit' className='w-full text-black hover:text-white bg-white hover:bg-black py-3 border uppercase'>Send message</button>
                    </form>
                </div>
            </Modal.Window>
        </>
    )
}