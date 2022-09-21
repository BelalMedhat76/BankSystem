import React from "react";
import vd from "../Images/vd.jpg";
import card from "../Images/card.jpg";
import withdrow from "../Images/withdrow.jpg";
import carde1 from "../Images/carde1.png";
import Carde22 from "../Images/Carde22.png";
import Carde3 from "../Images/Carde3.png";
import Carde4 from "../Images/Carde4.png";
import pricing from "../Images/pricing.jpg";
import safety from "../Images/safety.jpg";
import encrypt from "../Images/encrypt.jpg";
import cash from "../Images/cash.jpg";
import back2 from "../Images/back2.jpg";
import { Button } from "react-bootstrap";
import "./homee.css";

class Home extends React.Component {
  render() {
    return (
      <div className="body">
        <div id="Home" className="Content">
          <div className="first-page">
            <div className="first-page-content">
              <h2>TRUSTED ONLINE PAYMENT PLATFORM</h2>
              <h3>Transfer Money Across</h3>
              <h4>World In Real Time</h4>
            </div>
            <div className="top-cards">
              <div
                className=" container  my-1  py-1"
                id="card"
                id="card-position"
              >
                <div className="row text-center   my-3 py-1  ">
                  <div className="col-6 col-md-4  col-xl-3 cardd ">
                    <div className="card border-top-0 border-start-0 border-end-0  ">
                      <img src={pricing} className="card-img-top" alt="..." />
                      <div className="card-body bg-primary">
                        <p className="card-text">Transparent Pricing </p>
                        <a href="#" className="btn btn-outline-dark  ">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-4 col-xl-3 cardd">
                    <div className="card border-top-0 border-start-0 border-end-0  ">
                      <img src={encrypt} className="card-img-top" alt="..." />
                      <div className="card-body bg-primary">
                        <p className="card-text">Fully Encrypted</p>
                        <a href="#" className="btn btn-outline-dark">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-4 col-xl-3 cardd">
                    <div className="card border-top-0 border-start-0 border-end-0  ">
                      <img src={cash} className="card-img-top" alt="..." />
                      <div className="card-body bg-primary">
                        <p className="card-text ">Instant Cashout</p>
                        <a href="#" className="btn btn-outline-dark">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-4 col-xl-3 cardd4">
                    <div className="card border-top-0 border-start-0 border-end-0  ">
                      <img
                        src={back2}
                        id="width"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body bg-primary ">
                        <p className="card-text">Safe and Secure</p>
                        <a href="#" className="btn btn-outline-dark">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end of cards */}

          <div className=" second-content">
            <img className="second-content-img" src={withdrow} alt="Error" />
            <div className="second-content-right">
              <p className="second-content-para1">
                Relabile Online Payment Platform
              </p>
              <p className="second-content-para2">
                Transfer and Deposit Your Money
              </p>
              <p className="second-content-para2">
                anytime, anywhere in the world
              </p>
              <p className="para-correct-icon">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores voluptates
                <br /> obcaecati neque voluptatibus eius in voluptatem
                asperiores quasi?
                <br /> Modi nihil eligendi distinctio neque aliquid nostrum
                quidem soluta
              </p>
              <i id="correct-icon" className="fas fa-check-circle"></i>
              <p className="icon-inline"> Powerfull Online App For Bank</p>
              <p className="para-correct-icon">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores voluptates
                <br /> obcaecati neque voluptatibus eius in voluptatem
                asperiores quasi?
                <br /> Modi nihil eligendi distinctio neque aliquid nostrum
                quidem soluta
              </p>
              <i id="correct-icon" className="fas fa-check-circle"></i>
              <p className="icon-inline">
                {" "}
                Special For Multiple Use Capabilities
              </p>
              <p className="para-correct-icon">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores voluptates
                <br /> obcaecati neque voluptatibus eius in voluptatem
                asperiores quasi?
                <br /> Modi nihil eligendi distinctio neque aliquid nostrum
                quidem soluta
              </p>
              <i id="correct-icon" className="fas fa-check-circle"></i>
              <p className="icon-inline"> Pring More Transparency</p>
              <p className="para-correct-icon">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores voluptates
                <br /> obcaecati neque voluptatibus eius in voluptatem
                asperiores quasi?
                <br /> Modi nihil eligendi distinctio neque aliquid nostrum
                quidem soluta
              </p>
            </div>
          </div>
          {/*  */}

          <h1 className="service-head ">Why Choose Us</h1>
          <div className="line  animate__animated animate__flipInX animate__infinite animate__slow"></div>

          <div className="OurServices">
            <img className="service-content-img" src={vd} alt="Error" />
            <div className="second-service-right">
              {/* <p className="second-content-para1">Relabile Online Payment Platform</p> */}
              <p className="second-content-para2">
                Why choose Our World Fast Online
              </p>
              <p className="second-content-para2">Payment Services.</p>
              <p className="para-correct-icon">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores voluptates
                <br /> obcaecati neque voluptatibus eius in voluptatem
                asperiores quasi?
                <br /> Modi nihil eligendi distinctio neque aliquid nostrum
                quidem soluta
              </p>
              <i id="correct-icon" className="fas fa-anchor"></i>
              <p className="icon-inline"> Low Costing</p>
              <p className="para-correct-icon">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores voluptates
                <br /> obcaecati neque voluptatibus eius in voluptatem
                asperiores quasi?
                <br /> Modi nihil eligendi distinctio neque aliquid nostrum
                quidem soluta
              </p>
              <i id="correct-icon" className="fas fa-anchor"></i>
              <p className="icon-inline"> Save And Secure</p>
              <p className="para-correct-icon">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores voluptates
                <br /> obcaecati neque voluptatibus eius in voluptatem
                asperiores quasi?
                <br /> Modi nihil eligendi distinctio neque aliquid nostrum
                quidem soluta
              </p>
              <i id="correct-icon" className="fas fa-anchor"></i>
              <p className="icon-inline"> Live Support</p>
              <p className="para-correct-icon">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores voluptates
                <br /> obcaecati neque voluptatibus eius in voluptatem
                asperiores quasi?
                <br /> Modi nihil eligendi distinctio neque aliquid nostrum
                quidem soluta
              </p>
            </div>
          </div>
          {/*  */}
          <section id="Features" className="Features-section">
            <div>
              <h1 className="features-head">Our Features</h1>
            </div>
            <div className="line  animate__animated animate__flipInX animate__infinite animate__slow"></div>

            <div className="OurFeatures">
              <div className="feature-cards">
                <i id="features-icon" className="fas fa-cog  "></i>
                <p className="features-card-head">Incredible Infrastructure</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
              </div>
              <div className="feature-cards">
                <i id="features-icon" className="fas fa-envelope"></i>
                <p className="features-card-head">Email Notifications</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
              </div>
              <div className="feature-cards">
                <i id="features-icon" className="fas fa-arrows-alt"></i>
                <p className="features-card-head">Simple Dashbord</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
              </div>
              <div className="feature-cards">
                <i id="features-icon" className="fas fa-anchor"></i>
                <p className="features-card-head">Information Retrieval</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
              </div>
              <div className="feature-cards">
                <i id="features-icon" className="fas fa-arrows-alt-v"></i>
                <p className="features-card-head">
                  Drag and Drop Functionality
                </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
              </div>
              <div className="feature-cards">
                <i id="features-icon" className="fas fa-bell"></i>
                <p className="features-card-head">Deadline Reminders</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
              </div>
            </div>
          </section>

          {/*  */}
          {/* credit */}

          <div id="Cards" className="Cards-head">
            <h1>Choose Card</h1>
            <h1>Considering Your Personal Needs</h1>
            <p>
              You're considering opening a credit card to build credit. If this
              is the case, you need to make
            </p>
            <p>sure that you act responsibly with your card.</p>
          </div>
          <div className="Credit-section">
            <div className="credit-card">
              <img src={carde1} />
              <h3 style={{ textAlign: "center", marginTop: 10 }}>Debit Card</h3>
              <i
                className="fas fa-address-book"
                style={{
                  marginTop: 10,
                  paddingRight: 15,
                  paddingLeft: 10,
                  fontSize: 20,
                }}
              ></i>
              <span>Max: 60 days</span>
              <br />
              <i
                className="fas fa-percent"
                style={{
                  marginTop: 10,
                  paddingRight: 15,
                  paddingLeft: 10,
                  fontSize: 20,
                }}
              ></i>
              <span>Payment fee: 1%</span>
              <br />
              <i
                className="fab fa-maxcdn"
                style={{
                  marginTop: 10,
                  paddingRight: 15,
                  paddingLeft: 10,
                  fontSize: 20,
                }}
              ></i>
              <span>Max credit: $20.000</span>
              <br />
              <Button
                style={{
                  marginLeft: 70,
                  marginBottom: 20,
                  marginTop: 20,
                  borderRadius: 15,
                }}
              >
                Read More
              </Button>
            </div>
            <div className="credit-card">
              <img src={Carde22} />
              <h3 style={{ textAlign: "center", marginTop: 10 }}>
                Credit Card
              </h3>
              <i
                className="fas fa-address-book"
                style={{
                  marginTop: 10,
                  paddingRight: 15,
                  paddingLeft: 10,
                  fontSize: 20,
                }}
              ></i>
              <span>Max: 60 days</span>
              <br />
              <i
                className="fas fa-percent"
                style={{
                  marginTop: 10,
                  paddingRight: 15,
                  paddingLeft: 10,
                  fontSize: 20,
                }}
              ></i>
              <span>Payment fee: 1%</span>
              <br />
              <i
                className="fab fa-maxcdn"
                style={{
                  marginTop: 10,
                  paddingRight: 15,
                  paddingLeft: 10,
                  fontSize: 20,
                }}
              ></i>
              <span>Max credit: $20.000</span>
              <br />
              <Button
                style={{
                  marginLeft: 70,
                  marginBottom: 20,
                  marginTop: 20,
                  borderRadius: 15,
                }}
              >
                Read More
              </Button>
            </div>
            <div className="credit-card">
              <img src={Carde3} />
              <h3 style={{ textAlign: "center", marginTop: 10 }}>
                {" "}
                Master Card
              </h3>
              <i
                className="fas fa-address-book"
                style={{
                  marginTop: 10,
                  paddingRight: 15,
                  paddingLeft: 10,
                  fontSize: 20,
                }}
              ></i>
              <span>Max: 60 days</span>
              <br />
              <i
                className="fas fa-percent"
                style={{
                  marginTop: 10,
                  paddingRight: 15,
                  paddingLeft: 10,
                  fontSize: 20,
                }}
              ></i>
              <span>Payment fee: 1%</span>
              <br />
              <i
                className="fab fa-maxcdn"
                style={{
                  marginTop: 10,
                  paddingRight: 15,
                  paddingLeft: 10,
                  fontSize: 20,
                }}
              ></i>
              <span>Max credit: $20.000</span>
              <br />
              <Button
                style={{
                  marginLeft: 70,
                  marginBottom: 20,
                  marginTop: 20,
                  borderRadius: 15,
                }}
              >
                Read More
              </Button>
            </div>
            <div className="credit-card">
              <img src={Carde4} />
              <h3 style={{ textAlign: "center", marginTop: 10 }}> Visa Card</h3>
              <i
                className="fas fa-address-book"
                style={{
                  marginTop: 10,
                  paddingRight: 15,
                  paddingLeft: 10,
                  fontSize: 20,
                }}
              ></i>
              <span>Max: 60 days</span>
              <br />
              <i
                className="fas fa-percent"
                style={{
                  marginTop: 10,
                  paddingRight: 15,
                  paddingLeft: 10,
                  fontSize: 20,
                }}
              ></i>
              <span>Payment fee: 1%</span>
              <br />
              <i
                className="fab fa-maxcdn"
                style={{
                  marginTop: 10,
                  paddingLeft: 10,
                  paddingRight: 15,
                  fontSize: 20,
                }}
              ></i>
              <span>Max credit: $20.000</span>
              <br />
              <Button
                style={{
                  marginLeft: 70,
                  marginBottom: 20,
                  marginTop: 20,
                  borderRadius: 15,
                }}
              >
                Read More
              </Button>
            </div>
          </div>

          <section id="Team" className="our-team">
            <div>
              <h1 className="team-head">Our Team</h1>
            </div>
            <div className="line  animate__animated animate__flipInX animate__infinite animate__slow"></div>
            <div className="container">
              <div className="box">
                <div className="imgBox">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-handsome-young-man-makes-okay-gesture-demonstrates-agreement-likes-idea-smiles-happily-wears-optical-glasses-yellow-hat-t-shirt-models-indoor-its-fine-thank-you-hand-sign_273609-30676.jpg?size=626&ext=jpg"
                    alt=""
                  />
                </div>
                <div className="content1">
                  <h2>
                    Karan Singh
                    <br />
                    <span>Chartered Accountant C.A</span>
                  </h2>
                </div>
              </div>
              <div className="box">
                <div className="imgBox">
                  <img
                    src="https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg"
                    alt=""
                  />
                </div>
                <div className="content1">
                  <h2>
                    Dolly Seth
                    <br />
                    <span>Digital Marketing</span>
                  </h2>
                </div>
              </div>
              <div className="box">
                <div className="imgBox">
                  <img
                    src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg"
                    alt=""
                  />
                </div>
                <div className="content1">
                  <h2>
                    Aakash Agrawal
                    <br />
                    <span>Manager</span>
                  </h2>
                </div>
              </div>
              <div className="box">
                <div className="imgBox">
                  <img src={card} alt="" />
                </div>
                <div className="content1">
                  <h2>
                    Skarlet Singh
                    <br />
                    <span>Chartered Accountant C.A</span>
                  </h2>
                </div>
              </div>
            </div>
          </section>
          {/* credit end */}
          {/* services card */}

          {/* end services caed */}
          {/*  */}

          {/* footer */}

          {/* end footer */}
        </div>
      </div>
    );
  }
}
export default Home;
