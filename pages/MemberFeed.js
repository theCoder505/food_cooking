import Link from "next/link";
import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import withPrivateRoute from "@/components/withPrivateRoute";
import SidebarComponent from "@/components/headers/SidebarComponent";
import { getAllRecipe } from "@/context/recipe/recipeSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserList } from "@/context/user/userSlice";
import { getAllFeed } from "@/context/recipe/feedSlice";
const MemberFeed = () => {
  const [image, setImage] = useState();
  const [feedtext, setFeedtext] = useState("");
  const [memberData, setMemberData] = useState();

  //   const handleChange = (e) => {
  //     const name = e.target.name;
  //     setFeedtext(name);
  //   };
  //   const handleChange = (e) => {
  //     const name = e.target.name;
  //     setFeedtext((v) => ({
  //       ...v,
  //       [name]: e.target.value,
  //     }));
  //   };
  const fileUpload = (event) => {
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
    }
  };
  let userId;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    let item = localStorage.getItem("user");
    item = JSON.parse(item);
    userId = item.id;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      // setErrors(true);
      toast.error("Image missing...");
    } else if (feedtext == "") {
      // setErrors(true);
      toast.error("feedtext missing...");
    } else {
      // const formdata = new FormData();
      // formdata.append("user_id", userId);
      // formdata.append("feed_text", feedtext);
      // formdata.append("feed_image", image);
      const formdata = {
        "user_id" : userId ,
        "feed_text": feedtext,
        "feed_image": image,
      }
      
      try {
        const response = await axios
          .post(`${process.env.NEXT_PUBLIC_AUTH_URL}member/feed`, formdata, {})
          .then((res) => {
            // alert("Successfully Save");
            toast(" Feed Add successfully");
            fetchData();
            return res;
          })
          .catch((err) => err);
      } catch (error) {
        console.log("error------------>", error);
      }
    }
  };
  const fetchData = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_AUTH_URL}/api/getfeed`
      ).then((response) => {
        const data = response.data.data;
        setMemberData(data);
      }).catch((error) => console.log(error))
      console.log(data, "11111111111111");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [user, setUser] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const [feed, setFeed] = useState(null);

  const dispatch = useDispatch();
  const getrecipe = useSelector((state) => state?.recipeSlice?.allrecipe)
  const getUser = useSelector((state) => state?.user?.userList)
  const allfeed = useSelector((state) => state?.feed?.feed)

  useEffect(() => {
    dispatch(getAllRecipe()); 
  }, [dispatch]);

  useEffect(() => {
		dispatch(getAllUserList())
  }, [dispatch]) 
  
  useEffect(() => {
		dispatch(getAllFeed())
	}, [dispatch]) 

  useEffect(() => {
    setUser(getUser)
    setRecipe(getrecipe)
    setFeed(allfeed)
  }, [getUser, getrecipe,allfeed])


  const userRecipes = [];
  
  user?.forEach((user) => {
    const userId = user.id;
  
    const userRecipe = recipe.filter((recipe) => recipe.user_id === userId);
  
    const userDetail = {
      id: userId,
      username: user.username,
      recipe: userRecipe,
    };
    userRecipes[userId] = userDetail;
  });

  
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
            <form
              onSubmit={(data) => handleSubmit(data)}
              method="POST"
              enctype="multipart/form-data"
            >
              <div className="MembersFeed">
                <h2>Members Feed</h2>
              </div>
              <div className="MembersFeed-textarea">
                <textarea
                  name="feed_text"
                  // value={feedtext}
                  onChange={(e) => setFeedtext(e.target.value)}
                  //   onChange={(e) => handleChange(e)}
                  placeholder="Notes"
                ></textarea>
                <button type="submit">
                  <img src="images/upload.png" />
                </button>
                <ul>
                  <li>
                    <label for="media">
                      <img src="images/media.png" />
                    </label>
                    <input
                      type="file"
                      name="feed_image"
                      onChange={(e) => fileUpload(e)}
                      id="media"
                    />
                  </li>
                  <li>
                    <label for="gif">
                      <img src="images/gif.png" />
                    </label>
                    {/* <input id="gif" type="file" name="" /> */}
                    <input
                      type="file"
                      name="media"
                      // value={recipe.media}
                      onChange={(e) => fileUpload(e)}
                      id="gif"
                    />
                  </li>
                  <li>
                    <label for="poll">
                      <img src="images/poll.png" />
                    </label>
                    {/* <input id="poll" type="file" name="" /> */}
                    <input
                      type="file"
                      name="media"
                      // value={recipe.media}
                      onChange={(e) => fileUpload(e)}
                      id="gif"
                    />
                  </li>
                  <li>
                    <label for="recipe-2">
                      <img src="images/recipe-2.png" />
                    </label>
                    {/* <input id="recipe" type="file" name="" /> */}
                    <input
                      type="file"
                      name="media"
                      // value={recipe.media}
                      onChange={(e) => fileUpload(e)}
                      id="gif"
                    />
                  </li>
                </ul>
              </div>
            </form>

            <div className="MembersFeed-shorts">
              <div className="MembersFeed-shortslist">
                <h2>Recent updates</h2>
                <div className="member-feedlist">
                  <div className="MembersFeed-shortslist-data">
                    <div className="MembersFeed-shortslist-Image">
                      <img src="images/Image.png" />
                      <span></span>
                    </div>

                    <label for="COMPLETECIR">
                      <img src="images/add-2.png" />
                    </label>
                    <input id="COMPLETECIR" type="file" name="" />
                    <strong>Your Story</strong>
                  </div>
                  {feed?.map((data) => (
                    <div className="MembersFeed-shortslist-data">
                      <div className="MembersFeed-shortslist-Image">
                        <img src={data?.feed_image} />
                        <span></span>
                      </div>

                      <strong>
                        {data.feed_text}
                        <img src="images/IMG_4254.png" />
                      </strong>
                    </div>
                  ))}
                </div>

                {/* <div className="MembersFeed-shortslist-data">
                  <div className="MembersFeed-shortslist-Image">
                    <img src="images/poi.png" />
                    <span></span>
                  </div>

                  <strong>
                    Diana Pink <img src="images/IMG_4254.png" />
                  </strong>
                </div>
                <div className="MembersFeed-shortslist-data">
                  <div className="MembersFeed-shortslist-Image">
                    <img src="images/poi.png" />
                    <span></span>
                  </div>

                  <strong>
                    Diana Pink <img src="images/IMG_4254.png" />
                  </strong>
                </div>
                <div className="MembersFeed-shortslist-data">
                  <div className="MembersFeed-shortslist-Image">
                    <img src="images/poi.png" />
                    <span></span>
                  </div>

                  <strong>
                    Diana Pink <img src="images/IMG_4254.png" />
                  </strong>
                </div>
                <div className="MembersFeed-shortslist-data">
                  <div className="MembersFeed-shortslist-Image">
                    <img src="images/poi.png" />
                    <span></span>
                  </div>

                  <strong>
                    Diana Pink <img src="images/IMG_4254.png" />
                  </strong>
                </div>
                <div className="MembersFeed-shortslist-data">
                  <div className="MembersFeed-shortslist-Image">
                    <img src="images/poi.png" />
                    <span></span>
                  </div>

                  <strong>
                    Diana Pink <img src="images/IMG_4254.png" />
                  </strong>
                </div>
                <div className="MembersFeed-shortslist-data">
                  <div className="MembersFeed-shortslist-Image">
                    <img src="images/poi.png" />
                    <span></span>
                  </div>

                  <strong>
                    Diana Pink <img src="images/IMG_4254.png" />
                  </strong>
                </div>
                <div className="MembersFeed-shortslist-data">
                  <div className="MembersFeed-shortslist-Image">
                    <img src="images/poi.png" />
                    <span></span>
                  </div>

                  <strong>
                    Diana Pink <img src="images/IMG_4254.png" />
                  </strong>
                </div> */}
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
              <div
                className="full-gol-comment"
                // data-bs-toggle="modal"
                // data-bs-target="#chatModal"
              >
                {userRecipes?.map((user, index) => (
                  user.recipe.length > 0 && (
                <div className="full-gol-comment-box" key={index}>
                  <div className="full-gol-comment-box-name">
                    <div className="sidebar_follow">
                      <div className="sidebar_follow-img">
                        <span>
                          <img src="images/pop.png" />
                        </span>
                      </div>
                      <div className="sidebar_followr-name">
                        <label>Posted by</label>
                        <strong>
                         {user?.username} <img src="images/IMG_4254.png" />
                        </strong>
                        <small>Healthy meals.</small>
                      </div>
                    </div>
                  </div>
                  <div className="full-gol-comment-deato">
                      <h2>Uploaded New Recipes </h2>
                      {user?.recipe?.map((recipe, index) => {
                        return (
                          <div className="comment-boxs" key={index}>
                            <div className="comment-boxsimg">
                              <img src={`${recipe.media}`} />{" "}
                            </div>
                            <div className="Tenderloin">
                              <h3>{recipe?.title}</h3>
                              <ul>
                                <li>
                                  <img src="images/star.png" />
                                </li>
                                <li>
                                  <img src="images/star.png" />
                                </li>
                                <li>
                                  <img src="images/star.png" />
                                </li>
                                <li>
                                  <img src="images/star.png" />
                                </li>
                                <li>
                                  <img src="images/star.png" />
                                </li>
                              </ul>
                              <span>{`${recipe.prep_time} | ${recipe.serves}`}</span>
                            </div>
                          </div>
                        )
                      })}
                    {/* <div className="comment-boxs">
                      <div className="comment-boxsimg">
                        <img src="images/PLACEHERE.png" />{" "}
                      </div>

                      <div className="Tenderloin">
                        <h3>Beef Tenderloin Steak</h3>
                        <ul>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                        </ul>
                        <span>30 Mins | 1 Serving</span>
                      </div>
                    </div>
                    <div className="comment-boxs">
                      <div className="comment-boxsimg">
                        <img src="images/PLACEHERE.png" />{" "}
                      </div>
                      <div className="bol-videos">
                        <label>
                          <img src="images/Documentary.png" for="Documentary" />
                          <input type="file" id="Documentary" />
                        </label>
                      </div>
                      <div className="Tenderloin">
                        <h3>Beef Tenderloin Steak</h3>
                        <ul>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                        </ul>
                        <span>30 Mins | 1 Serving</span>
                      </div>
                    </div> */}
                  </div>

                  <div className="comment-share">
                    <ul>
                      <li>
                        <a href="">
                          <img src="images/Path65.png" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="images/HeartFire.png" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="images/share-2.png" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="comment-text">
                    <p>
                      27,411 views <span>Liked by</span> yanna_summer{" "}
                      <span>and</span> 1K more
                    </p>

                    <ul>
                      <li>View all 52 Comments</li>
                      <li>
                        {" "}
                        <img src="images/HeartFire.png" /> 1k Likes
                      </li>
                      <li>
                        {" "}
                        <img src="images/share-2.png" /> 110 Shares
                      </li>
                    </ul>
                  </div>
                  <div className="comment-text-box">
                    <div className="comment-text-box-button">
                      <button>
                        <img src="images/Path65.png" />
                      </button>
                    </div>
                    <div className="comment-text-area">
                      <textarea>Add a comment....</textarea>
                    </div>
                    <div className="comment-text-emoji">
                      <ul>
                        <li>
                          <a href="">
                            <img src="images/HeartFire.png" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <img src="images/DroolingFace.png" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                    <div className="ago-coment">6 hours ago</div>
                    
                  </div>
                  )
                  ))}
              </div>
              {/* <div className="full-gol-comment">
                <div className="full-gol-comment-box">
                  <div className="full-gol-comment-box-name">
                    <div className="sidebar_follow">
                      <div className="sidebar_follow-img">
                        <span>
                          <img src="images/pop.png" />
                        </span>
                      </div>

                      <div className="sidebar_followr-name">
                        <label>Posted by</label>
                        <strong>
                          Diana Pink <img src="images/IMG_4254.png" />
                        </strong>
                        <small>Healthy meals.</small>
                      </div>
                    </div>
                  </div>
                  <div className="full-gol-comment-deato">
                    <h2>Uploaded New Recipes </h2>
                    <div className="comment-boxs">
                      <div className="comment-boxsimg">
                        <img src="images/PLACEHERE.png" />{" "}
                      </div>

                      <div className="Tenderloin">
                        <h3>Beef Tenderloin Steak</h3>
                        <ul>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                        </ul>
                        <span>30 Mins | 1 Serving</span>
                      </div>
                    </div>
                    <div className="comment-boxs">
                      <div className="comment-boxsimg">
                        <img src="images/PLACEHERE.png" />{" "}
                      </div>

                      <div className="Tenderloin">
                        <h3>Beef Tenderloin Steak</h3>
                        <ul>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                        </ul>
                        <span>30 Mins | 1 Serving</span>
                      </div>
                    </div>
                    <div className="comment-boxs">
                      <div className="comment-boxsimg">
                        <img src="images/PLACEHERE.png" />{" "}
                      </div>
                      <div className="bol-videos">
                        <label>
                          <img src="images/Documentary.png" for="Documentary" />
                          <input type="file" id="Documentary" />
                        </label>
                      </div>
                      <div className="Tenderloin">
                        <h3>Beef Tenderloin Steak</h3>
                        <ul>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                        </ul>
                        <span>30 Mins | 1 Serving</span>
                      </div>
                    </div>
                  </div>

                  <div className="comment-share">
                    <ul>
                      <li>
                        <a href="">
                          <img src="images/Path65.png" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="images/HeartFire.png" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="images/share-2.png" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="comment-text">
                    <p>
                      27,411 views <span>Liked by</span> yanna_summer{" "}
                      <span>and</span> 1K more
                    </p>

                    <ul>
                      <li>View all 52 Comments</li>
                      <li>
                        {" "}
                        <img src="images/HeartFire.png" /> 1k Likes
                      </li>
                      <li>
                        {" "}
                        <img src="images/share-2.png" /> 110 Shares
                      </li>
                    </ul>
                  </div>
                  <div className="comment-text-box">
                    <div className="comment-text-box-button">
                      <button>
                        <img src="images/Path65.png" />
                      </button>
                    </div>
                    <div className="comment-text-area">
                      <textarea>Add a comment....</textarea>
                    </div>
                    <div className="comment-text-emoji">
                      <ul>
                        <li>
                          <a href="">
                            <img src="images/HeartFire.png" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <img src="images/DroolingFace.png" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="ago-coment">6 hours ago</div>
                </div>
              </div>
              <div className="full-gol-comment">
                <div className="full-gol-comment-box">
                  <div className="full-gol-comment-box-name">
                    <div className="sidebar_follow">
                      <div className="sidebar_follow-img">
                        <span>
                          <img src="images/pop.png" />
                        </span>
                      </div>

                      <div className="sidebar_followr-name">
                        <label>Posted by</label>
                        <strong>
                          Diana Pink <img src="images/IMG_4254.png" />
                        </strong>
                        <small>Healthy meals.</small>
                      </div>
                    </div>
                  </div>
                  <div className="full-gol-comment-deato">
                    <h2>Uploaded New Recipes </h2>
                    <div className="comment-boxs">
                      <div className="comment-boxsimg">
                        <img src="images/PLACEHERE.png" />{" "}
                      </div>

                      <div className="Tenderloin">
                        <h3>Beef Tenderloin Steak</h3>
                        <ul>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                        </ul>
                        <span>30 Mins | 1 Serving</span>
                      </div>
                    </div>
                    <div className="comment-boxs">
                      <div className="comment-boxsimg">
                        <img src="images/PLACEHERE.png" />{" "}
                      </div>

                      <div className="Tenderloin">
                        <h3>Beef Tenderloin Steak</h3>
                        <ul>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                        </ul>
                        <span>30 Mins | 1 Serving</span>
                      </div>
                    </div>
                    <div className="comment-boxs">
                      <div className="comment-boxsimg">
                        <img src="images/PLACEHERE.png" />{" "}
                      </div>
                      <div className="bol-videos">
                        <label>
                          <img src="images/Documentary.png" for="Documentary" />
                          <input type="file" id="Documentary" />
                        </label>
                      </div>
                      <div className="Tenderloin">
                        <h3>Beef Tenderloin Steak</h3>
                        <ul>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                        </ul>
                        <span>30 Mins | 1 Serving</span>
                      </div>
                    </div>
                  </div>

                  <div className="comment-share">
                    <ul>
                      <li>
                        <a href="">
                          <img src="images/Path65.png" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="images/HeartFire.png" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="images/share-2.png" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="comment-text">
                    <p>
                      27,411 views <span>Liked by</span> yanna_summer{" "}
                      <span>and</span> 1K more
                    </p>

                    <ul>
                      <li>View all 52 Comments</li>
                      <li>
                        {" "}
                        <img src="images/HeartFire.png" /> 1k Likes
                      </li>
                      <li>
                        {" "}
                        <img src="images/share-2.png" /> 110 Shares
                      </li>
                    </ul>
                  </div>
                  <div className="comment-text-box">
                    <div className="comment-text-box-button">
                      <button>
                        <img src="images/Path65.png" />
                      </button>
                    </div>
                    <div className="comment-text-area">
                      <textarea>Add a comment....</textarea>
                    </div>
                    <div className="comment-text-emoji">
                      <ul>
                        <li>
                          <a href="">
                            <img src="images/HeartFire.png" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <img src="images/DroolingFace.png" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="ago-coment">6 hours ago</div>
                </div>
              </div>
              <div className="full-gol-comment">
                <div className="full-gol-comment-box">
                  <div className="full-gol-comment-box-name">
                    <div className="sidebar_follow">
                      <div className="sidebar_follow-img">
                        <span>
                          <img src="images/pop.png" />
                        </span>
                      </div>

                      <div className="sidebar_followr-name">
                        <label>Posted by</label>
                        <strong>
                          Diana Pink <img src="images/IMG_4254.png" />
                        </strong>
                        <small>Healthy meals.</small>
                      </div>
                    </div>
                  </div>
                  <div className="full-gol-comment-deato">
                    <h2>Uploaded New Recipes </h2>
                    <div className="comment-boxs">
                      <div className="comment-boxsimg">
                        <img src="images/PLACEHERE.png" />{" "}
                      </div>

                      <div className="Tenderloin">
                        <h3>Beef Tenderloin Steak</h3>
                        <ul>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                        </ul>
                        <span>30 Mins | 1 Serving</span>
                      </div>
                    </div>
                    <div className="comment-boxs">
                      <div className="comment-boxsimg">
                        <img src="images/PLACEHERE.png" />{" "}
                      </div>

                      <div className="Tenderloin">
                        <h3>Beef Tenderloin Steak</h3>
                        <ul>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                        </ul>
                        <span>30 Mins | 1 Serving</span>
                      </div>
                    </div>
                    <div className="comment-boxs">
                      <div className="comment-boxsimg">
                        <img src="images/PLACEHERE.png" />{" "}
                      </div>
                      <div className="bol-videos">
                        <label>
                          <img src="images/Documentary.png" for="Documentary" />
                          <input type="file" id="Documentary" />
                        </label>
                      </div>
                      <div className="Tenderloin">
                        <h3>Beef Tenderloin Steak</h3>
                        <ul>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                          <li>
                            <img src="images/star.png" />
                          </li>
                        </ul>
                        <span>30 Mins | 1 Serving</span>
                      </div>
                    </div>
                  </div>

                  <div className="comment-share">
                    <ul>
                      <li>
                        <a href="">
                          <img src="images/Path65.png" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="images/HeartFire.png" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="images/share-2.png" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="comment-text">
                    <p>
                      27,411 views <span>Liked by</span> yanna_summer{" "}
                      <span>and</span> 1K more
                    </p>

                    <ul>
                      <li>View all 52 Comments</li>
                      <li>
                        {" "}
                        <img src="images/HeartFire.png" /> 1k Likes
                      </li>
                      <li>
                        {" "}
                        <img src="images/share-2.png" /> 110 Shares
                      </li>
                    </ul>
                  </div>
                  <div className="comment-text-box">
                    <div className="comment-text-box-button">
                      <button>
                        <img src="images/Path65.png" />
                      </button>
                    </div>
                    <div className="comment-text-area">
                      <textarea>Add a comment....</textarea>
                    </div>
                    <div className="comment-text-emoji">
                      <ul>
                        <li>
                          <a href="">
                            <img src="images/HeartFire.png" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <img src="images/DroolingFace.png" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="ago-coment">6 hours ago</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* <!--- Chat modal --------> */}

        <div
          className="modal fade"
          id="chatModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-body">
                <div className="full-gol-comment">
                  <div className="full-gol-comment-box">
                    <div className="full-gol-comment-box-name">
                      <div className="sidebar_follow">
                        <div className="sidebar_follow-img">
                          <span>
                            <img src="images/pop.png" />
                          </span>
                        </div>

                        <div className="sidebar_followr-name">
                          <label>Posted by</label>
                          <strong>
                            Diana Pink <img src="images/IMG_4254.png" />
                          </strong>
                          <small>Healthy meals.</small>
                        </div>
                      </div>
                    </div>
                    <div className="full-gol-comment-deato">
                      <div className="ttst">
                        <img src="images/langing_bg.png" />
                        <div className="popup-ttst">
                          <small>2 days ago</small>
                          <span>My breakfast was amazing!</span>
                        </div>
                      </div>
                    </div>

                    <div className="comment-share">
                      <ul>
                        <li>
                          <a href="">
                            <img src="images/Path65.png" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <img src="images/HeartFire.png" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <img src="images/share-2.png" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="comment-text">
                      <p>
                        27,411 views <span>Liked by</span> yanna_summer{" "}
                        <span>and</span> 1K more
                      </p>

                      <ul>
                        <li>View all 52 Comments</li>
                        <li>
                          {" "}
                          <img src="images/HeartFire.png" /> 1k Likes
                        </li>
                        <li>
                          {" "}
                          <img src="images/share-2.png" /> 110 Shares
                        </li>
                      </ul>
                    </div>
                    <div className="comment-client-box">
                      <div className="client-box">
                        <div className="true-cat">
                          <a href="" data-bs-toggle="dropdown">
                            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                          </a>
                          <div
                            className="dropdown-menu stn-dot prime-client"
                            aria-labelledby="dropdownMenuClickableInside"
                          >
                            <ul>
                              <li>
                                <a href="#">Reply</a>
                              </li>
                              <li>
                                <a href="#">Copy</a>
                              </li>
                              <li>
                                <a href="#">Report comment</a>
                              </li>
                              <li>
                                <a href="#">Hide</a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#examplprime"
                                >
                                  Lock comment <img src="images/password.png" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="client-box-view">
                          <div className="client-box-img">
                            <span>
                              <img src="images/pop.png" />
                            </span>
                          </div>
                          <div className="client-boxmsg">
                            <h3>
                              Avanua <img src="images/IMG_4254.png" />
                            </h3>
                            <div className="chat-msgs color-blue">
                              Can you cook that for mee
                            </div>
                            <div className="rpylymgs">
                              Reply{" "}
                              <span>
                                <img src="images/Vector-11.png" /> 7{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="Repliesview">
                          ............... <a href="">View 8 Replies</a>
                        </div>
                      </div>

                      <div className="client-box">
                        <div className="true-cat">
                          <span data-bs-toggle="dropdown">
                            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                          </span>
                          <div className="dropdown-menu stn-dot">
                            <ul>
                              <li>
                                <a href="#">Reply</a>
                              </li>
                              <li>
                                <a href="#">Copy</a>
                              </li>
                              <li>
                                <a href="#">Report comment</a>
                              </li>
                              <li>
                                <a href="#">Hide</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="client-box-view">
                          <div className="client-box-img">
                            <span>
                              <img src="images/pop.png" />
                            </span>
                          </div>
                          <div className="client-boxmsg">
                            <h3>Avanua </h3>
                            <div className="chat-msgs">
                              Can you cook that for mee
                            </div>
                            <div className="rpylymgs">
                              <a href="">
                                <img src="images/translate.png" />
                              </a>
                              Reply
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="client-box">
                        <div className="client-box-view">
                          <div className="client-box-img">
                            <span>
                              <img src="images/pop.png" />
                            </span>
                          </div>
                          <div className="client-boxmsg cmt-lock">
                            <div className="cmt-lock-img">
                              <img src="images/password.png" />
                            </div>
                            <div className="chat-LOCKED ">
                              Comment is LOCKED by creator only <br />
                              <span>Authorized</span> users can view
                            </div>
                            <div className="viewRequest">
                              <a href="">
                                <img src="images/Maskgroup-31.png" />{" "}
                                <small>*Request to view!*</small>
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comment-text-box modalcoment">
                      <div className="client-box-img">
                        <span>
                          <img src="images/pop.png" />
                        </span>
                      </div>
                      <div className="comment-text-box-button">
                        <button>
                          <img src="images/Path65.png" />
                        </button>
                      </div>
                      <div className="comment-text-area">
                        <textarea>Add a comment....</textarea>
                        <button className="send-comt">
                          <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        </button>
                      </div>
                      <div className="comment-text-emoji">
                        <ul>
                          <li>
                            <input type="file" id="media" />
                            <label for="media">
                              <img src="images/media.png" />
                            </label>
                          </li>
                          <li>
                            <input type="file" id="gif" />
                            <label for="gif">
                              <img src="images/gif.png" />
                            </label>
                          </li>
                          <li>
                            <input type="file" id="poll" />
                            <label for="poll">
                              <img src="images/poll.png" />
                            </label>
                          </li>
                          <li>
                            <input type="file" id="recipe" />
                            <label for="recipe">
                              <img src="images/recipe-2.png" />
                            </label>
                          </li>

                          <li>
                            <div>
                              <span data-bs-toggle="dropdown">
                                <img src="images/settings-2.png" />
                              </span>
                              <div className="dropdown-menu Reply-nal">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <span>
                                        <img src="images/Group-2.png" />
                                      </span>
                                      Font{" "}
                                      <small>
                                        lato{" "}
                                        <i
                                          className="fa fa-chevron-down"
                                          aria-hidden="true"
                                        ></i>
                                      </small>
                                    </a>{" "}
                                  </li>
                                  <li>
                                    <a href="#">
                                      <span>
                                        <img src="images/Vector-12.png" />
                                      </span>
                                      Font{" "}
                                      <small>
                                        12{" "}
                                        <i
                                          className="fa fa-arrows-v"
                                          aria-hidden="true"
                                        ></i>
                                      </small>
                                    </a>{" "}
                                  </li>
                                  <li>
                                    <a href="#">
                                      <span>
                                        <img src="images/Vector-13.png" />
                                      </span>
                                      Font color{" "}
                                      <small>
                                        {" "}
                                        <input
                                          type="color"
                                          id="favcolor"
                                          name="favcolor"
                                          value="#ff0000"
                                        />
                                      </small>
                                    </a>{" "}
                                  </li>
                                  <li>
                                    <a href="#">
                                      <span>
                                        <img src="images/Mask group-32.png" />
                                      </span>
                                      Lock Comment
                                    </a>{" "}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li>
                            <a href="">
                              <img src="images/DroolingFace.png" />
                            </a>
                          </li>
                        </ul>
                      </div>
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

export default MemberFeed;
