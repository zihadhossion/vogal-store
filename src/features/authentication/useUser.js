import { useNavigate } from "react-router-dom";
import { useGetCurrentUserQuery, useLogoutMutation } from "../../services/apiAuth";

export default function useUser() {
    const navigate = useNavigate();
    const { data, isLoading, isError, refetch } = useGetCurrentUserQuery();
    const [logout] = useLogoutMutation();

    const isAuthenticated = data?.role === "authenticated";

    const handleLogout = async () => {
        try {
            await logout();
            await refetch();
            navigate('/login', { replace: true });
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return { isLoading, data, isAuthenticated, isError, handleLogout, refetch };
};

