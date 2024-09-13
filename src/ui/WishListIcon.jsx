import React from "react";
import { Link } from "react-router-dom";
import IconBox from "./IconBox";
import { FaRegHeart } from "react-icons/fa";


export default function WishListIcon() {

    return (
        <>
            <Link to={"/wishlist"}>
                <IconBox text={"wishlist"} svgIcon={<FaRegHeart />} />
            </Link>
        </>
    )
};

