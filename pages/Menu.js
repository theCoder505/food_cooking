import Head from "next/head";
import Layout from "@/components/Layout";

const Menu = () => {
  return (
    <>
      <Layout>
        <div
          className="modal fade"
          id="myModal2"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body modal-Requests">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      className="nav-link active Request-p"
                      data-bs-toggle="tab"
                      href="#Request"
                    >
                      Request List
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link Approved-p"
                      data-bs-toggle="tab"
                      href="#Approved"
                    >
                      Approved List
                    </a>
                  </li>
                </ul>

                <div className="tab-content">
                  <div className="tab-pane   active" id="Request">
                    <div className="Request-bo">
                      <h3>3 Requests</h3>
                      <ul>
                        <li>
                          @Cook_with_x3{" "}
                          <span>
                            <img src="images/approve.png" />
                          </span>
                          <span>
                            <img src="images/deny.png" />
                          </span>
                        </li>

                        <li>
                          @Cook_with_x3{" "}
                          <span>
                            <img src="images/approve.png" />
                          </span>
                          <span>
                            <img src="images/deny.png" />
                          </span>
                        </li>
                        <li>
                          @Cook_with_x3{" "}
                          <span>
                            <img src="images/approve.png" />
                          </span>
                          <span>
                            <img src="images/deny.png" />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tab-pane" id="Approved">
                    <div className="Approved-bo">
                      <h3>3 Approved</h3>
                      <ul>
                        <li>@Cook_with_x3 </li>
                        <li>@Cook_with_x3 </li>
                        <li>@Cook_with_x3 </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-body mobile-country">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
                <ul>
                  <li>
                    <a href="#">African</a>
                  </li>
                  <li>
                    <a href="#">Afghan</a>
                  </li>
                  <li>
                    <a href="#">American</a>
                  </li>
                  <li>
                    <a href="#">Arab</a>
                  </li>
                  <li>
                    <a href="#">Argentine</a>
                  </li>
                  <li>
                    <a href="#">Argentinian</a>
                  </li>
                  <li>
                    <a href="#">Asian</a>
                  </li>
                  <li>
                    <a href="#">Australian</a>
                  </li>
                  <li>
                    <a href="#">African</a>
                  </li>
                  <li>
                    <a href="#">Afghan</a>
                  </li>
                  <li>
                    <a href="#">American</a>
                  </li>
                  <li>
                    <a href="#">Arab</a>
                  </li>
                  <li>
                    <a href="#">Argentine</a>
                  </li>
                  <li>
                    <a href="#">Argentinian</a>
                  </li>
                  <li>
                    <a href="#">Asian</a>
                  </li>
                  <li>
                    <a href="#">Australian</a>
                  </li>
                  <li>
                    <a href="#">African</a>
                  </li>
                  <li>
                    <a href="#">Afghan</a>
                  </li>
                  <li>
                    <a href="#">American</a>
                  </li>
                  <li>
                    <a href="#">Arab</a>
                  </li>
                  <li>
                    <a href="#">Argentine</a>
                  </li>
                  <li>
                    <a href="#">Argentinian</a>
                  </li>
                  <li>
                    <a href="#">Asian</a>
                  </li>
                  <li>
                    <a href="#">Australian</a>
                  </li>
                </ul>

                <ul>
                  <li>
                    <a href="#">African</a>
                  </li>
                  <li>
                    <a href="#">Afghan</a>
                  </li>
                  <li>
                    <a href="#">American</a>
                  </li>
                  <li>
                    <a href="#">Arab</a>
                  </li>
                  <li>
                    <a href="#">Argentine</a>
                  </li>
                  <li>
                    <a href="#">Argentinian</a>
                  </li>
                  <li>
                    <a href="#">Asian</a>
                  </li>
                  <li>
                    <a href="#">Australian</a>
                  </li>

                  <li>
                    <a href="#">African</a>
                  </li>
                  <li>
                    <a href="#">Afghan</a>
                  </li>
                  <li>
                    <a href="#">American</a>
                  </li>
                  <li>
                    <a href="#">Arab</a>
                  </li>
                  <li>
                    <a href="#">Argentine</a>
                  </li>
                  <li>
                    <a href="#">Argentinian</a>
                  </li>
                  <li>
                    <a href="#">Asian</a>
                  </li>
                  <li>
                    <a href="#">Australian</a>
                  </li>
                  <li>
                    <a href="#">African</a>
                  </li>
                  <li>
                    <a href="#">Afghan</a>
                  </li>
                  <li>
                    <a href="#">American</a>
                  </li>
                  <li>
                    <a href="#">Arab</a>
                  </li>
                  <li>
                    <a href="#">Argentine</a>
                  </li>
                  <li>
                    <a href="#">Argentinian</a>
                  </li>
                  <li>
                    <a href="#">Asian</a>
                  </li>
                  <li>
                    <a href="#">Australian</a>
                  </li>
                </ul>

                <ul>
                  <li>
                    <a href="#">African</a>
                  </li>
                  <li>
                    <a href="#">Afghan</a>
                  </li>
                  <li>
                    <a href="#">American</a>
                  </li>
                  <li>
                    <a href="#">Arab</a>
                  </li>
                  <li>
                    <a href="#">Argentine</a>
                  </li>
                  <li>
                    <a href="#">Argentinian</a>
                  </li>
                  <li>
                    <a href="#">Asian</a>
                  </li>
                  <li>
                    <a href="#">Australian</a>
                  </li>

                  <li>
                    <a href="#">African</a>
                  </li>
                  <li>
                    <a href="#">Afghan</a>
                  </li>
                  <li>
                    <a href="#">American</a>
                  </li>
                  <li>
                    <a href="#">Arab</a>
                  </li>
                  <li>
                    <a href="#">Argentine</a>
                  </li>
                  <li>
                    <a href="#">Argentinian</a>
                  </li>
                  <li>
                    <a href="#">Asian</a>
                  </li>
                  <li>
                    <a href="#">Australian</a>
                  </li>
                  <li>
                    <a href="#">African</a>
                  </li>
                  <li>
                    <a href="#">Afghan</a>
                  </li>
                  <li>
                    <a href="#">American</a>
                  </li>
                  <li>
                    <a href="#">Arab</a>
                  </li>
                  <li>
                    <a href="#">Argentine</a>
                  </li>
                  <li>
                    <a href="#">Argentinian</a>
                  </li>
                  <li>
                    <a href="#">Asian</a>
                  </li>
                  <li>
                    <a href="#">Australian</a>
                  </li>
                </ul>

                <ul>
                  <li>
                    <a href="#">African</a>
                  </li>
                  <li>
                    <a href="#">Afghan</a>
                  </li>
                  <li>
                    <a href="#">American</a>
                  </li>
                  <li>
                    <a href="#">Arab</a>
                  </li>
                  <li>
                    <a href="#">Argentine</a>
                  </li>
                  <li>
                    <a href="#">Argentinian</a>
                  </li>
                  <li>
                    <a href="#">Asian</a>
                  </li>
                  <li>
                    <a href="#">Australian</a>
                  </li>

                  <li>
                    <a href="#">African</a>
                  </li>
                  <li>
                    <a href="#">Afghan</a>
                  </li>
                  <li>
                    <a href="#">American</a>
                  </li>
                  <li>
                    <a href="#">Arab</a>
                  </li>
                  <li>
                    <a href="#">Argentine</a>
                  </li>
                  <li>
                    <a href="#">Argentinian</a>
                  </li>
                  <li>
                    <a href="#">Asian</a>
                  </li>
                  <li>
                    <a href="#">Australian</a>
                  </li>
                  <li>
                    <a href="#">African</a>
                  </li>
                  <li>
                    <a href="#">Afghan</a>
                  </li>
                  <li>
                    <a href="#">American</a>
                  </li>
                  <li>
                    <a href="#">Arab</a>
                  </li>
                  <li>
                    <a href="#">Argentine</a>
                  </li>
                  <li>
                    <a href="#">Argentinian</a>
                  </li>
                  <li>
                    <a href="#">Asian</a>
                  </li>
                  <li>
                    <a href="#">Australian</a>
                  </li>
                </ul>

                <ul>
                  <li>
                    <a href="#">African</a>
                  </li>
                  <li>
                    <a href="#">Afghan</a>
                  </li>
                  <li>
                    <a href="#">American</a>
                  </li>
                  <li>
                    <a href="#">Arab</a>
                  </li>
                  <li>
                    <a href="#">Argentine</a>
                  </li>
                  <li>
                    <a href="#">Argentinian</a>
                  </li>
                  <li>
                    <a href="#">Asian</a>
                  </li>
                  <li>
                    <a href="#">Australian</a>
                  </li>

                  <li>
                    <a href="#">African</a>
                  </li>
                  <li>
                    <a href="#">Afghan</a>
                  </li>
                  <li>
                    <a href="#">American</a>
                  </li>
                  <li>
                    <a href="#">Arab</a>
                  </li>
                  <li>
                    <a href="#">Argentine</a>
                  </li>
                  <li>
                    <a href="#">Argentinian</a>
                  </li>
                  <li>
                    <a href="#">Asian</a>
                  </li>
                  <li>
                    <a href="#">Australian</a>
                  </li>
                  <li>
                    <a href="#">African</a>
                  </li>
                  <li>
                    <a href="#">Afghan</a>
                  </li>
                  <li>
                    <a href="#">American</a>
                  </li>
                  <li>
                    <a href="#">Arab</a>
                  </li>
                  <li>
                    <a href="#">Argentine</a>
                  </li>
                  <li>
                    <a href="#">Argentinian</a>
                  </li>
                  <li>
                    <a href="#">Asian</a>
                  </li>
                  <li>
                    <a href="#">Australian</a>
                  </li>
                </ul>

                <ul>
                  <li>
                    <a href="#">African</a>
                  </li>
                  <li>
                    <a href="#">Afghan</a>
                  </li>
                  <li>
                    <a href="#">American</a>
                  </li>
                  <li>
                    <a href="#">Arab</a>
                  </li>
                  <li>
                    <a href="#">Argentine</a>
                  </li>
                  <li>
                    <a href="#">Argentinian</a>
                  </li>
                  <li>
                    <a href="#">Asian</a>
                  </li>
                  <li>
                    <a href="#">Australian</a>
                  </li>

                  <li>
                    <a href="#">African</a>
                  </li>
                  <li>
                    <a href="#">Afghan</a>
                  </li>
                  <li>
                    <a href="#">American</a>
                  </li>
                  <li>
                    <a href="#">Arab</a>
                  </li>
                  <li>
                    <a href="#">Argentine</a>
                  </li>
                  <li>
                    <a href="#">Argentinian</a>
                  </li>
                  <li>
                    <a href="#">Asian</a>
                  </li>
                  <li>
                    <a href="#">Australian</a>
                  </li>
                  <li>
                    <a href="#">African</a>
                  </li>
                  <li>
                    <a href="#">Afghan</a>
                  </li>
                  <li>
                    <a href="#">American</a>
                  </li>
                  <li>
                    <a href="#">Arab</a>
                  </li>
                  <li>
                    <a href="#">Argentine</a>
                  </li>
                  <li>
                    <a href="#">Argentinian</a>
                  </li>
                  <li>
                    <a href="#">Asian</a>
                  </li>
                  <li>
                    <a href="#">Australian</a>
                  </li>
                </ul>

                <ul>
                  <li>
                    <a href="#">African</a>
                  </li>
                  <li>
                    <a href="#">Afghan</a>
                  </li>
                  <li>
                    <a href="#">American</a>
                  </li>
                  <li>
                    <a href="#">Arab</a>
                  </li>
                  <li>
                    <a href="#">Argentine</a>
                  </li>
                  <li>
                    <a href="#">Argentinian</a>
                  </li>
                  <li>
                    <a href="#">Asian</a>
                  </li>
                  <li>
                    <a href="#">Australian</a>
                  </li>

                  <li>
                    <a href="#">African</a>
                  </li>
                  <li>
                    <a href="#">Afghan</a>
                  </li>
                  <li>
                    <a href="#">American</a>
                  </li>
                  <li>
                    <a href="#">Arab</a>
                  </li>
                  <li>
                    <a href="#">Argentine</a>
                  </li>
                  <li>
                    <a href="#">Argentinian</a>
                  </li>
                  <li>
                    <a href="#">Asian</a>
                  </li>
                  <li>
                    <a href="#">Australian</a>
                  </li>
                  <li>
                    <a href="#">African</a>
                  </li>
                  <li>
                    <a href="#">Afghan</a>
                  </li>
                  <li>
                    <a href="#">American</a>
                  </li>
                  <li>
                    <a href="#">Arab</a>
                  </li>
                  <li>
                    <a href="#">Argentine</a>
                  </li>
                  <li>
                    <a href="#">Argentinian</a>
                  </li>
                  <li>
                    <a href="#">Asian</a>
                  </li>
                  <li>
                    <a href="#">Australian</a>
                  </li>
                </ul>
              </div>
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
              <div className="modal-body ">
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
                            <div className="tab-pane   active" id="login4">
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
                                    <input type="password" name="" required />
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
                                    By continuing, you agree to our{" "}
                                    <a href="">Terms of use</a>,{" "}
                                    <a href="">Terms of Service</a>, and{" "}
                                    <a href="">Privacy Policy</a>.
                                  </p>
                                </div>
                                <div className="login-social-button">
                                  <div className="social-button social-button-fb">
                                    <a href="">
                                      {" "}
                                      <span>
                                        <img src="images/fb.png" />
                                      </span>{" "}
                                      Connect with Facebook
                                    </a>
                                  </div>
                                  <div className="social-button social-button-google">
                                    <a href="">
                                      {" "}
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
                                      Connect with Apple{" "}
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
                                <div className="login-box-submit">
                                  <button>Log in</button>
                                  <small>OR</small>
                                  <span>
                                    <img src="images/border.png" />{" "}
                                  </span>

                                  <p>
                                    By continuing, you agree to our{" "}
                                    <a href="">Terms of use</a>,{" "}
                                    <a href="">Terms of Service</a>, and{" "}
                                    <a href="">Privacy Policy</a>.
                                  </p>
                                </div>
                                <div className="login-social-button">
                                  <div className="social-button social-button-fb">
                                    <a href="">
                                      {" "}
                                      <span>
                                        <img src="images/fb.png" />
                                      </span>{" "}
                                      Connect with Facebook
                                    </a>
                                  </div>
                                  <div className="social-button social-button-google">
                                    <a href="">
                                      {" "}
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
                                      Connect with Apple{" "}
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
    </>
  );
};

export default Menu;
