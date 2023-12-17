import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
const AccAffiliates = () => {
    return (
        <>
            <Layout>
                <div className="main_width">
                    <div className="container">
                        <div className="Barista-nav">
                            <ul>
                                <li><Link href="/AccLandingPage">Home</Link></li>
                                <li><Link href={""}>Explore</Link></li>
                                <li><Link href={""}>Help</Link></li>
                                <li><Link href="/Profile">Profile</Link></li>
                            </ul>
                        </div>
                        <div className="Cuisine">
                            <h2>A Chefs Cuisine</h2>
                            <h4><img src="images/star.png" />Affiliates<img src="images/star.png" /> </h4>
                        </div>
                        <div className="Cuisine-postr">
                            <div className="postr-poster"><img src="images/istockphoto.png" /></div>
                            <div className="postr-person">
                                <span><img src="images/Image.png" /></span>
                                <h3>John <img src="images/IMG_4254.png" /></h3>
                                <h4>@zhr_nurkhaula <img src="images/image343.png" /></h4>
                            </div>


                            <div className="postr-ul">
                                <ul>
                                    <li><strong>34</strong><span>Recipe’s</span></li>
                                    <li><strong>38</strong><span>Acc Premium <br />
                                        Subscription Recipe’s</span><img src="images/Locked.png" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="Cuisine-postr">
                            <div className="postr-poster"><img src="images/istockphoto.png" /></div>
                            <div className="postr-person">
                                <span><img src="images/Image.png" /></span>
                                <h3>John <img src="images/IMG_4254.png" /></h3>
                                <h4>@zhr_nurkhaula <img src="images/image343.png" /></h4>
                            </div>


                            <div className="postr-ul">
                                <ul>
                                    <li><strong>34</strong><span>Recipe’s</span></li>
                                    <li><strong>38</strong><span>Acc Premium <br />
                                        Subscription Recipe’s</span><img src="images/Locked.png" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="Cuisine-postr">
                            <div className="postr-poster"><img src="images/istockphoto.png" /></div>
                            <div className="postr-person">
                                <span><img src="images/Image.png" /></span>
                                <h3>John <img src="images/IMG_4254.png" /></h3>
                                <h4>@zhr_nurkhaula <img src="images/image343.png" /></h4>
                            </div>


                            <div className="postr-ul">
                                <ul>
                                    <li><strong>34</strong><span>Recipe’s</span></li>
                                    <li><strong>38</strong><span>Acc Premium <br />
                                        Subscription Recipe’s</span><img src="images/Locked.png" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="Cuisine-postr">
                            <div className="postr-poster"><img src="images/istockphoto.png" /></div>
                            <div className="postr-person">
                                <span><img src="images/Image.png" /></span>
                                <h3>John <img src="images/IMG_4254.png" /></h3>
                                <h4>@zhr_nurkhaula <img src="images/image343.png" /></h4>
                            </div>


                            <div className="postr-ul">
                                <ul>
                                    <li><strong>34</strong><span>Recipe’s</span></li>
                                    <li><strong>38</strong><span>Acc Premium <br />
                                        Subscription Recipe’s</span><img src="images/Locked.png" /></li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div >
            </Layout>
        </>
    );
}

export default AccAffiliates;