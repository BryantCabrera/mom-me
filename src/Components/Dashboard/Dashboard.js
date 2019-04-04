import React, { Component } from 'react'


class Dashboard extends Component {
    render() {
        console.log(this.props.loggedUser, 'hitting loggedUser from Dashboard')
        return (
            <div>
                <div>DASHBOARD</div>
                <div>{this.props.loggedUser.name}</div>
                <div>{this.props.loggedUser.email}</div>
                <img src={`${this.props.loggedUser.img}`}></img>
                <button onClick={this.props.doDeleteUser}>DELETE USER</button>
            </div>

        )
    }
}

export default Dashboard