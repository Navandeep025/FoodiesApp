import React from 'react';
import ReactDOM from 'react-dom';

class childComponent extends React.Component {
	constructor () {
		super();
	}

	static defaultProps = {
		message : 'hii Arun - a default value'
	}
	clickChange(){
		this.props.change();
	}
	render () {
		return (
			<div>
				<h2>Hello from child</h2>
				<h1>{this.props.message}</h1>
				<button onClick={this.clickChange.bind(this)}>click</button>
			</div>
		);
	}
}

module.exports = childComponent;
