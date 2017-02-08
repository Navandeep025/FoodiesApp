import React from 'react';
import ReactDOM from 'react-dom';

class grandChildComponent extends React.Component {
	constructor () {
		super();
	}

	render () {
		return (
			<div>
				<h2>Hello from grandchild</h2>
				<h1>{this.props.message}</h1>
			</div>
		);
	}
}

module.exports = {
	grandChildComponent
}
