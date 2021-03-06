import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemslist: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload

            const existingItem = state.itemslist.find((item)=> item.id === newItem.id)

            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice += newItem.price;

            } else {
                state.itemslist.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    quantity: 1
                });
                state.totalQuantity += 1;

            }

        },
        removeItem: (state, action) => {
            const id = action.payload
            const existingItem = state.itemslist.find((item) => item.id === id)

            if (existingItem.quantity === 1) {
                state.itemslist = state.itemslist.filter(item => item.id !== id);
                state.totalQuantity -= 1;
            } else {
                existingItem.quantity -= 1
                existingItem.totalPrice -= existingItem.price
            }
        },
        clearCart: (state, action) => {
            state.itemslist = [];
            state.itemQuantity = 0;
            state.showCart = false;
        },
        setShowCart: ( state, action) => {
            state.showCart = !state.showCart;
        }
    }
})

export const { addItem, removeItem, clearCart, setShowCart } = cartSlice.actions;

export default cartSlice;