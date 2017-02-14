var React = require('react');
var ReactDOM = require('react-dom');
var {browserHistory, Route, Router, IndexRoute} = require('react-router');
var GmailBox = require('./components/js/GmailBox');
var NavBar = require('./components/js/NavBar');
var About = require('./components/sample/favourites.jsx');
var Home = require('./clientapp1.jsx');
var login = require('./components/sample/login.jsx');
var MainComp = React.createClass({
  render:function(){
    return(
      <div>
      <NavBar/>
      <br/><br/><br/><br/>
        {this.props.children}
      </div>
    );
  }
})
ReactDOM.render(
  <Router history={browserHistory}>
                <Route path="/" component={login}></Route>
                <Route component={MainComp}>
                  <Route path="/favourites" component={About}/>
                  <Route path="/home" component={Home}/>
                </Route>
  </Router>,document.getElementById('app'));
