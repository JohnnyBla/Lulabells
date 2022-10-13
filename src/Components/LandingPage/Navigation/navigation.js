import React from 'react';
import './navigation.css';
import { MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modalReducer';
import { Link } from 'react-router-dom';

const Navigate = () => {
  const dispatch = useDispatch();
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
            <div className='col text-center'>
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
            <div className='col-md-8 col text-end d-inline-block '>
              <MDBBtn size='lg' className='OrderButton me-2'>
                Order Online
              </MDBBtn>
            </div>
            <div className='col'>
              <MDBBtn
                size='lg'
                className='ReserveButton me-2'
                onClick={handleModalToggler}
              >
                Reservations
              </MDBBtn>
            </div>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigate;
