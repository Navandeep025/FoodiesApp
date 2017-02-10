// var React = require('react');
// var {Link} = require('react-router');
// var NavBar = React.createClass({
//
// render:function(){
//   return(
//     <div className="container-fluid">
//     <ul className="nav navbar-nav">
//     <li><Link to="/">Home</Link></li>
//     <li><Link to="/gmailbox">Gmail</Link></li>
//     <li><Link to="/about">About Us</Link></li>
//     </ul>
//     </div>
//   );
// }
// });

// module.exports=NavBar;

import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
var {Link} = require('react-router');
class MenuExampleContentProp extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fixed><Link to="/">
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          content='Home'
          onClick={this.handleItemClick}
        /></Link>
        <Link to="/about">
        <Menu.Item
          name='Favourites'
          active={activeItem === 'Favourites'}
          content='Favourites'
          onClick={this.handleItemClick}
        />
      </Link>
    </Menu>
    )
  }
}

module.exports=MenuExampleContentProp;
