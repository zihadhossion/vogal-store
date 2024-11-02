// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { apiAuth } from "../services/apiAuth";
import { fetchCartItems } from '../features/cart/cartSlice';


const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isAuthenticated: !!localStorage.getItem('user'),
    isLoading: true,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {
            console.log(action.payload);

            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
            state.isLoading = false;
            // fetchCartItems();
            localStorage.setItem('user', JSON.stringify(action.payload)); // Save to local storage
        },
        clearUser(state) {
            state.user = null;
            state.isLoading = false;
            state.isAuthenticated = false;
            localStorage.removeItem('user'); // Clear from local storage
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(apiAuth.endpoints.getCurrentUser.matchFulfilled, (state, { payload }) => {
                state.user = payload;
                state.isAuthenticated = !!payload;
                state.isLoading = false;
                // fetchCartItems();

                localStorage.setItem('user', JSON.stringify(payload));
            })
            .addMatcher(apiAuth.endpoints.logout.matchFulfilled, (state) => {
                state.user = null;
                state.isLoading = false;
                state.isAuthenticated = false;
                localStorage.removeItem('user');
            });
    },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
