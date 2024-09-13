import { useNavigate } from 'react-router-dom';
import { useSignupMutation } from '../../services/apiAuth';

export default function useSignup() {
    const navigate = useNavigate();
    const [signup, { isLoading }] = useSignupMutation();

    const handleSignup = async ({ fullName, email, password }) => {
        try {
            // Trigger the signup mutation with the provided credentials
            const { data, error } = await signup({ fullName, email, password }).unwrap();

            if (error) {
                throw new Error(error);
            }

            // If successful, navigate to another route, e.g., an account or login page
            console.log('Account successfully created!', data);
            navigate('/login', { replace: true });
        } catch (err) {
            console.error('Signup failed:', err.message);
        }
    }

    return { signup: handleSignup, isLoading };
}
