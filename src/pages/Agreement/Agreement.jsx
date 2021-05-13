import React, { useContext, useState } from 'react'
import axios from "axios"
import { useHistory } from "react-router-dom"
import { AppContext } from '../../context'
import Modal from "react-modal"
import Template from '../../components/Template/Template'
import Button from "../../components/Button/Button"
import Summary from "../../components/Summary/Summary"
import ModalBody from "../../components/ModalBody/ModalBody"
import './Agreement.css'

const Agreement = () => {
    const history = useHistory()
    const { formData, setFormData } = useContext(AppContext)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const dob = new Date(formData.dob)

    const handleChange = () => {
        setFormData({
            ...formData,
            agreement: !formData.agreement
        })
    }
    
    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const modalStyle = {
        content: {
            maxWidth: "50%",
            padding: "2rem",
            position: "fixed",
            marginLeft: "20%",
        }
    }

    const postData = async () => {
        const response = await axios({
            method: "post",
            url: "https://608f62670294cd001765e745.mockapi.io/api/user",
            data: {
                firstName: formData.firstName,
                lastName: formData.lastName,
                Email: formData.email,
                agreement: formData.agreement,
                password: formData.password
            }
        })
        if (response)
        localStorage.removeItem("formData")
    }

    // useEffect(() => {
    //     console.log(formData)
    // }, [formData.agreement])

    return (
        <Template>
            <div className="agreement-page">
                <div className="change-button" >
                    <Button
                        secondary
                        onClick={() => history.push("/personal")}
                    >
                        Change
                    </Button>                
                </div>
                <div className="summary-data">
                    <Summary
                        title="First Name"
                        summary={formData.firstName}
                    />
                    {formData.lastName ?
                        <Summary
                            title="Last Name"
                            summary={formData.lastName}
                        />
                        : ""
                    }
                    <Summary
                        title="Email"
                        summary={formData.email}
                    />
                </div>
                <div className="change-button">
                    <Button
                        secondary
                        onClick={() => history.push("/dob")}
                    >
                        Change
                    </Button>
                </div>
                <div className="summary-data" >
                    {formData.dob ? 
                        <Summary
                            title="Date of Birth"
                            summary={dob.toDateString()}
                        />
                        : ""
                        }
                </div>
                <div className="agreement-checkbox">
                    <input type="checkbox" checked={formData.agreement} onChange={handleChange} />
                    <p>Agree to <span onClick={openModal} >Terms & Conditions</span></p>
                </div>
                <div className="submit-button">
                    <Button
                        primary
                        type="submit"
                        disabled={!(formData.agreement)}
                        onClick={() => {
                            postData()
                            history.push("/homepage")
                        }}
                    >
                        SUBMIT
                    </Button>
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    style={modalStyle}
                    ariaHideApp={false}
                    contentClassName="modal-style"
                >
                    <ModalBody />
                    <button
                        onClick={closeModal}
                        className="close-button"
                    >
                        CLOSE
                    </button>
                </Modal>

            </div>
        </Template>
    ) 
}

export default Agreement;