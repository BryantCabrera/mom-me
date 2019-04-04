import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          href={`/home`}
        >
        {/* <Link to='/home'>Home</Link> */}
        </Menu.Item>

        <Menu.Item to='/sitters' 
          name='sitters' 
          active={activeItem === 'sitters'} 
          onClick={this.handleItemClick} 
          href={`/sitters`}>
        {/* <Link to='/sitters'>Sitters</Link> */}
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          Upcoming Events
        </Menu.Item>

        <Menu.Item to='/login' 
          name='login' 
          active={activeItem === 'login'} 
          onClick={this.handleItemClick} 
          href={`/login`}>
        </Menu.Item>
        
         <Menu.Item
            name='upcomingEvents'
            active={activeItem === 'upcomingEvents'}
            onClick={this.props.doHandleLogout}
          >
              Log Out
          </Menu.Item>
      </Menu>
    )
  }
}
