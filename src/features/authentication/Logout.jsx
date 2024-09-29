import React from "react";
import useUser from "./useUser";

export default function Logout() {
    const { isLoading, data, isAuthenticated, isError, handleLogout } = useUser();

    return (
        <button disabled={isLoading} onClick={handleLogout}>
            Logout
        </button>
    )
};

