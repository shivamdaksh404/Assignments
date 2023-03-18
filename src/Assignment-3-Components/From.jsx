import React, { Fragment, useState } from 'react'
import './From.css'

export default function From() {
    const [login, setLogin] = useState(false)
    function changeSignUp() {
        setLogin(!login)

    }

    return (
        <div className='sign-in-from'>
            <h1>Welcome!</h1>
            <p>{login ? "sign up " : "Log in "}your account</p>
            <from className="inputfields">
                {login ?
                    <Fragment>

                        First Name{' '}
                        <input placeholder='first name' />
                        <br />
                        Last Name
                        <input placeholder='last name' />
                        <br />
                        Email{' '}
                        <input placeholder='Email' />
                        <br />
                        Password{' '}
                        <input placeholder='password' />
                        <br />
                    </Fragment>
                    :

                    <Fragment>
                        Email{' '}
                        <input placeholder='Email' />
                        <br />
                        Password{' '}
                        <input placeholder='password' />
                        <br />
                        <div className='forgot-password'>
                            <div>
                                <input type={'checkBox'} />
                                <span>Remember Me</span>
                            </div>
                            <p style={{ fontSize: "14px" }}>Forgot Password</p>
                        </div>
                    </Fragment>
                }
                <button className='sing-up'> {login ? "sign-up" : "login"}</button>
            </from>
            <p>-----------------------or-------------------------</p>
            <div>
                <button> <img src='' alt='' /> Continue with Google </button>
                <button > <img src='' alt='' /> Continue with Facebook </button>
            </div>

            <p> {login ? "Already an account" : "If you have no any account?"}
                <a onClick={changeSignUp} style={{ cursor: "pointer", color: "blue" }}>
                    {login ? " login" : " signUp"}</a>
            </p>
        </div>
    )
}
