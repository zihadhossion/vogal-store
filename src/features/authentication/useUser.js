import { useGetCurrentUserQuery, } from "../../services/apiAuth";
import useLogout from "./useLogout";

export default function useUser() {
    const { data, isLoading, isError, refetch } = useGetCurrentUserQuery();
    const { logout } = useLogout();

    const isAuthenticated = data?.role === "authenticated";

    const handleLogout = async () => {
        try {
            await logout();
            await refetch();
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return { isLoading, data, isAuthenticated, isError, handleLogout, refetch };
};

