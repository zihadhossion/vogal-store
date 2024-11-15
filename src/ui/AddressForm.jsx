import React, { useState, } from "react";
import { useDispatch, useSelector } from "react-redux";
import supabase from "../services/supabase";
import toast from "react-hot-toast";
import { useGetAddressQuery } from "../services/apiOrder";
import FormRow from "./FormRow";

export default function AddressForm() {
    const user = useSelector((state) => state?.auth?.user);
    const { refetch } = useGetAddressQuery();

    const [formData, setFormData] = useState({
        district: '',
        upazila: '',
        union: '',
        village: ''
    });

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }

    async function handleFormSubmit(e) {
        e.preventDefault();

        const { data, error } = await supabase.from('address')
            .insert({
                user_id: user?.id,
                district: formData?.district,
                upazila: formData?.upazila,
                union: formData?.union,
                village: formData?.village,
            });

        if (error) {
            console.log(error);
            toast.error("Failed to add address. Please try again.");
            return;
        }
        toast.success("Address added successfully!");

        setFormData({
            district: '',
            upazila: '',
            union: '',
            village: ''
        });
        refetch();
    }

    return (
        <article>
            <form onSubmit={handleFormSubmit}>
                <FormRow label={"District"} customStyle={"mb-3"}>
                    <input type="text" id="district" value={formData?.district} onChange={handleOnChange} className="formInput focus:border-blue-700 p-2" />
                </FormRow>
                <FormRow label={"Upazila"} customStyle={" mb-3"}>
                    <input type="text" id="upazila" className="formInput focus:border-blue-700 p-2" value={formData?.upazila} onChange={handleOnChange} />
                </FormRow>
                <FormRow label={"Union"} customStyle={""}>
                    <input type="text" id="union" className="formInput focus:border-blue-700 p-2" value={formData?.union} onChange={handleOnChange} />
                </FormRow>
                <FormRow label={"Village"} customStyle={""}>
                    <input type="text" id="village" className="formInput focus:border-blue-700 p-2" value={formData?.village} onChange={handleOnChange} />
                </FormRow>
                <div className="w-full text-center mt-5 ">
                    <button type="submit" className="w-40 text-white bg-blue-600 hover:bg-blue-900 rounded transition p-3 mt-5">Add new address</button>
                </div>
            </form>
        </article>
    );
};

