import React, { useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import { useFormik } from "formik"
import { AppContext } from '../../context';
import * as yup from "yup"

import "./Personal.css"

import FormField from "../../components/FormField/FormField"
import Template from '../../components/Template/Template'
import Button from "../../components/Button/Button"

const validationSchema = yup.object().shape({
    firstName: yup
        .string()
        .required("First Name is required"),
    lastName: yup
        .string()
        .required("Last Name is required"),
    email: yup
        .string()
        .min(3)
        .required("Email is required")
        .email("Invalid email address"),
    password: yup
        .string()
        .required("Password is required")
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),
    confPassword: yup
        .string()
        .required("Confirmation Password is required")
        .when("password", {
            is: password => (password && password.length > 0 ? true : false),
            then: yup.string().oneOf([yup.ref("password")], "Password and Confirmation Password don't match")
        })
})

const Personal = () => {
    const { formData: initialValues, setFormData } = useContext(AppContext)
    const history = useHistory()

    const formik = useFormik({
        initialValues,
        validationSchema,
    })

    const firstNameProps = formik.getFieldProps("firstName")
    const lastNameProps = formik.getFieldProps("lastName")
    const emailProps = formik.getFieldProps("email")
    const passwordProps = formik.getFieldProps("password")
    const confPasswordProps = formik.getFieldProps("confPassword")

    useEffect(() => {
        if (localStorage.getItem('formData')){
            const data = localStorage.getItem(('formData'));
            formik.setValues(JSON.parse(data));
        }
    })
    
    return (
        <Template>
            <div className="personal-page">
                <Button
                    secondary
                    onClick={() => history.push("/homepage")}
                >
                    ← Homepage
                </Button>
                <form onSubmit={formik.handleSubmit}>
                    <FormField
                        label="First Name"
                        type="text"
                        name="firstName"
                        touched={formik.touched.firstName}
                        errors={formik.errors.firstName}
                        {...firstNameProps}
                    />
                    <FormField
                        label="Last Name"
                        type="text"
                        name="lastName"
                        touched={formik.touched.lastName}
                        errors={formik.errors.lastName}
                        {...lastNameProps}
                    />
                    <FormField 
                        label="Email"
                        type="email"
                        name="email"
                        touched={formik.touched.email}
                        errors={formik.errors.email}
                        {...emailProps}
                    />
                    <FormField 
                        label="Password"
                        type="password"
                        name="password"
                        touched={formik.touched.password}
                        errors={formik.errors.password}
                        {...passwordProps}
                    />
                    <FormField 
                        label="Confirmation Password"
                        type="password"
                        name="confirmedPassword"
                        touched={formik.touched.confPassword}
                        errors={formik.errors.confPassword}
                        {...confPasswordProps}
                    />
                    
                    <div className="next-page-button">
                        <Button
                            primary 
                            type="submit"
                            disabled={!(formik.isValid && formik.dirty)}
                            onClick={() => {
                                    localStorage.setItem('formData', JSON.stringify({...formik.values, dob: initialValues.dob, agreement: initialValues.agreement }))
                                    setFormData(formik.values)
                                    history.push("/dob")
                                }
                            }
                        >
                            NEXT PAGE
                        </Button>
                    </div>
                </form>
            </div>
        </Template>
    )   

}

export default Personal;