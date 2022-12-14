import React from 'react';
import './loginPage.css'
import { Formik, Field } from 'formik';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCallback, useContext, useState } from 'react';
import AuthContext from '../../store/context';
import notify from '../../hooks/UseNotify';
import { useNavigate } from 'react-router-dom';
import { greenPrimary } from '../../store/constant';
import Button from '@mui/material/Button';
import Loader from 'react-loader-spinner';
import validator from 'validator';
import eye from '../../assets/eye-open.svg';
import eyeOpen from '../../assets/eye-slash.svg';
import { useSelector, useDispatch } from 'react-redux'
import { LOGIN } from './../../store/actions'

const LoginPage = () => {

    const authState = useSelector((state) => state.authentication)
    const [visible, setVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setVisible(!visible);
    };
    
    console.log(authState, 'authstate');
    const dispatch = useDispatch();
    
    const submit = useCallback(
        async (username, password) => {
            const credentials = {
                username,
                password
            };
            dispatch({ type: LOGIN, payload : credentials})
            console.log(credentials);
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
    <div className="login-container">
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
                        <form className="login-form" onSubmit={handleSubmit}>
                            <div className="form-header">
                                <div>Login</div>
                                <h2>Welcome back, It&apos;s good to see you again</h2>
                            </div>
                            <div className="form-control">
                                <div className="formLabel">Email</div>
                                <Field
                                    label="Email Address"
                                    id="123asawfa"
                                    name="email"
                                    type="email"
                                    value={values.email}
                                    placeholder="Email Address  Ex. ( learnspace@example.com )"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div className="form-control">
                                <div className="formLabel">Password</div>
                                <div className="form-input">
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
                            <div className="forgot-password">
                                <a className="forgot-passwordLink" href="/forgot-password">
                                    Forgot Password ?
                                </a>
                            </div>
                            <Button 
                                disabled={!isValid}
                                type="submit"
                                variant="contained"
                                // onClick={()=>{
                                //   navigate('./dashboard/my-music');
                                // }}
                                sx={{
                                    backgroundColor: '#fff',
                                    width: '20rem',
                                    paddingTop: '1rem',
                                    paddingBottom: '1rem',
                                    outLine: '1px solid #fff',
                                    marginBottom: '1rem',
                                    marginLeft: '2rem',                                        color: 'black',
                                    '&:hover': { backgroundColor: "#000",
                                    borderStyle: 'groove',
                                    border: '1px solid #fff',
                                    color: '#edeeee' }
                                    }}>
                                    {isSubmitting && <Loader type="TailSpin" color="#FFF" height={20} width={20} />}
                                    {!isSubmitting && 'Login'}
                                </Button>
                            <div className="create-account">
                                Don&apos;t have an account ?
                                <a className="create-accountLink" href="/register">
                                    Create account
                                </a>
                            </div>
                        </form>
                    </>
                )}
            </Formik>
        </div>
  )
}

export default LoginPage