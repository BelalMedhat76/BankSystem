import React, { Component } from 'react';
import '../signUp/bg.png';
import '../signUp/signup.css';
class SignUp extends React.Component {
    render() { 
        return(
        
        
        <div>



<div className="contact-section">

<h1 style={{marginTop:40}}> Sign Up</h1>
<div className="border"></div>
<form className="contact-form-signup" action="../Home page.html" method="POST">
    <input type="text" id="contact-form-textt" placeholder=" Your Name" />
    <input type="email" className="contact-form-text" placeholder="National_ID" />
    <input type="password" className="contact-form-text" placeholder="password" />

    <input type="text" id="contact-form-phone" placeholder=" phone" />
    <textarea className="contact-form-text" placeholder="Your message"></textarea>
    <a href="../index.html" style={{textDecoration:'none'}} id="index" type="submit" className="contact-form-btn">Send</a>
</form>
</div>

        </div>);
    }
}
 
export default SignUp;
