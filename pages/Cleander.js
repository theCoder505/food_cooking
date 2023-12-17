import React from "react";
import Layout from "@/components/Layout";

const Cleander = () => {
  return (
    <Layout>
      <div className="main_width">
        <div className="container-fluid">
          <div className="Barista-nav">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Explore</a>
              </li>
              <li>
                <a href="">Help</a>
              </li>
              <li>
                <a href="">Profile</a>
              </li>
            </ul>
          </div>
          <div className="page_Calendar">
            <h2>Calendar</h2>
            <a href="">+</a>

            <div className="dropdown Calendar-po">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Link 3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="full-page-display">
        <div className="container">
          <div className="full-Calendar-display">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" href="#Day">
                  Day
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#Week">
                  Week
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#Month">
                  Month
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane container active" id="Day">
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
                            <span>
                              9
                              <ul>
                                <li>
                                  <small className="bol-red"></small>
                                </li>
                                <li>
                                  <small className="bol-black"></small>
                                </li>
                                <li>
                                  <small className="bol-green"></small>
                                </li>
                              </ul>
                            </span>
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
                          <td>17</td>
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
              </div>
              <div className="tab-pane container fade" id="Week">
                <div className="tcleander-table">
                  <div className="cleander-table-head">
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                    10/1/2021 - 10/7/2021
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
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="tab-pane container fade" id="Month">
                <div className="tcleander-table">
                  <div className="cleander-table-head">
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                    10/4/2023
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </div>
                  <div className="tcleander-table-data">
                    <table>
                      <thead>
                        <tr>
                          <th>Wed</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>4</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="full-Calendar-Planner">
            <div className="Calendar-Planner-left">
              <a href="">
                <img src="images/autofill.png" />
                Auto{" "}
              </a>
              <a href="">
                <img src="images/Pencil.png" />
                Edit{" "}
              </a>
            </div>

            <div className="Calendar-Planner-right">
              <a href=""> + Edit </a>
            </div>
          </div>

          <div className="Calendar-Planner-list">
            <h3>Mon, Oct 5</h3>
            <div className="Calendar-Planner-bar">
              <small className="tb-bar tb-org"></small>
              <div className="Calendar-Planner-list-left">
                <span>
                  <img src="images/FFqNATH27EM.png" />
                </span>
              </div>
              <div className="Calendar-Planner-list-right">
                <strong>BreakFast</strong>
                <span>Egg Bread</span>
                <ul>
                  <li>
                    <span className="span-pur"></span>Protein <small>300</small>
                  </li>
                  <li>
                    <span className="span-pin"></span> Fat <small>300</small>
                  </li>
                  <li>
                    <span className="span-yel"></span>Carbs <small>300</small>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Calendar-Planner-bar">
              <small className="tb-bar tb-pur"></small>
              <div className="Calendar-Planner-list-left">
                <span>
                  <img src="images/FFqNATH27EM.png" />
                </span>
              </div>
              <div className="Calendar-Planner-list-right">
                <strong>BreakFast</strong>
                <span>Egg Bread</span>
                <ul>
                  <li>
                    <span className="span-pur"></span>Protein <small>300</small>
                  </li>
                  <li>
                    <span className="span-pin"></span>Fat <small>300</small>
                  </li>
                  <li>
                    <span className="span-yel"></span>Carbs <small>300</small>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Calendar-Planner-bar">
              <small className="tb-bar tb-blue"></small>
              <div className="Calendar-Planner-list-left">
                <span>
                  <img src="images/FFqNATH27EM.png" />
                </span>
              </div>
              <div className="Calendar-Planner-list-right">
                <strong>BreakFast</strong>
                <span>Egg Bread</span>
                <ul>
                  <li>
                    <span className="span-pur"></span>Protein <small>300</small>
                  </li>
                  <li>
                    <span className="span-pin"></span> Fat <small>300</small>
                  </li>
                  <li>
                    <span className="span-yel"></span>Carbs <small>300</small>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Calendar-Planner-bar">
              <small className="tb-bar tb-rp"></small>
              <div className="Calendar-Planner-list-left">
                <span>
                  <img src="images/FFqNATH27EM.png" />
                </span>
              </div>
              <div className="Calendar-Planner-list-right">
                <strong>BreakFast</strong>
                <span>Egg Bread</span>
                <ul>
                  <li>
                    <span className="span-pur"></span>Protein <small>300</small>
                  </li>
                  <li>
                    <span className="span-pin"></span> Fat <small>300</small>
                  </li>
                  <li>
                    <span className="span-yel"></span>Carbs <small>300</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cleander;
