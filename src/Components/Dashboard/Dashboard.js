import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Dashboard extends Component {
    render() {
        console.log(this.props.loggedUser, 'hitting loggedUser from Dashboard')
        return (
            <div>
                <div>DASHBOARD</div>
                <div>{this.props.loggedUser.name}</div>
                <div>{this.props.loggedUser.email}</div>
                <img src={`${this.props.loggedUser.img}`}></img>
                <button onClick={this.props.doDeleteUser}>DELETE PROFILE</button>
                <Link to="/edit-profile"><button>EDIT PROFILE</button></Link>
            </div>

        )
    }
}

export default Dashboard