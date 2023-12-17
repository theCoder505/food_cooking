import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import SwiperCore from "swiper/core";
import "swiper/css";
import 'swiper/css/navigation';
import { useDispatch, useSelector } from "react-redux";
import { getAllUserList, getUserFolloweingList, getUserFollowers, getUserProfile, updateUserProfile, userFollow, userImageChange } from "@/context/user/userSlice";
import { getallRecipeByUserID } from "@/context/recipe/recipeSlice";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { useRouter } from "next/router";
// import { useSelector } from "@/context/Store";

SwiperCore.use([Navigation]);

const Profile = () => {

    const router = useRouter()
	const [user, setuser] = useState(null)

	const [userRecipe, setuserRecipe] = useState(null)
	const [allUser, setallUser] = useState(null)

	const [userFollowing, setuserFollowing] = useState(null)

	const dispatch = useDispatch();


		useEffect(() => {
			const userName = localStorage.getItem('user');
			if (userName) {
				setuser(JSON.parse(userName));
			}
		}, [])

		useEffect(() => {
            if(router.query.username){
                dispatch(getUserProfile(router.query.username))
            }
		}, [router.query.username])


	const userProfileData = useSelector((state) => state?.user?.user)

	const getrecipe = useSelector((state) => state?.recipeSlice?.recipe)

	const getUser = useSelector((state) => state?.user?.userList)

	const getUserFollowingList = useSelector((state) => state?.user?.userFollowinglist)
	
	useEffect(() => {
		dispatch(getAllUserList())
	}, [dispatch]) 

	useEffect(() => {
		dispatch(getUserFolloweingList())
	}, [dispatch])

	useEffect(() => {
		setuserFollowing(getUserFollowingList)
	}, [getUserFollowingList])
	
	useEffect(() => {
		setallUser(getUser)
	}, [getUser])

	useEffect(() => {
		if (userProfileData?.id) {
			dispatch(getallRecipeByUserID(userProfileData?.id))
		}
	}, [userProfileData , dispatch]) 

	useEffect(() => {
		setuserRecipe(getrecipe?.data)
	}, [getrecipe]) 

	const [isEditing, setIsEditing] = useState(false);
	const [socialMediaLinks, setSocialMediaLinks] = useState({
		twitter_name: userProfileData?.twitter_name ,
			instagram_name: userProfileData?.instagram_name ,
			tiktok_name: userProfileData?.tiktok_name ,
			pinterest_name: userProfileData?.pinterest_name ,
			youtube_name: userProfileData?.youtube_name ,
			name : userProfileData?.name,
	});
	useEffect(() => {
		setSocialMediaLinks({
			twitter_name: userProfileData?.twitter_name ,
			instagram_name: userProfileData?.instagram_name ,
			tiktok_name: userProfileData?.tiktok_name ,
			pinterest_name: userProfileData?.pinterest_name ,
			youtube_name: userProfileData?.youtube_name ,
			name : userProfileData?.name,
		})
	}, [userProfileData ,dispatch])

	const toggleEditable = () => {
		setIsEditing((prevState) => !prevState);
	};

	const handleSocialMediaChange = (e, key) => {
		setSocialMediaLinks({
		...socialMediaLinks,
		[key]: e.target.value,
			});
	};

	const handleSave = () => {
		setIsEditing(false);
		dispatch(updateUserProfile(userProfileData?.id, socialMediaLinks))
	};

	const handleFollow = async (userId) => {
        const data = { followers_id : userId };
		if (userId) {
			dispatch(userFollow(data))
		}
	}

	const [selectedImage, setSelectedImage] = useState(null);

	const handleImageChange = (e) => {
		const selectedFile = e.target.files[0];
		if (selectedFile) {
		  setSelectedImage(selectedFile);
		}
	};

	
	function getBase64(file) {
		return new Promise((resolve, reject) => {
		  const reader = new FileReader();
		  reader.readAsDataURL(file);
		  reader.onload = () => resolve(reader.result);
		  reader.onerror = error => reject(error);
		});
	  }
  
	const handleImageSave = async () => {
		if (selectedImage) {
			// const imageUrl = URL.createObjectURL(selectedImage);
			// const imageUrl = await getBase64(selectedImage);
			const data = { id: userProfileData?.id, image: selectedImage };
			dispatch(userImageChange(data));
		  }
		// const imageUrl = URL.createObjectURL(file);
		// console.log("userIduserId-------------------",imageUrl)
		// const data = { id: userId, url: imageUrl };
		// console.log("data",data)
		// if (userId) {
		// 	dispatch(userImageChange(data))
		// }
	}

	return (
		<Layout>
			<Container>
				{/* sub nav */}
				<div className="Barista-nav">
					<Row>
						<Col className="col" lg={3}>
							<a href="">Home</a>
						</Col>
						<Col className="col" lg={3}>
							<a href="">Explore</a>
						</Col>
						<Col className="col" lg={3}>
							<a href="">Help</a>
						</Col>
						<Col className="col" lg={3}>
							<a href="">Profile</a>
						</Col>
					</Row>
				</div>

				<Row>
					<Col sm={12} xs={12} lg={6}>
						<div className="profile-be">
							<ul>
								<li>
									<a href="#">
										<img src="images/bookings.png" />
									</a>
								</li>
								<li>
									<a href="#">
										<img src="images/accoladesgiftd.png" />
									</a>
								</li>
								<li>
									<a
										href="#"
										data-bs-toggle="modal"
										data-bs-target="#exampleGift"
									>
										<img src="images/gifcoin.png" />
									</a>
								</li>
								<li>
									<a href="#">
										<img src="images/Vector-5.png" />
									</a>
								</li>
								<li>
									<a href="#">
										<img src="images/Share.png" />
									</a>
								</li>
							</ul>
						</div>
					</Col>
					<div
						className="modal fade"
						id="exampleGift"
						tabindex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div className="modal-dialog modal-lg">
							<div className="modal-content modal-white">
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								>
									<i className="fa fa-times" aria-hidden="true"></i>
								</button>
								<div className="modal-body modal-purchases">
									<div className="modal-givetIcon">
										<h3>
											Gifts <img src="images/gifcoin.png" />
										</h3>
									</div>
									<div className="modal-givetrit">
										<div className="sidebar_givetritw">
											<div className="sidebar_follow-img">
												<span>
													<img src="images/pop.png" />
												</span>
											</div>
										</div>

										<div className="sidebar_followr-name">
											<strong>Diana Pink</strong>
											<small>Healthy meals.</small>
										</div>
									</div>

									<div className="modal-purchases-gift">
										<ul>
											<li>
												<span>
													<img src="images/jucier.png" />
												</span>
												<small>750</small>
											</li>
											<li>
												<span>
													<img src="images/fitng.png" />
												</span>
												<small>5,500</small>
											</li>
											<li>
												<span>
													<img src="images/topchef.png" />
												</span>
												<small>899</small>
											</li>
											<li>
												<span>
													<img src="images/master.png" />
												</span>
												<small>777</small>
											</li>
											<li>
												<span>
													<img src="images/seapl8.png" />
												</span>
												<small>1,899</small>
											</li>
											<li>
												<span>
													<img src="images/healthwel.png" />
												</span>
												<small>333</small>
											</li>
											<li>
												<span>
													<img src="images/Greattaste.png" />
												</span>
												<small>288</small>
											</li>
											<li>
												<span>
													<img src="images/homegrad.png" />
												</span>
												<small>444</small>
											</li>
											<li>
												<span>
													<img src="images/foodmind.png" />
												</span>
												<small>850</small>
											</li>
										</ul>
									</div>
									<div className="modal-Coins-gift">
										<ul>
											<li data-bs-toggle="modal" data-bs-target="#GivCoins">
												{" "}
												<span>
													<i
														className="fa fa-chevron-left"
														aria-hidden="true"
													></i>
													Give Coins <img src="images/coin4.png" />{" "}
												</span>{" "}
											</li>
											<li
												data-bs-toggle="modal"
												data-bs-target="#REFILLCoins"
											>
												<small>
													<img src="images/coin4.png" /> 80
												</small>
												REFILL{" "}
												<span>
													<i
														className="fa fa-chevron-right"
														aria-hidden="true"
													></i>
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						className="modal fade"
						id="GivCoins"
						tabindex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div className="modal-dialog modal-lg">
							<div className="modal-content modal-white">
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								>
									<i className="fa fa-times" aria-hidden="true"></i>
								</button>
								<div className="modal-body modal-purchases">
									<div className="modal-givetIcon">
										<h3>
											Give Coins <img src="images/gifcoin.png" />
										</h3>
									</div>

									<div className="modal-giftprice">
										<ul>
											<li>
												<span>
													<img src="images/coin4.png" />
												</span>
												<small>
													85 <br />
													$.90
												</small>
											</li>
											<li>
												<span>
													<img src="images/coin4.png" />
												</span>
												<small>
													85 <br />
													$.90
												</small>
											</li>
											<li>
												<span>
													<img src="images/coin4.png" />
												</span>
												<small>
													85 <br />
													$.90
												</small>
											</li>
											<li>
												<span>
													<img src="images/coin4.png" />
												</span>
												<small>
													85 <br />
													$.90
												</small>
											</li>
										</ul>
									</div>

									<div className="modal-Coins-gift">
										<span
											data-bs-toggle="modal"
											data-bs-target="#exampleGift"
											className="Custompo"
										>
											Custom Amount
										</span>
										<ul>
											<li
												data-bs-toggle="modal"
												data-bs-target="#REFILLCoins"
											>
												<small>
													<img src="images/coin4.png" /> 80
												</small>
												REFILL{" "}
												<span>
													<i
														className="fa fa-chevron-right"
														aria-hidden="true"
													></i>
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Col sm={12} xs={12} lg={6}>
						<Row>
							<Col xs={12} sm={12} lg={6}><div className="profile-beach">
								<ul className="sidebar-Recipes0like">
									<li>
										{userProfileData?.following} <small>Following</small>
									</li>
									<li>
										{userProfileData?.follower}<small>Followers</small>
									</li>
									<li>
										{userProfileData?.recipes}<small>Recipes</small>
									</li>
									<li>
										1.2M<small>Like</small>
									</li>
								</ul>
								<ul className="sidebar-Follow-btn">
									<li>
										<a href="#" className="sidebar-Follow-btn1">
											Follow
										</a>
									</li>
									<li>
										<a href="#" className="sidebar-Follow-btn2">
											Message
										</a>
									</li>
								</ul>

								{/* <div class="bio-section">
								<h3 className="BioLink">Add bio or links</h3>
									<i class="fas fa-edit" onclick="toggleEditable('bio-section')"></i>
								</div>

								<ul className="Recipes-ticktok">
									<li>
										<a href="#">
											<img src="images/Twitter.png" />{userProfileData?.twitter_name}
										</a>

									</li>
									<li>
										<a href="#">
											<img src="images/Instagramogo.png" />{userProfileData?.instagram_name}
										</a>
									</li>
									<li>
										<a href="#">
											<img src="images/TikTok2.png" />{userProfileData?.tiktok_name}
										</a>
									</li>
									<li>
										<a href="#">
											<img src="images/Pinterest.png" />{userProfileData?.pinterest_name}
										</a>
									</li>
									<li>
										<a href="#">
											<img src="images/YouTub.png" />{userProfileData?.youtube_name}
										</a>
									</li>
								</ul> */}
								<div className="bio-section">
									<h3 className="BioLink">Add bio or links</h3>
								<i className="fas fa-edit" onClick={toggleEditable}></i>
						</div>

						<ul className="Recipes-ticktok">
							<li>
								<a href="#">
									<img src="images/Twitter.png" alt="Twitter" />
									{isEditing ? (
										<input
											type="text"
											value={socialMediaLinks.twitter_name}
											onChange={(e) => handleSocialMediaChange(e, 'twitter_name')}
										/>
									) : (
										socialMediaLinks.twitter_name
									)}
								</a>
							</li>

							<li>
								<a href="#">
									<img src="images/Instagramogo.png" alt="Instagram" />
									{isEditing ? (
										<input
											type="text"
											value={socialMediaLinks.instagram_name}
											onChange={(e) => handleSocialMediaChange(e, 'instagram_name')}
										/>
									) : (
										socialMediaLinks.instagram_name
									)}
								</a>
							</li>

							<li>
								<a href="#">
									<img src="images/TikTok2.png" alt="TikTok" />
									{isEditing ? (
										<input
											type="text"
											value={socialMediaLinks.tiktok_name}
											onChange={(e) => handleSocialMediaChange(e, 'tiktok_name')}
										/>
											) : (
												<span>{socialMediaLinks?.tiktok_name}</span>

									)}
								</a>
							</li>
							<li>
								<a href="#">
									<img src="images/Pinterest.png" alt="Pinterest" />
									{isEditing ? (
										<input
											type="text"
											value={socialMediaLinks.pinterest_name}
											onChange={(e) => handleSocialMediaChange(e, 'pinterest_name')}
										/>
									) : (
										socialMediaLinks.pinterest_name
									)}
								</a>
							</li>

							{/* YouTube */}
							<li>
								<a href="#">
									<img src="images/YouTub.png" alt="YouTube" />
									{isEditing ? (
										<input
											type="text"
											value={socialMediaLinks.youtube_name}
											onChange={(e) => handleSocialMediaChange(e, 'youtube_name')}
										/>
									) : (
										socialMediaLinks.youtube_name
									)}
								</a>
							</li>
						</ul>

							{isEditing && <button className="saveButton" onClick={handleSave}>Save</button>}

							</div></Col>
							<Col xs={12} sm={12} lg={6}> <div className="Recipes-profile">
								<a href="">
									<i className="fa fa-ellipsis-h" aria-hidden="true"></i>
								</a>
								<span data-bs-toggle="modal" data-bs-target="#exampleprofile">
								{userProfileData?.profile ? (
								  <img src={userProfileData.profile} alt="" />
									) : (
									<img src="dummy-user.png" alt="Dummy Image" />
									)}
								</span>
								<strong>
								{userProfileData?.username}
									<img
										src="images/veri1.png"
										data-bs-toggle="modal"
										data-bs-target="#exampleModal"
									/>
								</strong>
								{isEditing ? (
									<>
										<input
											className="bio-textarea"
											value={socialMediaLinks.name}
											onChange={(e) => handleSocialMediaChange(e, 'name')}
										/>
									</>
								) : (
								socialMediaLinks.name
								)}
							</div></Col>
						</Row>

					</Col>
					<div
						className="modal fade"
						id="REFILLCoins"
						tabindex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div className="modal-dialog modal-mg">
							<div className="modal-content modal-black">
								<div className="modal-head modal-hevad">
									<h3>
										Custom{" "}
										<button
											type="button"
											className="btn-close"
											data-bs-dismiss="modal"
											aria-label="Close"
										>
											<i className="fa fa-times" aria-hidden="true"></i>
										</button>
									</h3>
								</div>

								<div className="modal-body modal-Coins">
									<div className="head-coinNumber dropdown">
										<a href="" data-bs-toggle="dropdown">
											Number of A.C.C. Coins{" "}
											<i className="fa fa-chevron-down" aria-hidden="true"></i>
										</a>
										<div className="dropdown-menu pro-muy">
											<ul>
												<li>
													<a className="dropdown-item" href="#">
														{" "}
														In Dollar Amount
													</a>
												</li>
												<li>
													<a className="dropdown-item" href="#">
														{" "}
														Number of A.C.C. Coins
													</a>
												</li>
											</ul>
										</div>
										<div className="pro-muny">
											<div className="pro-muny-input">
												<span>
													<img src="images/coin4.png" />
												</span>
												<input
													type="text"
													name=""
													placeholder="40 - 5,500,000"
												/>
											</div>
											<div className="pro-muny-number">
												<ul>
													<li>
														<span>1</span>
													</li>
													<li>
														<span>2</span>
													</li>
													<li>
														<span>3</span>
													</li>
													<li>
														<span>
															<img src="images/Vector-10.png" />
														</span>
													</li>
													<li>
														<span>4</span>
													</li>
													<li>
														<span>5</span>
													</li>
													<li>
														<span>6</span>
													</li>
													<li>
														<span>000</span>
													</li>
													<li>
														<span>7</span>
													</li>
													<li>
														<span>8</span>
													</li>
													<li>
														<span>9</span>
													</li>
													<li>
														<span>0</span>
													</li>
												</ul>
											</div>
										</div>
										<div className="pro-m">
											<strong>Total</strong>{" "}
											<span>
												<img src="images/coin4.png" />0
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="modal fade"
						id="exampleprofile"
						tabindex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div className="modal-dialog modal-mg">
							<div className="modal-content modal-black">
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								>
									<i className="fa fa-times" aria-hidden="true"></i>
								</button>
								<div className="modal-body modal-purchases">
									<div className="modal-purchasesIcon">
										<img src="images/Vector-9.png" />
										<h3>
											Change Your <br />
											Shape Icon
										</h3>
									</div>
									<div className="modal-purchases-Current">
										<strong>Current</strong>
										<span>
											<img src={userProfileData?.profile} />
										</span>
									</div>
									<div className="modal-purchases-Shape">
										<h5>change image </h5>
										<input type="file"
											onChange={handleImageChange} />
										{/* {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Selected Image" />} */}

										{/* <ul>
											<li>
												<img src="images/Diamond.png" />
											</li>
											<li>
												<img src="images/shape-1.png" />
											</li>
											<li>
												<img src="images/1-111-2.png" />
											</li>
										</ul> */}
										<button data-bs-dismiss="modal"
									aria-label="Close" className="imageSave" onClick={handleImageSave}>Save</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="modal fade"
						id="exampleModal"
						tabindex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content modal-black ">
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								>
									<i className="fa fa-times" aria-hidden="true"></i>
								</button>
								<div className="modal-body modal-subscribe">
									<h3>This Person subscribe to A.C.C. Authentication.</h3>
									<img src="images/veri1.png" />
								</div>
							</div>
						</div>
					</div>
				</Row>
			</Container>
			<Container fluid>
				<Row>
					{/* <Col lg={3} xs={12} md={3} sm={12}>
						<div className="full-sidebar-data">
							<h3>Suggestions For You</h3>
							{allUser?.map((user, index) => {
								const isFollowing = userFollowing.some(follow => follow.followers_id === user.id);
								
								return(<div key={index} className="sidebar_follow-list profilehover">
								<div className="sidebar_follow">
									<div className="sidebar_follow-img">
										<span>
											<img src="dummy-user.png" />
										</span>
									</div>

									<div className="sidebar_followr-name">
										<strong>{user?.username}</strong>
										<small>Healthy meals.</small>
									</div>
								</div>
								<div className={`sidebar-follow_plus ${isFollowing ? 'black_color' : 'orange_color'}`} onClick={() => handleFollow(user?.id)}>
										<span>{isFollowing ? 'Following' : '+ Follow'}</span>
								</div>
							</div>
								)})}


							{/* <div className="sidebar_follow-list">
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
							</div> * /}

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
						</div>
						{/* <SidebarComponent/> * /}
					</Col> */}
					<Col lg={12} xs={12} md={12} sm={12} >
						<div className="full-page-fullbar-profile">
							<div className="full-page-Recipe_tab">
								{/* <ul className="nav nav-tabs">
							<li className="nav-item">
								<a className="nav-link active" data-bs-toggle="tab" href="#Recipe">
									Recipe
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-bs-toggle="tab" href="#Posts">
									Posts
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-bs-toggle="tab" href="#Media">
									Media
								</a>
							</li>
						</ul> */}
							<Row>
								{/* <Col lg={2} className=".d-none .d-sm-block .d-sm-none .d-md-block"></Col> */}
								{/* <Col lg={3} sm={4} xs={4}>
								<a href="/Create_Recipes">
									<div className="tab-text">
										<span className="active" data-bs-toggle="tab">Add Recipe</span>
									</div>
								</a>
								</Col> */}
								<Col lg={4} sm={4} xs={4}>
									<div className="tab-text">
										<a className="active" data-bs-toggle="tab" href="#Recipe">Recipe</a>
									</div>
								</Col>

								<Col lg={4} sm={4} xs={4}>

									<p className="tab-text">
										<a data-bs-toggle="tab" href="#Posts">Posts</a>
									</p>

								</Col>
								<Col lg={4} sm={4} xs={4}>

									<p className="tab-text">
										<a data-bs-toggle="tab" href="#Media">Media</a>
									</p>

								</Col>
								<Col lg={2} className=".d-none .d-sm-block .d-sm-none .d-md-block"></Col>
							</Row>

							<div>
								<Row>
									<Col lg={2} className=".d-none .d-sm-block .d-sm-none .d-md-block"></Col>
									<Col lg={1} className=".d-none .d-sm-block .d-sm-none .d-md-block"></Col>
									<Col lg={2} sm={3} xs={3}>
										<p>
											<a className="active" href="/Create_Recipes"> <img src="images/NewProject.png" />{" "}</a>
										</p>
									</Col>
									<Col lg={2} sm={3} xs={3}>
										<p>
											<a data-bs-toggle="tab" href="#Posts"><img src="images/NewProject1.png" /></a>
										</p>
									</Col>
									<Col lg={2} sm={3} xs={3}>
										<p>
											<a data-bs-toggle="tab" href="#Media"><img src="images/NewProject2.png" /></a>
										</p>
									</Col>
									<Col lg={1} className=".d-none .d-sm-block .d-sm-none .d-md-block"></Col>
									<Col lg={2} className=".d-none .d-sm-block .d-sm-none .d-md-block"></Col>
								</Row>

								<div>
									<Swiper
										slidesPerView={4}
										grid={{
											rows: 1,
										}}
										autoplay={true}
										spaceBetween={30}
										navigation={true}
										className="holiday-cooking-swiper"
									>
										<SwiperSlide><div className="owl-carousel-slider-list">
											<span>
												<img src="images/Bursts.png" />
											</span>{" "}
											<strong>Holiday cooking</strong>
											<small>Series 1 - 22</small>
										</div></SwiperSlide>
										<SwiperSlide><div className="owl-carousel-slider-list">
											<span>
												<img src="images/Bursts.png" />
											</span>{" "}
											<strong>Holiday cooking</strong>
											<small>Series 1 - 22</small>
										</div></SwiperSlide>
										<SwiperSlide><div className="owl-carousel-slider-list">
											<span>
												<img src="images/Bursts.png" />
											</span>{" "}
											<strong>Holiday cooking</strong>
											<small>Series 1 - 22</small>
										</div></SwiperSlide>
										<SwiperSlide>
											<div className="owl-carousel-slider-list">
												<span>
													<img src="images/Bursts.png" />
												</span>{" "}
												<strong>Holiday cooking</strong>
												<small>Series 1 - 22</small>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="owl-carousel-slider-list">
												<span>
													<img src="images/Bursts.png" />
												</span>{" "}
												<strong>Holiday cooking</strong>
												<small>Series 1 - 22</small>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="owl-carousel-slider-list">
												<span>
													<img src="images/Bursts.png" />
												</span>{" "}
												<strong>Holiday cooking</strong>
												<small>Series 1 - 22</small>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="owl-carousel-slider-list">
												<span>
													<img src="images/Bursts.png" />
												</span>{" "}
												<strong>Holiday cooking</strong>
												<small>Series 1 - 22</small>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="owl-carousel-slider-list">
												<span>
													<img src="images/Bursts.png" />
												</span>{" "}
												<strong>Holiday cooking</strong>
												<small>Series 1 - 22</small>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="owl-carousel-slider-list">
												<span>
													<img src="images/Bursts.png" />
												</span>{" "}
												<strong>Holiday cooking</strong>
												<small>Series 1 - 22</small>
											</div>
										</SwiperSlide>

									</Swiper>

									{/* <Row> */}
										{/* <Col lg={4}> */}
								<div className="row">
								{userRecipe?.map((recipe, index) => (
									<div key={index} className="col-sm-6 col-md-4">
										<div className="full-page-member-block">
											<div className="full-page-food image-height-profile">
												<span>
													{/* <img src="images/MaskGroup.png" /> */}
													<ImagePlaceholder src={recipe.media} style={{maxHeight: '170px'}} />
												</span>
												<div className="full-page-front-profile">
													<h3>{recipe?.title}</h3>
												</div>
											</div>
										</div>
									</div> 
									))}
								</div>
									{/* </Col> */}
									{/* <Col lg={4}>
										<div className="Recipe_tab-itemslist-box">
											<img src="images/videos-bg.png" />
											<span>
												<img src="images/pin2.png" />
											</span>
										</div>
									</Col>
									<Col lg={4}>
										<div className="Recipe_tab-itemslist-box">
											<img src="images/videos-bg.png" />
											<span>
												<img src="images/pin2.png" />
											</span>
										</div>
									</Col> */}
									{/* </Row> */}
									{/* <Row>
										<Col lg={4}>
											<div className="Recipe_tab-itemslist-box">
												<img src="images/videos-bg.png" />
												<span>
													<img src="images/pin2.png" />
												</span>
											</div>
										</Col>
										<Col lg={4}>
											<div className="Recipe_tab-itemslist-box">
												<img src="images/videos-bg.png" />
												<span>
													<img src="images/pin2.png" />
												</span>
											</div>
										</Col>
										<Col lg={4}>
											<div className="Recipe_tab-itemslist-box">
												<img src="images/videos-bg.png" />
												<span>
													<img src="images/pin2.png" />
												</span>
											</div>
										</Col>
									</Row>
									<Row>
										<Col lg={3}>
											<div className="tab-pane-videos">
												<img src="images/item.png" />
											</div>
										</Col>
										<Col lg={3}>
											<div className="tab-pane-videos">
												<img src="images/item.png" />
											</div>
										</Col>
										<Col lg={3}>
											<div className="tab-pane-videos">
												<img src="images/item.png" />
											</div>
										</Col>
										<Col lg={3}>
											<div className="tab-pane-videos">
												<img src="images/item.png" />
											</div>
										</Col>
									</Row>
									<Row>
										<Col lg={3}>
											<div className="tab-pane-videos">
												<img src="images/item.png" />
											</div>
										</Col>
										<Col lg={3}>
											<div className="tab-pane-videos">
												<img src="images/item.png" />
											</div>
										</Col>
										<Col lg={3}>
											<div className="tab-pane-videos">
												<img src="images/item.png" />
											</div>
										</Col>
										<Col lg={3}>
											<div className="tab-pane-videos">
												<img src="images/item.png" />
											</div>
										</Col>
									</Row> */}

									<div className="tab-pane container fade" id="FaveRecipe">
										Fave Recipe
									</div>
									<div className="tab-pane container fade" id="BucketList">
										Bucket List
									</div>
								</div>
							</div>
							</div>
						</div>
						<div className="tab-pane container fade" id="Posts">
							Posts...
						</div>
						<div className="tab-pane container fade" id="Media">
							Media...
						</div>

					</Col>
				</Row>
			</Container>
			<div className="profileopen">
				<div className="sidebar_fow-po">
					<div className="sidebar_follow">
						<div className="sidebar_follow-img">
							<span>
								<img src="images/pop.png" />
							</span>
						</div>

						<div className="sidebar_followr-name">
							<strong>
								Diana Pink <img src="images/IMG_4254.png" />
							</strong>
							<small>@zhr_nurkhaula</small>
							<span>Chef ,Food Lover</span>
						</div>
					</div>
					<div className="profileopengift">
						<img src="images/gifcoin.png" />
					</div>
				</div>

				<div className="Recipes-ul">
					<ul>
						<li>
							<strong>{userProfileData?.recipes}</strong>
							<span>Recipes</span>
						</li>
						<li>
							<strong>{userProfileData?.follower}</strong>
							<span>Followers</span>
						</li>
						<li>
							<strong>{userProfileData?.following}</strong>
							<span>Following</span>
						</li>
					</ul>
				</div>
				<div className="Recipes-poi">
					<ul>
						<li>
							<img src="images/poi.png" />
						</li>
						<li>
							<img src="images/poi.png" />
						</li>
						<li>
							<img src="images/poi.png" />
						</li>
					</ul>
				</div>
				<div className="Recipes-buton">
					<ul>
						<li>
							<button>
								<img src="images/Maskoup-27.png" />
								Follow
							</button>
						</li>
					</ul>
				</div>
			</div>
		</Layout>
	);
};

export default Profile;
