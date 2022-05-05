import authSlice from "./authSlice";
import {configureStore} from '@reduxjs/toolkit'
import cartSlice from "./cartSlice";


const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default store 

