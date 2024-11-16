import React from "react";
import { Link } from "react-router-dom";

export default function Checkout() {

    return (
        <section className="min-h-dvh text-center bg-[#f1f2f4] py-10">
            <p className="text-2xl font-medium">This store isn't set up to receive orders yet.</p>
            <div className="mt-10">
                <Link to={"/"} className="text-xl text-white bg-blue-700 px-5 py-3 rounded uppercase tracking-wider">Back Home</Link>
            </div>
        </section>
    )
};
