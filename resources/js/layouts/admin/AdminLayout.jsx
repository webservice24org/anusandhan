import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';


//import 'bootstrap/dist/css/bootstrap.min.css';

import "../../../assets/admin/css/styles.css";


//import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const AdminLayout = ({ children }) => {

    useEffect(() => {
        
    }, []);

    return (
      

      <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
            <Outlet />
            </div>
          </main>
          <footer className="py-4 bg-light mt-5">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
    );
};

export default AdminLayout;
