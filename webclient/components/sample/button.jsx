import React from 'react';
import ReactDOM from 'react-dom';
import { Button,Icon } from 'semantic-ui-react';

class  ButtonComp extends React.Component {
  constructor(){
    super();
  }
  save()
  {
    this.props.save();

  }
  render() {
    return (
      <div>
        <Button color='red' fluid onClick={this.save.bind(this)}>{this.props.display}<Icon className='heartIcon' name='heart' /></Button>
      </div>
    );
  }
}

module.exports = ButtonComp;
