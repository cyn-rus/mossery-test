import React from "react"
import { Formik, Field, ErrorMessage, useFormik } from "formik";
import * as yup from "yup"
import FormField from "../../components/FormField/FormField"
import Template from '../../components/Template/Template';
import "./Personal.css"

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    pw: "",
    confPw: ""
}

const validateForm = yup.object().shape({
    firstName: yup
        .string()
        .required("First Name is required"),
    lastName: yup
        .string(),
    email: yup
        .string()
        .required("Email is required")
        .matches(
            /^(\w|\.|\_|\-)+[@](\w|\_|\-|\.)+[.]\w{2,3}$/,
            "Invalid email address"
            ),
    pw: yup
        .string()
        .required("Password in required")
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),
    confPw: yup
        .string()
        .required("Confirmation Password is required")
        .when("pw", {
            is: pw => (pw && pw.length > 0 ? true : false),
            then: yup.string().oneOf([yup.ref("pw")], "Password and Confirmation Password don't match")
        })
    })
    
const Personal = () => {
    const formik = useFormik({
        initialValues,
        validateForm
        // onSubmit
    })
    
    const firstNameProps = formik.getFieldProps("firstName")
    const lastNameProps = formik.getFieldProps("lastName")
    const emailProps = formik.getFieldProps("emailProps")
    const pwProps = formik.getFieldProps("pw")
    const confPwProps = formik.getFieldProps("confPw")

    return (
        <Template>
            <button>
                ← Homepage
            </button>
            <form onSubmit={formik.handleSubmit}>
                <FormField
                    label="First Name"
                    type="text"
                    name="firstName"
                    {...firstNameProps}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                ) : null}
                <FormField
                    label="Last Name"
                    type="text"
                    name="lastName"
                    {...lastNameProps}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div>{formik.errors.lastName}</div>
                ) : null}
                <FormField 
                    label="Email"
                    type="email"
                    name="email"
                    {...emailProps}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
                <FormField 
                    label="Password"
                    type="pw"
                    name="pw"
                    {...pwProps}
                />
                {formik.touched.pw && formik.errors.pw ? (
                    <div>{formik.errors.pw}</div>
                ) : null}
                <FormField 
                    label="Confirmation Password"
                    type="pw"
                    name="confPw"
                    {...confPwProps}
                />
                {formik.touched.confPw && formik.errors.confPw ? (
                    <div>{formik.errors.confPw}</div>
                ) : null}
                <button type="submit" disabled={!(formik.isValid && formik.dirty)}>
                    Next Page
                </button>
            </form>
        </Template>
    )   

}

export default Personal;