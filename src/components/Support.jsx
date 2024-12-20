import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { RiRefund2Line, RiSecurePaymentFill } from "react-icons/ri";

export default function Support() {
    return (
        <section className="relative bg-[#fafafa] py-10">
            <div className="pageWidth">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4">
                    <Item icon={<CiDeliveryTruck style={{ width: "40px", height: "40px" }} />} title={"FREE DELIVERY"} desc={"For all orders over $120"} />
                    <Item icon={<BiSupport style={{ width: "40px", height: "40px" }} />} title={"HELP CENTER"} desc={"Dedicated 24/7 support"} />
                    <Item icon={<RiRefund2Line style={{ width: "40px", height: "40px" }} />} title={"SATISFIED OR REFUNDED"} desc={"Free returns within 14 days"} />
                    <Item icon={<RiSecurePaymentFill style={{ width: "40px", height: "40px" }} />} title={"100% SECURE PAYMENTS"} desc={"Accept all payment methods"} />
                </div>
            </div>
        </section>
    )
};


function Item({ icon, title, desc }) {
    return (
        <article className="w-full max-w-80 text-left p-3 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center gap-4">
                <span className="flex-shrink-0 text-primary w-12 h-12">{icon}</span>
                <div className="text-sm">
                    <h2 className="text-sm font-medium uppercase mb-1">{title}</h2>
                    <p className="text-sm text-gray-600">{desc}</p>
                </div>
            </div>
        </article>
    );
}