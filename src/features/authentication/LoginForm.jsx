import React, { useCallback, useState, } from "react";
import { Link, } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CiAt, CiLock } from "react-icons/ci";
import FormRow from "../../ui/FormRow";
import Loader from "../../ui/Loader";
import useLogin from "./useLogin";
import { BiShow, BiHide } from "react-icons/bi";

export default function LoginForm() {
    const { login, isLoading } = useLogin();
    const { register, formState: { errors, isSubmitting }, handleSubmit, reset, watch } = useForm();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const passwordValue = watch("password", ""); // Adding a default empty string

    const handleLogin = useCallback((data) => {
        login(data, { onSettled: () => reset() });
    }, [login, reset])

    if (isLoading) return <Loader />;

    return (
        <section className="w-full flex items-center justify-center py-20">
            <div className="relative">
                <h1 className="text-xl font-medium text-center mb-3">Log In</h1>
                <form onSubmit={handleSubmit(handleLogin)} className="w-full max-w-96 border border-[#ddd] p-10">
                    <FormRow customStyle={"block mb-4"} error={errors?.email?.message}>
                        <CiAt className=" text-[#6e5e28] absolute top-[50%] translate-y-[-50%] left-5 transition" />
                        <input type="email" id="email" placeholder="Enter Your E-mail" className="formInput pl-10"
                            {...register("email", {
                                required: "This field is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Please provide a valid email address"
                                }
                            })}
                        />
                    </FormRow>
                    <FormRow customStyle={"block mb-4"} error={errors?.password?.message}>
                        <CiLock className="h-10 text-[#6e5e28] absolute top-0 left-5 transition" />
                        <input type={isPasswordVisible ? "text" : "password"} id="password" placeholder="Enter Your Password" className="formInput pl-10"
                            {...register("password", {
                                required: "This field is required",
                                minLength: {
                                    value: 8,
                                    message: "Password needs a minimum of 8 characters"
                                }
                            })}
                        />
                        <span className="h-10 text-[#6e5e28] absolute top-0 right-3 transition" onClick={() => setIsPasswordVisible(prev => !prev)}
                            style={{ display: passwordValue.length > 0 ? "block" : "none" }}>
                            {isPasswordVisible ? <BiHide className="h-10" /> : <BiShow className="h-10" />}
                        </span>
                    </FormRow>
                    <div className="flex items-center justify-between mt-5 gap-7 sm:gap-[auto]">
                        <button type="button" className="text-sm hover:bg-slate-50 p-3 rounded-full">Forgot password?</button>
                        <button type="submit" className="bg-slate-300 hover:text-white hover:bg-black text-base px-7 py-2 uppercase transition">Login</button>
                    </div>
                    <div className="text-sm text-center mt-7">
                        <p>Don't have an account yet ?</p>
                        <Link to={"/signup"} className="block mt-2">
                            <span className="hover:text-red-500 transition">Registration</span>
                        </Link>
                    </div>
                </form>
            </div>
        </section >
    )
};
