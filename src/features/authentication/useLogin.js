import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useLoginMutation } from '../../services/apiAuth';
import { fetchCartItems, mergeCartItems } from '../../slices/cartSlice';
import { setUser } from '../../slices/authSlice';

export default function useLogin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [login, { isLoading, }] = useLoginMutation();

    const handleLogin = async ({ email, password }) => {
        try {
            const { data, error } = await login({ email, password });

            if (error) {
                toast.error(error)
            }

            if (!isLoading && data?.user) {
                toast.success("Successfully Login!")
                dispatch(setUser(data?.user));
                dispatch(fetchCartItems());
                dispatch(mergeCartItems());
                navigate('/account');
            }
        } catch (error) {
            console.error('Failed to log in:', error);
        }
    }
    return { login: handleLogin, isLoading };
}