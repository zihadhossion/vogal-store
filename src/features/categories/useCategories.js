import { useQuery } from "@tanstack/react-query";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
// import supabase, { supabaseUrl } from "./supabase";
import { getCategories } from "../../services/apiCategories";


export function useCategories() {
    const { isLoading, data: categories, error } = useQuery({ queryKey: ["categories"], queryFn: getCategories })

    return { isLoading, categories, error };
};

