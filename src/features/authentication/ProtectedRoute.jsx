import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../ui/Loader";
import useUser from "./useUser";

export default function ProtectedRoute({ children }) {
    const [isAuthResolved, setIsAuthResolved] = useState(false);
    const { isLoading, } = useUser();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
    // const isLoading = useSelector((state) => state.auth?.isLoading);

    useEffect(() => {
        if (!isLoading) {
            setIsAuthResolved(true);
        }
        if (!isLoading && !isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, isLoading, navigate]);

    if (!isAuthResolved || isLoading) return <Loader />;

    return isAuthenticated ? children : null;
}
