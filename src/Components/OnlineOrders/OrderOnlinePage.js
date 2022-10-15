import React from 'react';
import { MDBBtn, MDBIcon, MDBNavbar, MDBBadge } from 'mdb-react-ui-kit';
import { menuItems } from '../../shared/Menu/menuItems';
import OrderMenu from './orderMenu';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cartReducer';

const OrderPage = () => {
  const { amount, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='text-danger col-6 How-To'>
          <h3>How Too?</h3>
          <p>Click Item to add to the Cart</p>
          <p>Edit Quantity by clicking on the Cart Icon</p>
          <p>Taxes are calculated on checkout</p>
        </div>
        <div className='text-danger col text-end my-auto Clear-Cart'>
          <MDBBtn
            color='danger'
            size='lg'
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </MDBBtn>
        </div>
        <MDBNavbar light bgColor='light' className='text-center'>
          <div className='col'>
            <Link to='/' className='mt-1'>
              <MDBIcon fas icon='home' size='3x' color='warning' />
              Click to go home
            </Link>
          </div>
          <div className='col'>
            <Link to='/shoppingCart'>
              <MDBIcon fas icon='shopping-cart' size='2x' color='warning' />
              <MDBBadge
                color='light'
                className='badgeNumber mx-1'
                notification
                pill
              >
                {amount}
              </MDBBadge>{' '}
            </Link>
          </div>
          <div className='col'>
            {' '}
            <h5 className='fw-bolder mb-auto'>
              Total: <span>${total.toFixed(2)} + tax</span>
            </h5>
          </div>
        </MDBNavbar>
      </div>
      <div className='container'>
        <div className='row mt-2 text-center'>
          <div className='col-md-7'>
            <h2 className='ContentTitle mt-4'>Entress</h2>
            {menuItems
              .filter((item) => item.type === 2)
              .map((item) => {
                return <OrderMenu key={item.id} {...item} />;
              })}
          </div>
          <div className='col-md-5'>
            <h2 className='ContentTitle mt-3'>Sides</h2>
            {menuItems
              .filter((item) => item.type === 4)
              .map((item) => {
                return <OrderMenu key={item.id} {...item} />;
              })}
          </div>
        </div>
        <div className='row mt-2 text-center'>
          <div className='col-md-7 mx-auto'>
            <h2 className='ContentTitle mt-3'>Appetizers</h2>
            {menuItems
              .filter((item) => item.type === 1)
              .map((item) => {
                return <OrderMenu key={item.id} {...item} />;
              })}
          </div>
          <div className='col-md-4'>
            <h2 className='ContentTitle mt-2'>Salads</h2>
            {menuItems
              .filter((item) => item.type === 3)
              .map((item) => {
                return <OrderMenu key={item.id} {...item} />;
              })}
          </div>
        </div>
        <div className='row mt-2 text-center'>
          <div className='col mx-auto'>
            <h2 className='ContentTitle mt-2'>Desserts</h2>
            {menuItems
              .filter((item) => item.type === 5)
              .map((item) => {
                return <OrderMenu key={item.id} {...item} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
