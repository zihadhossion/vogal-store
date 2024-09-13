import React from "react";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import { CiAt } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";
import FormRow from "../../ui/FormRow";
// import Input from "../../ui/Input";


export default function SignupForm() {
    const { signup, isLoading } = useSignup();
    const { register, formState, getValues, handleSubmit, reset } = useForm();
    const { errors } = formState;

    function onHandleSubmit({ fullName, email, password }) {
        signup(
            { fullName, email, password },
            { onSettled: () => reset(), }
        )
    }

    return (
        <>
            <form className="max-w-[400px] border-[1px] border-solid border-[#ddd] p-10" onSubmit={handleSubmit(onHandleSubmit)}>
                <FormRow>
                    <FaUser className="logIcon" />
                    <Input type={"text"} txt={"fullName"} placeTxt={"Enter Full Name"}
                        {...register("fullName", { required: "This field is required" })}
                    />
                </FormRow>
                <FormRow customClass={"mt-3"}>
                    <CiAt className="logIcon" />
                    <Input type={"email"} txt={"email"} placeTxt={"Enter Your E-mail"}
                        {...register("email", {
                            required: "This field is required",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Please provide a valid email address"
                            }
                        })}
                    />
                </FormRow>
                <FormRow customClass={"mt-3"}>
                    <CiLock className="logIcon" />
                    <Input type={"password"} txt={"password"} placeTxt={"Enter Password"}
                        {...register("password", {
                            required: "This field is required", minLength: {
                                value: 8,
                                message: "Password needs a minimum of 8 characters"
                            }
                        })}
                    />
                </FormRow>
                <button type="submit" className="w-full h-12 bg-slate-300 text-base uppercase mt-3">
                    Sign Up
                </button>
            </form>
        </>
    )
};

function Input({ type, txt, placeTxt }) {
    return (
        <input type={type} id={txt} placeholder={placeTxt} className="w-full h-12 text-base lg:text-lg font-medium text-black rounded pl-14 border-[1px] border-solid border-[#c4c3ca] transition-all placeholder:text-sm focus:placeholder:opacity-0" />
    )
}

