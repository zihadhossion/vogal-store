import React, { useState } from "react";
import AllProducts from "../features/products/AllProducts";
import PriceFilter from "../ui/PriceFilter";

export default function Collections() {
    const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });

    const handlePriceChange = (min, max) => {
        setPriceRange({ min, max });
    };

    return (
        <section className="products">
            <Header />
            <div className="px-5 py-10 sm:p-5 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
                    <div className="flex lg:flex-col items-start lg:items-stretch justify-around lg:justify-stretch mb-5 lg:mb-0">
                        <PriceFilter onPriceChange={handlePriceChange} />
                        <Stock />
                    </div>
                    <AllProducts priceRange={priceRange} />
                </div>
            </div>
        </section>
    )
};

function Header() {

    return (
        <article className="h-40 lg:h-60 bg-[url('/slider1-large.jpg')] bg-cover bg-center relative">
            <div className="pl-4 absolute translate-y-[-40%] top-[40%]">
                <h1 className="text-xl lg:text-4xl font-bold uppercase mb-4">Featured Electronics</h1>
                <p className="text-sm lg:text-lg">The Vogal features collection pages,
                    this is why it is best suited for large catalogs.</p>
            </div>
        </article>
    )
}

function Stock() {
    const [selectedRadio, setSelectedRadio] = useState(null);

    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.value);
    };

    return (
        <div className="bg-white mb-5">
            <h1 className="text-lg mb-4">Availability</h1>
            <div className="flex items-center gap-1 mb-1">
                <input type="radio" value={"radio1"} checked={selectedRadio === "radio1"} onChange={handleRadioChange} name="stock" id="instock" className="" />
                <label htmlFor="instock" className="lg:text-base">In Stock</label>
            </div>
            <div className="flex items-center gap-1">
                <input type="radio" value={"radio2"} checked={selectedRadio === "radio2"} onChange={handleRadioChange} name="stock" id="outstock" className="" />
                <label htmlFor="outstock" className="lg:text-base">Out Stock</label>
            </div>
        </div>
    )
}