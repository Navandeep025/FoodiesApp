import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import ButtonComp from './button.jsx';
import MyCard from './card.jsx';

class GrandChild extends React.Component {
	constructor () {
		super();
	}
	// static defaultProps = {}


	render () {
		let cards = this.props.requiredData.map(function(item) {
				return (
			<div>
					<MyCard image={item.restaurant.featured_image} name={item.restaurant.name} cuisines={item.restaurant.cuisines} address={item.restaurant.location.address} rating={item.restaurant.user_rating.aggregate_rating} votes={item.restaurant.user_rating.votes}/>
			</div>
			);
		});

		return (
			<div>
			<Card.Group itemsPerRow={2}>
				{cards}
			</Card.Group>
		</div>
		);
	}
}

module.exports = GrandChild;
