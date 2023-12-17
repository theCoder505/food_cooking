import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "@/pages/SignUp";
import AppContext from "@/context/AppContext";
import { timeofDay } from "@/constants/recipe";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "@/context/Auth/authSlice";
import { getRecipeSearchByCategoryId } from "@/context/recipe/drinkSlice";
const MainHeader = ({ isLoggedIns }) => {
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [loginPage, setLoginPage] = useState();
  // const [password, setPassword] = useState();
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [searchRecipe, setSearchRecipe] = useState("");
  const router = useRouter();
  const { setSearchApiData, setGetAllRecipeData, setCategories, categories, searchApiData } =
    useContext(AppContext);
  // useEffect(() => {
  //   const token = localStorage.getItem("accessToken");
  //   if (token) {
  //     setIsLoggedIn(true);
  //     return;
  //   }
  //   setIsLoggedIn(isLoggedIns);
  // }, [isLoggedIns]);
  const validatePassword = () => {
    if (password?.length < 6) {
      setModalClose(false);
      setError("password error");
    } else {
      setLoginPage(true);
      setError("");
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
      return;
    }
    setIsLoggedIn(isLoggedIns);
  }, [isLoggedIns]);
  useEffect(() => {
    if (searchRecipe?.length === 0) {
      console.log;
      setSearchApiData([]);
      getAllRecipes();
    }
  }, [searchRecipe]);
  
  // const dispatch = useDispatch();
  
  const handleSignUp = async (e) => {
    // validatePassword();
    const payload = {
      username: email,
      password: password,
      user_type: "1",
      signup_by: "1",
    };
    e.preventDefault();

    const res = await dispatch(login(payload))

    if(res?.data?.status){
      toast("Sign Up Successfully")
    } else {
      toast("user not register ...")
    }
    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_AUTH_URL}/api/userRegister`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(payload),
    //   }
    // );

    // const data = await res.json();
    // const { accessToken } = data;
    // localStorage.setItem("data", JSON.stringify(data));
    // localStorage.setItem("accessToken", accessToken);
    // toast("Singup Successfully");
  };

  const [loginData, setLoginData] = useState();
  // const router = useRouter();
  const [modalClose, setModalClose] = useState("");


  const handleLogin = async (e) => {
    e.preventDefault();

    const payload = { username: email, password: password };
    const res = await dispatch(login(payload))
    console.log("res" ,res)
    if(res?.data?.status){
      setIsLoggedIn(true);
      toast("Login Successfully")
    } else {
      setIsLoggedIn(false);
      toast("user not found ...")
    }
    setEmail("");
    setPassword("");
    
    // if (loginPage == true) {
    // try {
    //   const response = await axios.post(
    //     `http://localhost:8000/user/login`,
    //     payload
    //   );
    //   setLoginData(response);
    //   // localStorage.setItem(user_id:"id")
    //   console.log("response -----", response.data);
    //   if (response?.data?.status) {
    //     setIsLoggedIn(true);
    //     toast("Login Successfully");
    //     setTimeout(() => {
    //       router.push("/home");
    //     }, 2000);
    //     setModalClose(true);
    //   } else {
    //     // setModalClose(false);
    //     toast.error("user not found ...");
    //   }
    // } catch (error) {
    //   setModalClose(false);
    //   console.error(error);
    //   if (error) {
    //     toast.error("User not found");
    //   }
    // }
    // }
  };
  const handlelogout = () => {
    dispatch(logout())
    router.push("/home");
  };
  // useEffect(() => {
  //   if (loginData?.data?.result) {
  //     localStorage.setItem("accessToken", loginData?.data?.result?.accesstoken);
  //     localStorage.setItem("user", JSON.stringify(loginData?.data?.result?.user));
  //   }
  // }, [loginData]);

  // const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_AUTH_URL}/api/category/recipe`
      );
      setCategories(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };
  const getAllRecipes = async () => {
    const payload = { category_id: selectedCategory };
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_AUTH_URL}/api/allsearch/recipe`,
        payload
      );
      setGetAllRecipeData(response.data.data);
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
    !searchRecipe.length && getAllRecipes();
  };

  const handleChange = (event) => {
    console.log(event, "ttttt");
    setSelectedCategory(event);
  };

  // const [searchRecipe, setSearchRecipe] = useState("");

  // useEffect(() => {
  //   const getData = setTimeout(() => {
  //     axios
  //     .get(`https://achefsc-admin.rstechup.com/api/search/recipe/?category_id=1&title=Phoha&recipe_type=${searchRecipe}`)
  //     .then((response) => {
  //       console.log(response.data[0]);
  //     });
  //   }, 2000)

  //   return () => clearTimeout(getData)
  // }, [searchRecipe])

  // const handleSearch = (e) => {
  //   setSearchRecipe(e.target.value);
  //   if (e.target.value === 0) {
  //     setSearchRecipe("");
  //     setSearchApiData([]);
  //   }
  // };

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   setEmail(e.target.value);
  //   setPassword(e)
  // };
  useEffect(() => {
    console.log(email);
    console.log(password);
  }, [email, password]);
  const newLocal = "/images/login-bg.png";


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
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        ></link>
        <link
          href="https://use.fontawesome.com/releases/v5.0.4/css/all.css"
          rel="stylesheet"
        />
      </Head>

      <div className="AndMain desktopm">
        <div className="header" id="myHeader">
          <div className="container-fluid">
            <header className="home-header">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <Link className="navbar-brand" href="/">
                    <img src="/images/logo.png" />
                  </Link>

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item dropdown-menu-end">
                        <a className="nav-link" data-bs-toggle="dropdown">
                          Recipes
                        </a>

                        <div className="dropdown-menu full-muny">
                          <div className="row">
                            <div className="col-md-7">
                              <div className="ful-nav">
                                <ul>
                                  <li>
                                    <a href="/Food">
                                      <strong>
                                        Time Of Day{" "}
                                        <img src="/images/time2.png" />
                                      </strong>
                                    </a>
                                  </li>
                                  {timeofDay?.map((t) => (
                                    <li>
                                      <Link href={"/Food "}>{t}</Link>
                                    </li>
                                  ))}
                                  {/* <li>
                                    <Link href={" "}>Breakfast</Link>
                                  </li>
                                  <li>
                                    <Link href={" "}>Brunch</Link>
                                  </li>
                                  <li>
                                    <Link href={" "}>Lunch</Link>
                                  </li>
                                  <li>
                                    <Link href={" "}>Dinner</Link>
                                  </li>
                                  <li>
                                    <Link href={" "}>Snacks</Link>
                                  </li> */}
                                </ul>
                                <ul>
                                  <li>
                                    <a href="/Food">
                                      <strong>
                                        Meal type <img src="/images/meal.png" />
                                      </strong>
                                    </a>
                                  </li>
                                  <li>
                                    <Link href={"/Food "}>
                                      Chicken ,Beef ,Pork
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/Food "}>Fish</Link>
                                  </li>
                                  <li>
                                    <Link href={"/Food"}>Tacos</Link>
                                  </li>
                                  <li>
                                    <Link href={"/Food "}>Salads</Link>
                                  </li>
                                  <li>
                                    <Link href={"/Food "}>Sides</Link>
                                  </li>
                                  <li>
                                    <Link href={"/Food "}>Dessert</Link>
                                  </li>
                                  <li>
                                    <Link href={" /Food"}>Sushi</Link>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <strong>
                                      <img src="/images/Candy.png" /> Sweet
                                      Tooth Dessert
                                    </strong>
                                  </li>
                                  <li>
                                    <Link href={"/Dessert "}>Cake</Link>
                                  </li>
                                  <li>
                                    <Link href={" /Dessert"}>Pie</Link>
                                  </li>
                                  <li>
                                    <Link href={" /Dessert"}>Ice Cream</Link>
                                  </li>
                                  <li>
                                    <Link href={"/Dessert "}>Cheese Cake</Link>
                                  </li>
                                  <li>
                                    <Link href={" /Dessert"}>Cup Cake</Link>
                                  </li>
                                  <li>
                                    <Link href={" /Dessert"}>Cookies</Link>
                                  </li>
                                  <li>
                                    <Link href={" /Dessert"}>Brownies</Link>
                                  </li>
                                  <li>
                                    <Link href={" /Dessert"}>Other</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="ful-nav-Specialties">
                                <ul>
                                  <li>
                                    <strong>
                                      Specialties
                                      <img src="/images/Sparkling.png" />
                                    </strong>
                                  </li>
                                  <ul className="Rest-ful-nav">
                                    <li>
                                      <Link href={"/Speciality "}>Sick</Link>
                                    </li>
                                    <li>
                                      <Link href={"/Speciality "}>
                                        Medicinal
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href={" /Speciality"}>Keto</Link>
                                    </li>
                                    <li>
                                      <Link href={"/Speciality "}>
                                        VeGan Cate...
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href={" /Speciality"}>
                                        Gain weight
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href={" /Speciality"}>
                                        Lose weight
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href={"/Speciality "}>Holiday</Link>
                                    </li>
                                    <li>
                                      <Link href={"/Speciality "}>
                                        Religious
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href={"/Speciality "}>
                                        Cultural
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href={"/Speciality "}>
                                        Diabetic
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href={" /Speciality"}>
                                        Potluck/Cater
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href={"/Speciality "}>
                                        Rest/Fast Food
                                      </Link>
                                    </li>
                                  </ul>

                                  <li>
                                    <a href="/Speciality">
                                      High Blood Pressure
                                    </a>
                                  </li>
                                  <li>
                                    <Link href={" /Speciality"}>
                                      Jail House Food
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={" /Speciality"}>
                                      Plate Presentation
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/Speciality "}>
                                      Surprise Me...Other
                                    </Link>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <strong>
                                      Seasoning <img src="/images/Spice.png" />
                                    </strong>
                                  </li>
                                  <li>
                                    <Link href={"/Seasoning "}>
                                      Jerk Seasoning
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/Seasoning "}>
                                      Curry Season
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={" /Seasoning"}>Table Salt</Link>
                                  </li>
                                  <li>
                                    <Link href={" /Seasoning "}>
                                      Vegetable Season
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/Seasoning  "}>
                                      Meat Seasoning
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/Seasoning  "}>Spicy</Link>
                                  </li>
                                  <li>
                                    <Link href={" /Seasoning "}>
                                      Seafood Season
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/Seasoning  "}>
                                      Taco Season
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href={" /Seasoning "}>
                                      Season Sauce/Paste
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/Seasoning  "}>Other</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="ful-nav">
                                <ul>
                                  <li>
                                    <strong>
                                      Application
                                      <img src="/images/Microwave.png" />
                                    </strong>
                                  </li>
                                  <li>
                                    <Link href={"/Appliances "}>
                                      Air fryer{" "}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={" /Appliances"}>
                                      Rice Cooker
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/Appliances "}>
                                      Pressure Cooker
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/Appliances "}>
                                      Electric Skillet
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/Appliances "}>
                                      Toaster Oven
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={" /Appliances"}>
                                      Slow Cooker /Crock Pot
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/Sauce "}>
                                      George Forman Grill
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/Sauce "}>
                                      Ice Cream Machine
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/Sauce "}>Microwave</Link>
                                  </li>
                                  <li>
                                    <Link href={" /Sauce"}>
                                      Bread Maker Machine
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={" /Sauce"}>Other</Link>
                                  </li>
                                </ul>

                                <ul>
                                  <li>
                                    <strong>
                                      Lab <img src="/images/LabItems.png" />
                                    </strong>
                                  </li>
                                  <li>
                                    <Link href={"/Sauce "}>Fermenting</Link>
                                  </li>
                                  <li>
                                    <Link href={" /Sauce"}>Pickling</Link>
                                  </li>
                                  <li>
                                    <Link href={" /Sauce"}>Canning</Link>
                                  </li>
                                  <li>
                                    <Link href={" /Sauce"}>
                                      Can Food Recipe
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={" /Sauce"}>Food Mixing</Link>
                                  </li>
                                  <li>
                                    <Link href={" /Sauce"}>Other</Link>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <Link href={"/Sauce "}>
                                      <img src="/images/foodhack-2.png" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="ful-nav">
                                <ul>
                                  <li>
                                    <strong>
                                      Drinks <img src="/images/Cocktail2.png" />
                                    </strong>
                                  </li>
                                  <li>
                                    <Link href={"/Drinks "}>
                                      Barista Alcohol
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={" /Drinks"}>Juice</Link>
                                  </li>
                                  <li>
                                    <Link href={" /Drinks"}>Coffee</Link>
                                  </li>
                                  <li>
                                    <Link href={"/Drinks "}>Tea</Link>
                                  </li>
                                  <li>
                                    <Link href={" /Drinks"}>Hot Chocolate</Link>
                                  </li>
                                  <li>
                                    <Link href={"/Drinks "}>Detox Drinks</Link>
                                  </li>
                                  <li>
                                    <Link href={"/Drinks "}>
                                      Work Out Drinks
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/Drinks "}>
                                      Carbonated Drinks
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/Drinks "}>Other</Link>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <strong>
                                      Cuisines{" "}
                                      <img src="/images/platecover.png"/>
                                    </strong>
                                  </li>
                                  <li>
                                    <Link href={"/FoodHack "}>African</Link>
                                  </li>
                                  <li>
                                    <Link href={"/FoodHack  "}>Afghan</Link>
                                  </li>
                                  <li>
                                    <Link href={" /FoodHack "}>American</Link>
                                  </li>
                                  <li>
                                    <Link href={" /FoodHack "}>Arab</Link>
                                  </li>
                                  <li>
                                    <Link href={"/FoodHack  "}>Argentine</Link>
                                  </li>
                                  <li>
                                    <Link href={"/FoodHack  "}>
                                      Argentinian
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/FoodHack  "}>Asian</Link>
                                  </li>
                                  <li>
                                    <Link href={"/FoodHack  "}>Australian</Link>
                                  </li>
                                  <li>
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#staticBackdrop"
                                    >
                                      <i
                                        className="fa fa-chevron-right"
                                        aria-hidden="true"
                                      ></i>
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div className="col-Meal">
                                <h5>My Meal Plan</h5>
                                <span>10/03/2021 - 10/10/2021</span>
                                <ul>
                                  <li>
                                    <span>
                                      <img src="/images/Group836.png" />
                                    </span>
                                    <small>Sunday</small>
                                  </li>
                                  <li>
                                    <span>
                                      <img src="/images/Group836.png" />
                                    </span>
                                    <small>Monday</small>
                                  </li>
                                  <li>
                                    <span>
                                      <img src="/images/Group836.png" />
                                    </span>
                                    <small>Tuesday</small>
                                  </li>
                                  <li>
                                    <span>
                                      <img src="/images/Group836.png" />
                                    </span>
                                    <small>Wed</small>
                                  </li>
                                  <li>
                                    <span>
                                      <img src="/images/Group836.png" />
                                    </span>
                                    <small>Thursday</small>
                                  </li>
                                  <li>
                                    <span>
                                      <img src="/images/Group836.png" />
                                    </span>
                                    <small>Friday</small>
                                  </li>
                                  <li>
                                    <span>
                                      <img src="/images/Group836.png" />
                                    </span>
                                    <small>Saturday</small>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-MaskGroup">
                                <div className="full-page-member-block">
                                  <div className="full-page-member-product">
                                    <img src="/images/Group208.png" />
                                  </div>
                                  <div className="full-page-member-data">
                                    <div className="full-page-member-img">
                                      <span>
                                        <img src="/images/pop.png" />{" "}
                                      </span>
                                    </div>

                                    <div className="full-page-member-name">
                                      <strong>
                                        Diana Pink
                                        <img src="/images/IMG_4254.png" />
                                      </strong>
                                      <small>@Pink_vegan</small>
                                      <label>Thai Basil Tofu Stir Fry</label>
                                    </div>
                                    <div className="full-page-start">
                                      <span>
                                        <img src="/images/star.png" /> 4.1
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="nav-item dropdown-menu-end">
                        <a className="nav-link" data-bs-toggle="dropdown">
                          Notifications
                        </a>

                        <div className="dropdown-menu full-Notifications">
                          <div className="row">
                            <div className="col-md-3">
                              <div className="col-Notifications">
                                <div className="Diana">
                                  <h4>Your Frie nd Diana Posted</h4>
                                  <div className="sidebar_follow-list">
                                    <div className="sidebar_follow">
                                      <div className="sidebar_follow-img">
                                        <span>
                                          <img src="/images/pop.png" />{" "}
                                        </span>
                                      </div>

                                      <div className="sidebar_followr-name">
                                        <strong>Diana Pink</strong>
                                        <small>@Pink_vegan</small>
                                      </div>
                                    </div>
                                  </div>
                                  <button>
                                    <i
                                      className="fa fa-ellipsis-h"
                                      aria-hidden="true"
                                    ></i>
                                  </button>
                                </div>
                                <div className="col-Notifications-list">
                                  <div className="col-Notifications-list-box">
                                    <span>
                                      <img src="/images/poi.png" />
                                    </span>
                                    <div className="Vegies">
                                      <h4>Mixed Vegies hot pot</h4>
                                      <ul>
                                        <li>
                                          <img src="/images/star.png" />
                                        </li>
                                        <li>
                                          <img src="/images/star.png" />
                                        </li>
                                        <li>
                                          <img src="/images/star.png" />
                                        </li>
                                        <li>
                                          <img src="/images/star.png" />
                                        </li>
                                        <li>
                                          <img src="/images/star.png" />
                                        </li>
                                      </ul>
                                      <h5>30 Mins | 1 Serving</h5>
                                    </div>
                                  </div>
                                  <div className="col-Notifications-list-box">
                                    <span>
                                      <img src="/images/poi.png" />
                                    </span>
                                    <div className="Vegies Vegies-black">
                                      <h4>Mixed Vegies hot pot</h4>
                                      <ul>
                                        <li>
                                          <img src="/images/star.png" />
                                        </li>
                                        <li>
                                          <img src="/images/star.png" />
                                        </li>
                                        <li>
                                          <img src="/images/star.png" />
                                        </li>
                                        <li>
                                          <img src="/images/star.png" />
                                        </li>
                                        <li>
                                          <img src="/images/star.png" />
                                        </li>
                                      </ul>
                                      <h5>30 Mins | 1 Serving</h5>
                                    </div>
                                  </div>
                                  <div className="col-Notifications-list-box">
                                    <span>
                                      <img src="/images/poi.png" />
                                    </span>
                                    <div className="Vegies Vegies-orange">
                                      <h4>Mixed Vegies hot pot</h4>
                                      <ul>
                                        <li>
                                          <img src="/images/star2.png" />
                                        </li>
                                        <li>
                                          <img src="/images/star2.png" />
                                        </li>
                                        <li>
                                          <img src="/images/star2.png" />
                                        </li>
                                        <li>
                                          <img src="/images/star2.png" />
                                        </li>
                                        <li>
                                          <img src="/images/star2.png" />
                                        </li>
                                      </ul>
                                      <h5>30 Mins | 1 Serving</h5>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-Notifications-new">
                                  <h4>12 New Followers</h4>

                                  <div className="col-Followers-new">
                                    <div className="sidebar_follow-list">
                                      <div className="sidebar_follow">
                                        <div className="sidebar_follow-img">
                                          <span>
                                            <img src="/images/pop.png" />
                                          </span>
                                        </div>

                                        <div className="sidebar_followr-name">
                                          <strong>Diana Pink</strong>
                                          <small>Healthy meals.</small>
                                        </div>
                                      </div>
                                      <div className="sidebar-follow_plus">
                                        <a href="">
                                          + Follow
                                          <img src="/images/Sparkling.png" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="sidebar_follow-list">
                                      <div className="sidebar_follow">
                                        <div className="sidebar_follow-img">
                                          <span>
                                            <img src="/images/pop.png" />
                                          </span>
                                        </div>

                                        <div className="sidebar_followr-name">
                                          <strong>Diana Pink</strong>
                                          <small>Healthy meals.</small>
                                        </div>
                                      </div>
                                      <div className="sidebar-follow_plus">
                                        <a href="">
                                          + Follow
                                          <img src="/images/Sparkling.png" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="sidebar_follow-list">
                                      <div className="sidebar_follow">
                                        <div className="sidebar_follow-img">
                                          <span>
                                            <img src="/images/pop.png" />
                                          </span>
                                        </div>

                                        <div className="sidebar_followr-name">
                                          <strong>Diana Pink</strong>
                                          <small>Healthy meals.</small>
                                        </div>
                                      </div>
                                      <div className="sidebar-follow_plus">
                                        <a href="">
                                          + Follow
                                          <img src="/images/Sparkling.png" />
                                        </a>
                                      </div>
                                    </div>

                                    <div className="Viewal">
                                      <a href="/Followers">View all</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="sidebar_follow-nab">
                                <div className="sidebar_follow-po">
                                  <div className="sidebar_follow-list">
                                    <div className="sidebar_follow">
                                      <div className="sidebar_follow-img">
                                        <span>
                                          <img src="/images/pop.png" />{" "}
                                        </span>
                                      </div>

                                      <div className="sidebar_followr-name">
                                        <strong>Diana Pink</strong>
                                        <small className="ordnge">
                                          Shared a Recipe with you.
                                        </small>
                                        <div className="sidebar_follow-list">
                                          <div className="sidebar_follow">
                                            <div className="sidebar_follow-img">
                                              <span>
                                                <img src="/images/Group836.png" />
                                              </span>
                                            </div>

                                            <div className="sidebar_followr-name">
                                              <strong>Mexican Chicken</strong>
                                              <small>290 Calories</small>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
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
                                        <small className="ordnge">
                                          Shared a Recipe with you.
                                        </small>
                                        <div className="sidebar_follow-list">
                                          <div className="sidebar_follow">
                                            <div className="sidebar_follow-img">
                                              <span>
                                                <img src="/images/Group836.png" />
                                              </span>
                                            </div>

                                            <div className="sidebar_followr-name">
                                              <strong>Mexican Chicken</strong>
                                              <small>290 Calories</small>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
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
                                  </div>
                                  <div className="sidebar_follow-list">
                                    <div className="sidebar_follow followpli">
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
                                    <div className="sidebar-follow_plus followpl">
                                      <a href="">
                                        + Follow{" "}
                                        <img src="/images/Sparkling.png" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="recei-Avanua">
                                  <span>
                                    <img src="/images/coin4.png" />
                                  </span>
                                  <strong>
                                    You received 4,855 Total coins From: 6 Users
                                    Will i C, S n u b o b, Avanua
                                    <img src="/images/veri1.png" /> .....
                                  </strong>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="col-search-mamber">
                                <div className="col-search-mamber-tab">
                                  <div className="col-sear-tab">
                                    <label>Search Members</label>
                                    <input type="type" name="" />
                                    <span>
                                      <img src="/images/member.png" />
                                    </span>
                                  </div>
                                  <div className="col-textar-tab">
                                    <textarea></textarea>
                                    <ul>
                                      <li>
                                        <input type="file" id="media" />
                                        <label>
                                          <img
                                            src="/images/media.png"
                                            for="media"
                                          />
                                        </label>
                                      </li>
                                      <li>
                                        <input type="file" id="gif" />
                                        <label>
                                          <img
                                            src="/images/gif.png"
                                            for="gif"
                                          />
                                        </label>
                                      </li>
                                      <li>
                                        <input type="file" id="poll" />
                                        <label>
                                          <img
                                            src="/images/poll.png"
                                            for="poll"
                                          />
                                        </label>
                                      </li>
                                      <li>
                                        <input type="file" id="recipe" />
                                        <label>
                                          <img
                                            src="/images/recipe-2.png"
                                            for="recipe"
                                          />
                                        </label>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-tsub">
                                    <button>
                                      <img src="/images/upload.png" />
                                    </button>
                                  </div>
                                </div>

                                <div className="col-search-row">
                                  <div className="search-Recipes">
                                    <div className="Viewed-rRecipesow">
                                      <h5>Your Top Viewed Recipes</h5>
                                      <img src="/images/Group3211.png" />
                                      <h3>
                                        1,689,422 views 500,000 Fav 22,000
                                        Shares
                                      </h3>
                                    </div>

                                    <div className="Group3211">
                                      <h4>
                                        You have a Request to view locked
                                        comment.
                                      </h4>
                                      <button
                                        data-bs-toggle="modal"
                                        data-bs-target="#myModal2"
                                      >
                                        -View List-
                                      </button>
                                    </div>
                                  </div>
                                  <div className="search-Recipe-coin">
                                    <div className="accoladesgiftd">
                                      <img src="/images/accoladesgiftd-2.png" />
                                    </div>
                                    <div className="totalcin">
                                      <span>
                                        <img src="/images/coin3.png" />
                                      </span>

                                      <strong>
                                        Total Coins: <small>8,796</small>
                                        <br />
                                        Total Gifts: <small>6</small>
                                      </strong>
                                    </div>
                                    <div className="totalcin-list">
                                      <ul>
                                        <li>
                                          <span>
                                            <img src="/images/Vector-7.png" />
                                          </span>
                                          Change Shape iCon
                                        </li>
                                        <li>
                                          <span>
                                            <img src="/images/Mask1.png" />
                                          </span>
                                          Convert Gifts
                                        </li>
                                        <li>
                                          <span>
                                            <img src="/images/coin4.png" />
                                          </span>
                                          Cash Out Coins
                                        </li>
                                        <li>
                                          <span>
                                            <img src="/images/coin4.png" />
                                          </span>
                                          Buy Coins
                                        </li>
                                        <li>
                                          <span>
                                            <img src="/images/Vector-7.png" />
                                          </span>
                                          Buy Shape iCon
                                        </li>
                                        <li>
                                          <span>
                                            <img src="/images/Vector-8.png" />
                                          </span>
                                          With Draw Funds
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="nav-item dropdown-menu-end">
                        <a className="nav-link" data-bs-toggle="dropdown">
                          Recipe Pref
                        </a>

                        <div className="dropdown-menu full-Recipe">
                          <div className="Recipe-koi">
                            <div className="Recipe-ul-Language">
                              <ul>
                                <li>
                                  Language <img src="/images/Language.png" />
                                  <small>English</small>
                                </li>
                                <li>
                                  Metric
                                  <small>
                                    <span>Imperial</span> /U.S. Metric
                                  </small>
                                </li>
                                <li>
                                  Difficulty
                                  <small>
                                    Easy, Normal , Hard , <span>All</span>
                                    <img src="/images/Scales.png" />
                                  </small>
                                </li>
                                <li>
                                  Promote
                                  <small>
                                    <img src="/images/Megaphone.png" />
                                  </small>
                                </li>

                                <li>
                                  Food Type:
                                  <small>
                                    <span>Conventional =/</span>=
                                    Non-Conventional
                                  </small>
                                </li>
                              </ul>
                            </div>
                            <div className="Recipe-ul-LanguType">
                              <h5>Recipe Type :</h5>
                              <ul>
                                <li>
                                  <input type="checkbox" id="Healthy" />
                                  <label for="Healthy">Healthy</label>
                                </li>
                                <li>
                                  <input type="checkbox" id="Carb" />
                                  <label for="Carb">Low Carb</label>
                                </li>
                                <li>
                                  <input type="checkbox" id="Weight" />
                                  <label for="Weight">Lose Weight</label>
                                </li>
                                <li>
                                  <input type="checkbox" id="noCarbs" />
                                  <label for="noCarbs">No Carbs</label>
                                </li>
                                <li>
                                  <input type="checkbox" id="Vegetarian" />
                                  <label for="Vegetarian">Vegetarian</label>
                                </li>
                                <li>
                                  <input type="checkbox" id="Diabetic" />
                                  <label for="Diabetic">Diabetic</label>
                                </li>
                                <li>
                                  <input type="checkbox" id="Gain" />
                                  <label for="Gain">Gain weight</label>
                                </li>
                                <li>
                                  <input type="checkbox" id="Pescatarian" />
                                  <label for="Pescatarian">Pescatarian</label>
                                </li>
                                <li>
                                  <input type="checkbox" id="Keto" />
                                  <label for="Keto">Keto</label>
                                </li>
                                <li>
                                  <input type="checkbox" id="Sodium" />
                                  <label for="Sodium">No Sodium</label>
                                </li>
                                <li>
                                  <input type="checkbox" id="Building" />
                                  <label for="Building">Body Building</label>
                                </li>
                              </ul>
                            </div>

                            <div className="Recipe-Languagelevel">
                              <div className="hottoggle-div">
                                <span>Spicy level</span>
                                <img
                                  className="hottoggle"
                                  src="/images/hottoggle.png"
                                />
                                <img className="chili" src="/images/chili.png" />
                                <span className="levelw">
                                  (Exact level <small></small> in Range)
                                </span>
                              </div>
                              <div className="hottoggle-div">
                                <span>
                                  Spicy level on will find spicy recipe upto
                                  that level with it off all recipe types will
                                  display in range
                                </span>
                              </div>
                              <div className="hottoggle-div">
                                <span>
                                  Recipe by
                                  <img
                                    className="off-p0"
                                    src="/images/starrating.png"
                                  />
                                  level <img src="/images/off.png" />
                                  <img src="/images/starating.png" />
                                </span>
                                <span className="levelw">
                                  (Exact level <small></small> in Range)
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="Exact-p">
                            <div className="Exact-range">
                              <div className="Exact-range-data">
                                <h5>By Calories</h5>
                                <div className="Calories">
                                  <span className="left-1">0</span>
                                  <span id="demo"></span>
                                  <span className="right-1">3000+</span>
                                </div>
                                <div className="slidecontainer">
                                  <input
                                    type="range"
                                    min="1"
                                    max="100"
                                    value="50"
                                    className="slidermy"
                                    id="myRange"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="Exact-range-Time">
                              <h5>Prep Time</h5>
                              <div className="Calories">
                                <span className="left-1">0</span>
                                <span className="right-1">
                                  <img src="/images/Infinity.png" />
                                </span>
                              </div>

                              <div className="ran-imh">
                                <img src="/images/Line87.png" />
                              </div>

                              <div className="Calories-ba">
                                <span>00:00</span>
                                <span className="nobor">-</span>
                                <span>
                                  <img src="/images/Infinity.png" />
                                </span>
                              </div>
                            </div>

                            <div className="Substitution">
                              <div className="Subpo">
                                <h4>
                                  Substitution{" "}
                                  <img src="/images/subicon-4.png" />
                                </h4>
                                <div className="Cocktail_check Cocktail_check2">
                                  <label className="switch">
                                    <input type="checkbox" checked />
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                                <h5>
                                  This will allow recipe’s with excluded
                                  ingredients that has substitution
                                </h5>
                              </div>
                            </div>
                            <div className="Substitution-width">
                              <h4>
                                <img src="/images/Mask-12.png" />
                                <span>Excluding/</span>Allergies{" "}
                                <img src="/images/SneezingFace.png" />
                              </h4>
                              <div className="ingredients">
                                <div className="ingredients_inou">
                                  <input
                                    type="text"
                                    placeholder="Add ingredients to eXclude"
                                  />
                                  <button>
                                    <img src="/images/Maskgroup-13.png" />
                                  </button>
                                </div>
                                <ul>
                                  <li>Beef</li>
                                  <li>Bulgarian</li>
                                  <li>Burmese</li>
                                  <li>Cajun & Creole</li>
                                  <li>Nepali</li>
                                  <li>New Mexican</li>
                                  <li>Nicaraguan</li>
                                  <li>Nigerian</li>
                                  <li>Steak</li>
                                  <li>Tacos</li>
                                  <li>Sushi</li>
                                </ul>
                              </div>
                            </div>
                            <div className="Substitution-width">
                              <h4>
                                <span>Your Meal Preferences</span>
                              </h4>

                              <div className="ingredients">
                                <div className="ingredients_inou">
                                  <input
                                    type="text"
                                    placeholder="Add ingredients to eXclude"
                                  />
                                  <button>
                                    <img src="/images/Maskgroup-13.png" />
                                  </button>
                                </div>
                                <ul>
                                  <li>Beef</li>
                                  <li>Bulgarian</li>
                                  <li>Burmese</li>
                                  <li>Cajun & Creole</li>
                                  <li>Nepali</li>
                                  <li>New Mexican</li>
                                  <li>Nicaraguan</li>
                                  <li>Nigerian</li>
                                  <li>Steak</li>
                                  <li>Tacos</li>
                                  <li>Sushi</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="nav-item dropdown-menu-end">
                        <a className="nav-link" data-bs-toggle="dropdown">
                          Articles
                        </a>

                        <div className="dropdown-menu full-Articles">
                          <div className="full-Articles_row">
                            <div className="row">
                              <div className="col-md-7">
                                <h3>Articles</h3>
                                <div className="Articles-width">
                                  <div className="Articles-list">
                                    <Link href="/Articles">
                                      <div className="Articles-list-img">
                                        <img src="/images/poi.png" />
                                      </div>
                                      <div className="Articles-list-text">
                                        <span>
                                          How meal plan can save money and
                                          health
                                          <img src="/images/Screenshot.png" />
                                        </span>
                                      </div>
                                    </Link>
                                  </div>
                                  <div className="Articles-list">
                                    <Link href="/Articles">
                                      <div className="Articles-list-img">
                                        <img src="/images/poi.png" />
                                      </div>
                                      <div className="Articles-list-text">
                                        <span>
                                          How meal plan can save money and
                                          health
                                        </span>
                                      </div>
                                    </Link>
                                  </div>
                                  <div className="Articles-list">
                                    <Link href="/Articles">
                                      <div className="Articles-list-img">
                                        <img src="/images/poi.png" />
                                      </div>
                                      <div className="Articles-list-text">
                                        <span>
                                          How meal plan can save money and
                                          health
                                        </span>
                                      </div>
                                    </Link>
                                  </div>
                                  <div className="Articles-list">
                                    <Link href="/Articles">
                                      <div className="Articles-list-img">
                                        <img src="/images/poi.png" />
                                      </div>
                                      <div className="Articles-list-text">
                                        <span>
                                          How meal plan can save money and
                                          health
                                        </span>
                                      </div>
                                    </Link>
                                  </div>
                                  <div className="Articles-list">
                                    <Link href="/Articles">
                                      <div className="Articles-list-img">
                                        <img src="/images/poi.png" />
                                      </div>
                                      <div className="Articles-list-text">
                                        <span>
                                          How meal plan can save money and
                                          health
                                        </span>
                                      </div>
                                    </Link>
                                  </div>
                                  <div className="Articles-list">
                                    <Link href="/Articles">
                                      <div className="Articles-list-img">
                                        <img src="/images/poi.png" />
                                      </div>
                                      <div className="Articles-list-text">
                                        <span>
                                          How meal plan can save money and
                                          health
                                        </span>
                                      </div>
                                    </Link>
                                  </div>

                                  <div className="Articles-list">
                                    <Link href="/Articles">
                                      <div className="Articles-list-img">
                                        <img src="/images/poi.png" />
                                      </div>
                                      <div className="Articles-list-text">
                                        <span>
                                          How meal plan can save money and
                                          health
                                        </span>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-5">
                                <div className="col-searchbar-box">
                                  <h3>Search Article’s</h3>
                                  <div className="col-md-searchbar">
                                    <input
                                      type="text"
                                      placeholder="Search"
                                      name=""
                                    />
                                    <button ype="submit">
                                      <i
                                        className="fa fa-search"
                                        aria-hidden="true"
                                      ></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <form className="d-flex justify-content-space-between">
                      <div className="Cate-po">
                      <select onChange={(e) => handleChange(e.target.value)}>
                      {categories?.map((cate, index) => (
                        <option key={index} selected={cate.id == 0} value={cate.id}>
                          {cate.name}
                        </option>
                      ))}{" "}
                    </select>
                        <input
                          className="form-control me-2"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                          onChange={handleSearch}
                        />
                        <button
                          type="submit"
                          onClick={(e) => {
                            e.preventDefault();
                            fetchSearchRecipe();
                          }}
                        >
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                      </div>

                      <div className="page_fliter_data main">
                  <span>
                    <i className="fa fa-align-center" aria-hidden="true"></i>
                    Filter
                  </span>
                </div>

                      {/* <div className="page_fliter_search">
                  <div className="page_fliter_select">
                    <select>
                      {searchResults.length > 0
                        ? searchResults.map((cate) => (
                            <option key={cate.id}>{cate.name}</option>
                          ))
                        : data.data?.map((cate) => (
                            <option key={cate.id}>{cate.name}</option>
                          ))}
                    </select>
                  </div>
                  <div className="page_fliter_input">
                    <input type="text" placeholder="" onChange={handleSearch} />
                    <button>
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>*/}
                    </form>

                    {/* <div className="head-filer">
                      <a href="">
                        <i className="fa fa-filter" aria-hidden="true"></i> Filter
                      </a>
                    </div> */}

                    {isLoggedIn ? (
                      <>
                        <div className="head-cart">
                          <a href="/FoodStore">
                            <i
                              className="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>
                            <span>03</span>
                          </a>
                        </div>

                        <div className="head-profile dropdown">
                          <a href="" data-bs-toggle="dropdown">
                            <img src="/images/pop.png" />
                          </a>

                          <div className="dropdown-menu pro-muny">
                            <ul>
                              <li>
                                <Link className="dropdown-item" href="/Profile">
                                  <span></span> Profile
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" href="/Privacy">
                                  <span>
                                    <img src="/images/lp.png" />
                                  </span>{" "}
                                  Privacy
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" href="/Followers">
                                  <span>
                                    <img src="/images/fave3.png" />
                                  </span>{" "}
                                  Followers
                                </Link>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <span>
                                    {/* <img src="/images/Share.png" /> */}
                                  </span>
                                  Collections
                                </a>
                              </li>
                              <li>
                              <Link className="dropdown-item" href="/Setting">
                                  <span>
                                    <img src="/images/settings.png" />
                                  </span>
                                  Settings
                                  </Link>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <span>
                                    <img src="/images/Vector-6.png" />
                                  </span>
                                  Switch accts
                                </a>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  href="/"
                                  onClick={handlelogout}
                                >
                                  <span>
                                    <img src="/images/log.png" />
                                  </span>{" "}
                                  Logout
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="head-filer d-flex justify-content-space-between">
                        <a
                          href=""
                          data-bs-toggle="modal"
                          data-bs-target="#signUp"
                        >
                          SIGN UP
                        </a>
                        <a
                          href=""
                          data-bs-toggle="modal"
                          data-bs-target="#login"
                        >
                          LOGIN
                        </a>
                        {/* <Link href={"/Login"}>Login</Link> */}
                      </div>
                    )}
                  </div>
                </div>
              </nav>
            </header>
            <ToastContainer />
          </div>
        </div>

        <div
          className="modal fade"
          id="signUp"
          tabindex="-1"
          aria-labelledby="login"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body loginmenu p-0">
                <div className="login-bg">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-sm-6 p0">
                        <div className="col-login-left">
                          <div className="col-login-logo">
                            <a href="">
                              <img src="/images/logo2.png" />
                            </a>
                          </div>
                          <div className="col-login-banner">
                            {/* <img src={newLocal} /> */}
                            <img src="/images/logo-bg-1.png" />
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 p0">
                        <div className="col-login-right">
                          <ul className="nav nav-tabs">
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#login4"
                              >
                                Log in
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                data-bs-toggle="tab"
                                href="#join"
                              >
                                Join Now!
                              </a>
                            </li>
                          </ul>

                          <div className="tab-content clearfix">
                            <div className="tab-pane" id="login4" role="tabpanel">
                            <form>
                                <div className="login-box">
                                  <div className="login-box-input">
                                    <label className="pb-1">Email/Username</label>
                                    <div className="login-box-input_box">
                                      <span>
                                        <img src="/images/email.png" />
                                      </span>
                                      <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) =>
                                          setEmail(e.target.value)
                                        }
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="login-box-input">
                                    <label className="pb-1">Password</label>
                                    <div className="login-box-input_box">
                                      <span>
                                        <img src="/images/password.png" />
                                      </span>
                                      <input
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) =>
                                          setPassword(e.target.value)
                                        }
                                        required
                                      />
                                      {error && (
                                        <p style={{ color: "red" }}>{error}</p>
                                      )}
                                    </div>
                                  </div>
                                  <div className="login-box-input">
                                    <label>Forgot your password?</label>
                                  </div>
                                  <div className="login-box-submit">
                                    <button
                                      data-bs-dismiss="modal"
                                      // data-bs-dismiss="modal"
                                      onClick={handleLogin}
                                    >
                                      Log in
                                    </button>
                                    {/* {modalClose == true ? (
                                      <button
                                        data-bs-dismiss="modal"
                                        onClick={handleLogin}
                                      >
                                        Log in
                                      </button>
                                    ) : (
                                      <button
                                        data-bs-dismiss="modal"
                                        onClick={handleLogin}
                                      >
                                        Log in
                                      </button>
                                    )} */}
                                    {/* {modalClose=="true"? data-bs-dismiss='modal'":""} */}

                                    <small>OR</small>
                                    <span>
                                      <img src="/images/border.png" />{" "}
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
                                          <img src="/images/fb.png" />
                                        </span>{" "}
                                        Connect with Facebook
                                      </a>
                                    </div>
                                    <div className="social-button social-button-google">
                                      <a href="">
                                        {" "}
                                        <span>
                                          <img src="/images/google.png" />
                                        </span>
                                        Connect with Google
                                      </a>
                                    </div>
                                    <div className="social-button social-button-apple">
                                      <a href="">
                                        <span>
                                          <img src="/images/apple.png" />{" "}
                                        </span>
                                        Connect with Apple{" "}
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="tab-pane active" id="join" role="tabpanel">
                              <SignUp />
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



        <div
          className="modal fade"
          id="login"
          tabindex="-1"
          aria-labelledby="login"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body loginmenu p-0">
                <div className="login-bg">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-sm-6 p0">
                        <div className="col-login-left">
                          <div className="col-login-logo">
                            <a href="">
                              <img src="/images/logo2.png" />
                            </a>
                          </div>
                          <div className="col-login-banner">
                            <img src="/images/login-bg.png" />
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
                                href="#login5"
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
                            <div className="tab-pane active" id="login5">
                              <form>
                                <div className="login-box">
                                  <div className="login-box-input">
                                    <label className="pb-1">Email/Username</label>
                                    <div className="login-box-input_box">
                                      <span>
                                        <img src="/images/email.png" />
                                      </span>
                                      <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) =>
                                          setEmail(e.target.value)
                                        }
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="login-box-input">
                                    <label className="pb-1">Password</label>
                                    <div className="login-box-input_box">
                                      <span className="lock">
                                        <img src="/images/password.png" />
                                      </span>
                                      <input
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) =>
                                          setPassword(e.target.value)
                                        }
                                        required
                                      />
                                      {error && (
                                        <p style={{ color: "red" }}>{error}</p>
                                      )}
                                    </div>
                                  </div>
                                  <div className="login-box-input">
                                    <label>Forgot your password?</label>
                                  </div>
                                  <div className="login-box-submit">
                                    <button
                                      data-bs-dismiss="modal"
                                      // data-bs-dismiss="modal"
                                      onClick={handleLogin}
                                    >
                                      Log in
                                    </button>
                                    {/* {modalClose == true ? (
                                      <button
                                        data-bs-dismiss="modal"
                                        onClick={handleLogin}
                                      >
                                        Log in
                                      </button>
                                    ) : (
                                      <button
                                        data-bs-dismiss="modal"
                                        onClick={handleLogin}
                                      >
                                        Log in
                                      </button>
                                    )} */}
                                    {/* {modalClose=="true"? data-bs-dismiss='modal'":""} */}

                                    <small>OR</small>
                                    <span>
                                      <img src="/images/border.png" />{" "}
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
                                          <img src="/images/fb.png" />
                                        </span>{" "}
                                        Connect with Facebook
                                      </a>
                                    </div>
                                    <div className="social-button social-button-google">
                                      <a href="">
                                        {" "}
                                        <span>
                                          <img src="/images/google.png" />
                                        </span>
                                        Connect with Google
                                      </a>
                                    </div>
                                    <div className="social-button social-button-apple">
                                      <a href="">
                                        <span>
                                          <img src="/images/apple.png" />{" "}
                                        </span>
                                        Connect with Apple{" "}
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="tab-pane" id="joinin">
                              <SignUp />
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

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default MainHeader;
