import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../../Pages/LandingPage';
import LulaBContent from '../../Pages/LulaBContent';
import ReservedModal from '../OnlineOrders/Reservations';
import { useSelector } from 'react-redux';

const Main = () => {
  const { isOpen } = useSelector((state) => state.modal);
  return (
    <>
      {isOpen && <ReservedModal />}

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/lulabelle' element={<LulaBContent />} />
      </Routes>
    </>
  );
};

export default Main;
