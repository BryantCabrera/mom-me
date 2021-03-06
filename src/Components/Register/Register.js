import React, { Component } from "react";
import {withRouter} from 'react-router-dom'
import './Register.css'


class Register extends Component {
  state = {
    email: '',
    name: '',
    password: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const newMom = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
    }
    
    try {
        const loginResponse = await fetch(`${process.env.REACT_APP_API_URL}/moms`,
        {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(newMom),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(!loginResponse.ok) {
            throw Error(loginResponse.statusText)
        }

        const parsedResponse = await loginResponse.json()

        if (parsedResponse.message === 'Registration successful.') {
            this.props.history.push('/form')
        }

    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
  <div className="register-container">
      {/* <img className="logo" src="https://imgur.com/442qz4S"/> */}
      <form className="register-flex" onSubmit={this.handleSubmit}>
          <h1 className="register-header">MOM and ME</h1>
          <h4 className="register-line">Create your account</h4>
          <label>
              <input id="register-email" className="register-input" type='email' name='email' value={this.state.email} onChange={this.handleChange} placeholder="Email" />
          </label>
          <label>
              <input id="register-name" className="register-input" type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder="Name" />
          </label>
          <label>
              <input id="register-password" className="register-input" type='password' name='password' value={this.state.password} onChange={this.handleChange} placeholder="Password" />
          </label>
          <button className="register-btn" type='submit'> Register </button>
      </form>
  </div>
  
      // <div>
      //     <form 
      //     className="login-flex" 
      //     onSubmit={this.handleSubmit}>
      //       <h1 className="login-header">Register</h1>
      //       <label>
      //         <input
      //           id="login1"
      //           className="login-input"
      //           type="text"
      //           name="name"
      //           placeholder="name"
      //           value={this.state.name}
      //           onChange={this.handleChange}
      //         />
      //       </label>
      //       <label>
      //         <input
      //           id="login2"
      //           className="login-input"
      //           type="email"
      //           name="email"
      //           placeholder="email"
      //           value={this.state.email}
      //           onChange={this.handleChange}
      //         />
      //       </label>
      //       <label>
      //         <input
      //           id="login3"
      //           className="login-input"
      //           type="password"
      //           name="password"
      //           placeholder="password"
      //           value={this.state.password}
      //           onChange={this.handleChange}
      //         />
      //       </label>
      //       <button className="login-btn" type="submit">
      //         Login
      //       </button>
      //     </form>
      // </div>
    );
  }
}

export default withRouter(Register)