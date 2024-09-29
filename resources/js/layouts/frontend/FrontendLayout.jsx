import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import SinglePostHeader from './SinglePostHeader'; 
import Footer from './Footer';
import Modal from './Modal';

import 'bootstrap/dist/css/bootstrap.min.css';
// Import custom styles
import "../../../assets/frontend/css/fontawesome.min.css";
import "../../../assets/frontend/css/mainstyles.css";

// Import Bootstrap JavaScript and jQuery
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../../../assets/frontend/js/font-all.min.js";
import $ from 'jquery';

const FrontendLayout = () => {
  const location = useLocation();

  const isSinglePostOrCategory = location.pathname.startsWith('/post/') || 
                                 location.pathname.startsWith('/category/') ||
                                 location.pathname.startsWith('/video-news/') ||
                                 location.pathname.startsWith('/division/')  ||
                                 location.pathname.startsWith('/district/');

  return (
    <div>

      {isSinglePostOrCategory ? <SinglePostHeader /> : <Header />}
      
      <main className='frontLayout'>
        <div className="container-fluid px-4">
          <Outlet />
        </div>
      </main>
      
      <footer>
        <Footer />
      </footer>

      <Modal />
    </div>
  );
};

export default FrontendLayout;
