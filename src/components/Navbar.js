import React, {useEffect, useState} from 'react';
import './Navbar.css'
import {useLocation, useNavigate} from "react-router-dom";
import Chatbot from "./Chatbot/Chatbot";

//navbar component that is called by all pages
function Navbar({username, user}) {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <>
            <div className='navbar'>
                <div className="logo-box">
                    <div className="logo">
                        <img className='gringgots-logo-png' src={process.env.PUBLIC_URL +'/images/logo.png'}/>
                    </div>
                    <div className="text">
                        <h2>E-Gringgots</h2>
                    </div>
                </div>
                <div className="content-box">
                    <div className={location.pathname === `/${username}` ? "content-alt" : "content"}>
                        <h2 onClick={() => handleNavigation(`/${username}`)}>Home</h2>
                    </div>
                    <div className={location.pathname === `/${username}/transfer` ? "content-alt" : "content"}>
                        <h2 onClick={() => handleNavigation(`/${username}/transfer`)}>Transfer</h2>
                    </div>
                    <div className={location.pathname === `/${username}/exchange` ? "content-alt" : "content"}>
                        <h2 onClick={() => handleNavigation(`/${username}/exchange`)}>Exchange</h2>
                    </div>
                    <div className={location.pathname === `/${username}/account` ? "content-alt" : "content"}>
                        <h2 onClick={() => handleNavigation(`/${username}/account`)}>Account</h2>
                    </div>
                    <div className={location.pathname === `/${username}/analytic` ? "content-alt" : "content"}>
                        <h2 onClick={() => handleNavigation(`/${username}/analytic`)}>Data</h2>
                    </div>
                    {location.pathname.startsWith(`/Goblin`) && (
                        <div className={location.pathname === `/${username}/admin` ? "content-alt" : "content"}>
                            <h2 onClick={() => handleNavigation(`/${username}/admin`)}>Admin</h2>
                        </div>
                    )}
                </div>
            </div>
            <Chatbot/>
        </>
    );
}

export default Navbar;