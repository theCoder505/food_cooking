import Link from "next/link";
import Layout from "@/components/Layout";
// import axios from "axios";
import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import withPrivateRoute from "@/components/withPrivateRoute";
// import SidebarComponent from "@/components/headers/SidebarComponent";
// import { getAllRecipe } from "@/context/recipe/recipeSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserList, getUserProfile, getUserProfileByID, imageUpload, updateUserProfile, userImageChange } from "@/context/user/userSlice";
// import { getAllFeed } from "@/context/recipe/feedSlice";
const setting = () => {

  //   const [image, setImage] = useState();
  //   const [feedtext, setFeedtext] = useState("");
  //   const [memberData, setMemberData] = useState();

  //   //   const handleChange = (e) => {
  //   //     const name = e.target.name;
  //   //     setFeedtext(name);
  //   //   };
  //   const handleChange = (e) => {
  //     const name = e.target.name;
  //     setFeedtext((v) => ({
  //       ...v,
  //       [name]: e.target.value,
  //     }));
  //   };
  //   const fileUpload = (event) => {
  //     console.log(event);
  //     if (event.target.files && event.target.files[0]) {
  //       const i = event.target.files[0];
  //       setImage(i);
  //     }
  //   };
  //   let userId;
  //   if (typeof window !== "undefined") {
  //     // Perform localStorage action
  //     let item = localStorage.getItem("user");
  //     item = JSON.parse(item);
  //     userId = item.id;
  //   }
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     if (!image) {
  //       // setErrors(true);
  //       toast.error("Image missing...");
  //     } else if (feedtext == "") {
  //       // setErrors(true);
  //       toast.error("feedtext missing...");
  //     } else {
  //       // const formdata = new FormData();
  //       // formdata.append("user_id", userId);
  //       // formdata.append("feed_text", feedtext);
  //       // formdata.append("feed_image", image);
  //       const formdata = {
  //         "user_id": userId,
  //         "feed_text": feedtext,
  //         "feed_image": image,
  //       }

  //       try {
  //         const response = await axios
  //           .post(`${process.env.NEXT_PUBLIC_AUTH_URL}member/feed`, formdata, {})
  //           .then((res) => {
  //             // alert("Successfully Save");
  //             toast(" Feed Add successfully");
  //             fetchData();
  //             return res;
  //           })
  //           .catch((err) => err);
  //       } catch (error) {
  //         console.log("error------------>", error);
  //       }
  //     }
  //   };
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post(
  //         `${process.env.NEXT_PUBLIC_AUTH_URL}/api/getfeed`
  //       ).then((response) => {
  //         const data = response.data.data;
  //         setMemberData(data);
  //       }).catch((error) => console.log(error))
  //       console.log(data, "11111111111111");
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //   const [user, setUser] = useState(null);
  //   const [recipe, setRecipe] = useState(null);
  //   const [feed, setFeed] = useState(null);

  //   const dispatch = useDispatch();
  //   const getrecipe = useSelector((state) => state?.recipeSlice?.allrecipe)
  //   const getUser = useSelector((state) => state?.user?.userList)
  //   const allfeed = useSelector((state) => state?.feed?.feed)

  //   useEffect(() => {
  //     dispatch(getAllRecipe());
  //   }, [dispatch]);

  //   useEffect(() => {
  //     dispatch(getAllUserList())
  //   }, [dispatch])

  //   useEffect(() => {
  //     dispatch(getAllFeed())
  //   }, [dispatch])

  //   useEffect(() => {
  //     setUser(getUser)
  //     setRecipe(getrecipe)
  //     setFeed(allfeed)
  //   }, [getUser, getrecipe, allfeed])


  //   const userRecipes = [];

  //   user?.forEach((user) => {
  //     const userId = user.id;

  //     const userRecipe = recipe.filter((recipe) => recipe.user_id === userId);

  //     const userDetail = {
  //       id: userId,
  //       username: user.username,
  //       recipe: userRecipe,
  //     };
  //     userRecipes[userId] = userDetail;
  //   });
  const foodArr = [
    "Vegetarian",
    "Low Carb",
    "Lose Weight",
    "No Carbs",
    "Pescatarian",
    "Low Sodium",
    "Gain weight",
    "No Sodium",
    "Flexitarian",
    "Keto",
    "Sports",
    "Health",
  ];

  const BaristaType = [
    "Dinner",
    "Side Dish",
    "Desserts",
    "Brunch",
    "Appetizer",
    "Baked Goods",
    "Beverages",
    "Lunch",
    "Main Course",
    "Salads",
    "Cocktails",
    "Supper",
  ];
  const [user, setuser] = useState(null);
  const [image, setImage] = useState("");
  const [userById, setuserById] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


  const dispatch = useDispatch();


  useEffect(() => {
    const userName = localStorage.getItem('user');
    if (userName) {
      setuser(JSON.parse(userName));
    }
  }, [])

  useEffect(() => {
    if (user?.username) {
      dispatch(getUserProfileByID(user?.id))
    }
  }, [user, dispatch])

  
const userProfileData = useSelector((state) => state?.user?.userById)



  useEffect(() => {
    if (userProfileData) {
      setuserById(userProfileData);
    }
  }, [userProfileData])

  const [data, setData] = useState({
    name: userById?.name,
    email: userById?.email,
    username: userById?.username,
    contact: userById?.contact,
    dob: userById?.dob,
    sex: userById?.sex,
    country: userById?.country,
    city: userById?.city,
    state: userById?.state,
    zip_code: userById?.zip_code,
    hide_full_name: userById?.hide_full_name || false,
    make_profile_private: userById?.make_profile_private || false,
    bucket_list: userById?.bucket_list || false,
    faves: userById?.faves || false,
    your_photo: userById?.updatedMediaUrl
  });

  useEffect(() => {
    setData({
      name: userById?.name,
      email: userById?.email,
      username: userById?.username,
      contact: userById?.contact,
      dob: userById?.dob,
      sex: userById?.sex,
      country: userById?.country,
      city: userById?.city,
      state: userById?.state,
      zip_code: userById?.zip_code,
      hide_full_name: userById?.hide_full_name,
      make_profile_private: userById?.make_profile_private,
      bucket_list: userById?.bucket_list,
      faves: userById?.faves,
      your_photo: userById?.your_photo
    })
  }, [userById, dispatch])

  const toggleEditable = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleChange = (e, key) => {
    if (key === 'hide_full_name' || key === 'make_profile_private' || key === 'bucket_list' || key === 'faves') {
      setData({
        ...data,
        [key]: !data[key], // Toggle the boolean value
      });
    } else {
      setData({
        ...data,
        [key]: e.target.value,
      });
    }
  };
  const fileUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setImagePreview(URL.createObjectURL(i));
      // setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  const handleSave = () => {
    setIsEditing(false);
    dispatch(updateUserProfile(userById?.id, data))
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setSelectedImage(selectedFile);
    }
  };

  const handleImageSave = async () => {
    if (selectedImage) {
      const data = { id: userProfileData?.id, image: selectedImage };
      dispatch(userImageChange(data));
    }
  }
  const [imagePreview, setImagePreview] = useState(null);

  try {
    let updatedMediaUrl = '';

    if (image && image.type.startsWith('image')) {
      const mediaImage = dispatch(imageUpload({ image: image }));

      if (mediaImage?.data?.status) {
        updatedMediaUrl = `${process.env.NEXT_PUBLIC_AUTH_URL}/${mediaImage?.data?.result?.url}`;
      }
    }
  } catch (error) {
    console.log(error)
  }



  return (
    <>
      <Layout>
        <div className="main_width">
          <div className="container-fluid">
            <div className="Barista-nav">
              <ul>
                <li>
                  <Link href="/AccLandingPage">Home</Link>
                </li>
                <li>
                  <Link href="#">Explore</Link>
                </li>
                <li>
                  <Link href="#">Help</Link>
                </li>
                <li>
                  <Link href="/Profile">Profile</Link>
                </li>
              </ul>
            </div>
            <div><i className="fas fa-edit" style={{ float: "right" }} onClick={toggleEditable}></i></div>
            {isEditing && <button className="saveButton1" onClick={handleSave}>Save</button>}
            <form
              // onSubmit={(data) => handleSubmit(data)}
              method="POST"
              enctype="multipart/form-data"
            >
              <div className="MembersFeeda">
                <h2>Settings</h2>
              </div>
            </form>



            <div className="cointainer">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="Settings-list">
                      <ul>
                        <li>Name:<span>
                          {isEditing ? (
                            <input
                              type="text"
                              value={data?.name}
                              onChange={(e) => handleChange(e, 'name')}
                            />
                          ) : (
                            data.name
                          )}</span></li>
                        <li>email:<span>
                          {isEditing ? (
                            <input
                              type="text"
                              value={data?.email}
                              onChange={(e) => handleChange(e, 'email')}
                            />
                          ) : (
                            data.email
                          )}</span></li>
                        <li>User Name: <span>
                          {isEditing ? (
                            <input
                              type="text"
                              value={data?.username}
                              onChange={(e) => handleChange(e, 'username')}
                            />
                          ) : (
                            data.username
                          )}</span></li>
                        <li>contact: <span>
                          {isEditing ? (
                            <input
                              type="text"
                              value={data?.contact}
                              onChange={(e) => handleChange(e, 'contact')}
                            />
                          ) : (
                            data.contact
                          )}</span></li>
                        <li>dob: <span>
                          {isEditing ? (
                            <input
                              type="text"
                              value={data?.dob}
                              onChange={(e) => handleChange(e, 'dob')}
                            />
                          ) : (
                            data.dob
                          )}</span></li>
                        <li style={{ display: "flex" }}>Sex:
                          {isEditing ? (
                            <div className="radio-container">
                              <label>
                                <input
                                  type="radio"
                                  name="sex"
                                  value="male"
                                  checked={data.sex === 'male'}
                                  onChange={(e) => handleChange(e, 'sex')}
                                />
                                Male
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="sex"
                                  value="female"
                                  checked={data.sex === 'female'}
                                  onChange={(e) => handleChange(e, 'sex')}
                                />
                                Female
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="sex"
                                  value="other"
                                  checked={data.sex === 'other'}
                                  onChange={(e) => handleChange(e, 'sex')}
                                />
                                Other
                              </label>
                            </div>
                          ) : (
                            data.sex
                          )}
                        </li>
                        <li>city:<span>
                          {isEditing ? (
                            <input
                              type="text"
                              value={data?.city}
                              onChange={(e) => handleChange(e, 'city')}
                            />
                          ) : (
                            data.city
                          )}</span></li>
                        <li>state:<span>
                          {isEditing ? (
                            <input
                              type="text"
                              value={data?.state}
                              onChange={(e) => handleChange(e, 'state')}
                            />
                          ) : (
                            data.state
                          )}</span></li>
                        <li>Zip code: <span>
                          {isEditing ? (
                            <input
                              type="text"
                              value={data?.zip_code}
                              onChange={(e) => handleChange(e, 'zip_code')}
                            />
                          ) : (
                            data.zip_code
                          )}</span></li>
                        <div>
                          <label>Privacy:
                            <span>Hide Full Name :{isEditing ? (
                              <>
                                <button
                                  className={`toggle-button ${data.hide_full_name ? "active" : ""}`}
                                  onClick={(e) => handleChange(e, 'hide_full_name')}
                                >
                                  Yes
                                </button>
                                <button
                                  className={`toggle-button ${!data.hide_full_name ? "active" : ""}`}
                                  onClick={(e) => handleChange(e, 'hide_full_name')}
                                >
                                  No
                                </button>
                              </>
                            ) : (
                              data.hide_full_name ? 'Yes' : 'No'
                            )}</span></label>
                          <label className="private">Make Profile Private: {isEditing ? (
                            <>
                              <button
                                className={`toggle-button ${data.make_profile_private ? "active" : ""}`}
                                onClick={(e) => handleChange(e, 'make_profile_private')}
                              >
                                Yes
                              </button>
                              <button
                                className={`toggle-button ${!data.make_profile_private ? "active" : ""}`}
                                onClick={(e) => handleChange(e, 'make_profile_private')}
                              >
                                No
                              </button>
                            </>
                          ) : (
                            data.make_profile_private ? 'Yes' : 'No'
                          )} </label>
                          <label className="private">Bucket List:{isEditing ? (
                            <>
                              <button
                                className={`toggle-button ${data.bucket_list ? "active" : ""}`}
                                onClick={(e) => handleChange(e, 'bucket_list')}
                              >
                                Yes
                              </button>
                              <button
                                className={`toggle-button ${!data.bucket_list ? "active" : ""}`}
                                onClick={(e) => handleChange(e, 'bucket_list')}
                              >
                                No
                              </button>
                            </>
                          ) : (
                            data.bucket_list ? 'Yes' : 'No'
                          )}  </label>
                          <label className="private">Faves: {isEditing ? (
                            <>
                              <button
                                className={`toggle-button ${data.faves ? "active" : ""}`}
                                onClick={(e) => handleChange(e, 'faves')}
                              >
                                Yes
                              </button>
                              <button
                                className={`toggle-button ${!data.faves ? "active" : ""}`}
                                onClick={(e) => handleChange(e, 'faves')}
                              >
                                No
                              </button>
                            </>
                          ) : (
                            data.faves ? 'Yes' : 'No'
                          )}  </label>
                        </div>
                      </ul>
                      <ul>
                        <h4 className="Chef">I AM A Chef!!!</h4>
                        <div className="Videoifa">
                          <h4 className="uplod"><span>(Upload Credentials)</span></h4>
                          <input
                            type="file"
                            name="media"
                            // value={recipe.media}
                            onChange={(e) => fileUpload(e)}
                            id="filot"
                          />
                          <label for="filot"><img className="up" src="images/Vector (4).png" /></label>
                        </div>
                        <li>
                          <label>Business Account: Y/N </label>
                        </li>
                      </ul>
                      <div className="setting">
                        <ul>
                          <li className="rediob">

                            <input className="rediob" type="radio" id="lowCarb" name="meal_plan_type" value="Low Carb" />
                            <span for="Low Carb" className="rediob">
                              {" "}
                              Rest/FastFood/Food Truck/Catering
                            </span>
                          </li>
                          <li className="rediob">

                            <input type="radio" id="lowCarb" name="meal_plan_type" value="Low Carb" />
                            <span for="Low Carb" className="rediob">
                              {" "}
                              Chef/Cook
                            </span>
                          </li>
                          <li className="rediob">

                            <input type="radio" id="lowCarb" name="meal_plan_type" value="Low Carb" />
                            <span for="Low Carb" className="rediob">
                              {" "}
                              Food Expert
                            </span>
                          </li>
                          <li className="rediob">
                            <input type="radio" id="lowCarb" name="meal_plan_type" value="Low Carb" />
                            <span for="Low Carb" className="rediob">
                              {" "}
                              Low Carb
                            </span>
                          </li>
                          <li className="rediob">
                            <input type="radio" id="lowCarb" name="meal_plan_type" value="Low Carb" />
                            <span for="Low Carb" className="rediob">
                              {" "}
                              Low Carb
                            </span>
                          </li>
                          <li className="rediob">
                            <input type="radio" id="lowCarb" name="meal_plan_type" value="Low Carb" />
                            <span for="Low Carb" className="rediob">
                              {" "}
                              Low Carb
                            </span>
                          </li>
                          <li className="rediob">
                            <input type="radio" id="lowCarb" name="meal_plan_type" value="Low Carb" />
                            <span for="Low Carb" className="rediob">
                              {" "}
                              Low Carb
                            </span>
                          </li>
                        </ul>
                      </div>
                      {/* </ul> */}
                    </div>
                    <div className="Settings-list">
                      <ul>
                        <li> Push Notifications <span> <img className="notification" src="images/notification.png" /></span></li>
                        <li> Your Subscription</li>
                        <li>QR Code <span> <img className="qr" src="images/qr code (1).png" /></span></li>
                        <li>Add Account +</li>
                        <li>Switch Accounts</li>
                        <li>Verified Ribbon Visibility
                          <span>
                          </span>
                          <div className="Cocktail_check1">
                            <label className="switch">
                              <input type="checkbox" name="spicy_level"
                              //  checked={formData.spicy_level}
                              // onChange={handleChange} 
                              />
                              <span className="slider round"></span>
                            </label>
                          </div>
                        </li>
                        <li>Block list</li>
                        <li>Delete Account</li>
                        <li className="term">Suggestions/Contact Us <span> <img src="images/mail.png" /></span></li>
                        <li className="term">Terms/Policy/About<span> <img src="images/Mask Group (1).png" /></span></li>
                        <li>Language <span>  <img src="images/Language.png" /> English </span></li>
                        <li>Metric    Imperial U.S./Metric <span>  <img src="images/Scales.png" /> English </span></li>
                        <li>Difficulty</li>
                        <li>Allergies List <span> <img src="images/Sneezing Face.png" /></span></li>
                        <li>Exclude List <span> <img src="images/Mask group (2).png" /></span></li>
                        <li>Food Type:</li>
                        <li> <img src="images/Vector (5).png" /><span>Referal</span></li>

                      </ul>
                      <div className="full-page-member border-bottom-0">
                        <div className="Exact-range1">
                          <div className="Exact-range-data">
                            <h5>By Calories</h5>
                            <div className="Calories">
                              <span className="left-1">0</span>
                              <span id="demo"></span>
                              <span className="right-1">{'3000'}</span>
                            </div>
                            <div className="slidecontainer">
                              <input
                                type="range"
                                min="0"
                                max="3000"
                                name="by_calories"
                                value={200}
                                className="slidermy"
                                id="myRange"
                              // onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="uoload-Verification">
                      <div className="uoload-Verification2">
                        <span>Your Photo</span>
                        <div className="Videoif">
                          {
                            imagePreview &&
                            <img
                              src={imagePreview}
                              alt={`image`}
                              style={{
                                cursor: 'pointer',
                                maxWidth: '100px',
                                maxHeight: '100px',
                                marginBottom: '20px',
                                objectFit: 'contain',
                                borderRadius: '8px'
                              }}
                            />
                          }
                          {isEditing ? (
                            <input
                              type="File"
                              name="media"
                              value={data?.your_photo}
                              onChange={(e) => handleChange(e, 'your_photo')}
                            />
                          ) : (
                            data.your_photo
                          )}
                      <input
                        type="file"
                        name="media"
                        // value={recipe.media}
                        onChange={(e) => fileUpload(e)}
                        id="filot"
                      />
                      <label for="filot">Upload</label>
                    </div>
                  </div>
                </div>

              </div>
              <div className="container chek">
                <div className="row">
                  <div className="col-5">
                    <div className="row">
                      <div className="Settings-list1">
                        <h4>Recipe Type : </h4>
                        <ul className="drink-type-box mt-3">
                          {foodArr.map((v) => {
                            return (
                              <li key={v} className="ms-5">
                                <input
                                  type="checkbox"
                                  id={v}
                                  onChange={() => selectRecipeType(v)}
                                />{" "}
                                <label for={v}>{v}</label>
                              </li>
                            );
                          })}
                        </ul>
                        <ul className="drink-type-box1">
                          {BaristaType.map((v) => {
                            return (
                              <li key={v} className="ms-5">
                                <input
                                  type="checkbox"
                                  id={v}
                                  onChange={() => selectRecipeType(v)}
                                />{" "}
                                <label for={v}>{v}</label>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div >
      </Layout >
    </>
  );
};

export default setting;
