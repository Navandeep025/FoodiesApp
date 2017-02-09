import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Icon, Image, Button } from 'semantic-ui-react'

class GrandChild extends React.Component {
	constructor () {
		super();
	}
	static defaultProps = {}
	render () {
		let cards = this.props.requiredData.map(function(item) {
			return (
				<div>
					<Card className='cards'>
	    <Image src={item.restaurant.featured_image} className='cardImage'/>
	    <Card.Content>
	      <Card.Header>{item.restaurant.name}</Card.Header>
	      <Card.Meta>{item.restaurant.cuisines}</Card.Meta>
	      <Card.Description className='description'>{item.restaurant.location.address}</Card.Description>
	    </Card.Content>
	    <Card.Content extra>
	      <a>
	        <Icon name='star' />
	        {item.restaurant.user_rating.aggregate_rating}/{item.restaurant.user_rating.votes} Reviews
	      </a>
	    </Card.Content>
			<Button color='red'>Add Favourite<Icon className='heartIcon' name='heart' /></Button>
	  </Card>
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
