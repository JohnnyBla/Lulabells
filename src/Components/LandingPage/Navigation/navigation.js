import React from 'react';
import './navigation.css';
import { MDBIcon, MDBBtn, MDBBadge } from 'mdb-react-ui-kit';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../redux/modalReducer';
import { Link } from 'react-router-dom';

const Navigate = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(items.length);
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
              <MDBBtn size='lg' className='OrderButton me-2 '>
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
              <MDBBtn floating size='lg' color='black' tag='a'>
                <MDBIcon fas icon='shopping-cart' size='lg' color='white' />
              </MDBBtn>
              <MDBBadge
                color='danger'
                className='badgePlease'
                notification
                pill
              >
                {items.length}
              </MDBBadge>
            </div>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigate;
