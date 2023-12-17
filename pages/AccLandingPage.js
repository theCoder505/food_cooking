import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Layout from "@/components/Layout";
import Link from "next/link";
import Footer from "@/components/footer/footer";
import AppContext from "@/context/AppContext";
import { useRouter } from "next/router";
// import moment from "moment";
import { addRecipe, weeklyFoodPlan } from "@/constants/recipe";
import Sidebar from "@/components/headers/SideBar";
import { getRecipeSearchByCategoryId } from "@/context/recipe/drinkSlice";
import { useDispatch, useSelector } from "react-redux";
// import {weeklyFoodPlan} from './'

const AccLandingPage = ({ userId }) => {
  const router = useRouter();
  const {
    searchApiData,
    setSearchApiData,
    getAllRecipeData,
    setGetAllRecipeData,
    categories,
    searchRecipe,
    setSearchRecipe,
  } = useContext(AppContext);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [expand, setExpand] = useState(true);
  const [Id, setUserId] = useState("");
  useEffect(() => {
    setUserId(userId);
  }, [userId]);

  useEffect(() => {
    fetchData();
  }, []);


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



  const handlePageDetail = async (recipe_id) => {
    const payload = { recipe_id: recipe_id };
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_AUTH_URL}/api/getrecipe`,
        payload
      );
      // setLoginData(response);
      // router.push("/Recipe")
      console.log(response, "response");
      router.push({
        pathname: `/Recipe2/${recipe_id}`,
        query: { id: response?.data?.data?.id },
      });
    } catch (error) {
      console.error(error);
    }
  };
  const getAllRecipes = async () => {
    const payload = { category_id: "2" };
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
  useEffect(() => {
    setSearchApiData(searchApiData);
  }, [searchApiData]);
  useEffect(() => {
    getAllRecipes();
    setGetAllRecipeData(getAllRecipeData);
  }, []);
  const handleChange = (event) => {
    setSelectedCategory(event);
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
    // !searchRecipe.length && getAllRecipes()
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
      category_id: selectedCategory,
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

  const [data, setData] = useState(null)

  const getrecipe = useSelector((state) => state?.drinkSlice?.searchdata?.data);

  const dispatch = useDispatch();
  useEffect(() => {
    const post = {
      "category_id": selectedCategory
    }
    if (selectedCategory) {
      dispatch(getRecipeSearchByCategoryId(post))
    }
  }, [selectedCategory])


  useEffect(() => {
    setSearchApiData(getrecipe)
  }, [getrecipe])

  const handleSearch = (e) => {
    if(e.target.value.length > 0){
      const data = searchApiData.filter(x => x.title.includes(e.target.value));
      setSearchApiData(data)
    }
  };

  return (
    <>
      <Layout>
        <div className="main_width">
          <div className="">
            <div className="lannding_bg">
              <img src="images/langing_bg.png" />
              <h2>
                Unleash Your Culinary Creativity: Explore, Create, and Share
                Irresistible Recipes!
              </h2>
            </div>
            <div className="mb_view ">
              <div className="mobiile-header bg-color">
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
              <div className="container">
                <p className="ps-2 ">What do you want to cook today?</p>
              </div>
              <div className="container d-flex justify-content-between">
                <span className="ps-2">
                  <i className="fa fa-align-center" aria-hidden="true"></i>
                  Filter
                </span>
                <span className="ps-2">
                  scan receipt
                </span>
                <span className="ps-2">
                  add recipe
                </span>
              </div>

              <div className="page_fliter_input ">
                <input
                  className="input_search"
                  type="Search"
                  placeholder="Search"
                />
              </div>
            </div>

            <div className="page_fliter">
              <div className="page_fliter_width">
                <div className="page_fliter_search">
                  <div className="page_fliter_select">
                    <select onChange={(e) => handleChange(e.target.value)}>
                      {categories?.map((cate, index) => (
                        <option key={index} selected={cate.id == 1} value={cate.id}>
                          {cate.name}
                        </option>
                      ))}{" "}
                    </select>
                  </div>
                  <div className="page_fliter_input">
                    <input
                      type="Search"
                      placeholder="Search"
                      onChange={handleSearch}
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        fetchSearchRecipe();
                      }}
                    >
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

        <div className="full-page-display">
          <div className="container-fluid">
            {/* <div className="full-page-sidebar">
              <div className="full-sidebar-data">
                <h2>A Chefs Cuisine</h2>
                <div className="full-sidebar-box">
                  <h3>Member Guide</h3>
                  <ul>
                    <li>
                      <Link href="/MemberFeed">Member Feed</Link>
                    </li>
                    <li>
                      <Link href="/AccAffiliates">
                        ACC Affiliates{" "}
                        <span>
                          <img src="images/image343.png" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/Booking_search">Bookings</Link>
                    </li>
                    <li>
                      <Link href="/Foodporn">Food Porn</Link>
                    </li>
                    <li>
                      <Link href="/Coin_gift">
                        Buy Coins/Gifts{" "}
                        <span>
                          <img src="images/image347.png" />
                          <img src="images/StackCoins.png" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link href="/Renew">
                  <div className="full-sidebar-Premium">
                    Premium{" "}
                    <span>
                      <img src="images/Subscriptionicon.png" />
                    </span>{" "}
                    ubscription
                    <span>
                      <img src="images/crown.png" />
                    </span>
                  </div>
                </Link>

                <div className="full-sidebar-box">
                  <h3>Food Decore</h3>
                  <ul>
                    <li>
                      <Link href="">Grocery List</Link>
                    </li>
                    <li>
                      <Link href="/FoodStore">Food Storage</Link>
                    </li>
                    <li>
                      <Link href=" ">Meal Planner</Link>
                    </li>
                    <li>
                      <Link href="">
                        +Saved Fav Recipe’s
                        <span>
                          <img className="heart" src="images/MaskGroup-2.png" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="full-sidebar-box">
                  <h3>Goals/Pref</h3>
                  <ul>
                    <li>
                      <Link href="">Weight loss</Link>
                    </li>
                    <li>
                      <Link href="">
                        <span className="images-po">
                          <img src="images/Cancel.png" />
                        </span>{" "}
                        Meat
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <span className="images-po">
                          <img src="images/Cancel.png" />
                        </span>{" "}
                        Carbs
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <span className="images-po">
                          <img src="images/NoEntry.png" />
                        </span>{" "}
                        Milk
                      </Link>
                    </li>
                    <li>
                      <Link href="">1,100 Daily Calories</Link>
                    </li>
                  </ul>
                </div>

                <div className="full-sidebar-box">
                  <h3>Settings</h3>
                  <ul>
                    <li>
                      <Link href="">Account, Preference, Settings</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <Sidebar />

            <div className="full-page-fullbar">
              <div className="page_cat">
                <div className="page_cat_width">
                  <ul>
                    <li>
                      <Link href="/Food">
                        <span>
                          <img src="images/recipe.png" />
                        </span>{" "}
                        <strong>Recipes</strong>
                      </Link>
                    </li>
                    <li>
                      <Link href="/Foodporn">
                        <span>
                          <img src="images/food-porn.png" />
                        </span>{" "}
                        <strong>Food Porn</strong>
                      </Link>
                    </li>
                    {Id ? (
                      <>
                        <li>
                          <a className="dropdown-toggle" data-bs-toggle="dropdown">
                            <span>
                              <img src="images/add-recipe.png" />
                            </span>
                            <strong>Add Recipe</strong>
                          </a>
                          <ul className="dropdown-menu">
                            <span>Add Recipe</span>
                            {
                              addRecipe?.map((item) => {
                                return (
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      href={item?.url} //{"/Create_Recipes"}
                                    >
                                      {item?.name}
                                      {/* Add Recipe */}
                                    </Link>
                                  </li>
                                )
                              })
                            }
                          </ul>
                        </li>

                        <li>
                          <Link href="/MemberFeed">
                            <span>
                              <img src="images/memb-feed.png" />
                            </span>{" "}
                            <strong>Member Feed</strong>
                          </Link>
                        </li>
                      </>
                    ) : (
                      <></>
                    )}

                    {/* <li>
                      <Link href="/MemberFeed">
                        <span>
                          <img src="images/memb-feed.png" />
                        </span>{" "}
                        <strong>Member Feed</strong>
                      </Link>
                    </li> */}
                    <li>
                      <Link href="/FoodStore">
                        <span>
                          <img src="images/FOOD-storage.png" />
                        </span>{" "}
                        <strong>Food Storage</strong>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="full-page-member">
                <h2>Trending Cusines</h2>
                <div className="row">
                  {!searchApiData ? (
                    <h1>No records found !</h1>
                  ) : (
                    searchApiData &&
                    searchApiData?.map((item) => {
                      return (
                        <>
                          <div
                            className="col-sm-6 col-md-3"
                            onClick={() => handlePageDetail(item.id)}
                          >
                            <div className="full-page-member-block">
                              <div className="full-page-member-product">
                                <div className="trending-recipe  ">
                                  <img src="images/background-2.png" alt="" />
                                  {/* {item.media ? (
                                    <img src={item.media} alt="backend_img" />
                                  ) : (
                                    <img src="images/Group208.png" />
                                  )} */}
                                </div>

                                <ul>
                                  <li>
                                    <span>
                                      <img src="images/fave.png" />
                                    </span>{" "}
                                    <small>1400</small>
                                  </li>
                                  <li>
                                    <span>
                                      <img src="images/bucket.png" />
                                    </span>{" "}
                                    <small>300</small>
                                  </li>
                                  <li>
                                    <span>
                                      <img src="images/mealplanner.png" />
                                    </span>{" "}
                                    <small>200</small>
                                  </li>
                                  <li>
                                    <span>
                                      <img src="images/like.png" />
                                    </span>{" "}
                                    <small>100</small>
                                  </li>
                                </ul>
                              </div>
                              <div className="full-page-member-data">
                                <div className="full-page-member-img">
                                  <span>
                                    <img src="images/pop.png" />
                                  </span>
                                </div>
                                <div className="full-page-member-name">
                                  <strong>
                                    {item.title}{" "}
                                    <img src="images/IMG_4254.png" />
                                  </strong>
                                  <small>@{item.sources} </small>
                                  <label>
                                    {item.about}
                                    {/* Thai Basil Tofu Stir Fry */}
                                  </label>
                                </div>
                                <div className="full-page-start">
                                  <span>
                                    <img src="images/star.png" /> 4.1
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="full-Weekly-Food">
          <div className="container-fluid">
            {expand == true ? (
              <>
                <div className="full-Weekly-heading">
                  <h3>Weekly Food Plan</h3>
                  <div className="Weekly_data">
                    <span>
                      01/08/2023 - 01/14/2023
                      {/* {todayDate}- {futureDate} */}
                    </span>
                  </div>
                </div>
                <div className="Collapsepweek-fluid">
                  {weeklyFoodPlan?.map((item) => {
                    return (
                      <div className="full-Weekly-products">
                        <div className="full-Weekly-products_img">
                          <span>
                            <img src={item.img} />
                          </span>
                          <h4>{item.day}</h4>
                        </div>
                      </div>
                    )
                  })
                  }
                </div>
              </>
            ) : (
              ""
            )}

            <div className="Collapsepweek ">
              {expand == false ? (
                <span
                  className="collapsesp"
                  onClick={() => {
                    setExpand(true);
                  }}
                >
                  Expand <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </span>
              ) : (
                <span
                  className=""
                  onClick={() => {
                    setExpand(false);
                  }}
                >
                  Collapse <i className="fa fa-chevron-up" aria-hidden="true"></i>
                </span>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </Layout>
    </>
  );
};

export default AccLandingPage;
