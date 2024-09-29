import React, { useState } from "react";
import SectionContainer from "../ui/SectionContainer";
import useUser from "../features/authentication/useUser";
import Logout from "../features/authentication/Logout";
import Loader from "../ui/Loader";

export default function Account() {
    const { isLoading, isAuthenticated } = useUser();

    if (isLoading) return <Loader />;

    return (
        <SectionContainer title={"my Account"}>
            <Info />
            <MyOrder />
        </SectionContainer >
    )
};


function Info() {
    const { data } = useUser();
    const { user_metadata } = data;

    return (
        <>
            <article className="my-5">
                <h1 className="text-lg font-medium mb-3">Account Details</h1>
                <div className="text-left bg-[#F3F3F3]">
                    <h2 className="text-base mb-2">Welcome Name, <span className="font-medium tracking-wide uppercase">{user_metadata?.fullName}</span></h2>
                    <p className="mb-2">My Orders</p>
                    <p className="mb-2">My Addresses</p>
                    <Logout />
                </div>
            </article>
        </>
    )
}

function MyOrder() {
    return (
        <>
            <article>
                <h2 className="text-lg font-medium mb-3">Order history</h2>
                <div>
                    <p>You haven't placed any orders yet</p>
                    <button>Make your first order</button>
                </div>
            </article>
        </>
    )
}

function MyAddress() {
    return (
        <>

        </>
    )
}