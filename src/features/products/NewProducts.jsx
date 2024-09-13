import React from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../services/apiProducts";
import Loader from "../../ui/Loader";
import SectionContainer from "../../ui/SectionContainer";
// import AllProducts from "./AllProducts";
import Product from "./Product";


export default function NewProducts() {
    const { isLoading, data: products } = useGetProductsQuery();

    if (isLoading) return <Loader />;

    return (
        <>
            <SectionContainer secStyle="bg-[#FAFAFA]" title={"New products"}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {products?.map((item) => <Product key={item.id} product={item} />)}
                </div>
                {/* <AllProducts /> */}
                <Link to={"/products"}>
                    <span className=" inline-block border-[1px] border-solid border-black p-[10px_30px] uppercase mt-5">
                        View all
                    </span>
                </Link>
            </SectionContainer>
        </>
    )
};




{/* <section className="relative bg-[#FAFAFA] hidden lg:block"></section> */ }