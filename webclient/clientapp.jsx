// requiring the needed packages
const React = require('react');
const ReactDOM = require('react-dom');
const {browserHistory, Route, Router} = require('react-router');
const NavBar = require('./components/js/NavBar');
const About = require('./components/sample/favourites.jsx');
const Home = require('./clientapp1.jsx');
const login = require('./components/sample/login.jsx');
const MainComp = React.createClass({
    render: function() {
        return (
            <div>
                <NavBar/>
                <br/><br/><br/><br/> {this.props.children}
            </div>
        );
    }
});
ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={login}/>
    <Route component={MainComp}>
        <Route path="/favourites" component={About}/>
        <Route path="/home" component={Home}/>
    </Route>
</Router>, document.getElementById('app'));
