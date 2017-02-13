import React from 'react';
import { Card, Icon, Image} from 'semantic-ui-react';
import ButtonComp from './button.jsx';
import { Input } from 'semantic-ui-react';

class MyCard extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: ''
    };
    this.sendData = this.sendData.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.updateData = this.updateData.bind(this);
    this.changeComment = this.changeComment.bind(this);
  }
  static defaultProps = {comments: ''}
  sendData() {
    let resdata = {
      _id: this.props.resid,
      imageurl: this.props.image,
      resName: this.props.name,
      resCuisines: this.props.cuisines,
      resAddress: this.props.address,
      resRating: this.props.rating,
      resVotes: this.props.votes,
      comments: this.state.comments
    };
    console.log(JSON.stringify(resdata, undefined, 2));
    $.ajax({
      url: "http://localhost:8080/restaurants/add",
      type: 'POST',
      data: resdata,
      success: function(data) {
          console.log(data);
        }.bind(this),
      error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
  }

  deleteData(){
    let dataid = {
      id: this.props.resid
    }
    console.log(this.props.resid);
    $.ajax({
      url: "http://localhost:8080/restaurants/delete",
      type: 'DELETE',
      data: dataid,
      success: function(data) {
          console.log(data);
        }.bind(this),
      error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
  }

  updateData() {
    let dataid = {
      id : this.props.resid,
      comments: this.state.comments
    }
    console.log(this.props.resid);
    console.log(this.state.comments);
    $.ajax({
      url : "http://localhost:8080/restaurants/update",
      type : 'PUT',
      data : dataid,
      success: function(data) {
          console.log(data);
        }.bind(this),
      error: function(xhr, status, err) {
          // console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
  }
  changeComment(e){
    console.log('target :',e.target.value);
    let comments = e.target.value;
    this.setState({comments: comments});
  }

  render() {
    let detail = this.props.detail;
    let refresh = '';
    let inputComment;
    let enteredComment = '';
    if(detail === 'fav')
    {
      inputComment = <Input type='text' id='inputComment' placeholder='comments here...' onChange={this.changeComment}></Input>
      refresh = this.props.change;
    }
    if(this.state.comments !== '') {
      enteredComment = <p>{this.props.comments}</p>
    }
      return(
      <Card className='cards'>
        <Image src={this.props.image} className='cardImage'/>
        <Card.Content>
            <Card.Header>{this.props.name}</Card.Header>
            <Card.Meta>{this.props.cuisines}</Card.Meta>
            <Card.Description className='description'>{this.props.address}</Card.Description>
            {enteredComment}
            {this.props.comments}
        </Card.Content>
        {inputComment}
        <Card.Content extra>
            <a>
              <Icon name='star' />
              {this.props.rating}/{this.props.votes} Votes
            </a>
        </Card.Content>
        <ButtonComp save={this.sendData.bind(this)} change = {refresh} delete={this.deleteData.bind(this)} update={this.updateData.bind(this)} detail={this.props.detail} display='Add Favourite'/>
      </Card>
    );
  }
}

module.exports = MyCard;
