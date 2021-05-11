import React from 'react'

import './Button.css';

const Button = ({children, onClick, type, disabled, primary, secondary}) => {
    return (
        <button 
            type={type}
            disabled={disabled}
            className={`button ${primary && 'button-primary'} ${secondary && 'button-secondary'}`} 
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button 