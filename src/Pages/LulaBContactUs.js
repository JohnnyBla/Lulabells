import React from 'react';
import HigherNav from '../Components/LandingPage/Navigation/higherNav';
import Navigate from '../Components/LandingPage/Navigation/navigation';
import { useSpring, animated } from 'react-spring';

import { MDBIcon } from 'mdb-react-ui-kit';

const LulaBContactUs = () => {
  const fromRight = useSpring({
    from: { x: 2500 },
    config: { duration: 2000 },
    loop: {
      x: 0,
    },
  });

  const fromLeft = useSpring({
    from: { x: -2500 },
    config: { duration: 2000 },
    loop: {
      x: 0,
    },
  });
  return (
    <>
      <HigherNav />
      <div className='ContactUsBg'>
        <animated.div style={{ ...fromRight }}>
          <Navigate />
        </animated.div>
        <animated.div style={{ ...fromLeft }}>
          <div className='container-fluid mb-5 '>
            <div className='row justify-content-center mt-5 mx-auto p-5'>
              <div className='col-lg-4 col-12'>
                <h1 className='MenuLabel'>LulaBelles</h1>
                <h3 className='menuOrganize'>Comments or Questions</h3>
                <p className='text-white menuOrganize'>
                  Please submit form and you will be contacted by one of our
                  representatives. Responses can take up to two days.
                </p>
              </div>
              <div className='col-lg-5 col'>
                <div className='d-inline-flex'>
                  <MDBIcon
                    fas
                    icon='asterisk'
                    size='xs'
                    className='me-1 '
                    color='danger'
                  />

                  <h4 className='text-uppercase text-danger mb-4'>
                    REQUIRED FIELDS{' '}
                  </h4>
                </div>
                <form>
                  <div className='mb-3 mt-3'>
                    <label htmlFor='name' className='form-label text-white'>
                      <div className='d-inline-flex'>
                        <MDBIcon
                          fas
                          icon='asterisk'
                          size='xs'
                          className='me-1 align-self-center'
                          color='danger'
                        />
                        <h3 className='ContentTitle'> Name</h3>
                      </div>
                    </label>
                    <input
                      type='text'
                      className='form-control form-control-lg'
                      id='name'
                      placeholder='Name'
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='email' className='form-label  text-white'>
                      <div className='d-inline-flex'>
                        <MDBIcon
                          fas
                          icon='asterisk'
                          size='xs'
                          className='me-1 align-self-center'
                          color='danger'
                        />
                        <h3 className='ContentTitle'>Email Address</h3>
                      </div>
                    </label>
                    <input
                      type='email'
                      className='form-control form-control-lg'
                      id='email'
                      placeholder='Email Address'
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='phoneNum' className='form-label text-white'>
                      <h3 className='ContentTitle'>Phone Number</h3>
                    </label>
                    <input
                      type='tel'
                      className='form-control form-control-lg'
                      id='phoneNum'
                      placeholder='Phone Number'
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='message' className='form-label text-white'>
                      <div className='d-inline-flex'>
                        <MDBIcon
                          fas
                          icon='asterisk'
                          size='xs'
                          className='me-1 align-self-center'
                          color='danger'
                        />
                        <h3 className='ContentTitle'> Message</h3>
                      </div>
                    </label>
                    <textarea
                      rows={5}
                      type='text'
                      className='form-control'
                      id='message'
                      placeholder='contact us'
                    />
                  </div>
                  <div className='d-grid'>
                    <button type='submit' className='btn btn-primary btn-lg'>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </>
  );
};

export default LulaBContactUs;
