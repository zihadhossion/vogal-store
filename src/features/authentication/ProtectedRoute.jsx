import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../ui/Loader";

export default function ProtectedRoute({ children }) {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const isLoading = useSelector((state) => state.auth.isLoading);
    const navigate = useNavigate();
    const location = useLocation();

    const [isRedirecting, setIsRedirecting] = useState(false);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login", { state: { from: location } });
        } else if (location.state?.loading) {
            setIsRedirecting(true);
            //  wait for actual redirection to complete
            setTimeout(() => {
                setIsRedirecting(false);
            }, 1000); // Adjust the delay as needed
        }
    }, [isAuthenticated, isLoading, navigate, location]);

    if (isLoading || isRedirecting) {
        return <Loader />;
    }

    return isAuthenticated ? children : null;
}