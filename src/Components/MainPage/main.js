import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../../Pages/LandingPage';
import LulaBContactUs from '../../Pages/LulaBContactUs';
import ReservedModal from '../OnlineOrders/Reservations';
import ShoppingBag from '../Cart/shoppingBag';
import OrderPage from '../OnlineOrders/OrderOnlinePage';
import Footer from '../../shared/footer';
import { calculateTotals, clearCart } from '../../redux/cartReducer';
import { useSelector, useDispatch } from 'react-redux';

const Main = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(clearCart());
  }, []);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <>
      {isOpen && <ReservedModal />}

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/contactUs' element={<LulaBContactUs />} />
        <Route path='/shoppingCart' element={<ShoppingBag />} />
        <Route path='/orderOnline' element={<OrderPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Main;
