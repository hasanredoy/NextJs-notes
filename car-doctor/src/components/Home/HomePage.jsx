import React from 'react';
import Banner from '../Shared/banner/Banner';
import AboutUs from '../Shared/AboutUs';
import Services from '../Shared/Services';

const HomePage = () => {
  return (
    <div>
     <Banner></Banner>
     <div className=' my-20'>
      <AboutUs></AboutUs>
     </div>
     <div>
      <Services></Services>
     </div>
    </div>
  );
};

export default HomePage;