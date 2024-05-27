import React, { useState } from 'react'
import './LogIn.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { logInUser, userSignInGooglePopUp } from '../../Servises/actions/admin.action';
import { Button } from 'react-bootstrap';


function LogIn() {

    const { isLogIn } = useSelector(state => state.adminReducer)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logIn, setLogIn] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setLogIn({ ...logIn, [name]: value })
    }

    const handleLogIn = (e) => {
        e.preventDefault();

        dispatch(logInUser(logIn.email, logIn.password));

    }

    const handleGooglePopup = () => {
        dispatch(userSignInGooglePopUp());
    }


    if (isLogIn) {

        navigate("/deshboard")

    } else {

        return (
            <>
                <div className="login-box">
                    <h2>Login</h2>
                    <form onSubmit={handleLogIn}>
                        <div className="user-box">
                            <input type="email" name="email" value={logIn.email} onChange={handleChange} required="email" />
                            <label>Email</label>
                        </div>
                        <div className="user-box">
                            <input type="password" name="password" value={logIn.password} onChange={handleChange} required="password" />
                            <label>Password</label>
                        </div>
                        <button type="submit">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            LogIn
                        </button>

                        <button className='ms-2' type="submit" onClick={handleGooglePopup}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Google SignIn
                        </button>
                        {/* 
                        <p className='mt-5'>
                            You have a no Account Please <Button className='p-1 m-0' onClick={handleSignUp}>SignUp</Button>
                        </p> */}
                    </form>
                </div>
            </>
        )

    }

}

export default LogIn
