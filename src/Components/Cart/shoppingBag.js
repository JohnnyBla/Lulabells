import React from 'react';
import { MDBBtn, MDBIcon, MDBNavbar, MDBBadge } from 'mdb-react-ui-kit';
import CartItem from './CartItems';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cartReducer';
import { Link } from 'react-router-dom';

const ShoppingBag = () => {
  const { total, amount, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <div className='container text-center mt-5 ShoppingBg'>
        <MDBNavbar light bgColor='light' className='text-center'>
          <div className='col'>
            <Link to='/' className='mt-1'>
              <MDBIcon fas icon='home' size='3x' color='warning' />
              Click to go home
            </Link>
          </div>
          <div className='col'>
            <Link to='/orderOnline'>
              <MDBIcon fas icon='angle-double-left' size='2x' color='warning' />
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
        </MDBNavbar>
        <h1 className='font-monospace ContentTitle mt-2'>Your Bag</h1>
        <div className='row my-1'>
          <p className='font-monospace text-muted'> is currently Empty</p>
        </div>
      </div>
    );
  }
  return (
    <div className='container mt-5 ShoppingBg'>
      <MDBNavbar light bgColor='light' className='text-center'>
        <div className='col'>
          <Link to='/' className='mt-1'>
            <MDBIcon fas icon='home' size='3x' color='warning' />
            Click to go home
          </Link>
        </div>
        <div className='col'>
          <Link to='/orderOnline'>
            <MDBIcon fas icon='angle-double-left' size='2x' color='warning' />
            <MDBBadge
              color='none'
              className='badgeNumber mx-1 '
              notification
              pill
            >
              {amount}
            </MDBBadge>{' '}
            Order Online
          </Link>
        </div>
      </MDBNavbar>
      <h1 className='font-monospace text-center ContentTitle'>Your Bag</h1>
      <div className='row my-4 d-grid mb-5 '>
        <h2 className='text-center mb-2 ContentTitle'>Appetizers</h2>

        {cartItems
          .filter((item) => item.type === 1)
          .map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        <h2 className='text-center mb-2 ContentTitle'>Entrees</h2>

        {cartItems
          .filter((item) => item.type === 2)
          .map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        <h2 className='text-center mb-2 ContentTitle'>Salads</h2>

        {cartItems
          .filter((item) => item.type === 3)
          .map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        <h2 className='text-center mb-2 ContentTitle'>Sides</h2>

        {cartItems
          .filter((item) => item.type === 4)
          .map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        <h2 className='text-center mb-2 ContentTitle'>Desserts</h2>

        {cartItems
          .filter((item) => item.type === 5)
          .map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
      </div>

      {/* footer */}
      <hr />
      <div className='row d-grid justify-content-end'>
        <h5 className='fw-bolder'>
          Total: <span>{total.toFixed(2)}</span>
        </h5>
      </div>
      <div className='d-grid justify-content-end pb-4'>
        <MDBBtn color='warning' onClick={() => dispatch(clearCart())}>
          clear cart
        </MDBBtn>
      </div>
    </div>
  );
};

export default ShoppingBag;
