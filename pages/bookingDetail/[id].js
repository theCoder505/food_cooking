import React, { useContext, useEffect, useMemo, useState } from "react";
import Layout from "@/components/Layout";
import { useRouter } from 'next/router';
import axios from "axios";
import CalendarCustom from "../calendar";
import AppContext from "@/context/AppContext";
import moment from "moment";
import { toast } from "react-toastify";
const Booking_create = () => {
  const router = useRouter()
  const { id , name} = router.query 

  const [value, onChange] = useState(new Date());
  const { selecteddate, setSelecteddate, selectedTime, setSelectedTime } = useContext(AppContext)

  const handleTimeClick = (date) => { 
    setSelectedTime(date);
  };

  let userId;
  let userName ;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    let item = localStorage.getItem("user");
    item = JSON.parse(item); 
    userId = item.id;
    userName = item.username;
  }

  
  const handleSubmit = async (e) => { 
    const newdate = moment(selecteddate).format("DD-MM-YYYY")
    const formdata = new FormData();
    formdata.append("user_id", id);
    formdata.append("booked_by", userId)
    formdata.append("booking_time", selectedTime)
    formdata.append("booking_date", newdate)
    e.preventDefault();
    try {
      const response = await axios
        .post(`${process.env.NEXT_PUBLIC_AUTH_URL}/api/user/booking`, formdata, {}).then((res) => {
          console.log(res);

        }).then((result) => {
          console.log(result);
          toast("Bookings Successfully");
        }).catch((err) => toast.error("You can book later"))

    } catch (error) {
      console.error(error);
    }
  }

  const Morning = ["7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"]
  const Afternoon = ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]
  const Evening = ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"]
  const Night = ["10:00 PM", "11:00 PM", "12:00 AM", "1:00 AM", "2:00 AM"]
 
  return (
    <Layout>
      <div className="full-page-display my-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="Barista-prolis">
                <div className="Barista-prolis-special">
                  <span>
                    <img src="/images/Image.png" />
                  </span>
                  <h3>
                    {name} <img src="/images/IMG_4254.png" />
                  </h3>
                  <h5>@zhr_nurkhaula  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="profilere-nav">
              <ul className="nav nav-tabs calanderpage" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-bs-toggle="tab"
                    href="#Booking"
                  >
                    Booking{" "}
                    <span className="ph">
                      <img src="/images/ph1.png" />
                    </span>
                    <span className="p">
                      <img src="/images/p1.png" />
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#Menu">
                    Menu{" "}
                    <span className="ph">
                      <img src="/images/ph3.png" />
                    </span>
                    <span className="p">
                      <img src="/images/p3.png" />
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#Cost">
                    Cost{" "}
                    <span className="ph">
                      <img src="/images/ph5.png" />
                    </span>
                    <span className="p">
                      <img src="/images/p5.png" />
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#Vid">
                    Vid/Pic{" "}
                    <span className="ph">
                      <img src="/images/ph2.png" />
                    </span>
                    <span className="p">
                      <img src="/images/p2.png" />
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#Reviews">
                    Reviews{" "}
                    <span className="ph">
                      <img src="/images/ph4.png" />
                    </span>
                    <span className="p">
                      <img src="/images/p4.png" />
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#About">
                    About{" "}
                    <span className="ph">
                      <img src="/images/ph6.png" />
                    </span>
                    <span className="p">
                      <img src="/images/p6.png" />
                    </span>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div id="Booking" className="container tab-pane active">
                  <br />

                  <div className="tcleander-table">
                    <CalendarCustom /> 
                  </div>


                  <div className="Menupoi">
                    <ul>
                      <li className="Booked-span">
                        <strong>Booked</strong>
                        <span className=""></span>
                      </li>
                      <li className="Available-span">
                        <strong>Not Available</strong>
                        <span className=""></span>
                      </li>
                    </ul>
                  </div>

                  <div className="Menupoi-Booked">
                    <div className="pick-header">
                      <div className="pick-header-left">Pick a time interval</div>
                      {/* <div className="pick-header-right">
                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                        October 2023
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                      </div> */}
                    </div>
                    <div className="pick-body">
                      <ul>
                        <li>
                          <span>Morning</span>
                        </li>
                        {Morning.map((item) => <li className={selectedTime == item && "activeLI"} onClick={() => handleTimeClick(item)}>
                          {item}
                        </li>
                        )}


                      </ul>
                      <ul>
                        <li>
                          <span>Afternoon</span>
                        </li>
                        {Afternoon.map((item) => <li className={selectedTime == item && "activeLI"} onClick={() => handleTimeClick(item)}>
                          {item}
                        </li>
                        )}


                      </ul>
                      <ul>
                        <li>
                          <span>Evening</span>
                        </li>
                        {Evening.map((item) => <li className={selectedTime == item && "activeLI"} onClick={() => handleTimeClick(item)}>
                          {item}
                        </li>
                        )}


                      </ul>
                      <ul>
                        <li>
                          <span>Night</span>
                        </li>
                        {Night.map((item) => <li className={selectedTime == item && "activeLI"} onClick={() => handleTimeClick(item)}>
                          {item}
                        </li>
                        )}


                      </ul>
                    </div>
                  </div>

                  <div className="bi-oy">
                    <button onClick={handleSubmit}>Book Now</button>
                  </div>
                </div>

                <div id="Menu" className="container tab-pane fade">
                  <br />
                  <div className="Booking-po-Dinner">
                    <span>
                      <img src="/images/Sorting.png" /> Set Category +
                    </span>
                    <div className="Category-npl">
                      <img src="/images/AddImage.png" />
                    </div>
                  </div>
                </div>

                <div id="Cost" className="container tab-pane fade">
                  <br />

                  <div className="Booking-po-Dinner">
                    <div
                      className="Category-npl"
                      data-bs-toggle="modal"
                      data-bs-target="#CostModal"
                    >
                      <img src="/images/AddImage.png" />
                    </div>
                    <span>Set A Event</span>
                  </div>
                </div>

                <div id="Vid" className="container tab-pane fade">
                  <br />
                  <div className="Booking-por-Vid">
                    <div className="Booking-po-Dinner">
                      <div>
                        <img src="/images/AddImage.png" />
                      </div>
                    </div>
                  </div>
                </div>

                <div id="Reviews" className="container tab-pane fade">
                  <br />
                  <div className="Reviews_sidebar_follow">
                    <div className="Reviews_sfollow">
                      <div className="sidebar_follow">
                        <div className="sidebar_follow-img">
                          <span>
                            <img src="/images/pop.png" />{" "}
                          </span>
                        </div>

                        <div className="sidebar_followr-name">
                          <strong>Diana Pink</strong>
                          <small>@Pink_vegan</small>
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
                              <img src="/images/starrating.png" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Reviews_mew_msg">
                      <p>Had an amazing baby shower event 5 star!</p>
                    </div>
                  </div>
                  <div className="Reviews_sidebar_follow">
                    <div className="Reviews_sfollow">
                      <div className="sidebar_follow">
                        <div className="sidebar_follow-img">
                          <span>
                            <img src="/images/pop.png" />{" "}
                          </span>
                        </div>

                        <div className="sidebar_followr-name">
                          <strong>Diana Pink</strong>
                          <small>@Pink_vegan</small>
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
                              <img src="/images/starrating.png" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Reviews_mew_msg">
                      <span>
                        <img src="/images/gUU4MF87Ipw.png" />
                      </span>
                    </div>
                  </div>
                  <div className="Reviews_sidebar_follow">
                    <div className="Reviews_sfollow">
                      <div className="sidebar_follow">
                        <div className="sidebar_follow-img">
                          <span>
                            <img src="/images/pop.png" />{" "}
                          </span>
                        </div>

                        <div className="sidebar_followr-name">
                          <strong>Diana Pink</strong>
                          <small>@Pink_vegan</small>
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
                              <img src="/images/starrating.png" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Reviews_mew_msg">
                      <p>Had an amazing baby shower event 5 star!</p>
                    </div>
                  </div>
                </div>

                <div id="About" className="container tab-pane fade">
                  <br />
                  <div className="About_ne-tab">
                    <div className="About_ne-msg">
                      <button>Contact Send A Msg</button>
                      <h4>
                        <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
                        (13)Years experience
                      </h4>
                      <ul>
                        <li>Location</li>
                        <li>country: U.S.,City: Los Angeles</li>
                        <li>state: CA, Zipcode:60612</li>
                      </ul>
                    </div>
                    <div className="About_ne-msg-para">
                      <p>....</p>
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
        id="CostModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md" role="document">
          <div className="modal-content">
            <div className="modal-body guests-form">
              <h3>Event Type</h3>
              <div className="guests-form-text">
                <div className="guests-form-heading">
                  <strong>Events</strong>
                  <strong>Set Prices</strong>
                </div>
                <div className="guests-form-body">
                  <div className="guests-form-prolist">
                    <div className="checklist">
                      <input type="checkbox" id="Wedding" />
                      <label for="Wedding">Wedding</label>
                    </div>

                    <div className="checkinput">
                      <input type="text" />
                    </div>
                  </div>
                  <div className="guests-form-prolist">
                    <div className="checklist">
                      <input type="checkbox" id="Dinner" />
                      <label for="Dinner">Dinner Party</label>
                    </div>

                    <div className="checkinput">
                      <input type="text" />
                    </div>
                  </div>
                  <div className="guests-form-prolist">
                    <div className="checklist">
                      <input type="checkbox" id="Party" />
                      <label for="Party">B-day Party</label>
                    </div>

                    <div className="checkinput">
                      <input type="text" />
                    </div>
                  </div>
                  <div className="guests-form-prolist">
                    <div className="checklist">
                      <input type="checkbox" id="Party" />
                      <label for="Party">BBQ Party</label>
                    </div>

                    <div className="checkinput">
                      <input type="text" />
                    </div>
                  </div>
                  <div className="guests-form-prolist">
                    <div className="checklist">
                      <input type="checkbox" id="Celebration" />
                      <label for="Celebration">Celebration</label>
                    </div>

                    <div className="checkinput">
                      <input type="text" />
                    </div>
                  </div>

                  <div className="guests-form-prolist">
                    <div className="checklist">
                      <input type="checkbox" id="Corporate" />
                      <label for="Corporate">Corporate Event</label>
                    </div>
                    <div className="checkinput">
                      <input type="text" />
                    </div>
                  </div>

                  <div className="guests-form-prolist">
                    <div className="checklist">
                      <input type="checkbox" id="Special" />
                      <label for="Special">Special Event</label>
                    </div>
                    <div className="checkinput">
                      <input type="text" />
                    </div>
                  </div>
                  <div className="guests-form-prolist">
                    <div className="checklist">
                      <input type="checkbox" id="Baby" />
                      <label for="Baby">Baby Shower</label>
                    </div>
                    <div className="checkinput">
                      <input type="text" />
                    </div>
                  </div>
                </div>

                <div className="bi-oy mt-3">
                  <button data-bs-toggle="modal" data-bs-target="#CostModal2">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="CostModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md" role="document">
          <div className="modal-content">
            <div className="modal-body guests-form">
              <h3>Add info & Question</h3>
              <div className="guests-form-text">
                <div className="guests-form-heading">
                  <h4>
                    <span></span>How many guests are you expecting?
                  </h4>
                </div>
                <div className="guests-form-body2">
                  <div className="guests-form-data">
                    <div className="guests-form-data-list">
                      <h5>
                        <span></span>Which meals would you like catered?
                      </h5>
                      <ul>
                        <li>
                          <input type="checkbox" id="Breakfast" />
                          <label for="Breakfast">Breakfast</label>
                        </li>
                        <li>
                          <input type="checkbox" id="Brunch" />
                          <label for="Brunch">Brunch</label>
                        </li>
                        <li>
                          <input type="checkbox" id="Lunch" />
                          <label for="Lunch">Lunch</label>
                        </li>
                        <li>
                          <input type="checkbox" id="Cocktail" />
                          <label for="Cocktail">
                            Cocktail hour/Hors D'oeuvres,
                          </label>
                        </li>
                        <li>
                          <input type="checkbox" id="Dinner" />
                          <label for="Dinner">Dinner</label>
                        </li>
                        <li>
                          <input type="checkbox" id="Dessert" />
                          <label for="Dessert">Dessert</label>
                        </li>
                      </ul>
                    </div>
                    <div className="guests-form-data-list">
                      <h5>
                        <span></span>Which (if any) additional staff or services
                        do you require?
                      </h5>
                      <ul>
                        <li>
                          <input type="checkbox" id="Set" />
                          <label for="Set">Set up</label>
                        </li>
                        <li>
                          <input type="checkbox" id="Clean" />
                          <label for="Clean">Clean up</label>
                        </li>
                        <li>
                          <input type="checkbox" id="Servers" />
                          <label for="Servers">Servers</label>
                        </li>
                        <li>
                          <input type="checkbox" id="Bartender" />
                          <label for="Bartender">Bartender</label>
                        </li>
                      </ul>
                    </div>

                    <div className="guests-form-data-list">
                      <h5>
                        <span></span>Kitchen available?
                      </h5>
                      <ul>
                        <li>
                          <input type="checkbox" id="Set" />
                          <label for="kitchen">
                            Full kitchen (stove ,oven,refrigerator,sinlk and
                            utensils)
                          </label>
                        </li>
                        <li>
                          <input type="checkbox" id="sinlk" />
                          <label for="sinlk">No kitchen</label>
                        </li>
                        <li>
                          <input type="checkbox" id="IDK" />
                          <label for="IDK">IDK will find out</label>
                        </li>
                      </ul>
                    </div>

                    <div className="guests-form-data-input">
                      <span>Add a Question?</span>
                      <input type="text" name="" />
                    </div>
                  </div>
                </div>

                <div className="bi-oy mt-3">
                  <button>Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Booking_create;