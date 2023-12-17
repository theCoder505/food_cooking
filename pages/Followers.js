import Head from "next/head";
import Layout from "@/components/Layout";
import SidebarComponent from "@/components/headers/SidebarComponent";

const Followers = () => {
    return (
        <>
            <Head>
                <script type="text/javascript">
                    {
                        function incrementValue(e) {
                            e.preventDefault();
                            var fieldName = $(e.target).data('field');
                            var parent = $(e.target).closest('div');
                            var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

                            if (!isNaN(currentVal)) {
                                parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
                            } else {
                                parent.find('input[name=' + fieldName + ']').val(0);
                            }
                        }
                    }
                    {function decrementValue(e) {
                        e.preventDefault();
                        var fieldName = $(e.target).data('field');
                        var parent = $(e.target).closest('div');
                        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

                        if (!isNaN(currentVal) && currentVal > 0) {
                            parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
                        } else {
                            parent.find('input[name=' + fieldName + ']').val(0);
                        }
                    }
                    }
                    {/* {$('.input-group').on('click', '.button-plus', function (e) {
                        incrementValue(e);
                    })
                    }
                    {$('.input-group').on('click', '.button-minus', function (e) {
                        decrementValue(e)
                    })
                    } */}
                </script>
            </Head>
            <Layout>
                <div className="main_width">
                    <div className="container-fluid">

                        <div className="recipeheadind">
                            <div className="row">

                                <h3>18 Following</h3>
                                <div className="Following-rae">
                                    <button><i className="fa fa-search" aria-hidden="true"></i></button>
                                    <input type="text" name="" placeholder="Search" />
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
                            <div className="follow-list-full">
                                <div className="sidebar_follow-list">
                                    <div className="sidebar_follow">
                                        <div className="sidebar_follow-img">
                                            <span><img src="images/pop.png" />
                                            </span>
                                        </div>

                                        <div className="sidebar_followr-name">
                                            <strong>Diana Pink</strong>
                                            <small>4 mutuals</small>
                                        </div>
                                    </div>
                                    <div className="sidebar-follow_plus">
                                        <a href=""> Follow</a>
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
                                            <small>4 mutuals</small>
                                        </div>
                                    </div>
                                    <div className="sidebar-follow_plus">
                                        <a href=""> Follow</a>
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
                                            <small>4 mutuals</small>
                                        </div>
                                    </div>
                                    <div className="sidebar-follow_plus">
                                        <a href=""> Follow</a>
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
                                            <small>4 mutuals</small>
                                        </div>
                                    </div>
                                    <div className="sidebar-follow_plus">
                                        <a href=""> Follow</a>
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
                                            <small>4 mutuals</small>
                                        </div>
                                    </div>
                                    <div className="sidebar-follow_plus">
                                        <a href=""> Follow</a>
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

export default Followers;