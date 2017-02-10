var React = require('react');
var ReactDOM = require('react-dom');
var {browserHistory, Route, Router, IndexRoute} = require('react-router');
var GmailBox = require('./components/js/GmailBox');
var NavBar = require('./components/js/NavBar');
var About = require('./components/sample/favourites.jsx');
var Home = require('./clientapp1.jsx');
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
                <Route path="/" component={MainComp}>
                <IndexRoute component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/gmailbox" component={GmailBox}/>
              </Route>
  </Router>,document.getElementById('app'));
