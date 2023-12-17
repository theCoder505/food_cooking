import React from "react";
import Layout from "@/components/Layout";

const Booking_cost = () => {
  return (
    <Layout>
      <div className="full-page-display my-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="Barista-prolis">
                <div className="Barista-prolis-special">
                  <span>
                    <img src="images/Image.png" />
                  </span>
                  <h3>
                    Jone Wick <img src="images/IMG_4254.png" />
                  </h3>
                  <h5>@zhr_nurkhaula</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="profilere-nav">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-bs-toggle="tab"
                    href="#Booking"
                  >
                    Booking{" "}
                    <span className="ph">
                      <img src="images/ph1.png" />
                    </span>
                    <span className="p">
                      <img src="images/p1.png" />
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#Menu">
                    Menu{" "}
                    <span className="ph">
                      <img src="images/ph3.png" />
                    </span>
                    <span className="p">
                      <img src="images/p3.png" />
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#Cost">
                    Cost{" "}
                    <span className="ph">
                      <img src="images/ph5.png" />
                    </span>
                    <span className="p">
                      <img src="images/p5.png" />
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#Vid">
                    Vid/Pic{" "}
                    <span className="ph">
                      <img src="images/ph2.png" />
                    </span>
                    <span className="p">
                      <img src="images/p2.png" />
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#Reviews">
                    Reviews{" "}
                    <span className="ph">
                      <img src="images/ph4.png" />
                    </span>
                    <span className="p">
                      <img src="images/p4.png" />
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#About">
                    About{" "}
                    <span className="ph">
                      <img src="images/ph6.png" />
                    </span>
                    <span className="p">
                      <img src="images/p6.png" />
                    </span>
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div id="Booking" className="container tab-pane active">
                  <br />
                  <div className="tcleander-table">
                    <div className="cleander-table-head">
                      <i className="fa fa-chevron-left" aria-hidden="true"></i>
                      October 2023
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                    <div className="tcleander-table-data">
                      <table>
                        <thead>
                          <tr>
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>
                              <span className="bg-1">9 </span>
                            </td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                          </tr>
                          <tr>
                            <td>15</td>
                            <td>16</td>
                            <td>
                              <span className="bg-2">17</span>
                            </td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                          </tr>
                          <tr>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                          </tr>
                          <tr>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
                      <div className="pick-header-right">
                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                        October 2023
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                      </div>
                    </div>
                    <div className="pick-body">
                      <ul>
                        <li>
                          <span>Morning</span>
                        </li>
                        <li>
                          <a href="">7:00 AM</a>
                        </li>
                        <li>
                          <a href="">8:00 AM</a>
                        </li>
                        <li>
                          <a href="">9:00 AM</a>
                        </li>
                        <li>
                          <a href="">10:00 AM</a>
                        </li>
                        <li>
                          <a href="">11:00 AM</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span>Afternoon</span>
                        </li>
                        <li>
                          <a href="" className="sct">
                            12:00 PM
                          </a>
                        </li>
                        <li>
                          <a href="" className="scet">
                            1:00 PM
                          </a>
                        </li>
                        <li>
                          <a href="">2:00 PM</a>
                        </li>
                        <li>
                          <a href="">3:00 PM</a>
                        </li>
                        <li>
                          <a href="">4:00 PM</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span>Evening</span>
                        </li>
                        <li>
                          <a href="">5:00 PM</a>
                        </li>
                        <li>
                          <a href="">6:00 PM</a>
                        </li>
                        <li>
                          <a href="">7:00 PM</a>
                        </li>
                        <li>
                          <a href="">8:00 PM</a>
                        </li>
                        <li>
                          <a href="">9:00 PM</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span>NIGHT</span>
                        </li>
                        <li>
                          <a href="">10:00 PM</a>
                        </li>
                        <li>
                          <a href="">10:30 PM</a>
                        </li>
                        <li>
                          <a href="">11:00 PM</a>
                        </li>
                        <li>
                          <a href="">11:30 PM</a>
                        </li>
                        <li>
                          <a href="">12:00 PM</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bi-oy">
                    <button>Set</button>
                  </div>
                </div>

                <div id="Menu" className="container tab-pane fade">
                  <br />
                  <div className="Booking-por-tab">
                    <div className="Booking-por-Dinner">
                      <span>
                        <img src="images/PLACEHERE.png" />
                      </span>

                      <h5>Private Dinner</h5>
                    </div>
                    <div className="Booking-por-Dinner">
                      <span>
                        <img src="images/PLACEHERE.png" />
                      </span>

                      <h5>Private Dinner</h5>
                    </div>
                    <div className="Booking-por-Dinner">
                      <span>
                        <img src="images/PLACEHERE.png" />
                      </span>

                      <h5>Private Dinner</h5>
                    </div>
                    <div className="Booking-por-Dinner">
                      <span>
                        <img src="images/PLACEHERE.png" />
                      </span>

                      <h5>Private Dinner</h5>
                    </div>
                    <div className="Booking-por-Dinner">
                      <span>
                        <img src="images/PLACEHERE.png" />
                      </span>

                      <h5>Private Dinner</h5>
                    </div>

                    <div className="Booking-por-Dinner">
                      <span>
                        <img src="images/PLACEHERE.png" />
                      </span>

                      <h5>Private Dinner</h5>
                    </div>
                  </div>
                </div>
                <div id="Cost" className="container tab-pane fade">
                  <br />
                  <div className="Booking-por-tab">
                    <div
                      className="Booking-por-Dinner"
                      data-bs-toggle="modal"
                      data-bs-target="#CostModal"
                    >
                      <span>
                        <img src="images/PLACEHERE.png" />
                      </span>
                      <h4>$1,650</h4>
                      <h5>Private Dinner</h5>
                    </div>
                    <div className="Booking-por-Dinner">
                      <span>
                        <img src="images/PLACEHERE.png" />
                      </span>
                      <h4>$1,650</h4>
                      <h5>Private Dinner</h5>
                    </div>
                    <div className="Booking-por-Dinner">
                      <span>
                        <img src="images/PLACEHERE.png" />
                      </span>
                      <h4>$1,650</h4>
                      <h5>Private Dinner</h5>
                    </div>
                    <div className="Booking-por-Dinner">
                      <span>
                        <img src="images/PLACEHERE.png" />
                      </span>
                      <h4>$1,650</h4>
                      <h5>Private Dinner</h5>
                    </div>
                    <div className="Booking-por-Dinner">
                      <span>
                        <img src="images/PLACEHERE.png" />
                      </span>
                      <h4>$1,650</h4>
                      <h5>Private Dinner</h5>
                    </div>

                    <div className="Booking-por-Dinner">
                      <span>
                        <img src="images/PLACEHERE.png" />
                      </span>
                      <h4>$1,650</h4>
                      <h5>Private Dinner</h5>
                    </div>
                  </div>
                </div>
                <div id="Vid" className="container tab-pane fade">
                  <br />
                  <div className="Booking-por-Vid">
                    <div className="Booking-por-DinnerVid">
                      <span>
                        <img src="images/gUU4MF87Ipw.png" />
                      </span>
                    </div>
                    <div className="Booking-por-DinnerVid">
                      <span>
                        <img src="images/gUU4MF87Ipw.png" />
                      </span>
                    </div>
                    <div className="Booking-por-DinnerVid">
                      <span>
                        <img src="images/gUU4MF87Ipw.png" />
                      </span>
                    </div>
                    <div className="Booking-por-DinnerVid">
                      <span>
                        <img src="images/gUU4MF87Ipw.png" />
                      </span>
                    </div>

                    <div className="Booking-por-DinnerVid">
                      <span>
                        <img src="images/gUU4MF87Ipw.png" />
                      </span>
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
                            <img src="images/pop.png" />{" "}
                          </span>
                        </div>

                        <div className="sidebar_followr-name">
                          <strong>Diana Pink</strong>
                          <small>@Pink_vegan</small>
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
                              <img src="images/starrating.png" />
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
                            <img src="images/pop.png" />{" "}
                          </span>
                        </div>

                        <div className="sidebar_followr-name">
                          <strong>Diana Pink</strong>
                          <small>@Pink_vegan</small>
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
                              <img src="images/starrating.png" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Reviews_mew_msg">
                      <span>
                        <img src="images/gUU4MF87Ipw.png" />
                      </span>
                    </div>
                  </div>
                  <div className="Reviews_sidebar_follow">
                    <div className="Reviews_sfollow">
                      <div className="sidebar_follow">
                        <div className="sidebar_follow-img">
                          <span>
                            <img src="images/pop.png" />{" "}
                          </span>
                        </div>

                        <div className="sidebar_followr-name">
                          <strong>Diana Pink</strong>
                          <small>@Pink_vegan</small>
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
                              <img src="images/starrating.png" />
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
                      <p>
                        I have been cooking for nearly 13 years in fine dining
                        restaurants and catering kitchens in Los Angeles CA. I
                        can prepare a wide variety of cuisines from around the
                        world, both traditional and modern, and I can accomodate
                        any dietary restrictions or nutritional preferences you
                        may have.
                      </p>
                      <p>
                        I have always loved food and cooking and being a
                        personal chef gives me an opportunity to create exactly
                        what the customer desires. If they have a very specific
                        palate or nutritional or dietary needs, I love the
                        challenge of coming up with dishes that meet their needs
                        while still being something that could easily be on a
                        restaurant menu with universal appeal. Everyone is
                        unique, but everyone deserves the enjoyment of having a
                        great meal and it's an unbelievable feeling to be able
                        to make that happen.
                      </p>
                      <p>
                        I Provide Private meals, Daily meals and with my skill
                        set can prep food for the week for you freshly cooked in
                        your home or delivered. follow work out regemin and eat
                        right becomes easy with my help you will get the right
                        proportion and calorie intake, macro, protein and
                        vitamins to acchive your goals.
                      </p>
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
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body modal-select-body">
              <div className="modal-select-img">
                <img src="images/unsplash_RHAtRIT3-CE.png" />
              </div>
              <div className="modal-select-text">
                <h3>How many guests are you expecting?</h3>
                <div className="modal-select-buz">
                  <h5>Which meals would you like catered?</h5>
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
                <div className="modal-select-buz">
                  <h5>
                    Which (if any) additional staff or services do you require?
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
                <div className="modal-select-buz">
                  <h5>Kitchen available?</h5>
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

                <div className="modal-select-estimated">
                  <h4>What is your estimated food budget per person?</h4>
                  <p>
                    (Excluding staff, rentals, equipment, tax, gratuity, etc.)
                  </p>
                </div>
                <div className="modal-select-buz">
                  <h5>Which (if any) additional supplies do you require?</h5>
                  <ul>
                    <li>
                      <input type="Dinnerware" id="Set" />
                      <label for="Dinnerware">Dinnerware and flatware</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Disposable" />
                      <label for="Disposable">
                        Disposable plates and utensils
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="napkins" />
                      <label for="napkins">Paper napkins</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Cloth" />
                      <label for="Cloth">Cloth napkins</label>
                    </li>
                    <li>
                      <input type="checkbox" id="trays" />
                      <label for="trays">
                        Serving trays,dishes, and utensils
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="modal-select-estimated">
                  <h4>Allergies we should know about requests</h4>
                </div>
                <div className="bi-oy mt-3">
                  <button>Select</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Booking_cost;
