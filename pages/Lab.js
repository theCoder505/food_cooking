import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import SidebarComponent from "@/components/headers/SidebarComponent";

const Lab = () => {
  return (
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
                <div className="tab-pane active" id="Request">
                  <div className="Request-bo">
                    <h3>3 Requests</h3>
                    <ul>
                      <li>
                        @Cook_with_x3
                        <span>
                          <img src="images/approve.png" />{" "}
                        </span>
                        <span>
                          <img src="images/deny.png" />
                        </span>
                      </li>

                      <li>
                        @Cook_with_x3
                        <span>
                          <img src="images/approve.png" />{" "}
                        </span>
                        <span>
                          <img src="images/deny.png" />
                        </span>
                      </li>
                      <li>
                        @Cook_with_x3
                        <span>
                          <img src="images/approve.png" />{" "}
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
                      <li>@Cook_with_x3</li>
                      <li>@Cook_with_x3</li>
                      <li>@Cook_with_x3</li>
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

      <div className="mobiile-view">
        <div className="mobiile-header">
          <div className="mobiile-header_menu">
            <a href="">
              <img src="images/Mask-14.png" />
            </a>
          </div>
          <div className="mobiile-headericon">
            <ul>
              <li>
                <a href="">
                  <img src="images/Mask15.png" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="images/Mask16.png" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="images/Mask17.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mobiile-view-food bg-black">
          <div className="mobiile-food">
            <h2>Specialty</h2>
          </div>
          <div className="mobiile-food-list">
            <ul>
              <li>
                <a href="" className="avt">
                  <span>
                    <img src="images/Icon-8-2.png" />
                  </span>
                  <small>Speciality</small>
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <img src="images/Icon-3-2.png" />
                  </span>
                  <small>Season</small>
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <img src="images/Icon-4-4.png" />
                  </span>
                  <small>Sauce</small>
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <img src="images/Icon-4-6.png" />
                  </span>
                  <small>Appliances</small>
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <img src="images/Icon-4-7.png" />
                  </span>
                  <small>Food Hack</small>
                </a>
              </li>
            </ul>
          </div>
          <div className="search-mobiel">
            <button>
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
            <input type="text" name="" placeholder="Search " />
          </div>
        </div>
        <div className="mobiile-footer">
          <div className="mobiile-footervie">
            <ul>
              <li>
                <span>
                  <img src="images/Home.png" />
                </span>
                <small>Dine in</small>
              </li>
              <li>
                <span>
                  <img src="images/calender.png" />
                </span>
                <small>Food Planner</small>
              </li>
              <li>
                <span>
                  <img src="images/Tarif.png" />
                </span>
                <small>Favorite</small>
              </li>
              <li>
                <span>
                  <img src="images/fodporn-2.png" />
                </span>
                <small>Food Porn</small>
              </li>
              <li>
                <span>
                  <img src="images/Akun.png" />
                </span>
                <small>Profile</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="main_width">
        <div className="container-fluid">
          <div className="page_cat main-cat">
            <h2>Lab</h2>
            <div className="page_cat_width">
              <ul>
                <li>
                  <Link href={"/Food"}>
                    <span>
                      <img src="images/recipe.png" />
                    </span>
                    <strong>Food</strong>
                  </Link>
                </li>
                <li>
                  <Link href={"/Drinks"}>
                    <span>
                      <img src="images/drinks-2.png" />
                    </span>
                    <strong>Drinks</strong>
                  </Link>
                </li>
                <li>
                  <Link href={"/Dessert"}>
                    <span>
                      <img src="images/DESSERT.png" />
                    </span>
                    <strong>Dessert</strong>
                  </Link>
                </li>
                <li className="action-list">
                  <Link href={"/Speciality"}>
                    <span>
                      <img src="images/specialty.png" />
                    </span>
                    <strong>Specialty</strong>
                  </Link>
                </li>
                <li>
                  <Link href={"/Seasoning"}>
                    <span>
                      <img src="images/SEASONING.png" />
                    </span>
                    <strong>Seasoning</strong>
                  </Link>
                </li>
                <li>
                  <Link href={"/Sauce"}>
                    <span>
                      <img src="images/SAUCE.png" />
                    </span>
                    <strong>Sauce</strong>
                  </Link>
                </li>
                <li>
                  <Link href={"/Appliances"}>
                    <span>
                      <img src="images/appliances.png" />
                    </span>
                    <strong>Appliances</strong>
                  </Link>
                </li>
                <li>
                  <Link href={"/FoodHack"}>
                    <span>
                      <img src="images/foodhack.png" />
                    </span>
                    <strong>Food Hack</strong>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="page_fliter">
            <div className="page_fliter_width">
              <div className="page_fliter_search">
                <div className="page_fliter_select">
                  <select>
                    <option>Lab</option>
                  </select>
                </div>
                <div className="page_fliter_input">
                  <input type="text" placeholder="" />
                  <button>
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <div className="page_fliter_data">
                <span>
                  <i className="fa fa-align-center" aria-hidden="true"></i>
                  Filter
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="full-page-display full-page-inner bg-blk">
        <div className="container-fluid">
          <div className="full-page-sidebar">
            {/* <div className="full-sidebar-data">
              <h3>Suggestions For You</h3>

              <div className="sidebar_follow-list">
                <div className="sidebar_follow">
                  <div className="sidebar_follow-img">
                    <span>
                      <img src="images/pop.png" />{" "}
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
                      <img src="images/pop.png" />{" "}
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
                      <img src="images/pop.png" />{" "}
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
                      <img src="images/pop.png" />{" "}
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
                      <img src="images/pop.png" />{" "}
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
                        <img src="images/Group836.png" />{" "}
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
                        <img src="images/Group836.png" />{" "}
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
                        <img src="images/Group836.png" />{" "}
                      </span>
                    </div>

                    <div className="sidebar-Recipes-name">
                      <strong>Thai Basil Tofu Stir Fry</strong>
                      <div className="sidebar-Recipes-name_follow">
                        <div className="sidebar-Recipes-name_follow-img">
                          <span>
                            <img src="images/pop.png" />{" "}
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
                        <img src="images/Group836.png" />{" "}
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
            </div> */}
            <SidebarComponent/>
          </div>

          <div className="full-page-fullbar">
            <div className="full-page-member page-drink">
              <div className="row">
                <div className="col-sm-6 col-md-4">
                  <div className="full-page-member-block">
                    <a href="Barista.html">
                      <div className="full-page-food">
                        <span>
                          <img src="images/MaskGroup-5.png" />
                        </span>

                        <div className="full-page-front">
                          <h3>Fermenting</h3>
                          <h5>
                            45 <small>Recipe’s</small>
                          </h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="full-page-member-block">
                    <a href="Barista.html">
                      <div className="full-page-food">
                        <span>
                          <img src="images/MaskGroup-5.png" />
                        </span>

                        <div className="full-page-front">
                          <h3>Fermenting</h3>
                          <h5>
                            45 <small>Recipe’s</small>
                          </h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="full-page-member-block">
                    <a href="Barista.html">
                      <div className="full-page-food">
                        <span>
                          <img src="images/MaskGroup-5.png" />
                        </span>

                        <div className="full-page-front">
                          <h3>Fermenting</h3>
                          <h5>
                            45 <small>Recipe’s</small>
                          </h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="full-page-member-block">
                    <a href="Barista.html">
                      <div className="full-page-food">
                        <span>
                          <img src="images/MaskGroup-5.png" />
                        </span>

                        <div className="full-page-front">
                          <h3>Fermenting</h3>
                          <h5>
                            45 <small>Recipe’s</small>
                          </h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="full-page-member-block">
                    <a href="Barista.html">
                      <div className="full-page-food">
                        <span>
                          <img src="images/MaskGroup-5.png" />
                        </span>

                        <div className="full-page-front">
                          <h3>Fermenting</h3>
                          <h5>
                            45 <small>Recipe’s</small>
                          </h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4">
                  <div className="full-page-member-block">
                    <a href="Barista.html">
                      <div className="full-page-food">
                        <span>
                          <img src="images/MaskGroup-5.png" />
                        </span>

                        <div className="full-page-front">
                          <h3>Fermenting</h3>
                          <h5>
                            45 <small>Recipe’s</small>
                          </h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="full-Recipe-Food">
                <div className="">
                  <div className="full-Weekly-heading">
                    <h2>All Recipe’s</h2>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-3">
                      <div className="full-page-member-block">
                        <div className="full-page-member-product">
                          <img src="images/Group208.png" />
                          <ul>
                            <li>
                              <span>
                                <img src="images/fave.png" />
                              </span>
                              <small>1400</small>
                            </li>
                            <li>
                              <span>
                                <img src="images/bucket.png" />
                              </span>
                              <small>300</small>
                            </li>
                            <li>
                              <span>
                                <img src="images/mealplanner.png" />
                              </span>
                              <small>200</small>
                            </li>
                            <li>
                              <span>
                                <img src="images/like.png" />
                              </span>
                              <small>100</small>
                            </li>
                          </ul>
                        </div>
                        <div className="full-page-member-data">
                          <div className="full-page-member-img">
                            <span>
                              <img src="images/pop.png" />{" "}
                            </span>
                          </div>

                          <div className="full-page-member-name">
                            <strong>
                              Diana Pink <img src="images/IMG_4254.png" />
                            </strong>
                            <small>@Pink_vegan</small>
                            <label>Thai Basil Tofu Stir Fry</label>
                          </div>
                          <div className="full-page-start">
                            <span>
                              <img src="images/star.png" /> 4.1
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="full-page-member-block">
                        <div className="full-page-member-product">
                          <img src="images/Group208.png" />
                          <ul>
                            <li>
                              <span>
                                <img src="images/fave.png" />
                              </span>
                              <small>1400</small>
                            </li>
                            <li>
                              <span>
                                <img src="images/bucket.png" />
                              </span>
                              <small>300</small>
                            </li>
                            <li>
                              <span>
                                <img src="images/mealplanner.png" />
                              </span>
                              <small>200</small>
                            </li>
                            <li>
                              <span>
                                <img src="images/like.png" />
                              </span>
                              <small>100</small>
                            </li>
                          </ul>
                        </div>
                        <div className="full-page-member-data">
                          <div className="full-page-member-img">
                            <span>
                              <img src="images/pop.png" />{" "}
                            </span>
                          </div>

                          <div className="full-page-member-name">
                            <strong>
                              Diana Pink <img src="images/IMG_4254.png" />
                            </strong>
                            <small>@Pink_vegan</small>
                            <label>Thai Basil Tofu Stir Fry</label>
                          </div>
                          <div className="full-page-start">
                            <span>
                              <img src="images/star.png" /> 4.1
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="full-page-member-block">
                        <div className="full-page-member-product">
                          <img src="images/Group208.png" />
                          <ul>
                            <li>
                              <span>
                                <img src="images/fave.png" />
                              </span>
                              <small>1400</small>
                            </li>
                            <li>
                              <span>
                                <img src="images/bucket.png" />
                              </span>
                              <small>300</small>
                            </li>
                            <li>
                              <span>
                                <img src="images/mealplanner.png" />
                              </span>
                              <small>200</small>
                            </li>
                            <li>
                              <span>
                                <img src="images/like.png" />
                              </span>
                              <small>100</small>
                            </li>
                          </ul>
                        </div>
                        <div className="full-page-member-data">
                          <div className="full-page-member-img">
                            <span>
                              <img src="images/pop.png" />{" "}
                            </span>
                          </div>

                          <div className="full-page-member-name">
                            <strong>
                              Diana Pink <img src="images/IMG_4254.png" />
                            </strong>
                            <small>@Pink_vegan</small>
                            <label>Thai Basil Tofu Stir Fry</label>
                          </div>
                          <div className="full-page-start">
                            <span>
                              <img src="images/star.png" /> 4.1
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="full-page-member-block">
                        <div className="full-page-member-product">
                          <img src="images/Group208.png" />
                          <ul>
                            <li>
                              <span>
                                <img src="images/fave.png" />
                              </span>
                              <small>1400</small>
                            </li>
                            <li>
                              <span>
                                <img src="images/bucket.png" />
                              </span>
                              <small>300</small>
                            </li>
                            <li>
                              <span>
                                <img src="images/mealplanner.png" />
                              </span>
                              <small>200</small>
                            </li>
                            <li>
                              <span>
                                <img src="images/like.png" />
                              </span>
                              <small>100</small>
                            </li>
                          </ul>
                        </div>
                        <div className="full-page-member-data">
                          <div className="full-page-member-img">
                            <span>
                              <img src="images/pop.png" />{" "}
                            </span>
                          </div>

                          <div className="full-page-member-name">
                            <strong>
                              Diana Pink <img src="images/IMG_4254.png" />
                            </strong>
                            <small>@Pink_vegan</small>
                            <label>Thai Basil Tofu Stir Fry</label>
                          </div>
                          <div className="full-page-start">
                            <span>
                              <img src="images/star.png" /> 4.1
                            </span>
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

export default Lab;
