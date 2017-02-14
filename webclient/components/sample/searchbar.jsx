import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

class childComponent extends React.Component {
	constructor () {
		super();
		this.state = {
			location: '',
			cuisine: ''
		}
		this.changeLocation = this.changeLocation.bind(this);
		this.changeCuisine = this.changeCuisine.bind(this);
		this.clickChange = this.clickChange.bind(this);
	}
	changeLocation(e) {
		this.setState({
			location: e.target.value
		});
	}
	changeCuisine(e) {
		this.setState({
			cuisine: e.target.value
		});
	}
	clickChange(){
		this.props.restaurantData(this.state.location, this.state.cuisine);

	}

	render () {
		return (

			<div>
				<h1><p className='foodietitle1'>Find the best restaurants, cafés, and bars</p></h1>
  			<Input className='input1 topbar' autoFocus type='text' ref = 'location' placeholder='location...' onChange={this.changeLocation}/>
	  		<Input className='input2 topbar' type='text' ref = 'cuisine' placeholder='cuisine...'  onChange={this.changeCuisine}/>
				<Button className='search topbar' onClick={this.clickChange.bind(this)} color='red'>Search</Button>
			</div>
		);
	}
}

module.exports = childComponent;
