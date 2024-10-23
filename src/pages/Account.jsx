import React, { useState } from "react";
import { useUpdateUserMutation } from "../services/apiAuth";
import SectionContainer from "../ui/SectionContainer";
import useUser from "../features/authentication/useUser";
import Logout from "../features/authentication/Logout";
import Loader from "../ui/Loader";
import FormRow from "../ui/FormRow";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";

export default function Account() {
    const { isLoading, isAuthenticated, data } = useUser();
    const [activeSection, setActiveSection] = useState('profile');
    if (isLoading || !isAuthenticated) return <Loader />;

    return (
        <SectionContainer title={"my Account"}>
            <article className="w-full grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
                <div>
                    <Info user={data} activeSection={activeSection} onActiveSection={setActiveSection} />
                </div>
                <div className="min-h-96">
                    {activeSection === 'profile' && <Profile user={data} />}
                    {activeSection === 'orders' && <MyOrder />}
                    {activeSection === 'address' && <MyAddress />}
                </div>
            </article>
        </SectionContainer >
    )
};

function Info({ user, onActiveSection, activeSection }) {
    const { user_metadata: { fullName, email }, new_phone: currentPhone } = user;

    return (
        <article className="text-left rounded">
            <h2 className={`text-base p-3 mb-1 ${activeSection === 'profile' ? 'bg-blue-100' : ''}`} onClick={() => onActiveSection('profile')}>
                Welcome, <span className="font-medium tracking-wide uppercase ml-1">{fullName}</span>
            </h2>
            <p className={`text-base font-medium p-3 mb-1 cursor-pointer ${activeSection === 'orders' ? 'bg-blue-100' : ''}`} onClick={() => onActiveSection('orders')}>
                My Orders
            </p>
            <p className={`text-base font-medium p-3 cursor-pointer ${activeSection === 'address' ? 'bg-blue-100' : ''}`} onClick={() => onActiveSection('address')}>
                My Address
            </p>
            <Logout />
        </article>
    );
}

function Profile({ user }) {
    const { user_metadata: { fullName: currentName, email }, new_phone: currentPhone } = user;

    const [fullName, setFullName] = useState(currentName || "");
    // const [phone, setPhone] = useState(currentPhone || "");
    // const [phone, setPhone] = useState(currentPhone?.replace('+88', '') || "");
    const [phone, setPhone] = useState(currentPhone || "");
    const [updateUser, { isLoading, data }] = useUpdateUserMutation();


    async function handleUserForm(e) {
        e.preventDefault();

        let formattedPhone = phone.startsWith('+88') ? phone : `+88${phone}`;
        await updateUser({ fullName, phone: formattedPhone }).unwrap();

        console.log("fullName:", fullName, "phone:", formattedPhone);
    }

    return (
        <article className="font-medium">
            <h1 className="text-base mb-3">Account Details</h1>
            <form action="" onSubmit={handleUserForm} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
                <FormRow label={"Name"} customStyle={"grid grid-cols-[150px_1fr] items-center"}>
                    <input type="text" id="name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="formInput focus:border-blue-700 p-2" required />
                </FormRow>
                <FormRow label={"Mobile Number"} customStyle={"grid grid-cols-[150px_1fr] items-center"}>
                    <input type="text" id="number" value={phone} onChange={(e) => setPhone(e.target.value)} className="focus:border-blue-700 p-2 formInput" required />
                </FormRow>
                <FormRow label={"Email Address"} customStyle={"grid grid-cols-[150px_1fr] items-center"}>
                    <input type="email" id="email" disabled value={email} className="text-gray-500 bg-gray-200 p-2 formInput" />
                </FormRow>
                <div className="flex justify-end">
                    <button className="w-40 text-white bg-blue-600 hover:bg-blue-900 rounded transition p-3">{isLoading ? 'Updating...' : 'Update Profile'}</button>
                </div>
            </form>
            <UpdatePasswordForm />
        </article>
    )
}

function MyOrder() {
    return (
        <article>
            <h2 className="text-base font-medium mb-3">Order history</h2>
            <div>
                <p>You haven't placed any orders yet</p>
                <button>Make your first order</button>
            </div>
        </article>
    )
}

function MyAddress() {
    return (
        <article>
            <h2 className="text-base font-medium mb-3">Your Address</h2>
            <form action="">
                <FormRow label={"District"} customStyle={"grid grid-cols-[150px_1fr] items-centerm mb-3"}>
                    <input type="text" id="district" className="formInput focus:border-blue-700 p-2" />
                </FormRow>
                <FormRow label={"Upazila"} customStyle={"grid grid-cols-[150px_1fr] items-center mb-3"}>
                    <input type="text" id="upazila" className="formInput focus:border-blue-700 p-2" />
                </FormRow>
                <FormRow label={"Union"} customStyle={"grid grid-cols-[150px_1fr] items-center"}>
                    <input type="text" id="upazila" className="formInput focus:border-blue-700 p-2" />
                </FormRow>
            </form>
            <div>
                <button className="w-40 text-white bg-blue-600 hover:bg-blue-900 rounded transition p-3">Add new address</button>
            </div>
        </article>
    )
}