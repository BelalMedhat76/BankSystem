import React from "react";
import "../ContactPage/Contact.css";
import shape from "../ContactPage/shape.png";
import loc from "../ContactPage/loc.png";
import email from "../ContactPage/email.png";
import phone from "../ContactPage/phone.png";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className="contacthome" style={{ marginTop: "60px" }}>
          <span className="big-circle" style={{ marginTop: "60px" }}></span>
          <img src={shape} className="square" alt="" />
          <div className="form">
            <div className="contact-info">
              <h3 className="title">Let's get in touch</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                dolorum adipisci recusandae praesentium dicta!
              </p>

              <div className="info">
                <div className="information">
                  <img src={loc} className="icon" alt="" />
                  <p className="contact-color">
                    92 Cherry Drive Uniondale, NY 11553
                  </p>
                </div>
                <div className="information">
                  <img src={email} className="icon" alt="" />
                  <p className="contact-color">lorem@ipsum.com</p>
                </div>
                <div className="information">
                  <img src={phone} className="icon" alt="" />
                  <p className="contact-color">123-456-789</p>
                </div>
              </div>

              <div className="social-media">
                <p>Connect with us :</p>
                <div className="social-icons">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <span className="circle one"></span>
              <span className="circle two"></span>
              <form action="index.html" autoComplete="off">
                <h3 className="title">Contact us</h3>
                <div className="input-container">
                  <input type="text" name="name" className="input" />
                  <label htmlFor="">Username</label>
                  <span>Username</span>
                </div>
                <div className="input-container">
                  <input type="email" name="email" className="input" />
                  <label htmlFor="">Email</label>
                  <span>Email</span>
                </div>
                <div className="input-container">
                  <input type="tel" name="phone" className="input" />
                  <label htmlFor="">Phone</label>
                  <span>Phone</span>
                </div>
                <div className="input-container textarea">
                  <textarea name="message" className="input"></textarea>
                  <label htmlFor="">Message</label>
                  <span>Message</span>
                </div>
                <input type="submit" value="Send" className="btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
