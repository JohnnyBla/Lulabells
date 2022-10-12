import React from 'react';
import HigherNav from '../Components/LandingPage/Navigation/higherNav';
import Navigate from '../Components/LandingPage/Navigation/navigation';
import SectionOne from '../Components/LandingPage/sectionGroupOne/sectionOne';
import SectionTwo from '../Components/LandingPage/sectionGroupOne/sectionTwo';
import SectionOneTwo from '../Components/LandingPage/sectionGroupTwo/sectionTwoOne';

const LandingPage = () => {
  return (
    <div>
      <HigherNav />
      <Navigate />
      <div className='container-fluid DivOneBg'>
        <div className='row mx-md-auto align-items-center '>
          <SectionOne />
          <SectionTwo />
        </div>
        <div className='row '>
          <SectionOneTwo />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
