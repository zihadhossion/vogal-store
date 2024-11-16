import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../ui/Loader";

export default function ProtectedRoute({ children }) {
    const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
    const isLoading = useSelector((state) => state?.auth?.isLoading);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            navigate("/account");
        } else if (!isLoading && !isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, isLoading, navigate]);

    // Show loader while checking authentication
    if (isLoading) return <Loader />;

    // Render the protected content if authenticated
    return isAuthenticated ? children : null;
}
