import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
    id: number;
    name: string;
    img: string;
    price: number;
    quantity: number;
}

const initialState: Array<IProduct> = [];

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        add_cart_product: (state, action: PayloadAction<IProduct>) => {
            if (state.findIndex((pro) => pro.id === action.payload.id) === -1) {
                state.push(action.payload);
            } else {
                return state.map((item) => {
                    return item.id === action.payload.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });
            }
        },

        remove_product: (state, action: PayloadAction<number>) => {
            const id = action.payload
            return state.filter(item => item.id !== id)
        }
    },
});

export const {add_cart_product, remove_product} = cartSlice.actions
export default cartSlice.reducer