import React from 'react';
import ReactDOM from 'react-dom';
import Child from './components/sample';
import Child1 from './components/sample/child1.jsx';
import grandChild from './components/sample/grandchild.jsx';

class MainComponent extends React.Component {
	constructor () {
		super();
		this.state = {
			message:'hii from child in state'
		};
		this.change = this.change.bind(this);
	}
	change() {
		var name = this.refs.name.value;
		this.setState({
			message:`changed by ${name}`
		});
	}
	render () {
		return (
			<div>
				<h1>Hello From React Parent</h1>
				<input type='text' ref='name'></input>
				<button onClick={this.change}>click</button>
				<Child message={this.state.message} change={this.change.bind(this)}/>
				<Child1 message={this.state.message}/>
				<grandChild.grandChildComponent/>
			</div>
		);
	}
}

ReactDOM.render (
	<MainComponent/>,document.getElementById('mountapp')
);
