import { useContext, useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import axios from "axios";
import AppContext from "@/context/AppContext";
import { useRouter } from "next/router";
import SidebarComponent from "@/components/headers/SidebarComponent";
import { useDispatch } from "react-redux";
import { addMeal } from "@/context/meal/mealSlice";

const Meal = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const { setMeal, ...contextRest } = useContext(AppContext);
  const { recipe } = contextRest;
 
  const [formData, setFormData] = useState({
    by_calories: 0,
    exclude_ingredients: "",
    allergies: "",
    meal_plan_type: "",
    spicy_level: false,
    recipe_by: false,
    exat_spicy: false,
    use_meal_prepping: true
  })

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_AUTH_URL}/api/category/recipe`
      );
      const data = response.data;

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    setSearchRecipe(e.target.value);
    if (e.target.value === 0) {
      setSearchRecipe("");
      setSearchApiData([]);
    }
  };
  const getAllRecipes = async () => {
    const payload = { category_id: "1" };
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_AUTH_URL}/api/allsearch/recipe`,
        payload
      );
      // setLoginData(response);
      setGetAllRecipeData(response.data.data);
      console.log("response -----", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSearchRecipe = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const payload = {
      category_id: selectedCategory,
      title: searchRecipe,
    };
    await axios
      .post(
        `${process.env.NEXT_PUBLIC_AUTH_URL}/api/search/recipe`,
        payload,
        config
      )
      .then((response) => {
        setSearchApiData(response.data.data);
      })
      .catch((err) => console.log(err, "---err"));
    // !searchRecipe?.length && getAllRecipes()
  };

  const getAllCategory = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const payload = {
      category_id: 1,
    };
    await axios
      .post(
        `${process.env.NEXT_PUBLIC_AUTH_URL}/api/search/recipe`,
        payload,
        config
      )
      .then((response) => {
        setSearchApiData(response.data.data);
      })
      .catch((err) => console.log(err, "---err"));
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const handlePageDetail = async (recipe_id) => {
    console.log("recipe_id", recipe_id);
    const payload = { recipe_id: recipe_id };
    try {
      const response = await axios
        .post(`${process.env.NEXT_PUBLIC_AUTH_URL}/api/getrecipe`, payload)
        .then((res) => {
          console.log(res, "----res");
          router.push({
            pathname: `/Recipe2/${recipe_id}`,
            query: { id: res?.data?.data?.id },
          });
        });
    } catch (error) {
      console.error(error);
    }

  };

  const [sliderValue, setSliderValue] = useState(50);

  useEffect(() => {
    console.log("sliderValue---", formData);
  }, [formData])

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const inputValue = type === 'checkbox' ? checked : value;

    console.log("value---", type, checked);

    setFormData({
      ...formData,
      [name]: inputValue
    })
  }

  const handleSubmit = () => {
    console.log("submite---", formData);
    dispatch(addMeal(formData))
  }



  return (
    <>
      <Layout>
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
          <div className="mobiile-view-food">
            <div className="mobiile-food">
              <h2>Food</h2>
            </div>
            <div className="mobiile-food-list">
              <ul>
                <li>
                  <a href="" className="avt">
                    <span>
                      <img src="images/Icon-6.png" />
                    </span>
                    <small>Food</small>
                  </a>
                </li>
                <li>
                  <Link href={"/Drinks"}>
                    {/* <a href=""> */}
                    <span>
                      <img src="images/Icon-4-3.png" />
                    </span>
                    <small>Drinks</small>
                    {/* </a> */}
                  </Link>
                </li>
                <li>
                  <Link href={"/Dessert"}>
                    {/* <a href=""> */}
                    <span>
                      <img src="images/Icon-3-2.png" />
                    </span>
                    <small>Dessert</small>
                    {/* </a> */}
                  </Link>
                </li>
                <li>
                  <Link href={"/Speciality"}>
                    {/* <a href=""> */}
                    <span>
                      <img src="images/Icon-4-2.png" />
                    </span>
                    <small>Speciality </small>
                    {/* </a> */}
                  </Link>
                </li>
                <li>
                  <Link href={"/Season"}>
                    {/* <a href=""> */}
                    <span>
                      <img src="images/Icon-3-2.png" />
                    </span>
                    <small>Season</small>
                    {/* </a> */}
                  </Link>
                </li>
              </ul>
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
        <div className="full-page-display full-page-inner bg-gray">
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
              <SidebarComponent />
            </div>
            <div className="full-page-fullbar">
              <div className="full-page-member border-bottom-0">
                <div className="Exact-range">
                  <div className="Exact-range-data">
                    <h5>By Calories</h5>
                    <div className="Calories">
                      <span className="left-1">0</span>
                      <span id="demo"></span>
                      <span className="right-1">{sliderValue === '3000' ? '3000+' : sliderValue}</span>
                    </div>
                    <div className="slidecontainer">
                      <input
                        type="range"
                        min="0"
                        max="3000"
                        name="by_calories"
                        value={formData.by_calories}
                        className="slidermy"
                        id="myRange"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="full-page-fullbar">
              <div className="full-page-member">
                <div className="text-input">
                  <div className="text-input-data">
                    <h5>Exclude Ingredients</h5>
                    <div class="input-box">
                      <input type="text" className="w-100" name="exclude_ingredients" onChange={handleChange} />
                    </div>
                    <div class="input-box mt-2">
                      <h5>Allergies</h5>
                      <input type="text" className="w-100" name="allergies" onChange={handleChange} />
                    </div>
                  </div>
                </div>
              </div>
              <div class="container my-5">
                <h6>Meal Plane Type:</h6>
                <div className="row">
                  <div className="col-3">
                    <div class="row">
                      {/* <div class="col-6">
                        <input type="checkbox" id="health" name="Health" />
                        <label for="Health" className="ps-2 py-1">
                          {" "}
                          Health
                        </label>
                      </div> */}
                      <div class="col-6">
                        <input type="radio" id="lowCarb" name="meal_plan_type" onChange={handleChange} value="Low Carb" />
                        <label for="Low Carb" className="ps-2 py-1">
                          {" "}
                          Low Carb
                        </label>
                      </div>
                      <div class="col-6">
                        <input
                          type="radio"
                          id="lowCarb"
                          name="meal_plan_type"
                          value="Vegetarian"
                          onChange={handleChange}
                        />
                        <label for="Vegetarian" className="ps-2 py-1">
                          {" "}
                          Vegetarian
                        </label>
                      </div>
                      <div class="col-6">
                        <input type="radio" id="diabetic" name="meal_plan_type" value="Diabetic" onChange={handleChange} />
                        <label for="Diabetic" className="ps-2 py-1">
                          {" "}
                          Diabetic
                        </label>
                      </div>
                      <div class="col-6">
                        <input
                          type="radio"
                          id="pescatarian"
                          name="meal_plan_type"
                          value="Pescatarian"
                          onChange={handleChange}
                        />
                        <label for="Pescatarian" className="ps-2 py-1">
                          {" "}
                          Pescatarian
                        </label>
                      </div>
                      <div class="col-6">
                        <input type="radio" id="keto" name="meal_plan_type" value="Keto" onChange={handleChange} />
                        <label for="Keto" className="ps-2 py-1">
                          {" "}
                          Keto
                        </label>
                      </div>
                      <div class="col-6">
                        <input type="radio" id="noPref" name="meal_plan_type" value="No Pref" onChange={handleChange} />
                        <label for="No Pref" className="ps-2 py-1">
                          {" "}
                          No Pref
                        </label>
                      </div>
                      {/* <div class="col-6">
                        <input type="checkbox" id="sports" name="Sports" />
                        <label for="Sports" className="ps-2 py-1">
                          {" "}
                          Sports
                        </label>
                      </div> */}
                      <div class="col-6">
                        <input type="radio" id="custom" name="meal_plan_type" value="Custom" onChange={handleChange} />
                        <label for="Custom" className="ps-2 py-1">
                          {" "}
                          Custom
                        </label>
                      </div>
                      {/* <div class="col-6">
                        <input type="checkbox" id="fasting" name="Fasting" />
                        <label for="Fasting" className="ps-2 py-1">
                          {" "}
                          Fasting
                        </label>
                      </div> */}
                    </div>
                  </div>
                  {/* <div className="col-4 " style={{fontSize:"14px"}}>
                    <div class="row bg-dark text-white ">
                      <div class="col-6">
                        <input
                          type="checkbox"
                          id="basketball"
                          name="Basketball"
                        />
                        <label for="vehicle1" className="ps-2 py-1">
                          {" "}
                          Basketball
                        </label>
                      </div>
                      <div class="col-6">
                        <input
                          type="checkbox"
                          id="bodybuilding"
                          name="Bodybuilding"
                        />
                        <label for="Bodybuilding" className="ps-2 py-1">
                          {" "}
                          Bodybuilding
                        </label>
                      </div>
                      <div class="col-6">
                        <input type="checkbox" id="football" name="Football" />
                        <label for="football" className="ps-2 py-1">
                          Football
                        </label>
                      </div>
                      <div class="col-6">
                        <input
                          type="checkbox"
                          id="trackField"
                          name="Track & Field"
                        />
                        <label for="trackField" className="ps-2 py-1">
                          {" "}
                          Track & Field
                        </label>
                      </div>
                      <div class="col-6">
                        <input type="checkbox" id="baseball" name="Baseball" />
                        <label for="baseball" className="ps-2 py-1">
                          {" "}
                          Baseball
                        </label>
                      </div>
                      <div class="col-6">
                        <input
                          type="checkbox"
                          id="boxingMMA"
                          name="Boxing MMA"
                        />
                        <label for="boxingMMA" className="ps-2 py-1">
                          {" "}
                          Boxing MMA
                        </label>
                      </div>
                      <div class="col-6">
                        <input type="checkbox" id="soccer" name="Soccer" />
                        <label for="soccer" className="ps-2 py-1">
                          {" "}
                          Soccer(Futbol)
                        </label>
                      </div>
                      <div class="col-6">
                        <input type="checkbox" id="other" name="Other" />
                        <label for="other" className="ps-2 py-1">
                          {" "}
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 bg-warning" >
                    <div class="row" >
                      <div class="col-12" style={{fontSize:"14px"}}>
                        <div class="input-box d-flex align-items-center mt-2">
                          <h6 class="texth6 mb-0 me-2">Age:</h6>
                          <input
                            type="text"
                            class="w-100 bg-warning "
                            name="age"
                          />
                        </div>
                        <div class="input-box d-flex align-items-center mt-2">
                          <h6 class=" texth6 mb-0 me-2">Weight:</h6>
                          <input
                            type="text"
                            class="w-100 bg-warning "
                            name="weight"
                          />
                        </div>
                        <div class="input-box d-flex align-items-center mt-2">
                          <h6 class="texth6 mb-0 me-2">Weight Goal:</h6>
                          <input
                            type="text"
                            class="w-100 bg-warning "
                            name="weightgoal"
                          />
                        </div>
                        <div class="input-box d-flex align-items-center mt-2">
                          <h6 class="texth6 mb-0 me-2">Position:</h6>
                          <input
                            type="text"
                            class="w-100 bg-warning "
                            name="position"
                          />
                        </div>
                        <div class="input-box d-flex align-items-center mt-2">
                          <h6 class="texth6 mb-0 me-2">Height:</h6>
                          <input
                            type="text"
                            class="w-100 bg-warning "
                            name="height"
                          />
                        </div>
                        <div class="input-box d-flex align-items-center mt-2">
                          <h6 class="texth6 mb-0 me-2">Daily hourly workout:</h6>
                          <input
                            type="text"
                            class="w-100 bg-warning"
                            name="workout"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 bg-warning">
                    <div class="row">
                      <div class="col-12">
                        <input
                          type="checkbox"
                          id="speed"
                          name="speed"
                          value="speed"
                        />
                        <label for="speed" className="ps-2 py-2">
                          {" "}
                          Speed
                        </label>
                      </div>
                      <div class="col-12">
                        <input
                          type="checkbox"
                          id="recovery"
                          name="recovery"
                          value="recovery"
                        />
                        <label for="recovery" className="ps-2 py-2">
                          {" "}
                          Recovery
                        </label>
                      </div>
                      <div class="col-12">
                        <input
                          type="checkbox"
                          id="endurance"
                          name="endurance"
                          value="endurance"
                        />
                        <label for="endurance" className="ps-2 py-2">
                          {" "}
                          Endurance
                        </label>
                      </div>
                      <div class="col-12">
                        <input
                          type="checkbox"
                          id="strength"
                          name="strength"
                          value="Strength"
                        />
                        <label for="strength" className="ps-2 py-2">
                          {" "}
                          Strength
                        </label>
                      </div>
                      <div class="col-12">
                        <input
                          type="checkbox"
                          id="performance"
                          name="performance"
                          value="Performance"
                        />
                        <label for="performance" className="ps-2 py-2">
                          {" "}
                          Performance
                        </label>
                      </div>
                    </div>
                  </div> */}
                  <div className="Cocktail_search2 m">
                    <div className="Cocktail_cate d-flex mt-5 justify-content-center">
                      <large>Spicy level </large>
                      <div className="Cocktail_check">
                        <label className="switch">
                          <input type="checkbox" name="spicy_level"
                            //  checked={formData.spicy_level}
                            onChange={handleChange} />
                          <span className="slider round"></span>
                        </label>
                      </div>
                      <div className="d-flex my-0 ">
                        <img src="images/hotscale.png" />
                      </div>
                      <large>
                        (Exact level{" "}
                        <div className="Cocktail_check">
                          <label className="switch">
                            <input type="checkbox" id="exat_spicy" name="exat_spicy" checked={formData.exat_spicy} onChange={handleChange} />
                            <span className="slider round" ></span>
                          </label>
                        </div>
                        {" "}
                        in Rang)
                      </large>
                    </div>
                    <p className="mb-0 text-center">
                      Spicy level on will find spicy recipe upto that level with
                      it off all recipe type will display in rang
                    </p>
                    <div className="Cocktail_cate d-flex justify-content-center">
                      <large>Recipe by level </large>
                      <li>
                        <img src="images/rating.png" />
                      </li>
                      <large>
                        (Exact level{" "}
                        <div className="Cocktail_check">
                          <label className="switch">
                            <input type="checkbox" id="exat_recipe" name="recipe_by" checked={formData.recipe_by} onChange={handleChange} />
                            <span className="slider round"></span>
                          </label> </div>
                        {" "}
                        in Rang)
                      </large>
                    </div>
                    <div className="meal_setting_btn_container" >

                      <button
                        type="button"
                        className="Videoif add_meal_setting_btn"
                        // className={clsx({ "rbc-active": view === name })}
                        onClick={() => handleSubmit()}
                      >
                        Done
                      </button>
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

export default Meal;
