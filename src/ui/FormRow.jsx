import React from "react";

export default function FormRow({ label, error, children, customStyle }) {

    return (
        <div className={customStyle ? `relative ${customStyle}` : "relative"}>
            {label && <label htmlFor={children?.props.id}>{label}</label>}
            {children}
            <span></span>
            {error && <span className="text-xs text-red-700 font-medium ml-1 mt-1">{error}</span>}
        </div>
    )
};

