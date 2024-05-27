import React, { useState } from 'react'
import './SignUp.css'
import { Behance, Facebook, Google, Twitter } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { signUpUser, userSignInGooglePopUp } from '../../Servises/actions/admin.action';

export function SignUp() {

    const { isSignUp } = useSelector(state => state.adminReducer)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [signUp, setSignUp] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setSignUp({ ...signUp, [name]: value });
    }


    const handleSignUp = (e) => {
        e.preventDefault();

        dispatch(signUpUser(signUp.email, signUp.password));

        setSignUp({
            email: '',
            password: ''
        })


    }

    const handleSignInGooglePopUp = () =>{

        dispatch(userSignInGooglePopUp());
        navigate("/login")
    }

    const handleLogIn = () =>{
        navigate('/login');
    }

    if (isSignUp) {

        navigate("/login")

    } else {

        return (
            <>
                <div className="signup">
                    <div className="signup-connect">
                        <h1>Create An Account</h1>
                        <a href="#" className="btn btn-social btn-google" onClick={handleSignInGooglePopUp}>
                            <Google className='me-2' />
                            Sign in with Google
                        </a>
                        <a href="#" className="btn btn-social btn-facebook">
                            <Facebook className='me-2' />
                            Sign in with Facebook
                        </a>
                        <a href="#" className="btn btn-social btn-twitter">
                            <Twitter className='me-2' />
                            Sign in with Twitter
                        </a>
                        <a href="#" className="btn btn-social btn-behance">
                            <Behance className='me-2 ' />
                            Sign in with Behance
                        </a>
                    </div>
                    <div className="signup-classNameic">
                        <h2 className='my-4 fs-3 px-3 fw-bold fst-italic'>MOX FOOD RESTAURANT</h2>
                        <form className="form" onSubmit={handleSignUp}>
                            {/* <fieldset className="username">
                                <input type="text" placeholder="username" />
                            </fieldset> */}
                            <fieldset className="email">
                                <input type="email" placeholder="email" name='email' required="email" value={signUp.name} onChange={handleChange} />
                            </fieldset>
                            <fieldset className="password">
                                <input type="password" placeholder="password" name='password' required="password" value={signUp.password} onChange={handleChange} />
                            </fieldset>
                            <button type="submit" className="btn">Sign up</button>
                            <button type="submit" className="btn" onClick={handleLogIn}>LogIn</button>
                        </form>
                    </div>
                </div>
            </>
        )

    }

}
