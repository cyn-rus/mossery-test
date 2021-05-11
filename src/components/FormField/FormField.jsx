import React from "react"

import "./FormField.css"


function FormField({name, label, touched, errors, ...rest}) {
    return (
        <div className="form-field">
            <label htmlFor={name}>{label}</label>
            <div className="input-field">
                <div style={{color: touched && errors ? '' : "#0i3f59"}} className="error-message">
                    {touched && errors ? errors : '.'}
                </div>
                <input 
                    id={name} 
                    name={name} 
                    {...rest}
                />
            </div>
        </div>
    )
}

export default FormField