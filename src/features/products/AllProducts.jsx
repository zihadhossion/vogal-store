import React from "react";
import { useGetProductsQuery } from "../../services/apiProducts";
import Loader from "../../ui/Loader";
import Product from "./Product";

export default function AllProducts() {
    const { isLoading, data: products } = useGetProductsQuery();

    if (isLoading) return <Loader />;

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products?.map((item) => <Product key={item.id} product={item} />)}
        </div>
    )
};

