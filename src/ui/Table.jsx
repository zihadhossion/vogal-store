import React from "react";

const tableHead = ["Product", "Price", "Quantity", "Total"];

export default function Table({ children }) {
    return (
        <table className="w-full overflow-hidden">
            <thead className="bg-yellow-200">
                <tr className="border">
                    {tableHead?.map((item, index) => <TableData key={index} name={item} />)}
                </tr>
            </thead>
            <tbody className="overflow-hidden">
                {children}
            </tbody>
        </table>
    )
};

function TableData({ name }) {
    return (<td className="font-medium bg-[#F5F5F5] uppercase p-3">{name}</td>)
}