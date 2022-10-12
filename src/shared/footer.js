import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter className='mt-auto footer'>
      <div className='p-4 container'>
        <div className='row align-items-center mt-2'>
          <div className='col-md-2 col'>
            <img
              src={require('../shared/Images/LulaBellesNew.png')}
              alt='LulaBelles'
              className='img-fluid'
            />
          </div>
          <div className='col text-end text-uppercase'>
            &copy; {new Date().getFullYear()} Lulabeles, All Rights Reserved. |{' '}
            <a href='tel:+123456789'> contact us</a>
          </div>
        </div>
      </div>
    </MDBFooter>
  );
};

export default Footer;
