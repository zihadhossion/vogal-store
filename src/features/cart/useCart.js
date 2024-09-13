import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiCart";

export function useCart() {
    const { isLoading, data: cartItems, error } = useQuery({
        queryKey: ["cart"],
        queryFn: getCart
    })

    return { isLoading, cartItems, error };
}
