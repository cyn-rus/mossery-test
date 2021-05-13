import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import DatePicker from "react-datepicker"
import Template from '../../components/Template/Template'
import Button from "../../components/Button/Button"
import { AppContext } from '../../context';
import "react-datepicker/dist/react-datepicker.css";
import "./DOB.css"

const DOB = () => {
    const history = useHistory()
    const  { formData, setFormData } = useContext(AppContext)

    return (
        <Template>
            <div className="dob-page">
                <Button
                    secondary
                    type="submit"
                    onClick={() => history.push("/personal")}
                >
                    ← Personal
                </Button>
                <div className="dob-content">
                    <h1>Date of Birth</h1>
                    <DatePicker
                        className="date-picker"
                        selected={new Date(formData.dob)}
                        onChange={newDate => {
                                const newFormValue = {...formData, dob: newDate}
                                localStorage.setItem('formData', JSON.stringify(newFormValue))
                                setFormData(newFormValue)
                            } 
                        }
                    />
                </div>
                <div className="next-page-button">
                    <Button
                        primary
                        type="submit"
                        onClick={() => history.push("/agreement")}
                    >
                        NEXT PAGE
                    </Button>
                </div>
            </div>
        </Template>
    )
}

export default DOB