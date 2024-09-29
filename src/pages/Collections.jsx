import React, { useState } from "react";
import AllProducts from "../features/products/AllProducts";
import PriceFilter from "../ui/PriceFilter";


export default function Collections() {

    return (
        <section className="products">
            <Header />
            <div className="flex">
                <div>
                    <FilterWrap />
                    <PriceFilter />
                </div>
                <AllProducts />
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

function FilterWrap() {
    return (
        <section className="bg-white">
            <article>
                <h1>Price</h1>
                <div>
                    <div className="flex">
                        <input type="text" placeholder="$01" className="block max-w-[10px] border border-[#ddd] px-[10px] py-[5px]" />
                        <span>-</span>
                        <input type="text" placeholder="$01" className="block max-w-[10px] border border-[#ddd] px-[10px] py-[5px]" />
                    </div>
                    <input type="range" />
                </div>
            </article>
            <article>
                <h1>Availability</h1>
                <div>
                    <CheckBox />
                </div>
            </article>
        </section>
    )
}

function CheckBox() {
    const [selectedRadio, setSelectedRadio] = useState(null);

    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.value); // Set the clicked radio button's value as selected
    };

    return (
        <>
            <div>
                <input type="radio" value={"radio1"} checked={selectedRadio === "radio1"} onChange={handleRadioChange} name="stock" id="instock" className="" />
                <label htmlFor="instock">In Stock</label>
            </div>
            <div>
                <input type="radio" value={"radio2"} checked={selectedRadio === "radio2"} onChange={handleRadioChange} name="stock" id="outstock" className="" />
                <label htmlFor="outstock">Out Stock</label>
            </div>
        </>
    )
}
