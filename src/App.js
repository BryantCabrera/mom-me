import React, { Component } from 'react';
import './App.css';
import Landing from './Components/Landing/Landing'
import { Switch, Route, withRouter } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import "semantic-ui-css/semantic.min.css";
import Sittersindex from './Components/Sittersindex/Sittersindex'
import Register from './Components/Register/Register'



class App extends Component {
    state = {
        loggedUser: {}
    }

    doLoginUser = async (user) => {
        try {
            const loginResponse = await fetch (
                `${process.env.REACT_APP_API_URL}/auth/login`,
                {
                    method: "POST",
                    credentials: "include",
                    body: JSON.stringify(user),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            if (!loginResponse.ok) {
                throw Error(loginResponse.statusText);
            }

            const parsedResponse = await loginResponse.json();

            if (parsedResponse.message === "login successful") {
                //Resets this component's state if a use was successfully logged in
                this.setState({
                    loggedUser: parsedResponse.data
                });

                this.props.history.push(`/sitters`);
            } else {
                this.setState({
                    loginError: parsedResponse.message
                });
            }
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <body>
                <Nav />
                <Switch>
                <Route exact path={'/home'} component={ () => <Register/>} />
                <Route exact path={'/sitters'} component={() => <Sittersindex />} />
                </Switch>
            </body>
        )
    }
}

export default withRouter(App);
