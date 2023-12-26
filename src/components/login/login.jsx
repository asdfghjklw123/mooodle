import React from "react";
import './login.css';
import avatar from './avatar.png'
import lock from './lock.png'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'

export default function Login(props) {
    console.log(props);
    const initialValues = {
        username: '',
        password: '',
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
    });

    const onSubmit = values => {
        props.login(values)
        console.log(values);
    };

    return (
        <div className="login">
            <div className="container">
                <div className="login-menu">
                    <div className="login-text">ВХОД</div>
                    <div className="input-menu-login">
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {
                formik => {
                    return <Form>
                        <div className="input-card">
                            <div className="avatar-login">
                                <img src={avatar} alt="" />
                            </div>
                            <div className="input-login">
                                <Field component='input' name="username" type="text" placeholder="Username" />
                            </div>
                        </div>
                        <div className="input-card2">
                            <div className="avatar-login">
                                <img src={lock} alt="" />
                            </div>
                            <div className="input-login">
                                <Field component='input' name="password" type="text" placeholder="Password" />
                            </div>
                        </div>
                        <div className="btns-remember-login">
                            <div className="remember">
                                <input type="checkbox" name="check"/>
                                <label htmlFor="check" className="remember-text">Запомнить меня</label>
                            </div>
                            <div className="btn-login">
                                <button type="submit" disabled={!formik.isValid} className="btn-login-text">Вход</button>
                            </div>
                        </div>
                        </Form>}}
                    </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}