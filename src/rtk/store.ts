import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import cartReducer from './cart/cartSlice';


const store = configureStore({
  reducer: {
    books: booksReducer,
    cart: cartReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
