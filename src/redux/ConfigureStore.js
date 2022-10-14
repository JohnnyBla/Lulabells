import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './modalReducer';
import cartReducer from './cartReducer';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    cart: cartReducer,
  },
});
