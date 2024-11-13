import React, { useState, useRef, useContext, useEffect } from "react";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { useDispatch, useSelector } from "react-redux";
import supabase from "./supabase";


export const apiOrder = createApi({
    reducerPath: "apiOrder",
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getAddress: builder.query({
            async queryFn(_, { getState }) {
                const userId = getState()?.auth?.user?.id;

                if (!userId) {
                    return { error: "User ID not found" };
                }

                const { data, error, status } = await supabase
                    .from('address')
                    .select('*')
                    .eq('user_id', userId)

                // Check for error or empty data
                if (error) {
                    if (status === 406) {
                        // Handle case where no matching address is found
                        console.log("No address found for this user.");
                        return { data: [] };
                    }
                    return { error: error.message };
                }
                return { data: data || [] };
            }
        })
    })
})

export const { useGetOrderQuery, useGetAddressQuery } = apiOrder;
