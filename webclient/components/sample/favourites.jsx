import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import MyCard from './card.jsx';

class MyFavourites extends React.Component{
  constructor() {
    super();
    this.state = {
      objArray : []
    }
    this.getFavourites = this.getFavourites.bind(this);
    this.change = this.change.bind(this);
  }

  getFavourites() {
    $.ajax({
			 url:"http://localhost:8080/restaurants/",
			 type:'GET',
			 beforeSend: function (request)
									 {
											 request.setRequestHeader("user-key", "46a2eab73fc526624bab1d5a65c8001a");
									 },
			success: function(data)
			{
				console.log('Successfully got JSON from Zomato' + data);
				console.log(JSON.stringify(data,undefined,2));
        this.setState({
          objArray: data
        });
			}.bind(this),
			error: function(err)
			{
				console.log('error occurred on AJAX');
				console.log(err);
			}.bind(this)
		});
  }
  componentDidMount() {
    this.getFavourites();
  }
  change(){
    this.getFavourites();
  }
  render () {
    let values = this.state.objArray;
    let refresh = this.change;
		let cards = values.map(function(item) {
				return (
			<div>
					<MyCard resid={item._id} image={item.imageurl} name={item.resName} comments={item.comments} change={refresh} cuisines={item.resCuisines} address={item.resAddress} rating={item.resRating} votes={item.resVotes} detail="fav"/>
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
module.exports = MyFavourites;
