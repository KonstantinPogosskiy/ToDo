import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
    return (
        <div className="Navbar">
            <div className="logoBoard">
                <img className="logo" alt='logo' src={props.logo_source}/>
                <p>{props.App_name}</p>
            </div>
            <div className="desk">
                <h1>Tasks</h1>
            </div>
            <div className="auth">
                <div className="userName">{props.user}</div>
                <img alt={props.alt} src={props.avatar}/>
            </div>
        </div>
    );
};

export default Navbar;