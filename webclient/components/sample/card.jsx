import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import ButtonComp from './button.jsx';

class MyCard extends React.Component{
  constructor(){
    super();
    this.sendData=this.sendData.bind(this);
  }

  sendData(){
    let resdata = {
      imageurl : this.props.image,
      resName : this.props.name,
      resCuisines : this.props.cuisines,
      resAddress : this.props.address,
      resRating : this.props.rating,
      resVotes : this.props.votes
    }
    console.log(JSON.stringify(resdata,undefined,2));
    $.ajax({
      url : "http://localhost:8080/restaurants/add",
      type : 'POST',
      data : resdata,
      success: function(data) {
          console.log(data);
        }.bind(this),
      error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
  }
  render(){
      return(
      <Card className='cards'>
        <Image src={this.props.image} className='cardImage'/>
        <Card.Content>
            <Card.Header>{this.props.name}</Card.Header>
            <Card.Meta>{this.props.cuisines}</Card.Meta>
            <Card.Description className='description'>{this.props.address}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
              <Icon name='star' />
              {this.props.rating}/{this.props.votes} Votes
            </a>
        </Card.Content>
        <ButtonComp save={this.sendData.bind(this)} display='Add Favourite'/>
      </Card>
    );
  }
}

module.exports = MyCard;
