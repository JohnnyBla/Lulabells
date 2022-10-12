import React from 'react';
import { Icon } from '@iconify/react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

const ContentOne = () => {
  return (
    <div className='row mt-5 PlateBackground p-2 mb-3'>
      <div className='col-md-4 col mt-3 p-2 mb-3'>
        <h1 className='text-center text-capitalize ContentTitle'>
          Get It Delivered To You
        </h1>

        <h2 className='orderNow mt-4'>Order Now</h2>
        <div className='row col-12 justify-content-center mx-auto'>
          <AwesomeButton size='large' ripple type='primary'>
            <Icon icon='simple-icons:doordash' className='buttonImage me-1' />
            DoorDash
          </AwesomeButton>
        </div>
      </div>
    </div>
  );
};

export default ContentOne;
