import React from "react";
import AllProducts from "../features/products/AllProducts";

export default function Products() {
    return (
        <section className="">
            <Header />
            <div>
                <FilterWrap />
                <AllProducts />
            </div>
        </section>
    )
};

function Header() {

    return (
        <div className="h-60 bg-[url('/slider1.jpg')] bg-cover bg-center">
            <h1>Featured Electronics</h1>
            <p>The Vogal features collection pages,
                this is why it is best suited for large catalogs.</p>
        </div>
    )
}

function FilterWrap() {
    return (
        <section className="bg-black">
            <article>
                <h1>Price</h1>
                <div>
                    <input type="text" />
                    <input type="text" />
                    <input type="range" />
                </div>
            </article>
            <article>
                <h1>Availability</h1>
                <div>
                    <div>
                        <input type="checkbox" name="instock" id="instock" />
                        <label htmlFor="instock">In Stock</label>
                    </div>
                    <div>
                        <input type="checkbox" name="outstock" id="outstock" />
                        <label htmlFor="outstock">Out Stock</label>
                    </div>
                </div>
            </article>
        </section>
    )
}

