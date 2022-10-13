import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../../Pages/LandingPage';
import LulaBContactUs from '../../Pages/LulaBContactUs';
import ReservedModal from '../OnlineOrders/Reservations';
import Footer from '../../shared/footer';
import { useSelector } from 'react-redux';

const Main = () => {
  const { isOpen } = useSelector((state) => state.modal);
  return (
    <>
      {isOpen && <ReservedModal />}

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/contactUs' element={<LulaBContactUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Main;
