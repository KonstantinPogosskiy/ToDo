import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <div className="logoBox">
                <img className="sideLogo" src={props.sideImg} alt="sidebar"/>
            </div>
        </div>
    );
};

export default Sidebar;