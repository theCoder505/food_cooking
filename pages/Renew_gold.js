import React from "react";
import Layout from "@/components/Layout";

const Renew_gold = () => {
  return (
    <Layout>
      <div className="autorenews">
        Auto-renews at selected price unless you cancel.
        <small>
          Try for <br />
          7DAYS!
        </small>
      </div>

      <div className="main_width">
        <div className="container">
          <div className="plannercat">
            <img src="images/LOGO-A-3.png" />
            <ul>
              <li>
                <span className="orgs"></span>Meal planner
              </li>
              <li>
                <span></span>High Level Verified Accounts
                <img src="images/IMG_4254-2.png" />
              </li>
              <li>
                <span className="orgs"></span>Chat gpt intergrated
              </li>
              <li>
                <span></span>Detailed nutrition
              </li>
              <li>
                <span className="orgs"></span>Unlimited Access To All Recipes
              </li>
              <li>
                <span className="orgs"></span>And Ma<small>ny More</small>
                <span></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="Verification-iD">
          <div className="container">
            <div className="col-sm-12">
              <div className="col-Choose">
                <h3>
                  <span>Choose what suits y</span>our needs and enjoy.
                </h3>

                <div className="col-Choose-paln">
                  <div className="col-Choose-palnMonthly">
                    <h3>
                      Monthly <br />
                      Subscription
                    </h3>
                    <h4>7.99</h4>
                    <strong>
                      Renews automatically for $7.99/
                      <br />
                      monthly--. Cancel anytime.
                    </strong>
                    <button data-bs-toggle="modal" data-bs-target="#login">
                      Join Now!
                    </button>
                  </div>

                  <div className="col-Choose-palnMonthly col-Choose-palnMonthly2">
                    <h3>
                      6<br />
                      Month <br />
                      Subscription
                    </h3>
                    <h4>39.99!</h4>
                    <strong>
                      Renews automatically for $39.99/
                      <br />
                      Every 6 Months. Cancel anytime.
                    </strong>
                    <button data-bs-toggle="modal" data-bs-target="#login">
                      Join Now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Verification-round">
          <div className="container">
            <div className="col-sm-12">
              <div className="col-Chooseround2">
                <div className="col-Chooseround">
                  <span>Save 21.78% OFF</span>
                  <h3>
                    12 Months Annual
                    <br />
                    SubscAnnual <br />
                    Subscriptionription
                  </h3>
                  <h6>
                    <s>95.88</s>
                  </h6>
                  <h4>74.99</h4>
                  <h5>
                    Billed as $74.99 at time of order.
                    <br />
                    Renews automatically for $74.99/
                    <br />
                    year. Cancel anytime.
                  </h5>
                  <button data-bs-toggle="modal" data-bs-target="#login">
                    <img src="images/JOINNOW.png" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="GoldRibbon">
          <p>View Blue Ribbon 1.0 Standard Verification.</p>
          <img src="images/veri2.png" />
        </div>

        <div className="footer-faq">
          <div className="container">
            <a href="">
              -<span>F</span>a<span>Q</span>s<span>-</span>
            </a>
            <a className="Features-right" href="">
              -<span>F</span>e<span>a</span>t<span>u</span>r<span>e</span>s
              <span>-</span>
            </a>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="login"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="login"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-body">
              <div className="login-bg">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-6 p0">
                      <div className="col-login-left">
                        <div className="col-login-logo">
                          <a href="">
                            <img src="images/logo2.png" />
                          </a>
                        </div>
                        <div className="col-login-banner">
                          <img src="images/login-bg.png" />
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 p0">
                      <div className="col-login-right">
                        <ul className="nav nav-tabs">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              data-bs-toggle="tab"
                              href="#login4"
                            >
                              Log in
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              data-bs-toggle="tab"
                              href="#joinin"
                            >
                              Join Now!
                            </a>
                          </li>
                        </ul>

                        <div className="tab-content">
                          <div className="tab-pane active" id="login4">
                            <div className="login-box">
                              <div className="login-box-input">
                                <label>Email/Username</label>
                                <div className="login-box-input_box">
                                  <span>
                                    <img src="images/email.png" />
                                  </span>
                                  <input type="text" name="" />
                                </div>
                              </div>
                              <div className="login-box-input">
                                <label>Password</label>
                                <div className="login-box-input_box">
                                  <span>
                                    <img src="images/password.png" />
                                  </span>
                                  <input type="password" name="" />
                                </div>
                              </div>
                              <div className="login-box-input">
                                <label>Forgot your password?</label>
                              </div>
                              <div className="login-box-submit">
                                <button>Log in</button>
                                <small>OR</small>
                                <span>
                                  <img src="images/border.png" />{" "}
                                </span>

                                <p>
                                  By continuing, you agree to our
                                  <a href="">Terms of use</a>,
                                  <a href="">Terms of Service</a>, and
                                  <a href="">Privacy Policy</a>.
                                </p>
                              </div>
                              <div className="login-social-button">
                                <div className="social-button social-button-fb">
                                  <a href="">
                                    <span>
                                      <img src="images/fb.png" />
                                    </span>
                                    Connect with Facebook
                                  </a>
                                </div>
                                <div className="social-button social-button-google">
                                  <a href="">
                                    <span>
                                      <img src="images/google.png" />
                                    </span>
                                    Connect with Google
                                  </a>
                                </div>
                                <div className="social-button social-button-apple">
                                  <a href="">
                                    <span>
                                      <img src="images/apple.png" />{" "}
                                    </span>
                                    Connect with Apple
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="joinin">
                            <div className="login-box">
                              <div className="login-box-input">
                                <label>Email/Username</label>
                                <div className="login-box-input_box">
                                  <span>
                                    <img src="images/email.png" />
                                  </span>
                                  <input type="text" name="" required />
                                </div>
                              </div>
                              <div className="login-box-input">
                                <label>Password</label>
                                <div className="login-box-input_box">
                                  <span>
                                    <img src="images/password.png" />
                                  </span>
                                  <input type="password" name="" />
                                </div>
                              </div>
                              <div className="login-box-submit">
                                <button>Log in</button>
                                <small>OR</small>
                                <span>
                                  <img src="images/border.png" />{" "}
                                </span>

                                <p>
                                  By continuing, you agree to our
                                  <a href="">Terms of use</a>,
                                  <a href="">Terms of Service</a>, and
                                  <a href="">Privacy Policy</a>.
                                </p>
                              </div>
                              <div className="login-social-button">
                                <div className="social-button social-button-fb">
                                  <a href="">
                                    <span>
                                      <img src="images/fb.png" />
                                    </span>
                                    Connect with Facebook
                                  </a>
                                </div>
                                <div className="social-button social-button-google">
                                  <a href="">
                                    <span>
                                      <img src="images/google.png" />
                                    </span>
                                    Connect with Google
                                  </a>
                                </div>
                                <div className="social-button social-button-apple">
                                  <a href="">
                                    <span>
                                      <img src="images/apple.png" />{" "}
                                    </span>
                                    Connect with Apple
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Renew_gold;
