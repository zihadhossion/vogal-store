import React from "react";

export default function FormRow({ children, customClass }) {
    return (
        <div className={`relative block ${customClass}`}>
            {children}
        </div>
    )
};

