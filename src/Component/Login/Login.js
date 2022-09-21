import React, { Component } from 'react';
import '../Login/Login.css';
class Login extends React.Component {
    render() { 
        return (<div >

<div className='login-body'>

<form class="boxx"  >
  <h1>Login</h1>
  <input type="text" name="" placeholder="Username" />
  <input type="password" name="" placeholder="Password" />
  <input type="submit" name=""  value="Login" />
</form>

</div>
        </div>);
    }
}
 
export default Login;
