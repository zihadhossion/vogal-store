import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "./useUser";

export default function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const { isLoading, isAuthenticated } = useUser();

    useEffect(
        function () {
            if (!isAuthenticated && !isLoading) navigate("/login");
        }, [isLoading, isAuthenticated, navigate]
    )

    if (isAuthenticated) return children;
};

