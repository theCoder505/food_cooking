import Link from "next/link";
import Layout from "@/components/Layout";

const FoodStore = () => {
    return (
        <>
            <Layout>
                <div className="main_width">
                    <div className="container-fluid">
                        <div className="foodsstore">
                            <img src="images/basket.png" />
                            <h3>Food Storage</h3>
                        </div>
                        <div className="foodsstore-search">
                            <div className="ore-search">
                                <span>Add </span>
                                <input type="text" name="" placeholder="search" />
                            </div>
                            <div className="har-3"><img src="images/Share-3.png" /></div>
                        </div>


                        <div className="foodscanbr">
                            <div className="foodscanbr-bar">
                                <ul>
                                    <li><strong data-bs-toggle="dropdown" data-bs-auto-close="outside">Find Recipe’s based off Food Storage <img
                                        src="images/basket.png" /></strong>
                                        <div className="dropdown-menu dropRecipe-op">
                                            <div className="dropRecipe">
                                                <h5> <span></span> Bread/Pasta/Grain</h5>
                                                <ul>
                                                    <li><span><img src="images/icons8-kawaii-rice-3.png" /></span> </li>
                                                    <li><strong>Rice</strong> </li>
                                                    <li><small>bought: 10/11/2021 <img src="images/Maskoup-28.png" /></small> </li>
                                                </ul>
                                            </div>
                                            <div className="dropRecipe">
                                                <h5> <span></span> Baking</h5>
                                                <ul>
                                                    <li><span><img src="images/icons8-flour-51.png" /></span> </li>
                                                    <li><strong> Flour</strong> </li>
                                                    <li><small>bought: 10/11/2021 <img src="images/Maskoup-28.png" /></small> </li>
                                                </ul>
                                            </div>
                                            <div className="dropRecipe">
                                                <h5> <span></span> Meat/Protein </h5>
                                                <ul>
                                                    <li><span><img src="images/Chicken.png" /></span> </li>
                                                    <li><strong>Chicken</strong> </li>
                                                    <li><small>bought: 10/11/2021 <img src="images/Maskoup-28.png" /></small> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li><strong data-bs-toggle="dropdown" data-bs-auto-close="outside"> View Grocery List <img
                                        src="images/Maskoup-28.png" /></strong>

                                        <div className="dropdown-menu dropRecipe-op">
                                            <div className="dropRecipe">
                                                <h5> <span></span> Produce/Vegtibles</h5>
                                            </div>
                                            <div className="dropRecipe">
                                                <h5> <span></span> Canned goods </h5>
                                            </div>
                                            <div className="dropRecipe">
                                                <h5> <span></span> Dairy</h5>
                                            </div>
                                            <div className="dropRecipe">
                                                <h5> <span></span> Herbs</h5>
                                            </div>
                                            <div className="dropRecipe">
                                                <h5> <span></span> Spices</h5>
                                            </div>


                                        </div>


                                    </li>
                                    <li><small><img src="images/MaskGroup-29.png" /> Scan Receipt</small></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footstore-man">
                    <div className="full-page-sidebar">
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
                            <div className="full-sidebar-Premium">Premium <span><img src="images/Subscriptionicon.png" /></span> ubscription
                                <span><img src="images/crown.png" /></span></div>

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
                                        <Link href="#">Meal Planner</Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            +Saved Fav Recipe’s
                                            <span>
                                                <img src="images/MaskGroup-2.png" />
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>


                            <div className="full-sidebar-box">
                                <h3>Goals/Pref</h3>
                                <ul>
                                    <li><a href="">Weight loss</a></li>
                                    <li><a href=""><span className="images-po"><img src="images/Cancel.png" /></span> Meat</a></li>
                                    <li><a href=""><span className="images-po"><img src="images/Cancel.png" /></span> Carbs</a></li>
                                    <li><a href=""><span className="images-po"><img src="images/NoEntry.png" /></span> Milk</a></li>
                                    <li><a href="">1,100 Daily Calories</a></li>
                                </ul>
                            </div>


                            <div className="full-sidebar-box">
                                <h3>Settings</h3>
                                <ul>
                                    <li><a href="">Account, Preference,
                                        Settings</a></li>

                                </ul>
                            </div>



                        </div>

                    </div>


                    <div className="page-centerwidth">
                        <div className="dropRecipe-op">
                            <div className="dropRecipe">
                                <h5> <span></span> Bread/Pasta/Grain</h5>
                                <ul>
                                    <li><span><img src="images/icons8-kawaii-rice-3.png" /></span> </li>
                                    <li><strong>Rice</strong> </li>
                                    <li><small>bought: 10/11/2021 <img src="images/Maskoup-28.png" /></small> </li>
                                </ul>
                            </div>
                            <div className="dropRecipe">
                                <h5> <span></span> Baking</h5>
                                <ul>
                                    <li><span><img src="images/icons8-flour-51.png" /></span> </li>
                                    <li><strong> Flour</strong> </li>
                                    <li><small>bought: 10/11/2021 <img src="images/Maskoup-28.png" /></small> </li>
                                </ul>
                            </div>
                            <div className="dropRecipe">
                                <h5> <span></span> Meat/Protein </h5>
                                <ul>
                                    <li><span><img src="images/Chicken.png" /></span> </li>
                                    <li><strong>Chicken</strong> </li>
                                    <li><small>bought: 10/11/2021 <img src="images/Maskoup-28.png" /></small> </li>
                                </ul>
                            </div>
                        </div>

                        <div className="dropRecipe-op op-full">
                            <div className="dropRecipe">
                                <h5> <span></span> Produce/Vegtibles</h5>
                            </div>
                            <div className="dropRecipe">
                                <h5> <span></span> Canned goods </h5>
                            </div>
                            <div className="dropRecipe">
                                <h5> <span></span> Dairy</h5>
                            </div>
                            <div className="dropRecipe">
                                <h5> <span></span> Herbs</h5>
                            </div>
                            <div className="dropRecipe">
                                <h5> <span></span> Spices</h5>
                            </div>


                        </div>

                    </div>

                    <div className="full-page-sidebar flo-rigt">
                        <div className="full-sidebar-data">
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

                        </div>

                    </div>


                </div>
            </Layout>
        </>
    );
}

export default FoodStore;