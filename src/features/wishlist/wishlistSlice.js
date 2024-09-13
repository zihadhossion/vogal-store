import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../services/supabase";

export const fetchWishlistItems = createAsyncThunk();