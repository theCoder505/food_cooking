import React from "react";
import Layout from "@/components/Layout";
import { Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import SwiperCore from "swiper/core";
import "swiper/css";
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);

const Profile = () => {

  return (
    <Layout>
      <div className="main_width">
        <div className="container-fluid">
          <div className="Barista-nav">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Explore</a>
              </li>
              <li>
                <a href="">Help</a>
              </li>
              <li>
                <a href="">Profile</a>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="profile-be">
                <ul>
                  <li>
                    <a href="#">
                      <img src="images/bookings.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/accoladesgiftd.png" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleGift"
                    >
                      <img src="images/gifcoin.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/Vector-5.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/Share.png" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleGift"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content modal-white">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </button>
                  <div className="modal-body modal-purchases">
                    <div className="modal-givetIcon">
                      <h3>
                        Gifts <img src="images/gifcoin.png" />
                      </h3>
                    </div>
                    <div className="modal-givetrit">
                      <div className="sidebar_givetritw">
                        <div className="sidebar_follow-img">
                          <span>
                            <img src="images/pop.png" />
                          </span>
                        </div>
                      </div>

                      <div className="sidebar_followr-name">
                        <strong>Diana Pink</strong>
                        <small>Healthy meals.</small>
                      </div>
                    </div>

                    <div className="modal-purchases-gift">
                      <ul>
                        <li>
                          <span>
                            <img src="images/jucier.png" />
                          </span>
                          <small>750</small>
                        </li>
                        <li>
                          <span>
                            <img src="images/fitng.png" />
                          </span>
                          <small>5,500</small>
                        </li>
                        <li>
                          <span>
                            <img src="images/topchef.png" />
                          </span>
                          <small>899</small>
                        </li>
                        <li>
                          <span>
                            <img src="images/master.png" />
                          </span>
                          <small>777</small>
                        </li>
                        <li>
                          <span>
                            <img src="images/seapl8.png" />
                          </span>
                          <small>1,899</small>
                        </li>
                        <li>
                          <span>
                            <img src="images/healthwel.png" />
                          </span>
                          <small>333</small>
                        </li>
                        <li>
                          <span>
                            <img src="images/Greattaste.png" />
                          </span>
                          <small>288</small>
                        </li>
                        <li>
                          <span>
                            <img src="images/homegrad.png" />
                          </span>
                          <small>444</small>
                        </li>
                        <li>
                          <span>
                            <img src="images/foodmind.png" />
                          </span>
                          <small>850</small>
                        </li>
                      </ul>
                    </div>
                    <div className="modal-Coins-gift">
                      <ul>
                        <li data-bs-toggle="modal" data-bs-target="#GivCoins">
                          {" "}
                          <span>
                            <i
                              className="fa fa-chevron-left"
                              aria-hidden="true"
                            ></i>
                            Give Coins <img src="images/coin4.png" />{" "}
                          </span>{" "}
                        </li>
                        <li
                          data-bs-toggle="modal"
                          data-bs-target="#REFILLCoins"
                        >
                          <small>
                            <img src="images/coin4.png" /> 80
                          </small>
                          REFILL{" "}
                          <span>
                            <i
                              className="fa fa-chevron-right"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="GivCoins"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content modal-white">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </button>
                  <div className="modal-body modal-purchases">
                    <div className="modal-givetIcon">
                      <h3>
                        Give Coins <img src="images/gifcoin.png" />
                      </h3>
                    </div>

                    <div className="modal-giftprice">
                      <ul>
                        <li>
                          <span>
                            <img src="images/coin4.png" />
                          </span>
                          <small>
                            85 <br />
                            $.90
                          </small>
                        </li>
                        <li>
                          <span>
                            <img src="images/coin4.png" />
                          </span>
                          <small>
                            85 <br />
                            $.90
                          </small>
                        </li>
                        <li>
                          <span>
                            <img src="images/coin4.png" />
                          </span>
                          <small>
                            85 <br />
                            $.90
                          </small>
                        </li>
                        <li>
                          <span>
                            <img src="images/coin4.png" />
                          </span>
                          <small>
                            85 <br />
                            $.90
                          </small>
                        </li>
                      </ul>
                    </div>

                    <div className="modal-Coins-gift">
                      <span
                        data-bs-toggle="modal"
                        data-bs-target="#exampleGift"
                        className="Custompo"
                      >
                        Custom Amount
                      </span>
                      <ul>
                        <li
                          data-bs-toggle="modal"
                          data-bs-target="#REFILLCoins"
                        >
                          <small>
                            <img src="images/coin4.png" /> 80
                          </small>
                          REFILL{" "}
                          <span>
                            <i
                              className="fa fa-chevron-right"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <Row>
                <Col><div className="profile-beach">
                  <ul className="sidebar-Recipes0like">
                    <li>
                      4 <small>Following</small>
                    </li>
                    <li>
                      200<small>Followers</small>
                    </li>
                    <li>
                      12<small>Recipes</small>
                    </li>
                    <li>
                      1.2M<small>Like</small>
                    </li>
                  </ul>
                  <ul className="sidebar-Follow-btn">
                    <li>
                      <a href="#" className="sidebar-Follow-btn1">
                        Follow
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sidebar-Follow-btn2">
                        Message
                      </a>
                    </li>
                  </ul>
                  <h3 className="BioLink">Add bio or links</h3>
                  <ul className="Recipes-ticktok">
                    <li>
                      <a href="#">
                        <img src="images/Twitter.png" /> @ j _ wickd
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/Instagramogo.png" /> @ j _ wickd
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/TikTok2.png" /> @ j _ wickd
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/Pinterest.png" /> @ j _ wickd
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/YouTub.png" /> @ j _ wickd
                      </a>
                    </li>
                  </ul>
                </div></Col>
                <Col> <div className="Recipes-profile">
                  <a href="">
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                  </a>
                  <span data-bs-toggle="modal" data-bs-target="#exampleprofile">
                    <img src="images/Image.png" />
                  </span>
                  <strong>
                    @zhr_nurkhaula{" "}
                    <img
                      src="images/veri1.png"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    />
                  </strong>
                  <small>Jone Wick</small>
                </div></Col>
              </Row>


            </div>

            <div
              className="modal fade"
              id="REFILLCoins"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-mg">
                <div className="modal-content modal-black">
                  <div className="modal-head modal-hevad">
                    <h3>
                      Custom{" "}
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="fa fa-times" aria-hidden="true"></i>
                      </button>
                    </h3>
                  </div>

                  <div className="modal-body modal-Coins">
                    <div className="head-coinNumber dropdown">
                      <a href="" data-bs-toggle="dropdown">
                        Number of A.C.C. Coins{" "}
                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                      </a>
                      <div className="dropdown-menu pro-muy">
                        <ul>
                          <li>
                            <a className="dropdown-item" href="#">
                              {" "}
                              In Dollar Amount
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              {" "}
                              Number of A.C.C. Coins
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="pro-muny">
                        <div className="pro-muny-input">
                          <span>
                            <img src="images/coin4.png" />
                          </span>
                          <input
                            type="text"
                            name=""
                            placeholder="40 - 5,500,000"
                          />
                        </div>
                        <div className="pro-muny-number">
                          <ul>
                            <li>
                              <span>1</span>
                            </li>
                            <li>
                              <span>2</span>
                            </li>
                            <li>
                              <span>3</span>
                            </li>
                            <li>
                              <span>
                                <img src="images/Vector-10.png" />
                              </span>
                            </li>
                            <li>
                              <span>4</span>
                            </li>
                            <li>
                              <span>5</span>
                            </li>
                            <li>
                              <span>6</span>
                            </li>
                            <li>
                              <span>000</span>
                            </li>
                            <li>
                              <span>7</span>
                            </li>
                            <li>
                              <span>8</span>
                            </li>
                            <li>
                              <span>9</span>
                            </li>
                            <li>
                              <span>0</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="pro-m">
                        <strong>Total</strong>{" "}
                        <span>
                          <img src="images/coin4.png" />0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="exampleprofile"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-mg">
                <div className="modal-content modal-black">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </button>
                  <div className="modal-body modal-purchases">
                    <div className="modal-purchasesIcon">
                      <img src="images/Vector-9.png" />
                      <h3>
                        Change Your <br />
                        Shape Icon
                      </h3>
                    </div>
                    <div className="modal-purchases-Current">
                      <strong>Current</strong>
                      <span>
                        <img src="images/Image.png" />
                      </span>
                    </div>
                    <div className="modal-purchases-Shape">
                      <h5>Your purchases</h5>
                      <ul>
                        <li>
                          <img src="images/Diamond.png" />
                        </li>
                        <li>
                          <img src="images/shape-1.png" />
                        </li>
                        <li>
                          <img src="images/1-111-2.png" />
                        </li>
                      </ul>
                      <a href="">Get More!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content modal-black ">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </button>
                  <div className="modal-body modal-subscribe">
                    <h3>This Person subscribe to A.C.C. Authentication.</h3>
                    <img src="images/veri1.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="full-page-display  full-page-inner"></div>

      <div className="container-fluid">
        <div className="full-page-sidebar">
          <div className="full-sidebar-data">
            <h3>Suggestions For You</h3>

            <div className="sidebar_follow-list profilehover">
              <div className="sidebar_follow">
                <div className="sidebar_follow-img">
                  <span>
                    <img src="images/pop.png" />
                  </span>
                </div>

                <div className="sidebar_followr-name">
                  <strong>Diana Pink</strong>
                  <small>Healthy meals.</small>
                </div>
              </div>
              <div className="sidebar-follow_plus">
                <a href="">+ Follow</a>
              </div>
            </div>

            <div className="sidebar_follow-list">
              <div className="sidebar_follow">
                <div className="sidebar_follow-img">
                  <span>
                    <img src="images/pop.png" />
                  </span>
                </div>

                <div className="sidebar_followr-name">
                  <strong>Diana Pink</strong>
                  <small>Healthy meals.</small>
                </div>
              </div>
              <div className="sidebar-follow_plus">
                <a href="">+ Follow</a>
              </div>
            </div>

            <div className="sidebar_follow-list">
              <div className="sidebar_follow">
                <div className="sidebar_follow-img">
                  <span>
                    <img src="images/pop.png" />
                  </span>
                </div>

                <div className="sidebar_followr-name">
                  <strong>Diana Pink</strong>
                  <small>Healthy meals.</small>
                </div>
              </div>
              <div className="sidebar-follow_plus">
                <a href="">+ Follow</a>
              </div>
            </div>

            <div className="sidebar_follow-list">
              <div className="sidebar_follow">
                <div className="sidebar_follow-img">
                  <span>
                    <img src="images/pop.png" />
                  </span>
                </div>

                <div className="sidebar_followr-name">
                  <strong>Diana Pink</strong>
                  <small>Healthy meals.</small>
                </div>
              </div>
              <div className="sidebar-follow_plus">
                <a href="">+ Follow</a>
              </div>
            </div>

            <div className="sidebar_follow-list">
              <div className="sidebar_follow">
                <div className="sidebar_follow-img">
                  <span>
                    <img src="images/pop.png" />
                  </span>
                </div>

                <div className="sidebar_followr-name">
                  <strong>Diana Pink</strong>
                  <small>Healthy meals.</small>
                </div>
              </div>
              <div className="sidebar-follow_plus">
                <a href="">+ Follow</a>
              </div>
            </div>

            <div className="sidebar-Recipes">
              <h3>New Recipes</h3>
              <div className="sidebar-Recipes-list">
                <div className="sidebar-Recipes_box">
                  <div className="sidebar-Recipes-img">
                    <span>
                      <img src="images/Group836.png" />
                    </span>
                  </div>

                  <div className="sidebar-Recipes-name">
                    <strong>Thai Basil Tofu Stir Fry</strong>
                    <small>350 Calories</small>
                  </div>
                </div>
                <div className="sidebar-Recipes_box">
                  <div className="sidebar-Recipes-img">
                    <span>
                      <img src="images/Group836.png" />
                    </span>
                  </div>

                  <div className="sidebar-Recipes-name">
                    <strong>Thai Basil Tofu Stir Fry</strong>
                    <small>350 Calories</small>
                  </div>
                </div>
                <div className="sidebar-Recipes_box">
                  <div className="sidebar-Recipes-img">
                    <span>
                      <img src="images/Group836.png" />
                    </span>
                  </div>

                  <div className="sidebar-Recipes-name">
                    <strong>Thai Basil Tofu Stir Fry</strong>
                    <div className="sidebar-Recipes-name_follow">
                      <div className="sidebar-Recipes-name_follow-img">
                        <span>
                          <img src="images/pop.png" />
                        </span>
                      </div>

                      <div className="sidebar-Recipes-name_follow-name">
                        <strong>Recipe By Sean Lee</strong>
                        <small>210 Calories</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-Recipes_box">
                  <div className="sidebar-Recipes-img">
                    <span>
                      <img src="images/Group836.png" />
                    </span>
                  </div>

                  <div className="sidebar-Recipes-name">
                    <strong>Thai Basil Tofu Stir Fry</strong>
                    <small>350 Calories</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar-Recipes">
              <h3>Discovery#</h3>
              <div className="sidebar-Recipes-list">
                <div className="sidebar-Recipes_box">
                  <div className="sidebar-Recipes-img"></div>

                  <div className="sidebar-Recipes-name">
                    <strong># holiday cooking</strong>
                  </div>
                </div>

                <div className="sidebar-Recipes_box">
                  <div className="sidebar-Recipes-img"></div>

                  <div className="sidebar-Recipes-name">
                    <strong># left over rice recipe</strong>
                  </div>
                </div>

                <div className="sidebar-Recipes_box">
                  <div className="sidebar-Recipes-img"></div>

                  <div className="sidebar-Recipes-name">
                    <strong># chicken soup</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="full-page-fullbar">
          <div className="full-page-Recipe_tab">
            {/* <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" href="#Recipe">
                  Recipe
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#Posts">
                  Posts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#Media">
                  Media
                </a>
              </li>
            </ul> */}
            <Row>
              <Col></Col>
              <Col>
                <p className="tab-text">
                  <a className="active" data-bs-toggle="tab" href="#Recipe">Recipe</a>
                </p>

              </Col>
              <Col>

                <p className="tab-text">
                  <a data-bs-toggle="tab" href="#Posts">Posts</a>
                </p>

              </Col>
              <Col>

                <p className="tab-text">
                  <a data-bs-toggle="tab" href="#Media">Media</a>
                </p>

              </Col>
              <Col></Col>
            </Row>

            <div className="tab-content">
              <div className="tab-pane container active" id="Recipe">
                <div className="Recipe_tab">
                  <div className="Recipe_tab-ul">
                    {/* <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-bs-toggle="tab"
                          href="#MyRecipe"
                        >
                          <img src="images/NewProject.png" />{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#FaveRecipe"
                        >
                          <img src="images/NewProject1.png" />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#BucketList"
                        >
                          <img src="images/NewProject2.png" />
                        </a>
                      </li>
                    </ul> */}
                    <Row>
                      <Col></Col>
                      <Col></Col>
                      <Col>
                        <p>
                          <a className="active" data-bs-toggle="tab" href="#Recipe"> <img src="images/NewProject.png" />{" "}</a>
                        </p>

                      </Col>
                      <Col>

                        <p>
                          <a data-bs-toggle="tab" href="#Posts"><img src="images/NewProject1.png" /></a>
                        </p>

                      </Col>
                      <Col>

                        <p>
                          <a data-bs-toggle="tab" href="#Media"><img src="images/NewProject2.png" /></a>
                        </p>

                      </Col>
                      <Col></Col>
                      <Col></Col>
                    </Row>

                    <div className="tab-content">
                      <div className="tab-pane container active" id="MyRecipe">
                        {/* <div className="owl-carousel-slider">
                          <div className="owl-carousel owl-theme">
                            <div className="item">
                              <div className="owl-carousel-slider-list">
                                <span>
                                  <img src="images/Bursts.png" />
                                </span>{" "}
                                <strong>Holiday cooking</strong>
                                <small>Series 1 - 22</small>
                              </div>
                            </div>
                            <div className="item">
                              <div className="owl-carousel-slider-list">
                                <span>
                                  <img src="images/Bursts.png" />
                                </span>{" "}
                                <strong>Holiday cooking</strong>
                                <small>Series 1 - 22</small>
                              </div>
                            </div>
                            <div className="item">
                              <div className="owl-carousel-slider-list">
                                <span>
                                  <img src="images/Bursts.png" />
                                </span>{" "}
                                <strong>Holiday cooking</strong>
                                <small>Series 1 - 22</small>
                              </div>
                            </div>
                            <div className="item">
                              <div className="owl-carousel-slider-list">
                                <span>
                                  <img src="images/Bursts.png" />
                                </span>{" "}
                                <strong>Holiday cooking</strong>
                                <small>Series 1 - 22</small>
                              </div>
                            </div>
                            <div className="item">
                              <div className="owl-carousel-slider-list">
                                <span>
                                  <img src="images/Bursts.png" />
                                </span>{" "}
                                <strong>Holiday cooking</strong>
                                <small>Series 1 - 22</small>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        <Swiper
                          slidesPerView={4}
                          grid={{
                            rows: 1,
                          }}
                          autoplay= {true}   
                          spaceBetween={30}
                          // pagination={{
                          //   clickable: true,
                          // }}
                          navigation = {true}
                          className="holiday-cooking-swiper"
                        >
                          <SwiperSlide><div className="owl-carousel-slider-list">
                            <span>
                              <img src="images/Bursts.png" />
                            </span>{" "}
                            <strong>Holiday cooking</strong>
                            <small>Series 1 - 22</small>
                          </div></SwiperSlide>
                          <SwiperSlide><div className="owl-carousel-slider-list">
                            <span>
                              <img src="images/Bursts.png" />
                            </span>{" "}
                            <strong>Holiday cooking</strong>
                            <small>Series 1 - 22</small>
                          </div></SwiperSlide>
                          <SwiperSlide><div className="owl-carousel-slider-list">
                            <span>
                              <img src="images/Bursts.png" />
                            </span>{" "}
                            <strong>Holiday cooking</strong>
                            <small>Series 1 - 22</small>
                          </div></SwiperSlide>
                          <SwiperSlide>
                            <div className="owl-carousel-slider-list">
                              <span>
                                <img src="images/Bursts.png" />
                              </span>{" "}
                              <strong>Holiday cooking</strong>
                              <small>Series 1 - 22</small>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="owl-carousel-slider-list">
                              <span>
                                <img src="images/Bursts.png" />
                              </span>{" "}
                              <strong>Holiday cooking</strong>
                              <small>Series 1 - 22</small>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="owl-carousel-slider-list">
                              <span>
                                <img src="images/Bursts.png" />
                              </span>{" "}
                              <strong>Holiday cooking</strong>
                              <small>Series 1 - 22</small>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="owl-carousel-slider-list">
                              <span>
                                <img src="images/Bursts.png" />
                              </span>{" "}
                              <strong>Holiday cooking</strong>
                              <small>Series 1 - 22</small>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="owl-carousel-slider-list">
                              <span>
                                <img src="images/Bursts.png" />
                              </span>{" "}
                              <strong>Holiday cooking</strong>
                              <small>Series 1 - 22</small>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="owl-carousel-slider-list">
                              <span>
                                <img src="images/Bursts.png" />
                              </span>{" "}
                              <strong>Holiday cooking</strong>
                              <small>Series 1 - 22</small>
                            </div>
                          </SwiperSlide>
                          
                        </Swiper>
                        
                        <div className="Recipe_tab-items">
                          <div className="Recipe_tab-itemslist">
                            <div className="Recipe_tab-itemslist-box">
                              <img src="images/videos-bg.png" />
                              <span>
                                <img src="images/pin2.png" />
                              </span>
                            </div>
                            <div className="Recipe_tab-itemslist-box">
                              <img src="images/videos-bg.png" />
                              <span>
                                <img src="images/pin2.png" />
                              </span>
                            </div>
                            <div className="Recipe_tab-itemslist-box">
                              <img src="images/videos-bg.png" />
                              <span>
                                <img src="images/pin2.png" />
                              </span>
                              <small>
                                <img src="images/mealplanner.png" />
                              </small>
                            </div>
                            <div className="Recipe_tab-itemslist-box">
                              <img src="images/videos-bg.png" />
                              <span>
                                <img src="images/pin2.png" />
                              </span>
                            </div>
                            <div className="Recipe_tab-itemslist-box">
                              <img src="images/videos-bg.png" />
                              <span>
                                <img src="images/pin2.png" />
                              </span>
                            </div>
                            <div className="Recipe_tab-itemslist-box">
                              <img src="images/videos-bg.png" />
                              <span>
                                <img src="images/pin2.png" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane-videos-box">
                          <div className="tab-pane-videos">
                            <img src="images/item.png" />
                          </div>
                          <div className="tab-pane-videos">
                            <img src="images/item.png" />
                          </div>
                          <div className="tab-pane-videos">
                            <img src="images/item.png" />
                          </div>
                          <div className="tab-pane-videos">
                            <img src="images/item.png" />
                          </div>
                          <div className="tab-pane-videos">
                            <img src="images/item.png" />
                          </div>
                          <div className="tab-pane-videos">
                            <img src="images/item.png" />
                          </div>
                          <div className="tab-pane-videos">
                            <img src="images/item.png" />
                          </div>
                          <div className="tab-pane-videos">
                            <img src="images/item.png" />
                          </div>
                        </div>
                      </div>

                      <div className="tab-pane container fade" id="FaveRecipe">
                        Fave Recipe
                      </div>
                      <div className="tab-pane container fade" id="BucketList">
                        Bucket List
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane container fade" id="Posts">
                Posts...
              </div>
              <div className="tab-pane container fade" id="Media">
                Media...
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profileopen">
        <div className="sidebar_fow-po">
          <div className="sidebar_follow">
            <div className="sidebar_follow-img">
              <span>
                <img src="images/pop.png" />
              </span>
            </div>

            <div className="sidebar_followr-name">
              <strong>
                Diana Pink <img src="images/IMG_4254.png" />
              </strong>
              <small>@zhr_nurkhaula</small>
              <span>Chef ,Food Lover</span>
            </div>
          </div>
          <div className="profileopengift">
            <img src="images/gifcoin.png" />
          </div>
        </div>

        <div className="Recipes-ul">
          <ul>
            <li>
              <strong>42</strong>
              <span>Recipes</span>
            </li>
            <li>
              <strong>42</strong>
              <span>Followers</span>
            </li>
            <li>
              <strong>42</strong>
              <span>Following</span>
            </li>
          </ul>
        </div>
        <div className="Recipes-poi">
          <ul>
            <li>
              <img src="images/poi.png" />
            </li>
            <li>
              <img src="images/poi.png" />
            </li>
            <li>
              <img src="images/poi.png" />
            </li>
          </ul>
        </div>
        <div className="Recipes-buton">
          <ul>
            <li>
              <button>
                <img src="images/Maskoup-27.png" />
                Follow
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
