import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { RiRefund2Line } from "react-icons/ri";
import { RiSecurePaymentFill } from "react-icons/ri";
import "./support.css";

export default function Support() {
    return (
        <section className="relative bg-[#fafafa] py-10">
            <div className="pageWidth">
                <div className="flex flex-wrap lg:flex-nowrap gap-4">
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center"> */}
                    <Item icon={<CiDeliveryTruck />} title={"FREE DELIVERY"} desc={"For all orders over $120"} />
                    <Item icon={<BiSupport />} title={"HELP CENTER"} desc={"Dedicated 24/7 support"} />
                    <Item icon={<RiRefund2Line />} title={"SATISFIED OR REFUNDED"} desc={"Free returns within 14 days"} />
                    <Item icon={<RiSecurePaymentFill />} title={"100% SECURE PAYMENTS"} desc={"Accept all payment methods"} />
                </div>
            </div>
        </section>
    )
};


function Item({ icon, title, desc }) {

    return (
        <div className="flex-1 basis-1/3 md:basis-0">
            <article className="flex gap-2">
                <span className="icon w-10 h-10">{icon}</span>
                <div>
                    <h2 className="text-sm font-bold uppercase">{title}</h2>
                    <p className="text-sm">{desc}</p>
                </div>
            </article>
        </div>

    )
}