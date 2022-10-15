import React, { useState, useEffect } from 'react';
import './sectionOneTwo.css';
import { MDBIcon, MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';
import { menuItems } from '../../../shared/Menu/menuItems';
import FullMenu from './fullMenu';
import MenuList from './MenuList';

const SectionOneTwo = () => {
  const [display, setDisplay] = useState('hidden');

  const controller = () => {
    if (window.scrollY > 100) {
      setDisplay('visible');
    } else {
      setDisplay('hidden');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controller);
    return () => {
      window.removeEventListener('scroll', controller);
    };
  }, []);
  return (
    <div>
      <div className='row text-end'>
        <div className='col-12 col-md-10'>
          <h1 className=' MenuLabel'>
            {' '}
            <MDBIcon fas icon='utensils' className='me-4' size='xs' />
            Menu
          </h1>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div
            className={`col-md-6 col-12 mb-4 order-last order-md-first ${display} d-none d-md-block`}
          >
            <section>
              <MDBCard alignment='center' className='menuDesign mx-auto'>
                <MDBCardBody>
                  <MDBCardTitle className='menuOrganize'>Salads</MDBCardTitle>
                  {menuItems
                    .filter((item) => item.type === 3)
                    .map((item) => {
                      return <FullMenu key={item.id} {...item} />;
                    })}
                  <MDBCardTitle className='menuOrganize'>
                    Appetizers
                  </MDBCardTitle>
                  {menuItems
                    .filter((item) => item.type === 1)
                    .map((item) => {
                      return <FullMenu key={item.id} {...item} />;
                    })}
                  <MDBCardTitle className='menuOrganize'>Dessert</MDBCardTitle>
                  {menuItems
                    .filter((item) => item.type === 5)
                    .map((item) => {
                      return <FullMenu key={item.id} {...item} />;
                    })}
                </MDBCardBody>
              </MDBCard>
            </section>
          </div>
          <div className={`col-md-6 col-12 ms-auto`}>
            <section>
              {menuItems
                .filter((item) => item.type === 2)
                .map((item) => {
                  return <MenuList key={item.id} {...item} />;
                })}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOneTwo;
