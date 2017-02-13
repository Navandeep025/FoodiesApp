import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
// const logger = require('./../../applogger');

class ButtonComp extends React.Component {
  constructor() {
    super();
    this.changeFav = this.changeFav.bind(this);
    this.state = {
      status: 'Add Favourite',
      val: ''
    };
    this.properButton = this.properButton.bind(this);
    // this.refresh = this.refresh.bind(this);
  }
  componentDidMount() {
   this.properButton();
 }
 properButton() {
   if(this.props.detail === 'main') {
     this.setState({
       status: 'Add Favourite'
     });
     console.log('inside main');
   }else if(this.props.detail === 'fav') {
     this.setState({
       status: 'Unfavourite'
     });
     console.log(this.props.detail);
   }
 }
  changeFav() {
    console.log('inside change favourite');
    if(this.props.detail === 'main') {
      if(this.state.status === 'Add Favourite') {
        this.setState({
          status: 'Unfavourite'
        });
        this.save();
      }else{
        this.setState({
          status: 'Add Favourite'
        });
        this.delete();
      }
    }
    else {
      this.delete();
    }

  }

  updateFav() {
      console.log('inside update');
      this.update();
      this.props.clear();
  }

  save()
  {
    this.props.save();
  }
  delete() {
    this.props.delete();
    if(this.props.detail === 'fav')
    {
      this.props.change(this.props.index, 'fav');
    }
  }
  update() {
    this.props.update();
    this.props.change(this.props.index, this.props.comment);
  }
  render() {
    if(this.props.detail === 'fav')
    {
      return (
      <div>
        <Button.Group fluid>
          <Button color='red' onClick={this.changeFav.bind(this)} className='btnwidth'>{this.state.status}</Button>
          <Button color='blue' onClick={this.updateFav.bind(this)} className='btnwidth' floated ='left'>Update</Button>
       </Button.Group>
        </div>
    );
    }
    else {
    return (
      <div>
        <Button color='red' fluid onClick={this.changeFav.bind(this)}>{this.state.status}<Icon className='heartIcon' name='heart' /></Button>
      </div>
    );
  }
  }
}

ButtonComp.propTypes = {
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
        requiredData: React.PropTypes.object.isRequired,
        save: React.PropTypes.object.isRequired,
        delete: React.PropTypes.object.isRequired,
        update: React.PropTypes.object.isRequired
};
module.exports = ButtonComp;
