import React from "react";


export default function Table({ children }) {
    return (
        <table className="w-full">
            <thead className="bg-yellow-200">
                <tr>
                    <td className="thCell">Product</td>
                    <td className="thCell">Price</td>
                    <td className="thCell">Quantity</td>
                    <td className="thCell">Total</td>
                </tr>
            </thead>
            <tbody>
                {/* <TableRow /> */}
                {children}
            </tbody>
        </table>
    )
};

