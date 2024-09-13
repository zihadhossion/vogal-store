import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "./useUser";
import Loader from "../../ui/Loader";

export default function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const { isLoading, isAuthenticated } = useUser();

    useEffect(
        function () {
            if (!isAuthenticated && !isLoading) navigate("/login");
        }, [isLoading, isAuthenticated, navigate]
    )

    if (isLoading) return <Loader />

    if (isAuthenticated) return children;
};

