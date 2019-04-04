import React, { Component } from 'react';
import './App.css';
import Landing from './Components/Landing/Landing'
import { Switch, Route, withRouter } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import "semantic-ui-css/semantic.min.css";
import Sittersindex from './Components/Sittersindex/Sittersindex'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import Survey from './Components/Survey/Survey'
import Datepicker from './Components/Datepicker/Datepicker'
import Dashboard from './Components/Dashboard/Dashboard';



class App extends Component {
    state = {
        loggedUser: {}
    }

    doSetLoggedUser = (loggedUser) => {
        console.log(loggedUser)
        this.setState({ loggedUser })
    }

    doLoginUser = async (user) => {
        try {
            const loginResponse = await fetch(
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

                this.props.history.push(`/dashboard`);
            } else {
                this.setState({
                    loginError: parsedResponse.message
                });
            }
        } catch (err) {
            console.log(err);
        }
    }

    doHandleLogout = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/logout`)

            if (!response.ok) {
                throw Error(response.statusText)
            } else {
                console.log(response);
            }

            const deletedSession = await response.json();
            this.setState({
                loggedUser: deletedSession.user || {}
            })

            this.props.history.push("/");
            console.log(deletedSession, 'logged')

        } catch (err) {
            console.log(err)
            console.log('hitting')
        }
    }

    render() {
        return (
            <div>
                <Nav doHandleLogout={this.doHandleLogout} />
                <Switch>
                    <Route exact path={'/home'} component={() => <Register />} />
                    <Route exact path={'/sitters'} component={() => <Sittersindex />} />
                    <Route exact path={'/login'} component={(...props) => <Login {...props} history={this.props.history} doLoginUser={this.doLoginUser}/>} />
                    <Route exact path={'/'} component={() => <Landing />} />
                    <Route exact path={'/survey'} component={() => <Survey />} />
                    <Route exact path={'/datepicker'} component={() => <Datepicker />} />
                    <Route exact path={'/dashboard'} component={() => <Dashboard />} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(App);
