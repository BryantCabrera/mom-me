import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "./Landing.css"


class Landing extends Component {
    render() {
        return (
            <div>THIS IS LANDING, HELLO : ) </div>
        )
    }
}

export default withRouter(Landing)