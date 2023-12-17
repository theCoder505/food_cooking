import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import axios from "axios";
import AppContext from "@/context/AppContext";
import { useRouter } from "next/router";
import { getallFoodHack } from "@/context/recipe/foodhackSlice";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeSearchByCategoryId } from "@/context/recipe/drinkSlice";

const FoodHack = () => {
  // const [data, setData] = useState([]);
  const {
    searchApiData,
    setSearchApiData,
    getAllRecipeData,
    searchRecipe,
    categories,
    setSearchRecipe,
  } = useContext(AppContext);
  // const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(8);
  const router = useRouter();
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
      category_id: 8,
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
  const handleChange = (event) => {
    console.log(event, "ttttt");
    setSelectedCategory(event);
  };

  // const handlePageDetail = async (recipe_id) => {
  //   console.log("recipe_id", recipe_id);
  //   const payload = { recipe_id: recipe_id };
  //   try {
  //     const response = await axios
  //       .post(`${process.env.NEXT_PUBLIC_AUTH_URL}/api/getrecipe`, payload)
  //       .then((res) => {
  //         console.log(res, "----res");
  //         router.push({
  //           pathname: `/Recipe2/${recipe_id}`,
  //           query: { id: res?.data?.data?.id },
  //         });
  //       });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  
	const handlePageDetail = async (foodhack_id) => {
		console.log("foodhack_id", foodhack_id);
		// dispatch(getRecipeByRecipeID(recipe_id));
		window.location.href = `/foodHackRecipe/${foodhack_id}`
  };

  const [user, setuser] = useState(null)

  const [foodHack, setFoodHack] = useState(null)

  useEffect(() => {
    const userName = localStorage.getItem('user');
    if (userName) {
      setuser(JSON.parse(userName));
    }
  }, [])

  const getUserfoodhack = useSelector((state) => state?.foodHackSlice?.foodhack?.data)

	useEffect(() => {
		if(user?.id){
			dispatch(getallFoodHack(user?.id))
		}
  }, [user])
  
  useEffect(() => {
		setFoodHack(getUserfoodhack)
  }, [getUserfoodhack])
  
  // console.log("drinks================--------------" , foodHack);


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
              <h2>
                <img src="images/MaskGroup-25.png" />
              </h2>
            </div>
            <div className="mobiile-food-list">
              <ul>
                <li>
                  <a href="" className="avt">
                    <span>
                      <img src="images/Mask-24-2.png" />
                    </span>
                    <small>Food Hack</small>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>
                      <img src="images/Icon-9-2.png" />
                    </span>
                    <small>Food</small>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>
                      <img src="images/Icon-4-3.png" />
                    </span>
                    <small>Drink</small>
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

        <div className="Foodhackheading desktopm">
          <h2 className="m-10">Food Hack</h2>
        </div>

        <div className="Foodhack_bg">
          <div className="main_width">
            <div className="container-fluid">
              <div className="page_cat main-cat">
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

                    <li className="action-list">
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
                    <select onChange={(e) => handleChange(e.target.value)}>
                      {categories?.map((cate, index) => (
                        <option key={index} selected={cate.id == 8} value={cate.id}>
                          {cate.name}
                        </option>
                      ))}{" "}
                    </select>
                    </div>
                    <div className="page_fliter_input">
                      <input
                        type="search"
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
            <div className="container">
              <div className="row">
                {!searchApiData?.length ? (
                  <h1 className="text-white">No records found !</h1>
                ) : (
                  searchApiData &&
                  searchApiData?.map((item) => {
                     return (
                      <>
                        <div
                          className="col-sm-4 col-md-3"
                          onClick={() => handlePageDetail(item.id)}
                        >
                          <div className="Barista-Other_box">
                            <div className="Barista-Other_box_img">
                              <div className="sauceimg">
                                {item.media ? (
                                  <img src={item.media} alt="backend_img" />
                                ) : (
                                  <img src="images/MaskGroup-4.png" />
                                )}
                              </div>
                              {/* <img src="images/MaskGroup-4.png" /> */}
                              {/* <img src={item.media} alt="backend_img" /> */}
                            </div>
                            <div className="Barista-Other_box_text">
                              <div className="full-page-member-data">
                                <div className="full-page-member-img">
                                  <span>
                                    <img src="images/pop.png" />{" "}
                                  </span>
                                </div>

                                <div className="full-page-member-name">
                                  <strong>
                                    {item.title}{" "}
                                    <img src="images/IMG_4254.png" />
                                  </strong>
                                  <small>@{item.sources}</small>
                                </div>
                                <div className="full-page-start">
                                  <span>
                                    <img src="images/star.png" />
                                    <img src="images/star.png" />
                                    <img src="images/star.png" />
                                    <img src="images/star.png" />
                                    <img src="images/star.png" />
                                  </span>
                                </div>
                              </div>
                              <div className="full-page-member-special">
                                <h5>{item.ingredients}</h5>
                                <span>
                                  {/* 5 Ingredients */}
                                  {item.ingredients}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                      </>
                    );
                  })
                )}
                <div className="row">
                  {!foodHack?.length ? (
                    <h1>No records found !</h1>
                  ) : (
                    foodHack &&
                    foodHack?.map((item) => {
                       return (
                        <>
                          <div
                            className="col-sm-6 col-md-4"
                            onClick={() => handlePageDetail(item.id)}
                          >
                            <div className="full-page-member-block">
                              <a>
                                <div className="full-page-food image-height">
                                  <span>
                                    {item?.media ? (
                                      <img src={`${item?.media}`} alt="backend_img" />
                                    ) : (
                                      <img src="images/MaskGroup.png" />
                                    )}

                                    {/* <img src={item.media}/> */}
                                  </span>

                                  <div className="full-page-front">
                                    <h3>{item.title}</h3>
                                    <h5>
                                      45 <small>Recipe’s</small>
                                    </h5>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>{" "}
                        </>
                      );
                    })
                  )}
                </div>
              
                <div className="col-sm-4 col-md-3">
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
                          <strong>
                            Diana Pink <img src="images/IMG_4254.png" />
                          </strong>
                          <small>@Pink_vegan</small>
                        </div>
                        <div className="full-page-start">
                          <span>
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                          </span>
                        </div>
                      </div>
                      <div className="full-page-member-special">
                        <h5>Hypnotic special</h5>
                        <span>5 Ingredients</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3">
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
                          <strong>
                            Diana Pink <img src="images/IMG_4254.png" />
                          </strong>
                          <small>@Pink_vegan</small>
                        </div>
                        <div className="full-page-start">
                          <span>
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                          </span>
                        </div>
                      </div>
                      <div className="full-page-member-special">
                        <h5>Hypnotic special</h5>
                        <span>5 Ingredients</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3">
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
                          <strong>
                            Diana Pink <img src="images/IMG_4254.png" />
                          </strong>
                          <small>@Pink_vegan</small>
                        </div>
                        <div className="full-page-start">
                          <span>
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                          </span>
                        </div>
                      </div>
                      <div className="full-page-member-special">
                        <h5>Hypnotic special</h5>
                        <span>5 Ingredients</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3">
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
                          <strong>
                            Diana Pink <img src="images/IMG_4254.png" />
                          </strong>
                          <small>@Pink_vegan</small>
                        </div>
                        <div className="full-page-start">
                          <span>
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                          </span>
                        </div>
                      </div>
                      <div className="full-page-member-special">
                        <h5>Hypnotic special</h5>
                        <span>5 Ingredients</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3">
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
                          <strong>
                            Diana Pink <img src="images/IMG_4254.png" />
                          </strong>
                          <small>@Pink_vegan</small>
                        </div>
                        <div className="full-page-start">
                          <span>
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                          </span>
                        </div>
                      </div>
                      <div className="full-page-member-special">
                        <h5>Hypnotic special</h5>
                        <span>5 Ingredients</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3">
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
                          <strong>
                            Diana Pink <img src="images/IMG_4254.png" />
                          </strong>
                          <small>@Pink_vegan</small>
                        </div>
                        <div className="full-page-start">
                          <span>
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                          </span>
                        </div>
                      </div>
                      <div className="full-page-member-special">
                        <h5>Hypnotic special</h5>
                        <span>5 Ingredients</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3">
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
                          <strong>
                            Diana Pink <img src="images/IMG_4254.png" />
                          </strong>
                          <small>@Pink_vegan</small>
                        </div>
                        <div className="full-page-start">
                          <span>
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                          </span>
                        </div>
                      </div>
                      <div className="full-page-member-special">
                        <h5>Hypnotic special</h5>
                        <span>5 Ingredients</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="col-sm-4 col-md-3">
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
                          <strong>
                            Diana Pink <img src="images/IMG_4254.png" />
                          </strong>
                          <small>@Pink_vegan</small>
                        </div>
                        <div className="full-page-start">
                          <span>
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                          </span>
                        </div>
                      </div>
                      <div className="full-page-member-special">
                        <h5>Hypnotic special</h5>
                        <span>5 Ingredients</span>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default FoodHack;
