import React from 'react';
import './register.css'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState} from 'react';
import { REGISTER } from '../../store/actions';
import { useNavigate } from 'react-router-dom';
import eye from '../../assets/eye-open.svg';
import eyeOpen from '../../assets/eye-slash.svg';
import { useSelector, useDispatch } from 'react-redux'
const RegisterPage = () => {
    const [visible, setVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setVisible(!visible);
    };
    const navigate = useNavigate();

    const [ fullName, setFullName] = useState('');
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ confirmPassword, setConfirmPassword] = useState('');

    const [people, setPeople] = useState([]);
    const dispatch = useDispatch()
    

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(fullName && email && password && confirmPassword){
            const person = {fullName, email, password, confirmPassword} 
            dispatch({ type: REGISTER, payload : person})
            setPeople([...people, person]);
            console.log(people)
            setFullName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }
    }
   
  return (
    <div className="register-container">
                        <form className="register-form" onSubmit={handleSubmit}>
                            <div className="form-header">
                                <div>Create Account here</div>
                            </div>
                            <div className="space-evenly">
                                <div className="register-form-control">
                                    <div className="register-form-label">Full Name</div>
                                    <div className="register-form-input">
                                    <input
                                        label="FullName"
                                        
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        value={fullName}
                                        placeholder="First-name  Last-name"
                                        onChange={(e)=>{setFullName(e.target.value)}}

                                    />
                                    </div>
                                </div>
                                <div className="register-form-control">
                                    <div className="register-form-label">Email</div>
                                    <div className="register-form-input">
                                        <input
                                           label="Email"
                                           
                                           id="email"
                                           name="email"
                                           type="text"
                                           value={email}
                                           placeholder="User@gmail.com"
                                           onChange={(e)=>{setEmail(e.target.value)}}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="space-evenly">
                                <div className="register-form-control">
                                    <div className="register-form-label">Password</div>
                                        <div className="register-form-input">
                                            <input
                                               label="Password"
                                               id="password"
                                               name="password"
                                              
                                               type={visible ? 'text' : 'password'}
                                               value={password}
                                               placeholder="Password"
                                               onChange={(e)=>{setPassword(e.target.value)}}
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
                                <div className="register-form-input">
                                    <input
                                        label="Confirm Password"
                                        id="password"
                                        name="password"
                                        
                                        type={visible ? 'text' : 'password'}
                                        value={confirmPassword}
                                        placeholder="Confirm Password"
                                        onChange={(e)=>{setConfirmPassword(e.target.value)}}
                                        
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
                            <div>
                            <button className="register-button"
                                    type="submit"
                                    onClick={()=>{
                                        navigate('./register');
                                    }}
                                    >
                                     SUBMIT
                                </button>
                            </div>
                            <div className="create-account">
                               Already have an account ?
                                <div onClick={()=>{
                                    navigate('/login');
                                }}>
                                    Log in
                                </div>
                            </div>
                        </form>
                    </div>
                    
  )
}
export default RegisterPage;