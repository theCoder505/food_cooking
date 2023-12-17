import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

const Barista_other = () => {
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
            <h2>Barista Other</h2>
          </div>
          <div className="mobiile-food-list">
            <ul>
              <li>
                <a href="" className="avt">
                  <span>
                    <img src="images/Icon-4-5.png" />
                  </span>
                  <small>Drinks</small>
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <img src="images/Icon-3-2.png" />
                  </span>
                  <small>Dessert</small>
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <img src="images/Icon-4-2.png" />
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
        <div className="container">
          <div className="Barista-nav">
            <ul>
              <li>
                <Link href="/AccLandingPage">Home</Link>
              </li>
              <li>
                <Link href="">Explore</Link>
              </li>
              <li>
                <Link href="">Help</Link> 
              </li>
              <li>
                <Link href="">Profile</Link>
              </li>
            </ul>
          </div>
          <div className="page_cat main-cat">
            <h2>Barista-Other</h2>
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
                <li className="action-list">
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
                <li>
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
                    <option>Barista</option>
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

            <div className="Cocktail_search">
              <div className="Cocktail_search-left">
                <span>
                  Search <img src="images/Cocktail.png" /> by Food storeage
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="full-page-display bg-blk">
        <div className="container">
          <div className="col-sm-6 col-md-3">
            <div className="Barista-Other_box">
              <div className="Barista-Other_box_img">
                <img src="images/MaskGroup-4.png" />
              </div>
              <div className="Barista-Other_box_text">
                <div className="full-page-member-data">
                  <div className="full-page-member-img">
                    <span>
                      <img src="images/pop.png" />{" "}
                    </span>
                  </div>

                  <div className="full-page-member-name">
                    <strong>Diana Pink </strong>
                    <small>@Pink_vegan</small>
                  </div>
                  <div className="full-page-start">
                    <span>
                      <img src="images/star.png" /> 4.1
                    </span>
                    <span className="fave">
                      <img src="images/fave.png" />
                    </span>
                  </div>
                </div>
                <div className="full-page-member-special">
                  <h5>Hypnotic special</h5>
                  <span>5 Ingredients</span>
                </div>
                <div className="full-page-member-Served">
                  <h5>
                    Served on: Collins Glass <img src="images/Help.png" />
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Barista_other;
