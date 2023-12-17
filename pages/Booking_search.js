import React, { useContext } from 'react'
import Layout from '@/components/Layout';
import Link from 'next/link'
import AppContext from '@/context/AppContext';
import axios from 'axios';
import { useRouter } from 'next/router';

const Booking_search = () => {
  const {
    searchApiData,
    setSearchApiData,
    searchRecipe,
    setSearchRecipe,
  } = useContext(AppContext);
  const router = useRouter()
  const handleSearch = (e) => {
    setSearchRecipe(e.target.value);
    if (e.target.value === 0) {
      setSearchRecipe("");
      setSearchApiData([]);
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
      username: searchRecipe
    };
    await axios.post(
      `${process.env.NEXT_PUBLIC_AUTH_URL}/api/user/search`,
      payload,
      config
    )
      .then((response) => {
        setSearchApiData(response.data.data);
      })
      .catch((err) => err);
  };

  const handlePageDetail = async (id , name ) => {
    console.log("recipe_id", id);
    router.push({
      pathname: `/bookingDetail/${id}`,
      query: { id: id, name: name },
    });
    // const payload = { recipe_id: recipe_id };
    // try {
    //   const response = await axios.post(
    //     `${process.env.NEXT_PUBLIC_AUTH_URL}getrecipe`,
    //     payload
    //   );
    //   // setLoginData(response);
    //   // router.push("/Recipe")
    //   console.log(response, "response");
    //   router.push({
    //     pathname: `/Recipe2/${recipe_id}`,
    //     query: { id: response?.data?.data?.id },
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
  };
  return (
    <Layout>
      <div className="main_width">
        <div className="container-fluid">
          <div className="Barista-nav">
            <ul>
              <li><Link href="/AccLandingPage">Home</Link></li>
              <li><Link href="#">Explore</Link></li>
              <li><Link href="#">Help</Link></li>
              <li><Link href="/Profile">Profile</Link></li>
            </ul>
          </div>
          <div className="page_cat main-cat">
            <h2>Book A Chef</h2>
            <div className="page_catowl">
              <div className="catowl-verw">
                <h4>View <img src="images/viewicon.png" /></h4>
                <ul>
                  <li>Current Bookings</li>
                  <li>Previous Bookings</li>
                  <li>Favorite Chefs</li>
                  <li>Affiliates</li>
                </ul>
              </div>
              <div className="catowl-veew">
                <small>Set Up </small>
                <img src="images/MaskGroup-7.png" />
                <span>Your Bookings</span>
                <strong>12 Following</strong>
              </div>
            </div>
            <div className="catowl-search">
              <div className="Following-catowl">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    fetchSearchRecipe();
                  }}
                ><i className="fa fa-search" aria-hidden="true"></i>
                </button>

                <input type="text" onChange={(e) => handleSearch(e)} placeholder="Search" />
              </div>
              <div className="catowlfliter_data">
                <span
                ><i className="fa fa-align-center" aria-hidden="true"></i>
                  Filter</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="full-page-display">
        <div className="container-fluid">
          <div className="row">
            <h2 className="fro-headin">Profiles</h2>

            {!searchApiData?.length ? (
              <h1>No records found !</h1>
            ) : (
              searchApiData &&
              searchApiData?.map((item) => {
                return (
                  <>
                    <div className="col" onClick={() => handlePageDetail(item.id, item.username)}>
                      <div className="Barista-prolis">
                        <div className="Barista-prolis-special">
                          <span><img src="images/Image.png" /></span>
                          <h3>{item.username} <img src="images/IMG_4254.png" /></h3>
                          <h5>{item.profile}</h5>
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
    </Layout>
  )
}

export default Booking_search