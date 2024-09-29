import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../services/apiAuth";
import { CiAt } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import "./form.css";
import FormRow from "../../ui/FormRow";
import useUser from "./useUser";
import Loader from "../../ui/Loader";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { isLoading }] = useLoginMutation();
    const { refetch } = useUser()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login({ email, password }).unwrap();
            await refetch();

            navigate('/account');
        } catch (err) {
            console.error('Failed to log in:', err);
        }
    };

    if (isLoading) return <Loader />

    return (
        <>
            <section className="w-full flex items-center justify-center p-[30px_0]">
                <div className="">
                    <h1 className="text-xl font-medium text-center mb-3">Log In</h1>
                    <form onSubmit={handleSubmit} className="max-w-[400px] border-[1px] border-solid border-[#ddd] p-10">
                        <FormRow>
                            <CiAt className="logIcon" />
                            <input type="email" id="email" placeholder="Enter Your E-mail" className="formInput" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </FormRow>
                        <FormRow customClass={"mt-3"}>
                            <CiLock className="logIcon" />
                            <input type="password" id="password" placeholder="Enter Your Password" className="formInput" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </FormRow>
                        <button className="w-full h-12 bg-slate-300 text-base uppercase mt-3">
                            Login
                        </button>
                    </form>
                    <hr />
                    <div className="mt-3 flex justify-around">
                        <p>Don't have an account yet? </p>
                        <Link to={"/signup"}>
                            <span>Registration here</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
};

