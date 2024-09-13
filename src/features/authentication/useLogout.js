import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../services/apiAuth";

export default function useLogout() {
    const navigate = useNavigate();
    // const [logout, { isLoading }] = useLogoutMutation();
    const { logout, isLoading } = useLogoutMutation();


    const handleLogout = async () => {
        try {
            await logout().unwrap()
            // If successful, navigate to the account page
            navigate('/login', { replace: true });
        } catch (err) {
            console.log('Provided email or password are incorrect!', err);
        }
    };

    return { logout: handleLogout, isLoading };
};

