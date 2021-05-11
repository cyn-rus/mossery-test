import React from 'react';

import './Template.css';

import NavBar from '../NavBar/NavBar'; 

const Template = ({ children }) => {
    return (
        <div className="outer">
            <NavBar />
            {children}
        </div>
    )
}

export default Template;