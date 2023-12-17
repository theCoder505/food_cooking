import React from "react";
import Layout from "@/components/Layout";

const Lab_full = () => {
  return (
    <Layout>
      <div className="main_width">
        <div className="container-fluid">
          <div className="col-md-12 my-5">
            <div className="text-center">
              <img src="images/unsplash_DlZD4V2j9oM-2.png" />
            </div>
            <div className="Soap my-3">
              <h3>Soap</h3>
            </div>
          </div>
          <div className="recipeheadin">
            <div className="row">
              <div className="col-md-2">
                <div className="col-Check">
                  <div className="sidebar_follow">
                    <div className="sidebar_follow-img">
                      <span>
                        <img src="images/pop.png" />{" "}
                      </span>
                    </div>

                    <div className="sidebar_followr-name">
                      <span>Posted by</span>
                      <strong>
                        Diana Pink <img src="images/IMG_4254.png" />
                      </strong>
                      <small>Healthy meals.</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-10">
                <div className="Ingredients_list">
                  <ul>
                    <li>
                      <strong>8</strong>
                      <span>
                        Ingredients <img src="images/servingicon.png" />
                      </span>
                    </li>
                    <li>
                      <strong>3/8</strong>
                      <span>
                        Substitute <img src="images/Replace.png" />
                      </span>
                    </li>

                    <li>
                      <strong>
                        Easy <img src="images/karatediff.png" />
                      </strong>
                      <span>
                        Difficulty <img src="images/difficulty.png" />
                      </span>
                    </li>
                    <li className="no-border">
                      <strong>25</strong>
                      <span>
                        Total Time <img src="images/Time.png" />
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-Jump">
                  <h4>Jump to....</h4>
                  <ul>
                    <li>
                      <span>
                        Nutritional Facts <img src="images/nutrfact.png" />
                      </span>
                    </li>
                    <li>
                      <span>
                        Steps <img src="images/stepsicon.png" />
                      </span>
                    </li>
                    <li>
                      <span>
                        Comments <img src="images/commenticon.png" />
                      </span>
                      <small>(241)</small>
                    </li>
                    <li>
                      <span>
                        Reviews/Attempts <img src="images/videoicon.png" />
                      </span>
                      <small>(12)</small>
                    </li>
                  </ul>
                </div>
                <div className="col-Jump-block">
                  <img src="images/source.png" />

                  <div className="col-Options">
                    <h4>Options</h4>
                    <div className="col-minplu">
                      <span>Serving</span>
                      <div className="input-group">
                        <input
                          type="button"
                          value="-"
                          className="button-minus"
                          data-field="quantity"
                        />
                        <input
                          type="number"
                          step="1"
                          max=""
                          value="1"
                          name="quantity"
                          className="quantity-field"
                        />
                        <input
                          type="button"
                          value="+"
                          className="button-plus"
                          data-field="quantity"
                        />
                      </div>
                    </div>
                    <div className="col-drop">
                      <small>
                        <strong>Metric</strong>/Imperial
                      </small>
                      <div className="Cocktail_check">
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="full-page-display full-page-inner">
        <div className="container-fluid">
          <div className="full-page-sidebar">
            <div className="full-sidebar-data">
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
            </div>
          </div>

          <div className="full-page-fullbar">
            <div className="typesetting_data">
              <div className="row">
                <div className="col-md-12">
                  <div className="Ingredientsm_question Ingredientsm_drink">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#home"
                          type="button"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          Ingredients
                        </button>
                      </li>
                      <span></span>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#profile"
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          Substitutions
                        </button>
                      </li>
                      <span></span>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="Steps-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#Steps"
                          type="button"
                          role="tab"
                          aria-controls="Steps"
                          aria-selected="false"
                        >
                          Steps
                        </button>
                      </li>
                      <span></span>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="contact-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#contact"
                          type="button"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                        >
                          Notes
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="Ingredients-tab">
                          <div className="Substitute-tab-max">
                            <h3>-Ingredients-</h3>

                            <ul>
                              <li>
                                <small>2</small>
                                <span>
                                  <img src="images/addgrocery.png" />
                                </span>
                                1 lb. <strong>large shrimp</strong> (deveined,
                                peeled or unpeeled)
                              </li>
                              <li>
                                <small>2</small>
                                <span>
                                  <img src="images/addgrocery.png" />
                                </span>
                                1 1/2 lb.<strong>broccoli</strong>
                              </li>
                              <li>
                                <span>
                                  <img src="images/addgrocery.png" />
                                </span>{" "}
                                1<strong> white onion </strong> (Small)
                                <span className="right-lis">
                                  <img src="images/subicon-2.png" />
                                </span>
                              </li>

                              <li>
                                <span>
                                  <img src="images/addgrocery.png" />
                                </span>{" "}
                                2 Tbsp. <strong> rice vinegar </strong>
                                <span className="right-lis">
                                  <img src="images/subicon-2.png" />
                                </span>
                              </li>

                              <li>
                                <span>
                                  <img src="images/addgrocery.png" />
                                </span>{" "}
                                4 Tbsp. <strong> soy sauce </strong>
                              </li>
                              <li>
                                <span>
                                  <img src="images/addgrocery.png" />
                                </span>{" "}
                                1 1/2 Tbsp. <strong> chili pepper</strong> and
                                <strong> garlic sauce</strong> (optional)
                              </li>
                              <li>
                                <span>
                                  <img src="images/addgrocery.png" />
                                </span>{" "}
                                2 Tbsp. <strong> sesame oil </strong> (regular,
                                not toasted)
                                <span className="right-lis">
                                  <img src="images/subicon-2.png" />
                                </span>
                              </li>

                              <li>
                                <span>
                                  <img src="images/addgrocery.png" />
                                </span>
                                1/4 tsp. <strong> kosher salt </strong>
                              </li>
                            </ul>
                            <p>
                              sesame seeds (for garnish, optional) sliced green
                              onion (Thinly, for garnish, optional) rice (To
                              serve:, or noodles, see notes above)
                            </p>
                            <a href className="serve">
                              <img src="images/COMPLETECIR.png" /> Add All to
                              grocery
                            </a>
                            <a href="" className="tab-catr">
                              <img src="images/grocery.png" />
                              <small>3</small>
                            </a>
                            <ol>
                              <li>
                                <span>
                                  <img src="images/addgrocery.png" />
                                </span>
                                Add individual ingredient to Grocery list
                              </li>
                              <li>
                                <span>
                                  <img src="images/addgrocery.png" />
                                </span>
                                All ingredients in this color (
                                <span className="round-ii"> </span> ) means it is in
                                your Food Storage.
                              </li>

                              <li>
                                <span>
                                  <img src="images/subicon-2.png" />
                                </span>
                                Ingredients that have a substitute
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div className="Substitute-tab">
                          <div className="Substitute-tab-max">
                            <img src="images/subicon3.png" />
                            <h3>Substitute</h3>

                            <div className="table-Substitute">
                              <table>
                                <tbody>
                                <tr>
                                  <td>Rice Vinegar</td>
                                  <td>
                                    <img src="images/sub.png" />
                                  </td>
                                  <td>
                                    Shallots <br />
                                    Red Onion <br />
                                    Sweet Onion
                                  </td>
                                </tr>
                                <tr className="blacktr">
                                  <td>White Onion</td>
                                  <td>
                                    <img src="images/sub.png" />
                                  </td>
                                  <td>
                                    Apple Cider Vinegar <br />
                                    Champagne Vinegar <br />
                                    White Wine Vinegar <br />
                                    Lemon/Lime juice <br />
                                    White Balsamic Vinegar <br />
                                    Distilled White Vinegar
                                  </td>
                                </tr>
                                <tr>
                                  <td>Sesame Oil</td>
                                  <td>
                                    <img src="images/sub.png" />
                                  </td>
                                  <td>
                                    Grapeseed Oil <br />
                                    Canola Oil <br />
                                    Sunflower Oil
                                  </td>
                                </tr>
                                </tbody>
                              </table>
                            </div>

                            <div className="Vector3">
                              <img src="images/Vector-3.png" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="Steps"
                        role="tabpanel"
                        aria-labelledby="Steps-tab"
                      >
                        <div className="Step-tab">
                          <ul>
                            <li>Step 1. Squeeze Lime and Grape fruit</li>
                            <li>Step 2. Slice Strawberries and Raspberry</li>

                            <li>
                              Step 3. Take glass and put on brim of the glass on
                              the Kosher salt
                            </li>

                            <li>
                              Step 4. Pour Vodka, Hypnotic , Red wine each 1/4th
                              of a cup
                            </li>

                            <li>
                              Step 5. Mix all ingredients together and enjoy!
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="contact"
                        role="tabpanel"
                        aria-labelledby="contact-tab"
                      >
                        <div className="note-tab">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="full-page-recipe-data">
                  <div className="full--tag-box">
                    <span>
                      Search <img src="images/Cocktail.png" /> by Food storeage
                    </span>
                  </div>

                  <div className="full-recipe-tag-box">
                    <h5>Tag</h5>
                    <span> Shrimp</span> <span>Broccoli</span>
                    <span>Healthy</span> <span>Spicy</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="full-page-recipe">
              <div className="row">
                <div className="full-page-recipe-tab">
                  <ul>
                    <li>
                      Save
                      <span>
                        <img src="images/fave.png" />
                      </span>
                    </li>
                    <li>
                      Rate
                      <span>
                        <img src="images/starrating.png" />
                      </span>
                    </li>
                    <li>
                      Bucket List
                      <span>
                        <img src="images/bucket2.png" />
                      </span>
                    </li>
                    <li>
                      Print
                      <span>
                        <img src="images/Masprine.png" />
                      </span>
                    </li>
                    <li>
                      Meal Plan
                      <span>
                        <img src="images/booking.png" />
                      </span>
                    </li>
                    <li>
                      Share
                      <span>
                        <img src="images/Share.png" />
                      </span>
                    </li>
                    <li>
                      Recipe QR Code
                      <span>
                        <img src="images/qr.png" />
                      </span>
                    </li>
                    <li>
                      Gift/Coin
                      <span>
                        <img src="images/gifcoin.png" />
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-again contentop">
                  <p>
                    About Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <div className="col-request">
                    <h4>
                      Request box: Request from content creator to show you how
                      to do things from the recipe and they can respond/upload.
                    </h4>
                    <textarea>Type here......</textarea>
                    <button>
                      <img src="images/Vector-4.png" />
                    </button>
                  </div>
                  <div className="col-again-table">
                    <table>
                      <thead>
                        <tr>
                          <th>370</th>
                          <th>60g</th>
                          <th>30g</th>
                          <th>92.2mg</th>
                          <th>44g</th>
                          <th>35g</th>
                          <th>110 mg</th>
                          <th>18mg</th>
                          <th>235.4 mg</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Calories</td>
                          <td>Fat</td>
                          <td>Protein</td>
                          <td>Sodium</td>
                          <td>Carbs</td>
                          <td>Fiber</td>
                          <td>Cholesterol</td>
                          <td>Iron</td>
                          <td>Calcium</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="videos-section-recipe my-5">
                  <div className="videos-recipe-tab">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#Comments"
                        >
                          Comments
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#Attempts"
                        >
                          Reactions/Attempts
                        </a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link" data-bs-toggle="tab" href="#Pics">
                          Videos/Pics
                        </a>
                      </li>
                    </ul>

                    <div className="tab-content">
                      <div className="tab-pane container fade" id="Comments">
                        Comments
                      </div>
                      <div className="tab-pane container fade" id="Attempts">
                        Reactions/Attempts
                      </div>
                      <div className="tab-pane container active" id="Pics">
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

export default Lab_full;
