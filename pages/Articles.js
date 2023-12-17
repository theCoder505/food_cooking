import Link from "next/link";
import Layout from "@/components/Layout";

const Articles = () => {
    return (
        <>
            <Layout>
                <div className="aricles-section">
                    <div className="full-Articles_row">

                        <div className="col-md">
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

                        <div className="row">
                            <div className="col-md">
                                {/* <h3>Articles</h3> */}
                                <div className="Articles-width">
                                    <div className="Articles-list">
                                        <Link href="/Articles">
                                            <div className="Articles-list-img">
                                                <img src="images/poi.png" />
                                            </div>
                                            <div className="Articles-list-text">
                                                <span>
                                                    How meal plan can save money and
                                                    health
                                                    <img src="images/Screenshot.png" />
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="Articles-list">
                                        <Link href="/Articles">
                                            <div className="Articles-list-img">
                                                <img src="images/poi.png" />
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
                                                <img src="images/poi.png" />
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
                                                <img src="images/poi.png" />
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
                                                <img src="images/poi.png" />
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
                                                <img src="images/poi.png" />
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


                        </div>
                    </div>
                </div>
            </Layout>

            {/* <div className="dropdown-menu full-Articles"> */}
            {/* </div> */}
        </>
    );
}

export default Articles;