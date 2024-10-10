import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='row'></div>
            <div className='heading text-center'>Dashboard</div>
            <div className='dashboard-content'>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink 
                            to='/home-banner' 
                            className="nav-link dashboard-tab"
                            activeclassname="active">
                            <img className="img-fluid icons" src='../assets/dashboard.png' alt="Home Banner" />
                            <span>Home Banner</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to='/home-about-us'
                            className="nav-link dashboard-tab"
                            activeclassname="active">
                            <img className="img-fluid icons" src='../assets/dashboard.png' alt="About Us" />
                            <span>Home About Us</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to='/about-us'
                            className="nav-link dashboard-tab"
                            activeclassname="active">
                            <img className="img-fluid icons" src='../assets/dashboard.png' alt="About Us" />
                            <span>About Us</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to='/add-academic-spectrum'
                            className="nav-link dashboard-tab"
                            activeclassname="active">
                            <img className="img-fluid icons" src='../assets/dashboard.png' alt="Academic Spectrum" />
                            <span>Academic Spectrum</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to='/spotlight'
                            className="nav-link dashboard-tab"
                            activeclassname="active">
                            <img className="img-fluid icons" src='../assets/dashboard.png' alt="Spotlight" />
                            <span>Spotlight</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to='/director-msg'
                            className="nav-link dashboard-tab"
                            activeclassname="active">
                            <img className="img-fluid icons" src='../assets/dashboard.png' alt="Spotlight" />
                            <span>Director's Message</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to='/alumni'
                            className="nav-link dashboard-tab"
                            activeclassname="active">
                            <img className="img-fluid icons" src='../assets/dashboard.png' alt="Alumni Achievements" />
                            <span>Alumni Achievements</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to='/being-unique'
                            className="nav-link dashboard-tab"
                            activeclassname="active">
                            <img className="img-fluid icons" src='../assets/dashboard.png' alt="Being Unique" />
                            <span>Being Unique</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to='/faculty'
                            className="nav-link dashboard-tab"
                            activeclassname="active">
                            <img className="img-fluid icons" src='../assets/dashboard.png' alt="Being Unique" />
                            <span>Add Faculty</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to='/awards'
                            className="nav-link dashboard-tab"
                            activeclassname="active">
                            <img className="img-fluid icons" src='../assets/dashboard.png' alt="Being Unique" />
                            <span>Add Awards And Honours</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to='/learning-stage'
                            className="nav-link dashboard-tab"
                            activeclassname="active">
                            <img className="img-fluid icons" src='../assets/dashboard.png' alt="Being Unique" />
                            <span>Learning Stage</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
