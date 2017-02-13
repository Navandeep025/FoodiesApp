import React from 'react';
import { Card } from 'semantic-ui-react';
import MyCard from './card.jsx';

class GrandChild extends React.Component {
	constructor () {
		super();
	}
	// static defaultProps = {}


	render () {
		let cards = this.props.requiredData.map(function(item) {
			let values = arguments[1];
				return (
			<div>
					<MyCard index={values} resid={item.restaurant.R.res_id} image={item.restaurant.featured_image} name={item.restaurant.name} cuisines={item.restaurant.cuisines} address={item.restaurant.location.address} rating={item.restaurant.user_rating.aggregate_rating} votes={item.restaurant.user_rating.votes} detail="main"/>
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

GrandChild.propTypes = {
        comments: React.PropTypes.string.isRequired,
        rating: React.PropTypes.string.isRequired,
        votes: React.PropTypes.string.isRequired,
        cuisines: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        image: React.PropTypes.string.isRequired,
        address: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired,
        change: React.PropTypes.string.isRequired,
        detail: React.PropTypes.string.isRequired,
        resid: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
        requiredData: React.PropTypes.object.isRequired
};
module.exports = GrandChild;
