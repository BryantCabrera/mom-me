import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Login.css'


class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    doHandleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(this.state,'hitting handleinput')
    }

    doHandleSubmit = (e) => {
        e.preventDefault()
        this.props.doLoginUser(this.state)
    }



    render() {
        console.log(this.props, 'this is props from Login Component');
        return (
            <div className="login-container">
                <form className="login-flex" onSubmit={this.doHandleSubmit}>
                    <h1 className="login-header">LOG-IN</h1>
                    <label>
                        <input id="login2" className="login-input" type='email' name='email' value={this.state.email} onChange={this.doHandleInput} placeholder="email" />
                    </label>
                    <label>
                        <input id="login3" className="login-input" type='password' name='password' value={this.state.password} onChange={this.doHandleInput} placeholder="password" />
                    </label>
                    <button className="login-btn" type='submit'> Login </button>
                </form>
            </div>
        )
    }
}

export default withRouter(Login)