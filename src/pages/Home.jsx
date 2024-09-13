import React, { useContext } from "react";
import { CartOpenContext } from "../context/CartOpenContext";
import Categories from "../features/categories/Categories";
import NewProducts from "../features/products/NewProducts";
import Blogs from "../features/blogs/Blogs";
import Hero from "../components/hero/Hero";
import CartSideBar from "../features/cart/CartSideBar";
import Exclusive from "../components/Exclusive";
import Support from "../components/Support";


function Home() {
    const { cartOpen } = useContext(CartOpenContext);

    return (
        <>
            <Hero />
            <Categories />
            <NewProducts />
            <Exclusive />
            <Support />
            <Blogs />
        </>
    )
};

export default Home;

