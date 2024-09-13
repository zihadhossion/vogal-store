import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../services/supabase";

export const fetchCartItems = createAsyncThunk(
    'cart/fetchCartItems',
    async () => {
        // Fetch cart items from Supabase
        const { data, error } = await supabase.from('cart').select('*');
        if (error) {
            throw new Error(error.message);
        }
        return data;
    }
);

// Async thunk to fetch total quantity from Supabase
export const fetchTotalQuantity = createAsyncThunk(
    'cart/fetchTotalQuantity',
    async () => {
        const { data, error } = await supabase.from('cart').select('quantity');
        if (error) {
            throw new Error(error.message);
        }
        return data.reduce((sum, item) => sum + item.quantity, 0);
    }
);

// Async thunk to add/update cart items in Supabase
export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async (product, { getState }) => {
        const { cart } = getState();
        const existingItem = cart.items.find(item => item.id === product.id);

        if (existingItem) {
            // Update the quantity if the item is already in the cart
            const { error } = await supabase
                .from('cart')
                .update({ quantity: existingItem.quantity + 1 })
                .eq('id', product.id);

            if (error) {
                throw new Error(error.message);
            }
        } else {
            // Insert a new item if it's not in the cart
            const { error } = await supabase
                .from('cart')
                .insert({ id: product.id, title: product.title, image: product.image, price: product.price, quantity: 1 });

            if (error) {
                throw new Error(error.message);
            }
        }

        // Fetch the updated cart
        const { data, error: fetchError } = await supabase.from('cart').select('*');
        if (fetchError) {
            throw new Error(fetchError.message);
        }
        return data;
    }
);

export const removeFromCart = createAsyncThunk(
    'cart/removeFromCart',
    async (product, { getState }) => {
        // Remove the product from Supabase
        const { error } = await supabase
            .from('cart')
            .delete()
            .eq('id', product.id);

        if (error) {
            throw new Error(error.message);
        }

        // Fetch the updated cart data
        const { data, error: fetchError } = await supabase.from('cart').select('*');
        if (fetchError) {
            throw new Error(fetchError.message);
        }

        return data;
    }
);

export const increaseQuantity = createAsyncThunk(
    'cart/increaseQuantity',
    async (product, { getState }) => {
        const { cart } = getState();
        const existingItem = cart.items.find(item => item.id === product.id);

        if (existingItem) {
            const { error } = await supabase
                .from('cart')
                .update({
                    quantity: existingItem.quantity + 1
                })
                .eq('id', product.id);

            if (error) {
                throw new Error(error.message);
            }
        }

        const { data, error: fetchError } = await supabase.from('cart').select('*');
        if (fetchError) {
            throw new Error(fetchError.message);
        }
        return data;
    }
);

export const decreaseQuantity = createAsyncThunk(
    'cart/decreaseQuantity',
    async (product, { getState }) => {
        const { cart } = getState();
        const existingItem = cart.items.find(item => item.id === product.id);

        if (existingItem && existingItem.quantity > 1) {
            const { error } = await supabase
                .from('cart')
                .update({
                    quantity: existingItem.quantity - 1
                })
                .eq('id', product.id);

            if (error) {
                throw new Error(error.message);
            }
        }
        const { data, error: fetchError } = await supabase.from('cart').select('*');
        if (fetchError) {
            throw new Error(fetchError.message);
        }
        return data;
    }
);

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartItems.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCartItems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
                state.totalQuantity = action.payload.reduce((sum, item) => sum + item.quantity, 0);
            })
            .addCase(fetchCartItems.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(fetchTotalQuantity.fulfilled, (state, action) => {
                state.totalQuantity = action.payload;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.items = action.payload;
                state.totalQuantity = action.payload.reduce((sum, item) => sum + item.quantity, 0);
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.items = action.payload;
                state.totalQuantity = action.payload.reduce((sum, item) => sum + item.quantity, 0);
            })
            .addCase(increaseQuantity.fulfilled, (state, action) => {
                state.items = action.payload;
                state.totalQuantity = action.payload.reduce((sum, item) => sum + item.quantity, 0);
            })
            .addCase(decreaseQuantity.fulfilled, (state, action) => {
                state.items = action.payload;
                state.totalQuantity = action.payload.reduce((sum, item) => sum + item.quantity, 0);
            });
    }
});

export default cartSlice.reducer;
