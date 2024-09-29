import React from "react";

export default function PriceFilter() {
    return (
        <article>
            <h1>Price</h1>
            <div>
                <div className="flex">
                    <input type="text" placeholder="$01" className="block max-w-[80px] border border-[#ddd] px-[10px] py-[5px]" />
                    <span>-</span>
                    <input type="text" placeholder="$01" className="block max-w-[80px] border border-[#ddd] px-[10px] py-[5px]" />
                </div>
                <input type="range" />
            </div>
        </article>
    )
};


