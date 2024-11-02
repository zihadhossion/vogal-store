import React from "react";
import useUser from "./useUser";

export default function Logout() {
    const { isLoading, handleLogout } = useUser();


    const handleLogoutt = async () => {

        let { error } = await supabase.auth.signOut()

    }

    return (
        <button disabled={isLoading} onClick={handleLogout} className="w-full text-base font-medium p-3 bg-pink-300 hover:text-white hover:bg-blue-800 tracking-wider transition mt-5">
            Logout
        </button>
    )
};

