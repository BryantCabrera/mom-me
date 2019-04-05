import React, { Component } from 'react'
// import './Login.css'


class EditMom extends Component {

    state = {
        name: '',
        img: '',
        sex: '',
        location: 0,
        children: [],
        caretakers: []
    }

    doHandleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    doHandleSubmit = (e) => {
        e.preventDefault()
        const mom = {
            ...this.state,
            email: this.props.loggedUser.email,
            _id: this.props.loggedUser._id
        }
        console.log(mom,'this is mom from handle submit')
        console.log(this.state, 'state from editmom')
        this.props.doEditMom(mom)
    }


    render() {
        console.log(this.props);
        return (
            <div>
                <form onSubmit={this.doHandleSubmit}>
                    <h1>EDIT PROFILE</h1>
                    <label>
                        <input type='text' name='name' defaultValue={this.state.name} onChange={this.doHandleInput} placeholder={this.props.loggedUser.name} />
                    </label>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default EditMom