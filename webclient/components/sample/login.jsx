const React = require('react');
const {browserHistory} = require('react-router');
import { Button, Checkbox, Form, Card } from 'semantic-ui-react';
const Login = React.createClass({
getInitialState: function()
{
 return {username:'',password:''};
},
handleUserName: function(e) {
 this.setState({username: e.target.value});
},
handlePassword: function(e)
{
 this.setState({password: e.target.value});
},
LoginUser: function()
{
 $.ajax({
   url:"http://localhost:3000/users/login",
   type: 'POST',
   datatype: 'JSON',
   data:{username :this.state.username,password:this.state.password},
   success: function(res)
   {
     console.log(res.responseText);
     browserHistory.push('/home');
   }.bind(this),
   error: function(err)
   {
     alert("Invalid username or password");
     console.log(err.responseText);
   }.bind(this)
 });
},
 render: function() {
   return(
  //  <div className="Login">
  //       <h2 className="text-center">Login</h2>
  //       <div className="form-group">
  //       <input className="form-control" onChange={this.handleUserName}  placeholder="Enter a User Name..."  type="text" />
  //       </div>
  //       <div className="form-group">
  //       <input className="form-control" onChange={this.handlePassword}  placeholder="Enter a Password..."  type="password" />
  //       </div>
  //       <input className="btn btn-primary btn-block" onClick={this.LoginUser} type="submit" value="Login" />
  //  </div>
<div>
  <h1><p className='foodietitle'>A Foodies App made by foodies</p></h1>
   <div className='formAlign'>
     <h2>Login</h2>
     <Form>
      <Form.Field>
        <label>UserName</label>
        <input className='formwidth' onChange={this.handleUserName} placeholder="Enter a User Name..." type="text"/>
      </Form.Field>

      <Form.Field>
        <label>Password</label>
        <input className='formwidth' onChange={this.handlePassword} placeholder="Enter a Password..." type="password" />
      </Form.Field>
    </Form><br/>
      <Button color='red' onClick={this.LoginUser} type="submit" value="Login" >Submit</Button>
    </div>
   </div>

   );
 }
});

module.exports = Login;
