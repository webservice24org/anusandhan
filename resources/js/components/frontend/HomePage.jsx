// resources/js/components/frontend/HomePage.jsx
import React from 'react';
import Featuresection from './Featuresection';
import National from './National';
import International from './International';
import Foryou from './Foryou';
//import FrontendLayout from '../../layouts/frontend/FrontendLayout'; // Import the frontend layout



const HomePage = () => {
    return (
      <>
        <Featuresection />
        <National />
        <International />
        <Foryou />
      </>
    );
  };
  
  export default HomePage;
  