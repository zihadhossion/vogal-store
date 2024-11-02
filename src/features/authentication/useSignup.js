import { useNavigate } from 'react-router-dom';
import { useSignupMutation } from '../../services/apiAuth';

export default function useSignup() {
    const navigate = useNavigate();
    const [signup, { isLoading }] = useSignupMutation();

    const handleSignup = async ({ fullName, email, password }) => {
        try {
            const { data, error } = await signup({ fullName, email, password }).unwrap();

            if (error) {
                throw new Error(error);
            }
            navigate('/login', { replace: true });
        } catch (err) {
            console.error('Signup failed:', err.message);
        }
    }

    return { signup: handleSignup, isLoading };
}
