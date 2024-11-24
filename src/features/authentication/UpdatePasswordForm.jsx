import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useUpdateUserMutation } from "../../services/apiAuth";
import FormRow from "../../ui/FormRow";
import { BiShow, BiHide } from "react-icons/bi";

export default function UpdatePasswordForm() {
    const [updateUser, { isLoading, }] = useUpdateUserMutation();
    const { register, handleSubmit, formState: { errors }, getValues, reset, watch } = useForm();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] = useState(false);
    const passwordValue = watch("password", ""); // Adding a default empty string
    const passwordConfirmValue = watch("passwordConfirm", ""); // Adding a default empty string

    async function handleForm({ password }) {
        try {
            const { data, error } = await updateUser({ password });
            if (error) {
                console.log(error);
            }
            toast.success("Password updated successfully!");
            reset(); // Reset form fields after successful update        
        } catch (error) {
            console.log("Failed to update password: " + error.message);
        }
    }

    return (
        <div>
            <h1 className="text-base font-medium mb-5">Update Password</h1>
            <form action="" onSubmit={handleSubmit(handleForm)} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <FormRow label={"Password"} customStyle={"mb-5"} error={errors?.password?.message} errStyle={"col-start-2"}>
                    <div className="relative">
                        <input type={isPasswordVisible ? "text" : "password"} id="password" autoComplete="current-password" className="formInput focus:border-blue-700 p-2"
                            {...register("password", {
                                required: "This field is required",
                                minLength: {
                                    value: 8,
                                    message: "Password needs a minimum of 8 characters",
                                },
                            })}
                        />
                        <span className="text-[#6e5e28] absolute top-1/2 -translate-y-1/2 right-3 transition" onClick={() => setIsPasswordVisible(prev => !prev)}
                            style={{ display: passwordValue.length > 0 ? "block" : "none" }}>
                            {isPasswordVisible ? <BiHide className="h-10" /> : <BiShow className="h-10" />}
                        </span>
                    </div>
                </FormRow>
                <FormRow label={"Confirm Password"} customStyle={"mb-5"} error={errors?.passwordConfirm?.message} errStyle={"col-start-2"}>
                    <div className="relative">
                        <input type={isPasswordConfirmVisible ? "text" : "password"} id="passwordConfirm" autoComplete="new-password"
                            className="formInput focus:border-blue-700 p-2"
                            {...register("passwordConfirm", {
                                required: "This field is required",
                                validate: (value) =>
                                    getValues().password === value || "Passwords need to match",
                            })}
                        />
                        <span className="h-10 text-[#6e5e28] absolute top-1/2 -translate-y-1/2 right-3 transition" onClick={() => setIsPasswordConfirmVisible(prev => !prev)}
                            style={{ display: passwordConfirmValue.length > 0 ? "block" : "none" }}>
                            {isPasswordConfirmVisible ? <BiHide className="h-10" /> : <BiShow className="h-10" />}
                        </span>
                    </div>
                </FormRow>
                <div className="sm:col-span-2 text-right">
                    <button className="text-white bg-red-500 hover:bg-red-800 rounded transition p-3" disabled={isLoading}>Update Password</button>
                </div>
            </form>
        </div>
    )
};