import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state) => {},
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
