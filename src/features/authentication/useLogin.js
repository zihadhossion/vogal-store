import React from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../services/apiAuth";

export default function useLogin() {
    const navigate = useNavigate();
    const [login, { isLoading }] = useLoginMutation();

    const handleLogin = async ({ email, password }) => {
        try {
            // Trigger the login mutation
            const result = await login({ email, password }).unwrap();

            if (result) {
                // If successful, navigate to the account page
                navigate('/account', { replace: true });
            }

            if (error) {
                throw new Error(error);
            }

        } catch (err) {
            console.log('Provided email or password are incorrect!', err);
        }
    };

    return { login: handleLogin, isLoading };
};
