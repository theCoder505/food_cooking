
import Layout from "@/components/Layout";
import React, { useState } from "react";
import SidebarComponent from "@/components/headers/SidebarComponent";

const Foodporn = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <Layout>
        <div className="main_width">
          <div className="container-fluid">
            <div className="page_fliter">
              <div className="page_fliter_width">
                <div className="page_fliter_search page_fliter_search-bal">
                  <div className="page_fliter_input">
                    <input type="text" placeholder="" />
                    <button>
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="Cocktail_search">
                <div className="Cocktail_cate">
                  <small>Default view </small>
                  <div className="Cocktail_check">
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <small>Long view</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="full-page-display  full-page-inner">
          <div className="container-fluid">
            <div className="full-page-sidebar">
              {/* <div className="full-sidebar-data">
                <h3>Suggestions For You</h3>
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
              </div> */}
              <SidebarComponent/>
            </div>

            <div className="full-page-fullbar">
              <div className="full-page-member">
                <div className="fullpagebox">
                  <div className="fullpagebox-left">
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
                  </div>
                  <div className="fullpagebox-right">
                    <button>Follow</button>
                  </div>
                  <div className="fullpagebox-headinf">
                    <h3>Japanese Chicken Teriyaki </h3>
                  </div>

                  <div className="fullpagebox-Chicken">
                    <div
                      className={
                        isChecked
                          ? "fullpagebox smallbox Chicken-video"
                          : "Chicken-video"
                      }
                    ></div>

                    <div className="Calories-tab">
                      <a href="">Tag #chicken #teriyaki</a>
                      <span>700 Calories</span>
                    </div>
                    <div className="Chicken-video-likebar">
                      <ul>
                        <li>
                          <span>
                            <img src="images/Group302-2.png" />
                          </span>
                        </li>
                        <li>
                          <span>
                            <img src="images/gifcoin.png" />
                          </span>
                          <small>Gift</small>
                        </li>
                        <li>
                          <span>
                            <img src="images/fodporn.png" />
                          </span>
                          <small>Recipe</small>
                        </li>
                        <li>
                          <span>
                            <img src="images/likebutton.png" />
                          </span>
                          <small>455</small>
                        </li>
                        <li>
                          <span>
                            <img src="images/fave2.png" />
                          </span>
                          <small>300</small>
                        </li>
                        <li>
                          <span>
                            <img src="images/SeekPng.png" />
                          </span>
                          <small>234</small>
                        </li>
                        <li>
                          <span>
                            <img src="images/SHARE2.png" />
                          </span>
                          <small>455</small>
                        </li>
                        <li className="popmenu">
                          <span>
                            <img src="images/Group2.png" />
                          </span>
                        </li>
                      </ul>
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

export default Foodporn;
