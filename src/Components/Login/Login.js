import React, { Component } from 'react'
import './Login.css'


class Login extends Component {
    render() {
        return (
                <div className="login-container">
                        <form className="login-flex">
                            <h1 className="login-header">LOG-IN</h1>
                            <label>
                                <input id="login1" className="login-input" type='text' name='username' placeholder="username"/>
                            </label>
                            <label>
                                <input id="login2" className="login-input" type='email' name='email' placeholder="email"/>
                            </label>
                            <label>
                                <input id="login3" className="login-input" type='password' name='password' placeholder="password"/>
                            </label>
                            <button className="login-btn" type='submit'>Login</button>
                    </form>
                </div>
        )
    }
}

export default Login