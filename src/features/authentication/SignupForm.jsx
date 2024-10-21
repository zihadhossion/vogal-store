import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useSignup from "./useSignup";
import { CiAt } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";
import FormRow from "../../ui/FormRow";

export default function SignupForm() {
    const { signup, isLoading } = useSignup();
    const { register, formState, getValues, handleSubmit, reset } = useForm();
    const { errors } = formState;

    const onHandleSubmit = (data) => {
        signup(data, { onSettled: () => reset() });
    };

    return (
        <section className="w-full flex items-center justify-center p-[30px_0]">
            <div>
                <h1 className="text-xl font-medium text-center mb-3">Sign Up</h1>
                <form className="w-[350px] border-[1px] border-solid border-[#ddd] p-10" onSubmit={handleSubmit(onHandleSubmit)}>
                    <FormRow customStyle={"block mb-4"}>
                        <FaUser className="h-10 text-[#6e5e28] absolute top-0 left-5 transition" />
                        <input type="text" id="fullName" placeholder="Enter Full Name" className="formInput pl-12"
                            {...register("fullName", { required: "This field is required" })} />
                    </FormRow>
                    <FormRow customStyle={"block mb-4"}>
                        <CiAt className="h-10 text-[#6e5e28] absolute top-0 left-5 transition" />
                        <input type="email" id="email" placeholder="Enter Your E-mail" className="formInput pl-12"
                            {...register("email", {
                                required: "This field is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Please provide a valid email address"
                                }
                            })} />
                    </FormRow>
                    <FormRow customStyle={"block mb-4"}>
                        <CiLock className="h-10 text-[#6e5e28] absolute top-0 left-5 transition" />
                        <input type="password" id="password" placeholder="Enter Your Password" className="formInput pl-12"
                            {...register("password", {
                                required: "This field is required", minLength: {
                                    value: 8,
                                    message: "Password needs a minimum of 8 characters"
                                }
                            })} />
                    </FormRow>
                    <button type="submit" className="w-full h-12  text-base bg-slate-200 hover:text-white hover:bg-stone-500 uppercase mt-3 rounded transition">
                        Sign Up
                    </button>
                    <div className="text-sm flex justify-center mt-5">
                        <p className="text-stone-500">Have an account</p>
                        <span className="mx-1"> ? </span>
                        <Link to={"/login"}>
                            <span className="hover:text-red-500 transition">Log In</span>
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    )
};


