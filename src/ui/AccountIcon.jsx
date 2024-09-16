import React from "react";
import { Link } from "react-router-dom";
import IconBox from "./IconBox";
import { FaRegUserCircle } from "react-icons/fa";

export default function AccountIcon() {
    return (
        <>
            <Link to={"/account"}>
                <IconBox text={"Account"} svgIcon={<FaRegUserCircle />} />
            </Link>
        </>
    )
};

