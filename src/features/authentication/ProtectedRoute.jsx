import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "./useUser";
import Loader from "../../ui/Loader";


export default function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const { isLoading, isAuthenticated } = useUser();
    const [isAuthResolved, setIsAuthResolved] = useState(false);

    useEffect(function () {
        if (!isLoading) {
            setIsAuthResolved(true);
        }

        if (!isAuthenticated && !isLoading) {
            navigate("/login")
        };
    }, [isLoading, isAuthenticated, navigate]
    )

    if (!isAuthResolved || isLoading) {
        return <Loader />;
    }

    if (isAuthenticated) return children;

    return null;
};

