import React from 'react';
import ReactDOM from 'react-dom';
import { Button,Icon } from 'semantic-ui-react';

class  ButtonComp extends React.Component {
  constructor() {
    super();
    this.changeFav=this.changeFav.bind(this);
    this.state = {
      status : "Add Favourite"
    }
    this.properButton = this.properButton.bind(this);
    this.refresh = this.refresh.bind(this);
  }
  componentDidMount() {
   this.properButton();
 }
 properButton(){
   if(this.props.detail === "main"){
     this.setState({
       status : "Add Favourite"
     });
     console.log('inside main');
   }else if(this.props.detail === "fav"){
     this.setState({
       status : "Remove Favourite"
     });
     console.log(this.props.detail);
   }
 }
  changeFav(){
    console.log('inside change favourite');
    if(this.props.detail === "main"){
      if(this.state.status === "Add Favourite"){
        this.setState({
          status : "Remove Favourite"
        });
        this.save();
      }else{
        this.setState({
          status : "Add Favourite"
        });
        this.delete();
      }
    }
    else {
      this.delete();
    }
  }
  save()
  {
    this.props.save();
  }
  delete() {
    this.props.delete();
    if(this.props.detail === 'fav')
    {
      this.refresh();
    }
  }
  refresh()
  {
    this.props.change();
  }
  render() {
    if(this.props.detail === 'fav')
    {
      return (
      <div>
        <Button color='red' fluid onClick={this.changeFav.bind(this)}>{this.state.status}<Icon className='heartIcon' name='heart' /></Button>
        <Button color='red' fluid onClick={this.changeFav.bind(this)}>Update<Icon className='heartIcon' name='upload' /></Button>
      </div>
    );
    }
    else{
    return (
      <div>
        <Button color='red' fluid onClick={this.changeFav.bind(this)}>{this.state.status}<Icon className='heartIcon' name='heart' /></Button>
      </div>
    );
  }
  }
}

module.exports = ButtonComp;
