import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
const {Link} = require('react-router');
class MenuExampleContentProp extends Component {
    state = {}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    logoutCall() {
        $.ajax({
            url: '/users/logout',
            type: 'GET',
            // datatype: 'JSON',
            // data:{username :this.state.username,password:this.state.password},
            success: function(res) {
                if (typeof res.redirect === 'string') {
                    window.location.replace(window.location.protocol + "//" + window.location.host + res.redirect);
                console.log(res.responseText);
              }
            }.bind(this),
            error: function(err) {
                alert("error occurred while logging out");
                console.log(err.responseText);
            }.bind(this)
        });
    }
    render() {
        const {activeItem} = this.state

        return (
            <Menu className='ui top fixed menu'>
                <Link to="/home">
                    <Menu.Item name='Home' active={activeItem === 'Home'} content='Home' onClick={this.handleItemClick}/></Link>
                <Link to="/favourites">
                    <Menu.Item name='Favourites' active={activeItem === 'Favourites'} content='Favourites' onClick={this.handleItemClick}/>
                </Link>
                <Menu.Item name='logout' active={activeItem === 'logout'} position='right' onClick={this.logoutCall}/>
            </Menu>
        )
    }
}

module.exports = MenuExampleContentProp;
