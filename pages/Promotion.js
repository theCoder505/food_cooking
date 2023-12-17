import Head from "next/head";
import Layout from "@/components/Layout";
import SidebarComponent from "@/components/headers/SidebarComponent";

const Promotion = () => {
    return (
        <>
            <Head>
                <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
                <script type="text/javascript">
                    {/* // Load google charts */}
                    {/* { google.charts.load('current', { 'packages': ['corechart'] })}
                    {google.charts.setOnLoadCallback(drawChart)} */}

                    {
                        // Draw the chart and set the chart values
                        // function drawChart() {
                        //     var data = google.visualization.arrayToDataTable([
                        //         ['Task', 'Hours per Day'],
                        //         ['Male', 30],
                        //         ['Female', 70]
                        //     ]);

                        //     // Optional; add a title and set the width and height of the chart
                        //     var options = { 'width': 550, 'height': 400, };

                        //     // Display the chart inside the <div> element with id="piechart"
                        //     var chart = new google.visualization.PieChart(document.getElementById('piechart'));
                        //     chart.draw(data, options);
                        // }
                    }
                </script>
            </Head>
            <Layout>
                <div className="main_width">
                    <div className="container-fluid">
                        <div className="foodsstore">
                            <h3>Promotion</h3>
                        </div>
                        <div className="page_fliter">
                            <div className="page_fliter_width">
                                <div className="page_fliter_search">
                                    <div className="page_fliter_select">
                                        <select>
                                            <option>All Cate.. </option>

                                        </select>
                                    </div>
                                    <div className="page_fliter_input">
                                        <input type="text" placeholder="Search your videos to promote" />
                                        <button><i className="fa fa-search" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="full-Recipe-Food">
                            <div className="container">
                                <div className="full-Weekly-heading">
                                    <h2>All Recipe’s</h2>

                                </div>
                                <div className="row">
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="full-page-member-block">
                                            <div className="full-page-member-product">
                                                <img src="images/Group208.png" />
                                                <h5>Promote</h5>
                                            </div>
                                            <div className="full-page-member-data">
                                                <div className="full-page-member-img">
                                                    <span><img src="images/pop.png" />
                                                    </span>
                                                </div>

                                                <div className="full-page-member-name">
                                                    <strong>Diana Pink <img src="images/IMG_4254.png" /></strong>
                                                    <small><br /></small>
                                                    <label>Thai Basil Tofu Stir Fry</label>
                                                </div>
                                                <div className="full-page-start">

                                                    <span><img src="images/star.png" /> 4.1</span>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="full-page-member-block">
                                            <div className="full-page-member-product">
                                                <img src="images/Group208.png" />
                                                <h5>Promote</h5>
                                            </div>
                                            <div className="full-page-member-data">
                                                <div className="full-page-member-img">
                                                    <span><img src="images/pop.png" />
                                                    </span>
                                                </div>

                                                <div className="full-page-member-name">
                                                    <strong>Diana Pink <img src="images/IMG_4254.png" /></strong>
                                                    <small><br /></small>
                                                    <label>Thai Basil Tofu Stir Fry</label>
                                                </div>
                                                <div className="full-page-start">

                                                    <span><img src="images/star.png" /> 4.1</span>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="full-page-member-block">
                                            <div className="full-page-member-product">
                                                <img src="images/Group208.png" />
                                                <h5>Promote</h5>
                                            </div>
                                            <div className="full-page-member-data">
                                                <div className="full-page-member-img">
                                                    <span><img src="images/pop.png" />
                                                    </span>
                                                </div>

                                                <div className="full-page-member-name">
                                                    <strong>Diana Pink <img src="images/IMG_4254.png" /></strong>
                                                    <small><br /></small>
                                                    <label>Thai Basil Tofu Stir Fry</label>
                                                </div>
                                                <div className="full-page-start">

                                                    <span><img src="images/star.png" /> 4.1</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="full-page-member-block">
                                            <div className="full-page-member-product">
                                                <img src="images/Group208.png" />
                                                <h5>Promote</h5>
                                            </div>
                                            <div className="full-page-member-data">
                                                <div className="full-page-member-img">
                                                    <span><img src="images/pop.png" />
                                                    </span>
                                                </div>

                                                <div className="full-page-member-name">
                                                    <strong>Diana Pink <img src="images/IMG_4254.png" /></strong>
                                                    <small><br /></small>
                                                    <label>Thai Basil Tofu Stir Fry</label>
                                                </div>
                                                <div className="full-page-start">
                                                    <span><img src="images/star.png" /> 4.1</span>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
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
                                            <span><img src="images/pop.png" />
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
                                            <span><img src="images/pop.png" />
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
                                            <span><img src="images/pop.png" />
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
                                            <span><img src="images/pop.png" />
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
                                            <span><img src="images/pop.png" />
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
                                                <span><img src="images/Group836.png" />
                                                </span>
                                            </div>

                                            <div className="sidebar-Recipes-name">
                                                <strong>Thai Basil Tofu Stir Fry</strong>
                                                <small>350 Calories</small>
                                            </div>
                                        </div>
                                        <div className="sidebar-Recipes_box">
                                            <div className="sidebar-Recipes-img">
                                                <span><img src="images/Group836.png" />
                                                </span>
                                            </div>

                                            <div className="sidebar-Recipes-name">
                                                <strong>Thai Basil Tofu Stir Fry</strong>
                                                <small>350 Calories</small>
                                            </div>
                                        </div>
                                        <div className="sidebar-Recipes_box">
                                            <div className="sidebar-Recipes-img">
                                                <span><img src="images/Group836.png" />
                                                </span>
                                            </div>

                                            <div className="sidebar-Recipes-name">
                                                <strong>Thai Basil Tofu Stir Fry</strong>
                                                <div className="sidebar-Recipes-name_follow">
                                                    <div className="sidebar-Recipes-name_follow-img">
                                                        <span><img src="images/pop.png" />
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
                                                <span><img src="images/Group836.png" />
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
                                            <div className="sidebar-Recipes-img">

                                            </div>

                                            <div className="sidebar-Recipes-name">
                                                <strong># holiday cooking</strong>

                                            </div>
                                        </div>

                                        <div className="sidebar-Recipes_box">
                                            <div className="sidebar-Recipes-img">

                                            </div>

                                            <div className="sidebar-Recipes-name">
                                                <strong># left over rice recipe</strong>

                                            </div>
                                        </div>

                                        <div className="sidebar-Recipes_box">
                                            <div className="sidebar-Recipes-img">

                                            </div>

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
                            <div className="follow-list-April">
                                <div className="follow-list-April-bar">
                                    <h3>April 7 - April 10</h3>
                                    <ul>
                                        <li><span>Coins spent</span><small><img src="images/coin3.png" />0</small></li>
                                        <li><span>Video views</span><small>0</small></li>
                                        <li><span>Link clicks</span><small>0</small></li>
                                        <li><span>Likes</span><small>0</small></li>
                                    </ul>
                                </div>
                            </div>


                            <div className="full-page-videorecpi">
                                <div className="videorecpi-list">
                                    <ul>
                                        <li><input type="radio" id="views" name="views" /> <label for="views">I want more video/recipe views</label>
                                        </li>
                                        <li><input type="radio" id="want" name="views" /> <label for="want">I want more website visits</label></li>
                                        <li><input type="radio" id="followersw" name="views" /> <label for="followersw">I want more
                                            followers</label></li>

                                    </ul>
                                    <ul>
                                        <li><input type="radio" id="Auto" name="auto" /> <label for="Auto">Auto (A.C.C. auto selects for
                                            you)</label></li>

                                        <li><input type="radio" id="Custom" name="auto" /> <label for="Custom">Custom</label></li>

                                    </ul>
                                </div>
                            </div>


                            <div className="full-page-Gender">
                                <div className="full-page-Gender-list">
                                    <div className="full-page-Gender-box">
                                        <h4>Gender</h4>
                                        <ul>
                                            <li><button className="kee">All</button></li>
                                            <li><button>Female</button></li>
                                            <li><button>Male</button></li>
                                        </ul>

                                    </div>
                                    <div className="full-page-Gender-box">
                                        <h4>Gender</h4>
                                        <ul>
                                            <li><button className="kee">All</button></li>
                                            <li><button>13-17</button></li>
                                            <li><button>18-24</button></li>
                                            <li><button>25-34</button></li>
                                            <li><button>35-44</button></li>
                                            <li><button>45-54</button></li>
                                            <li><button>55+</button></li>
                                        </ul>

                                    </div>
                                    <div className="full-all-box">
                                        <div className="full-der-box">
                                            <h4>Interest</h4>
                                            <ul>
                                                <li><button>All</button></li>
                                                <li><button>Medicinal</button></li>
                                                <li><button>Breakfast</button></li>
                                                <li><button>Lunch</button></li>
                                                <li><button>Shakes</button></li>
                                                <li><button>Dinner</button></li>
                                                <li><button>Specialties</button></li>
                                                <li><button>Drinks</button></li>
                                                <li><button>Healthy Food</button></li>
                                                <li><button>Potluck </button></li>
                                                <li><button>Seasoning</button></li>
                                                <li><button>Fermenting</button></li>
                                                <li><button>Sushi</button></li>
                                                <li><button>Sauce</button></li>
                                                <li><button>Food Hack </button></li>
                                                <li><button>Appliance</button></li>
                                                <li><button>Vegan</button></li>
                                                <li><button>Desert</button></li>
                                                <li><button>Copy Cat</button></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className="full-Copy">
                                    <div className="full-coin">
                                        <h4>3,000 Coins spent over 3days</h4>
                                        <p>Est. total cost</p>

                                        <h4>2,788 +</h4>
                                        <p>Est. Recipe/Video views</p>
                                    </div>

                                    <div className="full-spent">
                                        <h4>Budget</h4>
                                        <span><img src="images/coin3.png" /> 1,000 Per day</span>
                                        <input type="range" min="1" max="100" value="50" className="sliderbal" id="myRange" />

                                        <h4>Duration</h4>
                                        <span>3 day</span>
                                        <input type="range" min="1" max="100" value="50" className="sliderbal" id="myRange" />

                                    </div>
                                    <div className="text-center">
                                        <button className="StaPromort">Start Promo</button>
                                    </div>

                                </div>
                                <div className="full-CStatsopy">
                                    <div className="full-ProCStatsopymo">
                                        <h4>Promo Stats</h4>
                                        <h3>Analytics</h3>
                                        <ul>
                                            <li>Video Views <span>30,000</span></li>
                                            <li>New Followers <span> 6,211</span></li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="full-New">
                                    <ul>
                                        <li><span><img src="images/fave.png" /></span> <small>1400</small></li>
                                        <li><span><img src="images/bucket.png" /></span> <small>300</small></li>
                                        <li><span><img src="images/mealplanner.png" /></span> <small>200</small></li>
                                        <li><span><img src="images/like.png" /></span> <small>100</small></li>


                                    </ul>
                                </div>

                                <div className="full-fave">
                                    <div className="full-Estimated">
                                        <h3>Estimated Video Views</h3>
                                        <ul className="faveon">
                                            <li><span>Goal</span> <small>More Followers</small></li>
                                            <li><span>Budget & Duration</span> <small><img src="images/coin3.png" /> 3,000 | 3 Days</small></li>
                                            <li><span>Promo Target</span> <small>Auto A.C.C. </small></li>
                                        </ul>
                                        <ul className="favtwo">

                                            <li>Subtotal <span> 3,000</span></li>
                                            <li>Offers <span>None</span></li>
                                            <li>Pay with <span>3,000</span></li>

                                        </ul>
                                    </div>
                                </div>

                                <div className="full-Target">
                                    <div className="full-Targetpo">
                                        <div className="full-Tar">
                                            <h3>Gender</h3>
                                            <div id="piechart"></div>


                                            <ul>
                                                <li><span>30%</span>
                                                    Male</li>
                                                <li><span>70%</span>
                                                    Female</li>
                                            </ul>
                                        </div>
                                        <div className="full-Tar">
                                            <h3>AGE</h3>

                                            <ul className="full-po">
                                                <li>13-17 <span className="width-10"> </span></li>

                                                <li>18-24 <span className="width-20"> </span></li>
                                                <li>25-34 <span className="width-30"> </span></li>
                                                <li>35-44 <span className="width-50"> </span></li>
                                                <li>45-54<span className="width-40"> </span></li>
                                                <li>55+ <span className="width-5"> </span></li>

                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <div className="full-col-lg">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-3">
                                            <div className="full-page-member-block">
                                                <div className="full-page-member-product">
                                                    <img src="images/Group208.png" />
                                                    <h5>Promote</h5>
                                                </div>
                                                <div className="full-page-member-data">

                                                    <div className="full-page-member-name">

                                                        <small><br /></small>
                                                        <label>Thai Basil Tofu Stir Fry</label>
                                                    </div>
                                                    <div className="full-page-start">

                                                        <span><img src="images/star.png" /> 4.1</span>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-6">
                                            <div className="Previouspoi">
                                                <h3>Previous promos</h3>
                                                <ul>
                                                    <li>Duration <span>April 10, 2023 - April 13, 20236</span></li>
                                                    <li>Amount spent <span><img src="images/coin3.png" /> 3,000/3,000</span></li>
                                                    <li>Video/Recipe views <span>7.4k</span></li>
                                                    <li>New followers <span>875</span></li>
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
}

export default Promotion;