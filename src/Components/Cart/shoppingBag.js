import React from 'react';
import { MDBBtn, MDBIcon, MDBNavbar } from 'mdb-react-ui-kit';
import CartItem from './CartItems';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cartReducer';
import { Link } from 'react-router-dom';

const ShoppingBag = () => {
  const { total, amount, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <div className='container text-center mt-5'>
        <MDBNavbar light bgColor='black'>
          <Link to='/' className='mx-auto mt-1'>
            <MDBIcon fas icon='home' size='3x' color='warning' />
            Click to go home
          </Link>
        </MDBNavbar>
        <h1 className='font-monospace ContentTitle mt-2'>Your Bag</h1>
        <div className='row my-1'>
          <p className='font-monospace text-muted'> is currently Empty</p>
        </div>
      </div>
    );
  }
  return (
    <div className='container mt-5'>
      <MDBNavbar light bgColor='black'>
        <Link to='/' className='mx-auto mt-1'>
          <MDBIcon fas icon='home' size='3x' color='warning' />
          Click to go home
        </Link>
      </MDBNavbar>
      <h1 className='font-monospace text-center ContentTitle'>Your Bag</h1>
      <div className='row my-4 d-grid mb-5'>
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
