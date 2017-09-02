import React from 'react';
import { Card, Icon, Image} from 'semantic-ui-react';
import ButtonComp from './button.jsx';
import { Input } from 'semantic-ui-react';
// const logger = require('./../../applogger');

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
    this.clear = this.clear.bind(this);
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
    console.log(JSON.stringify(resdata));
    $.ajax({
      url: '/restaurants/add',
      type: 'POST',
      data: resdata,
      success: function(data) {
          console.log(data);
        }.bind(this),
      error: function(xhr, status, err) {
          console.log(this.props.url, status, err.toString());
        }.bind(this)
    });
  }

  deleteData() {
    let dataid = {
      id: this.props.resid
    };
    console.log(this.props.resid);
    $.ajax({
      url: '/restaurants/delete',
      type: 'DELETE',
      data: dataid,
      success: function(data) {
          console.log(data);
        }.bind(this),
      error: function(xhr, status, err) {
          console.log(this.props.url, status, err.toString());
        }.bind(this)
    });
  }
  componentDidMount(){
    this.setState({comments:this.props.comments});
  }
  updateData() {
    let dataid = {
      id: this.props.resid,
      comments: this.state.comments
    };
    console.log(this.props.resid);
    console.log(this.state.comments);
    $.ajax({
      url: '/restaurants/update',
      type: 'PUT',
      data: dataid,
      success: function(data) {
          console.log(data);
        }.bind(this),
      error: function(err) {
          console.log(err.toString());
        }.bind(this)
    });
  }
  changeComment(e) {
    console.log('target :', e.target.value);
    let comments = e.target.value;
    this.setState({comments: comments});
  }

  clear()
  {
    $('input[type="text"]').val('');
  }

  render() {
    let detail = this.props.detail;
    let refresh = '';
    let inputComment;
    let enteredComment = '';
    if(detail === 'fav')
    {
      inputComment = <Input type='text' id='inputComment' placeholder='comments here...' onChange={this.changeComment}/>
      refresh = this.props.change;
    }
    // if(this.state.comments !== '') {
    //   enteredComment = <p> { this.state.comments } </p>
    // }
    if(this.props.comments !== ''){
            enteredComment = <div><strong>Your Comments: </strong>{this.props.comments}</div>
    }
      return(
      <Card className='cards'>
        <Image src={this.props.image} className='cardImage'/>
        <Card.Content>
            <Card.Header>{this.props.name}</Card.Header>
            <Card.Meta>{this.props.cuisines}</Card.Meta>
            <Card.Description className='description'>{this.props.address}</Card.Description>
            <br/><br/>
            {enteredComment}
        </Card.Content>
        {inputComment}
        <Card.Content extra>
            <a>
              <Icon name='star' />
              {this.props.rating}/{this.props.votes} Votes
            </a>
        </Card.Content>
        <ButtonComp save={this.sendData.bind(this)} comment={this.state.comments} index= {this.props.index} change = {refresh} delete={this.deleteData.bind(this)} clear = {this.clear} update={this.updateData.bind(this)} detail={this.props.detail} display='Add Favourite'/>
      </Card>
    );
  }
}

MyCard.propTypes = {
        comments: React.PropTypes.string.isRequired,
        rating: React.PropTypes.string.isRequired,
        votes: React.PropTypes.string.isRequired,
        cuisines: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        image: React.PropTypes.string.isRequired,
        address: React.PropTypes.string.isRequired,
        index: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired,
        change: React.PropTypes.string.isRequired,
        detail: React.PropTypes.string.isRequired,
        resid: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired
};
module.exports = MyCard;
