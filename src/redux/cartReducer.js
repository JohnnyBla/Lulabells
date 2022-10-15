import { createSlice } from '@reduxjs/toolkit';
import { menuItems } from '../shared/Menu/menuItems';

const initialState = {
  total: 0,
  cartItems: menuItems,
  amount: 4,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addItem: (state, action) => {
      const newItem = menuItems.find((item) => item.id === action.payload);
      // ensure no duplictes are returned
      state.cartItems = state.cartItems.concat(newItem).filter((item) => {
        const isDuplicate = state.cartItems.includes(item.id);
        if (!isDuplicate) {
          state.cartItems.push(item.id);
          return true;
        }
        return false;
      });
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const {
  addItem,
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
