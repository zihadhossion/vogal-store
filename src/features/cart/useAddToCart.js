import { useQueryClient, useMutation } from '@tanstack/react-query';
import supabase from '../../services/supabase';

const addToCart = async (product) => {
    const { data: existingCartItem } = await supabase
        .from('cart')
        .select('*')
        .eq('id', product.id)
        .single();

    if (existingCartItem) {
        // If the product is already in the cart, update the quantity
        const { data, error } = await supabase
            .from('cart')
            .update({ quantity: existingCartItem.quantity + 1 })
            .eq('id', existingCartItem.id);
        if (error) throw new Error(error.message);
        return data;
    } else {
        // If the product is not in the cart, insert a new entry
        const { data, error } = await supabase
            .from('cart')
            .insert({ id, title, image, price, quantity: 1 });
        if (error) throw new Error(error.message);
        return data;
    }
};


const useAddToCart = () => {
    return useMutation(addToCart);
};

export default useAddToCart;
