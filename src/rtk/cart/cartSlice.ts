import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookItem {
  id: number;
  title: string;
  name: string;
  image: string;
  price: number;
}

interface CartItem {
  book: BookItem;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<BookItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.book.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ book: newItem, quantity: 1 });
      }
      state.totalQuantity++;
    },

    // Remove item from cart
    removeItem(state, action: PayloadAction<number>) {
      const bookId = action.payload;
      const existingItem = state.items.find(item => item.book.id === bookId);
      if (existingItem) {
        // Update totalQuantity by subtracting the item's quantity
        state.totalQuantity -= existingItem.quantity;
        // Filter out the item from the cart
        state.items = state.items.filter(item => item.book.id !== bookId);
      }
    },

    // Increase quantity of an item
    increaseQuantity(state, action: PayloadAction<number>) {
      const bookId = action.payload;
      const existingItem = state.items.find(item => item.book.id === bookId);
      if (existingItem) {
        existingItem.quantity++;
        state.totalQuantity++;
      }
    },

    // Decrease quantity of an item, but ensure it doesn't go below 1
    decreaseQuantity(state, action: PayloadAction<number>) {
      const bookId = action.payload;
      const existingItem = state.items.find(item => item.book.id === bookId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        state.totalQuantity--;
      }
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
