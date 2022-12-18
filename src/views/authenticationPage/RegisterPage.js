import React from 'react';
import './register.css'
import { Formik, Field } from 'formik';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCallback, useContext, useState } from 'react';
import AuthContext from '../../store/context';
import notify from '../../hooks/UseNotify';
import { greenPrimary } from '../../store/constant';
import Button from '@mui/material/Button';
import Loader from 'react-loader-spinner';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import eye from '../../assets/eye-open.svg';
import eyeOpen from '../../assets/eye-slash.svg';
const RegisterPage = () => {

    const { setAuth } = useContext(AuthContext);
    const [visible, setVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setVisible(!visible);
    };
    const navigate = useNavigate();
    const navigateSuccess = useCallback(() => {
        const token = window.sessionStorage.getItem('token');

        window.location.href = `http://localhost:3001/dashboard/?token=${token}`;
    }, []);
    const submit = useCallback(
        async (username, password) => {
            const credentials = {
                username,
                password
            };
            // try {
            //     const requestOptions = {
            //         method: 'POST',
            //         body: JSON.stringify(credentials),
            //         headers: {
            //             'content-type': 'application/json'
            //         }
            //     };
            //     const res = await fetch(LoginUrl, requestOptions);
            //     if (res.ok) {
            //         const userId = await res.text();
            //         const authorizationHeader = res.headers.get('Authorization');
            //         let token = authorizationHeader.split('Bearer ');
            //         token = token[1];
            //         // save token to local
            //         // saving in your session for frequent usage
            //         window.sessionStorage.setItem('token', token);
            //         // retrieve user details
            //         let userDetails = {};
            //         const userRetrievalUrl = generateRetrieveUserDetailsUrl(userId);
            //         const userDetailsResponse = await fetch(userRetrievalUrl, {
            //             method: 'GET',
            //             headers: {
            //                 Authorization: `${token}`
            //             }
            //         });
            //         if (userDetailsResponse.ok) {
            //             userDetails = await userDetailsResponse.json();
            //             const authObj = {
            //                 userId,
            //                 token,
            //                 email: userDetails.email,
            //                 name: userDetails.name || 'NA',
            //                 type: userDetails.type,
            //                 profile: userDetails
            //             };
            //             setAuth(authObj);
            //             window.sessionStorage.setItem('auth', JSON.stringify(authObj));
            //             window.sessionStorage.setItem('profile', JSON.stringify(userDetails));
            //             let name = userDetails.name;
            //             if (!name) {
            //                 name = '';
            //             }

            //             notify(`Welcome ${name}`, false, navigateSuccess);
            //         } else {
            //             return;
            //         }
            //     } else {
            //         const returnValue = await res.json();
            //         console.log(returnValue);
            //         if (returnValue.message === 'Bad credentials') {
            //             notify('Incorrect Email or Password', true);
            //         } else if (returnValue.message === 'User is disabled') {
            //             notify('Please confirm your account', true);
            //         } else {
            //             notify(returnValue.message, true);
            //         }
            //     }
            // } catch (err) {
            //     notify(err.message, true);
            //     console.log(err);
            // }
        },
        []
    );
  return (
    <div className="register-container">
        <Formik
                initialValues={{ email: '', password: '' }}
                validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Email field cannot be empty';
                    } else if (!validator.isEmail(values.email)) {
                        errors.email = 'Please enter a valid email';
                    }
                    if (!values.password) {
                        errors.password = 'Password cannot be empty';
                    }
                    return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                    await submit(values.email, values.password);
                    setSubmitting(false);
                }}>
                {({ isValid, values, handleChange, handleSubmit, handleBlur, isSubmitting }) => (
                    <>
                        <form className="register-form" onSubmit={handleSubmit}>
                            <div className="form-header">
                                <div>Create Account here</div>
                            </div>
                            <div className="space-evenly">
                                <div className="register-form-control">
                                    <div className="register-form-label">Full Name</div>
                                    <div className="formInput">
                                    <Field
                                        label="Email Address"
                                        id="123asawfa"
                                        name="firstName"
                                        type="text"
                                        value={values.firstName}
                                        placeholder="First Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    </div>
                                </div>
                                <div className="register-form-control">
                                    <div className="register-form-label">Email</div>
                                    <div className="formInput">
                                        <Field
                                            label="Email Address"
                                            id="123asawfa"
                                            name="email"
                                            type="email"
                                            value={values.email}
                                            placeholder="Email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="space-evenly">
                                <div className="register-form-control">
                                    <div className="register-form-label">Password</div>
                                        <div className="formInput">
                                            <Field
                                                label="Password"
                                                id="123asaeaq"
                                                name="password"
                                                type={visible ? 'text' : 'password'}
                                                value={values.password}
                                                placeholder="Enter Password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        <div
                                            className="eye-icon"
                                            onClick={togglePasswordVisibility}
                                            onKeyDown={togglePasswordVisibility}
                                            role="button"
                                            tabIndex={0}>
                                            <img
                                                src={visible ? eyeOpen : eye}
                                                alt=""
                                                style={{
                                                    paddingRight: '1rem',
                                                    cursor: 'pointer'
                                                }}
                                            />
                                        </div>
                                        </div>
                                </div>
                            
                            <div className="register-form-control">
                                <div className="register-form-label">Confirm Password</div>
                                <div className="formInput">
                                    <Field
                                        label="Confirm Password"
                                        id="123asaeaq"
                                        name="confirmPassword"
                                        type={visible ? 'text' : 'password'}
                                        value={values.confirmPassword}
                                        placeholder="Confirm Password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <div
                                        className="eye-icon"
                                        onClick={togglePasswordVisibility}
                                        onKeyDown={togglePasswordVisibility}
                                        role="button"
                                        tabIndex={0}>
                                        <img
                                            src={visible ? eyeOpen : eye}
                                            alt=""
                                            style={{
                                                paddingRight: '1rem',
                                                cursor: 'pointer'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="button">
                            <Button
                                disabled={!isValid}
                                type="submit"
                                variant="contained"
                                onClick={()=>{navigate('/dashboard/my-music')}}
                                sx={{
                                    backgroundColor: '#edeeee',
                                    width: '20rem',
                                    paddingTop: '1rem',
                                    paddingBottom: '1rem',
                                    outLine: '1px solid #fff',
                                    margin: '2rem',
                                    color: 'black',
                                    '&:hover': { backgroundColor: "#000",
                                    borderStyle: 'groove',
                                    border: '1px solid #fff',
                                    color: '#edeeee' }
                                    }}>
                                {isSubmitting && <Loader type="TailSpin" color="#FFF" height={20} width={20} />}
                                {!isSubmitting && 'Submit'}
                            </Button>
                            </div>
                            <div className="create-account">
                               Already have an account ?
                                <a className="create-accountLink" href="/login">
                                    Log in
                                </a>
                            </div>
                        </form>
                    </>
                )}
            </Formik>
        </div>
  )
}

export default RegisterPage;