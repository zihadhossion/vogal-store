import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../services/apiAuth";
import { CiAt } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import FormRow from "../../ui/FormRow";
import useUser from "./useUser";
import Loader from "../../ui/Loader";
import { fetchCartItems, mergeCartOnLogin } from "../cart/cartSlice";
import { setUser } from "../../slices/authSlice";


export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { isLoading, }] = useLoginMutation();
    const { refetch } = useUser()
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data, error } = await login({ email, password });
            await refetch();

            if (data) {
                navigate('/account');
                dispatch(setUser(data?.user));
                dispatch(fetchCartItems());
            }
        } catch (err) {
            console.error('Failed to log in:', err);
        }
    };

    if (isLoading) return <Loader />;

    return (
        <>
            <section className="w-full flex items-center justify-center py-20">
                <div className="relative">
                    <h1 className="text-xl font-medium text-center mb-3">Log In</h1>
                    <form onSubmit={handleSubmit} className="max-w-[400px] border border-[#ddd] p-10">
                        <FormRow customStyle={"block mb-4"}>
                            <CiAt className="h-10 text-[#6e5e28] absolute top-0 left-5 transition" />
                            <input type="email" id="email" placeholder="Enter Your E-mail" className="formInput pl-10" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </FormRow>
                        <FormRow customStyle={"block mb-4"}>
                            <CiLock className="h-10 text-[#6e5e28] absolute top-0 left-5 transition" />
                            <input type="password" id="password" placeholder="Enter Your Password" className="formInput pl-10" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </FormRow>
                        <button className="w-full h-12 bg-slate-300 text-base uppercase mt-3">
                            Login
                        </button>
                        <div className="text-sm flex justify-center mt-5">
                            <p>Don't have an account yet</p>
                            <span className="mx-1">?</span>
                            <Link to={"/signup"}>
                                <span className="hover:text-red-500 transition">Registration</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
};

