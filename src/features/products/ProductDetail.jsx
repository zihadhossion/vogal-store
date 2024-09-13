import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../services/apiProducts';
import Loader from '../../ui/Loader';


export default function ProductDetail() {
    const { productId } = useParams();
    const { isLoading, data: products } = useGetProductsQuery();

    if (isLoading) return <Loader />;

    const curProduct = products.find(item => item.id === Number(productId));

    const { id, title, image, hoverImage, price, discountPrice, offerPercentage } = curProduct;

    return (
        <article>
            <div>
                <img src={image} alt="" />
            </div>
            <h1>{title}</h1>
            <p>{discountPrice && <span>{discountPrice}.00</span>} ${price}.00 <span className='text-white bg-red-500'>Save ${discountPrice}.00</span></p>
        </article>
    )
}

function Other() {
    return (
        <>

        </>
    )
}