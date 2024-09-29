// src/layouts/frontend/SinglePostHeader.jsx
import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import { Link } from "react-router-dom";
import TopVideo from '../../components/frontend/TopVideo';

const SinglePostHeader = () => {
    const [headerData, setHeaderData] = useState(null);
    const [menus, setMenus] = useState([]); 

    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                const response = await axios.get('/api/header-data/');
                setHeaderData(response.data[0]); 
            } catch (error) {
                console.error("Error fetching header data:", error);
            }
        };

        fetchHeaderData();
    }, []);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {

                const menuResponse = await axios.get('/api/menu/');
                const menusData = menuResponse.data.data;

                const menusWithSubMenus = await Promise.all(
                    menusData.map(async (menu) => {
                        const subMenuResponse = await axios.get(`/api/menu/${menu.id}/sub-menus`);
                        return {
                            ...menu,
                            sub_menus: subMenuResponse.data.sub_menus
                        };
                    })
                );

                setMenus(menusWithSubMenus);
            } catch (error) {
                console.error("Error fetching menu data:", error);
            }
        };

        fetchMenuData();
    }, []);

    if (!headerData) return null; 
  return (
    <header>

        <div className="header_logo_area">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="header_logo">
                            <Link to="#">
                                <img src={`${axios.defaults.baseURL}storage/logo/${headerData.header_logo}`} alt="Header Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="live_button mt-3">
                            <a className="button" href={headerData.video_link} target="_blank" rel="noopener noreferrer">
                                {headerData.video_btn_text}
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-8 pt-3">
                        <div className="row">
                           <TopVideo />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bottom_header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mobile_bar">
                            <span><i className="fa-solid fa-bars"></i></span>
                        </div>
                        <div className="mobile_logo">
                            <img src="img/logo.png" alt="" />
                        </div>
                        
                        <div className="manu_area">
                            <ul>
                                <li className="active">
                                    <Link to="/"><i className="fas fa-home"></i></Link>
                                </li>
                                {menus.map((menu) => (
                                    <li key={menu.id}>
                                        <a href={`/${menu.link}`}>
                                            {menu.name}
                                            {menu.sub_menus && menu.sub_menus.length > 0 && (
                                                <span><i className="fa-solid fa-angle-down"></i></span>
                                            )}
                                        </a>
                                        {menu.sub_menus && menu.sub_menus.length > 0 && (
                                            <ul>
                                                {menu.sub_menus.map((subMenu) => (
                                                    <li key={subMenu.id}>
                                                        <a href={`/${subMenu.link}`}>{subMenu.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
        

    </header>
  );
};

export default SinglePostHeader;
