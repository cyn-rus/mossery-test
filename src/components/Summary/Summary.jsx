import React from "react"
import "./Summary.css"

const Summary = ({title, summary}) => {
    return (
        <div className="summary-field">
            <p className="title">{title}</p>
            <p className="summary">{summary}</p>
        </div>
    )
}

export default Summary;