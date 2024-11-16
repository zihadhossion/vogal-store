import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import supabase, { supabaseUrl } from "./supabase";

export const apiProducts = createApi({
    reducerPath: "apiProducts",
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getProducts: builder.query({
            async queryFn() {
                try {
                    let { data, error } = await supabase
                        .from('products')
                        .select('*');

                    if (error) {
                        console.log(error);
                    }
                    return { data };

                } catch (err) {
                    console.log(err);
                }
            }
        })
    })
})

export const { useGetProductsQuery } = apiProducts;