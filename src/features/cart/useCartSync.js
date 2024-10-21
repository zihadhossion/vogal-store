import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import supabase from '../../services/supabase';
import { fetchCartItems } from './cartSlice';

const useCartSync = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Create a subscription to the 'cart' table
        const cartChannel = supabase
            .channel('public:cart')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'cart' },
                (payload) => {
                    console.log('Cart item changed:', payload);
                    // You can dispatch fetchCartItems here to update the cart state
                    dispatch(fetchCartItems()); // Fetch updated cart data
                }
            )
            .subscribe();

        // Cleanup subscription on unmount
        return () => {
            supabase.removeChannel(cartChannel);
        };
    }, []);
};

export default useCartSync;
