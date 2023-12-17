import React from 'react'
import { NavLink } from "react-router-dom";

const Navigate = ({ active , setActive }) => {
    console.log(active)
    return (
        <div className="controls">
            <NavLink to='./' onClick={() => setActive('home')}>
                <div className={active === 'home' ? 'control active-btn' : 'control'} data-id="home" >
                    <i className="fas fa-home"></i>
                </div>
            </NavLink>
            <NavLink to='./about' onClick={() => setActive('about')}>
                <div className={active === 'about' ? 'control active-btn' : 'control'} data-id="about">
                    <i className="fas fa-user"></i>
                </div>
            </NavLink>
            <NavLink to='./projects' onClick={() => setActive('projects')}>
                <div className={active === 'projects' ? 'control active-btn' : 'control'} data-id="portfolio">
                    <i className="fas fa-briefcase"></i>
                </div>
            </NavLink>
            <NavLink to='./contact' onClick={() => setActive('contact')}>
                <div className={active === 'contact' ? 'control active-btn' : 'control'} data-id="contact">
                    <i className="fas fa-envelope-open"></i>
                </div>
            </NavLink>
        </div>
    )
}

export default Navigate
