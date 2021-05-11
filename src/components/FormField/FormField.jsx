import React from "react"
import "./FormField.css"

function FormField({name, label, ...rest}) {
    return (
        <div className="form-field">
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} {...rest}/>
        </div>
    )
}

export default FormField