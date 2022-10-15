import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartReducer';

const OrderMenu = ({ name, id, price }) => {
  const dispatch = useDispatch();
  const HandleClick = () => {
    dispatch(addItem(id));
  };
  return (
    <MDBBtn
      rounded
      className='mx-2 my-2'
      style={{ backgroundColor: '#ac2bac' }}
      size='lg'
      onClick={HandleClick}
    >
      <div className='row align-items-center'>
        <div className='col'>{name}</div>${price}
      </div>
    </MDBBtn>
  );
};

export default OrderMenu;
