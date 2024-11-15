import { useEffect } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import Loader from '../../ui/Loader';

const ResetProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    // const tokenHash = searchParams.get("token_hash");
    const location = useLocation();
    const tokenHash = new URLSearchParams(location.search).get('token_hash');

    useEffect(() => {
        if (!tokenHash) {
            navigate('/login');
        }
    }, [tokenHash, navigate]);

    if (!tokenHash) return <Loader />;

    return children;
};

export default ResetProtectedRoute;