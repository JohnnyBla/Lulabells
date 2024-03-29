import React from 'react';
import './navigation.css';
import { MDBIcon, MDBBtn, MDBBadge } from 'mdb-react-ui-kit';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../redux/modalReducer';
import { Link, useNavigate } from 'react-router-dom';

const Navigate = () => {
  const { amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleModalToggler = () => {
    dispatch(openModal());
  };
  return (
    <Navbar className='navbar navColor sticky-top' expand='lg'>
      <div className='container-fluid '>
        <Navbar.Toggle aria-controls='navbarScroll'>
          {' '}
          <MDBBtn floating tag='a' size='lg'>
            <MDBIcon
              fas
              icon='bars'
              className='BarsButton'
              color='black'
              size='lg'
            />
          </MDBBtn>
        </Navbar.Toggle>
        <Navbar.Collapse id='navbarScroll'>
          <div className='row align-items-center'>
            <div className='col-md-2 text-center'>
              <Link to='/'>
                <img
                  src={require('../../../shared/Images/LulaBellesNew.png')}
                  alt='LulaBelles'
                  width='100%'
                  height='auto'
                  to='/'
                />
              </Link>
            </div>

            <div className='col-md-8 col-12 text-lg-end mb-3'>
              <MDBBtn
                size='lg'
                className='OrderButton me-2'
                onClick={() => navigate('/orderOnline')}
              >
                Order Online
              </MDBBtn>
            </div>
            <div className='col-sm-12 col-lg mb-3'>
              <MDBBtn
                size='lg'
                className='ReserveButton '
                onClick={handleModalToggler}
              >
                Reservations
              </MDBBtn>
            </div>
            <div className='col-sm-12 col-lg mb-3'>
              <Link to='/shoppingCart'>
                <MDBBtn floating size='lg' color='black' to='/shoppingCart'>
                  <MDBIcon fas icon='shopping-cart' size='lg' color='white' />
                </MDBBtn>
                <MDBBadge
                  color='black'
                  className='badgePlease'
                  notification
                  pill
                >
                  {amount}
                </MDBBadge>
              </Link>
            </div>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigate;
