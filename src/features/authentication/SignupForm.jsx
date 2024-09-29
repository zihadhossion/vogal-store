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
                <form className="max-w-[400px] border-[1px] border-solid border-[#ddd] p-10" onSubmit={handleSubmit(onHandleSubmit)}>
                    <FormRow>
                        <FaUser className="logIcon" />
                        <input type="text" id="fullName" placeholder="Enter Full Name" className="formInput"
                            {...register("fullName", { required: "This field is required" })} />
                    </FormRow>
                    <FormRow customClass={"mt-3"}>
                        <CiAt className="logIcon" />
                        <input type="email" id="email" placeholder="Enter Your E-mail" className="formInput"
                            {...register("email", {
                                required: "This field is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Please provide a valid email address"
                                }
                            })} />
                    </FormRow>
                    <FormRow customClass={"mt-3"}>
                        <CiLock className="logIcon" />
                        <input type="password" id="password" placeholder="Enter Your Password" className="formInput"
                            {...register("password", {
                                required: "This field is required", minLength: {
                                    value: 8,
                                    message: "Password needs a minimum of 8 characters"
                                }
                            })} />
                    </FormRow>
                    <button type="submit" className="w-full h-12 bg-slate-300 text-base uppercase mt-3">
                        Sign Up
                    </button>
                </form>
                <div className="mt-3 flex justify-around">
                    <p>Have an account.</p>
                    <Link to={"/login"}>
                        <span>Log In here</span>
                    </Link>
                </div>
            </div>
        </section>
    )
};


