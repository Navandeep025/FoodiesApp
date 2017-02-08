import React from 'react';
import ReactDOM from 'react-dom';

class childComponentOne extends React.Component {
	constructor () {
		super();
	}

	static defaultProps = {
		message : 'hii Arun - a default value of component two'
	}
	render () {
		return (
			<div>
				<h2>Hello from child2</h2>
				<h1>{this.props.message}</h1>
			</div>
		);
	}
}

module.exports = childComponentOne;
