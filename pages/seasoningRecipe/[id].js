import React, { useEffect, useMemo, useState } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import axios from "axios";
import SidebarComponent from "@/components/headers/SidebarComponent";
// import { getRecipeByRecipeID } from "@/context/recipe/recipeSlice";
import { useDispatch, useSelector } from "react-redux";
import { getDrinkByDrinkID } from "@/context/recipe/drinkSlice";


const seasoningRecipe = () => {
  const router = useRouter();
  const { id } = router.query;
  const [responseData, setresponseData] = useState("");

  const [data, setData] = useState(null);

  const getrecipe = useSelector((state) => state?.drinkSlice?.drinkbyid?.result);
  // console.log(getrecipe)

  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getDrinkByDrinkID(id, "seasoning"))
    }
  }, [id])


  useEffect(() => {
    setData(getrecipe)
  }, [getrecipe])

  console.log(data, "data----------------")

  // useEffect(() => {

  //   if (data) {
  //     console.log("data",data)
  //   }
  // }, [dispatch]);
  // useMemo(() => {
  //   if (router.isReady) {
  //     axios
  //       .post(`${process.env.NEXT_PUBLIC_AUTH_URL}/api/getrecipe?recipe_id=${id}`, {
  //         headers: {
  //           // 'authorization': token,
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       })
  //       .then(async (res) => {
  //         const data = await res;
  //         setresponseData?(data.data.data);
  //         console.log(data.data.data, "tttttt");
  //       });
  //   }
  // }, [router.isReady]);


  return (
    <Layout>
      <div className="main_width">
        <div className="container-fluid">
          <div className="col-md-12 my-5">
            <div className="text-center">
              <img alt="recipe image" src={data?.media} />

            </div>
            <div className="Soap my-3">
              <h2>{data?.title}</h2>
            </div>
          </div>
          <div className="recipeheadin">
            <div className="row">
              <div className="col-md-2">
                <div className="col-Check">
                  <div className="sidebar_follow">
                    <div className="sidebar_follow-img">
                      <span>
                        <img src="/images/pop.png" />{" "}
                      </span>
                    </div>

                    <div className="sidebar_followr-name">
                      <span>Posted by</span>
                      <strong>
                        {data?.username}{" "}
                        <img src="/images/IMG_4254.png" />
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
                      <strong>

                        {data?.ingredients === undefined
                          ? "0"
                          : data?.ingredients?.length}
                      </strong>{" "}
                      <span>
                        Ingredients <img src="/images/servingicon.png" />
                      </span>
                    </li>
                    <li>
                      <strong>{data?.substitues === undefined
                        ? "0"
                        : data?.substitues}</strong>{" "}
                      <span>
                        Substitute <img src="/images/Replace.png" />
                      </span>
                    </li>

                    <li>
                      <strong>
                        {responseData?.difficulity === "undefined"
                          ? "No"
                          : responseData?.difficulity}{" "}
                        <img src="/images/karatediff.png" />
                      </strong>{" "}
                      <span>
                        Difficulty <img src="/images/difficulty.png" />
                      </span>
                    </li>
                    <li className="no-border">
                      <strong>
                        {data?.cooking_time === "undefined"
                          ? "0"
                          : data?.cooking_time}
                      </strong>{" "}
                      <span>
                        Total Time <img src="/images/Time.png" />
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-Jump">
                  <h4>Jump to....</h4>
                  <ul>
                    <li>
                      <span>
                        Nutritional Facts <img src="/images/nutrfact.png" />
                      </span>
                    </li>
                    <li>
                      <span>
                        Steps <img src="/images/stepsicon.png" />
                      </span>
                    </li>
                    <li>
                      <span>
                        Comments <img src="/images/commenticon.png" />
                      </span>
                      <small>(241)</small>
                    </li>
                    <li>
                      <span>
                        Reviews/Attempts <img src="/images/videoicon.png" />
                      </span>
                      <small>(12)</small>
                    </li>
                  </ul>
                </div>
                <div className="col-Jump-block">
                  <div className="col-Options text-center tools-img">
                    <img src="/images/Maskgroup122.png" />
                    <span>
                      <h4 ><img src="/images/Vector(3).png" />Tools & Equipment's<img src="/images/Vector.png" /></h4>
                    </span>
                    <span className="">

                      <h4><img src="/images/Vector(2).png" /> Needed <img src="/images/Vector(1).png" /></h4>

                    </span>
                  </div>
                </div>
                <div className="col-Jump-block">
                  <img className="mx-auto d-block mt-4" src="/images/source.png" />

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
                        <div className="switch">
                          <input type="checkbox" />
                          <label className="slider round"></label>
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

      <div className="full-page-display full-page-inner">
        <div className="container-fluid">
          <div className="full-page-sidebar">
            {/* <div className="full-sidebar-data">
              <h3>Suggestions For You</h3>

              <div className="sidebar_follow-list">
                <div className="sidebar_follow">
                  <div className="sidebar_follow-img">
                    <span>
                      <img src="/images/pop.png" />{" "}
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
                      <img src="/images/pop.png" />{" "}
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
                      <img src="/images/pop.png" />{" "}
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
                      <img src="/images/pop.png" />{" "}
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
                      <img src="/images/pop.png" />{" "}
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
                        <img src="/images/Group836.png" />{" "}
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
                        <img src="/images/Group836.png" />{" "}
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
                        <img src="/images/Group836.png" />{" "}
                      </span>
                    </div>

                    <div className="sidebar-Recipes-name">
                      <strong>Thai Basil Tofu Stir Fry</strong>
                      <div className="sidebar-Recipes-name_follow">
                        <div className="sidebar-Recipes-name_follow-img">
                          <span>
                            <img src="/images/pop.png" />{" "}
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
                        <img src="/images/Group836.png" />{" "}
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
            <SidebarComponent />
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
                                {data?.ingredients?.map((ingredient, index) => (
                                  <div key={index}>
                                    <strong>
                                      <span>
                                        <img src="/images/addgrocery.png" />
                                        {ingredient.title}
                                      </span>{" "}
                                      {/* </strong> /}
                                `{/ <strong> */}
                                      <li key={index}>
                                        {ingredient.description}
                                      </li>
                                    </strong>
                                  </div>
                                ))}
                              </li>
                            </ul>

                            {/* <li>
                              <span>
                                <img src="/images/addgrocery.png" />
                              </span>{" "}
                              2 Tbsp. <strong> rice vinegar </strong>
                              <span className="right-lis">
                                <img src="/images/subicon-2.png" />
                              </span>
                            </li>

                            <li>
                              <span>
                                <img src="/images/addgrocery.png" />
                              </span>{" "}
                              4 Tbsp. <strong> soy sauce </strong>
                            </li>
                            <li>
                              <span>
                                <img src="/images/addgrocery.png" />
                              </span>{" "}
                              1 1/2 Tbsp. <strong> chili pepper</strong> and
                              <strong> garlic sauce</strong> (optional)
                            </li>
                            <li>
                              <span>
                                <img src="/images/addgrocery.png" />
                              </span>{" "}
                              2 Tbsp. <strong> sesame oil </strong> (regular,
                              not toasted)
                              <span className="right-lis">
                                <img src="/images/subicon-2.png" />
                              </span>
                            </li>

                            <li>
                              <span>
                                <img src="/images/addgrocery.png" />
                              </span>
                              1/4 tsp. <strong> kosher salt </strong>
                            </li>
                          </ul> */}
                            <p>
                              sesame seeds (for garnish, optional) sliced green
                              onion (Thinly, for garnish, optional) rice (To
                              serve:, or noodles, see notes above)
                            </p>
                            <a href className="serve">
                              <img src="/images/COMPLETECIR.png" /> Add All to
                              grocery
                            </a>
                            <a href="" className="tab-catr">
                              <img src="/images/grocery.png" />
                              <small>3</small>
                            </a>
                            <ol>
                              <li>
                                <span>
                                  <img src="/images/addgrocery.png" />
                                </span>
                                Add individual ingredient to Grocery list
                              </li>
                              <li>
                                <span>
                                  <img src="/images/addgrocery.png" />
                                </span>
                                All ingredients in this color (
                                <span className="round-ii"> </span> ) means it is in
                                your Food Storage.
                              </li>

                              <li>
                                <span>
                                  <img src="/images/subicon-2.png" />
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
                            <img src="/images/subicon3.png" />
                            <h3>Substitute</h3>

                            <p> {data?.substitues}</p>

                            <div className="Vector3">
                              <img src="/images/Vector-3.png" />
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
                          {data?.steps?.map((step, index) => (
                            <div key={index} className="full-recipe-data-box">
                              <ul>
                                <div>
                                  <li>
                                    {step.description}
                                  </li>
                                  <li>
                                    <img src={step.image_url} />
                                  </li>
                                </div>
                              </ul>

                            </div>
                          ))}
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
                            {/* Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries. */}
                            {data?.notes}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="full-page-recipe-data drink-tag-box">
                  <div className="full--tag-box">
                    <span>
                      Search <img src="/images/Cocktail.png" /> by Food storeage
                    </span>
                  </div>

                  <div className="full-recipe-tag-box ">
                    <h5>Tag</h5>
                    <span>{data?.tag}</span>
                    <span> Shrimp</span> <span>Broccoli</span>
                    <span>Healthy</span> <span>Spicy</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="full-page-recipe drink-row">
              <div className="row ">
                <div className="full-page-recipe-tab w-100">
                  <ul>
                    <li>
                      Save
                      <span>
                        <img src="/images/fave.png" />
                      </span>
                    </li>
                    <li>
                      Rate
                      <span>
                        <img src="/images/starrating.png" />
                      </span>
                    </li>
                    <li>
                      Bucket List
                      <span>
                        <img src="/images/bucket2.png" />
                      </span>
                    </li>
                    <li>
                      Print
                      <span>
                        <img src="/images/Masprine.png" />
                      </span>
                    </li>
                    <li>
                      Meal Plan
                      <span>
                        <img src="/images/booking.png" />
                      </span>
                    </li>
                    <li>
                      Share
                      <span>
                        <img src="/images/Share.png" />
                      </span>
                    </li>
                    <li>
                      Recipe QR Code
                      <span>
                        <img src="/images/qr.png" />
                      </span>
                    </li>
                    <li>
                      Gift/Coin
                      <span>
                        <img src="/images/gifcoin.png" />
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="row">
                  <div className="contentop">
                    <p>About</p>
                    <p>
                      {" "}
                      {data?.about}</p>
                    {/* <p>
                    About Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p> */}
                  </div>
                  <div className="col-md-8">
                    <div className="col-again">
                      <div className="col-request">
                        <h4>
                          Request box: Request from content creator to show you
                          how to do things from the recipe and they can
                          respond/upload.
                        </h4>
                        <textarea>Type here......</textarea>
                        <button>
                          <img src="/images/Vector-4.png" />
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
                  </div>

                  <div className="col-md-4">
                    <div className="col-Nutrition">
                      <h4>Nutrition Facts</h4>
                      <h5>Amount Per Serving</h5>
                      <p>{data?.nutrition}</p>
                      <h4>
                        Calories{" "}
                        <span>
                          370 <small> % Daily Value*</small>
                        </span>
                      </h4>

                      <ul>
                        <li>
                          <strong>Total Fat 86.8 g </strong> <span> 34 %</span>
                          <ul>
                            <li>
                              Saturated Fat 21.6 g <span>108 % </span>
                            </li>
                            <li>
                              Trans Fat 0.4 g <span> </span>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <strong>Cholesterol </strong> 110.10 mg
                          <span>113 %</span>
                        </li>
                        <li>
                          <strong>Sodium </strong> 92.2 mg <span>16%</span>
                        </li>
                        <li>
                          <strong>Total Carbohydrate </strong> 34.2 g
                          <span>111 %</span>
                          <ul>
                            <li>
                              Dietary Fiber 35 g <span>140 % </span>
                            </li>
                            <li>
                              Total Sugars 30.6 g <span> </span>
                            </li>
                            <li>
                              Includes - Added Sugars <span> </span>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <strong>Protein </strong> 155.8 g <span>312 %</span>
                        </li>
                        <li>
                          <strong>Vitamin D 0.9 µg </strong> <span>6%</span>
                        </li>
                        <li>
                          <strong>Calcium 235.7 mg </strong> <span>24 %</span>
                        </li>
                        <li>
                          <strong>Iron 18 mg </strong> <span>100%</span>
                        </li>
                        <li>
                          <strong>Potassium 3105.3 mg </strong>{" "}
                          <span>66 %</span>
                        </li>
                      </ul>
                      <p>
                        *Percent Daily Values are based on a 2000 calorie diet
                      </p>
                    </div>
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
                            <img alt="recipe image" src={data?.media} />
                          </div>
                          {/* <div className="tab-pane-videos">
                          <img src="/images/item.png" />
                        </div>
                        <div className="tab-pane-videos">
                          <img src="/images/item.png" />
                        </div>
                        <div className="tab-pane-videos">
                          <img src="/images/item.png" />
                        </div>
                        <div className="tab-pane-videos">
                          <img src="/images/item.png" />
                        </div>
                        <div className="tab-pane-videos">
                          <img src="/images/item.png" />
                        </div>
                        <div className="tab-pane-videos">
                          <img src="/images/item.png" />
                        </div>
                        <div className="tab-pane-videos">
                          <img src="/images/item.png" />
                        </div> */}
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
    </Layout >
  );
};

export default seasoningRecipe;
