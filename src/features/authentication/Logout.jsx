import React from "react";
import useLogout from "./useLogout";
import useUser from "./useUser";

export default function Logout() {
    // const { logout, isLoading } = useLogout();
    const { isLoading, data, isAuthenticated, isError, handleLogout } = useUser();


    return (
        <button disabled={isLoading} onClick={handleLogout}>
            Logout
        </button>
    )
};

