import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";

const Food2 = () => {
  return (
    <>
      <Layout>
        <div className="main_width">
          <div className="container-fluid">
            <div className="page_cat main-cat">
              <h2>Food</h2>
              <div className="page_cat_width">
                <ul>
                  <li className="action-list">
                    <Link href={"/Food"}>
                      <span>
                        <img src="images/recipe.png" />
                      </span>
                      <strong>Food</strong>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/Drinks"}>
                      <span>
                        <img src="images/drinks-2.png" />
                      </span>{" "}
                      <strong>Drinks</strong>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/Dessert"}>
                      <span>
                        <img src="images/DESSERT.png" />
                      </span>{" "}
                      <strong>Dessert</strong>
                    </Link>{" "}
                  </li>
                  <li>
                    <Link href={"/Speciality"}>
                      <span>
                        <img src="images/specialty.png" />
                      </span>{" "}
                      <strong>Specialty</strong>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/Seasoning"}>
                      <span>
                        <img src="images/SEASONING.png" />
                      </span>{" "}
                      <strong>Seasoning</strong>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/Sauce"}>
                      <span>
                        <img src="images/SAUCE.png" />
                      </span>{" "}
                      <strong>Sauce</strong>
                    </Link>{" "}
                  </li>
                  <li>
                    <Link href={"/Appliances"}>
                      <span>
                        <img src="images/appliances.png" />
                      </span>{" "}
                      <strong>Appliances</strong>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/FoodHack"}>
                      <span>
                        <img src="images/foodhack.png" />
                      </span>{" "}
                      <strong>Food Hack</strong>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="foodnav-bar">
            <div className="container">
              <ul>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownMenuClickableInside"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                  >
                    Search By:{" "}
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuClinside"
                  >
                    <li className="togal1">
                      <input type="checkbox" id="Appliances" />{" "}
                      <label for="Appliances">Appliances</label>
                    </li>

                    <li className="togal2">
                      <input type="checkbox" id="Athlete" />{" "}
                      <label for="Athlete">Athlete</label>
                    </li>
                    <li className="togal3">
                      <input type="checkbox" id="Cuisines" />{" "}
                      <label for="Cuisines">Cuisines</label>
                    </li>
                    <li className="togal4">
                      <input type="checkbox" id="Diet" />{" "}
                      <label for="Diet">Diet</label>
                    </li>
                    <li className="togal5">
                      <input type="checkbox" id="Dessert" />{" "}
                      <label for="Dessert">Dessert</label>
                    </li>
                    <li className="togal6">
                      <input type="checkbox" id="Drinks" />{" "}
                      <label for="Drinks">Drinks</label>
                    </li>
                    <li className="togal7">
                      <input type="checkbox" id="Ingredients" />{" "}
                      <label for="Ingredients">Ingredients</label>
                    </li>
                    <li className="togal8">
                      <input type="checkbox" id="Meat" />{" "}
                      <label for="Meat">Meat</label>
                    </li>
                    <li className="togal9">
                      <input type="checkbox" id="Meal" />{" "}
                      <label for="Meal">Meal type</label>
                    </li>
                    <li className="togal10">
                      <input type="checkbox" id="Medicinal" />{" "}
                      <label for="Medicinal">Medicinal</label>
                    </li>
                    <li className="togal17">
                      <input type="checkbox" id="Lab" />{" "}
                      <label for="Lab">Lab</label>
                    </li>
                    <li className="togal11">
                      <input type="checkbox" id="Member" />{" "}
                      <label for="Member">Member Feed</label>
                    </li>
                    <li className="togal12">
                      <input type="checkbox" id="Prep" />{" "}
                      <label for="Prep">Prep Time</label>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown toshow togalmenu1">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                  >
                    Appliances{" "}
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </a>

                  <ul
                    className="dropdown-menu dropdowninpou"
                    aria-labelledby="dropdownMenuClinside"
                  >
                    <li>
                      <input type="checkbox" id="fryer" name="" />{" "}
                      <label for="fryer">Air fryer</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Pressure" name="" />{" "}
                      <label for="Pressure">Rice Cooker</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Cooker" name="" />{" "}
                      <label for="Cooker">Pressure Cooker</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Skillet" name="" />{" "}
                      <label for="Skillet">Electric Skillet</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Toaster" name="" />{" "}
                      <label for="Toaster">Toaster Oven</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Pot" name="" />{" "}
                      <label for="Pot">Slow Cooker /Crock Pot</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Grill" name="" />{" "}
                      <label for="Grill">George Forman Grill</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Microwave" name="" />{" "}
                      <label for="Microwave">Microwave</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Cream" name="" />{" "}
                      <label for="Cream">Ice Cream Machine</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Machine" name="" />{" "}
                      <label for="Machine">Bread Maker Machine</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Other" name="" />{" "}
                      <label for="Other">Other</label>
                    </li>
                  </ul>
                </li>

                <li
                  className="dropdown  toshow togalmenu2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                  >
                    Athlete{" "}
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </a>
                  <ul
                    className="dropdown-menu dropdowninpou"
                    aria-labelledby="dropdownMenuClinside"
                  >
                    <li>
                      <input type="checkbox" id="Breakfast" name="" />{" "}
                      <label for="Breakfast">Breakfast</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Brunch" name="" />{" "}
                      <label for="Brunch">Brunch</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Lunch" name="" />{" "}
                      <label for="Lunch">Lunch</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Snacks" name="" />{" "}
                      <label for="Snacks">Snacks</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Dinner" name="" />{" "}
                      <label for="Dinner">Dinner</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Dessertss" name="" />{" "}
                      <label for="Dessertss">Dessert</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Kid" name="" />{" "}
                      <label for="Kid">Kid Friendly </label>
                    </li>
                    <li>
                      <input type="checkbox" id="Salad" name="" />{" "}
                      <label for="Salad">Salad</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Sandwich" name="" />{" "}
                      <label for="Sandwich">Sandwich </label>
                    </li>
                    <li>
                      <input type="checkbox" id="Pizza" name="" />{" "}
                      <label for="Pizza">Pizza</label>
                    </li>

                    <li>
                      <input type="checkbox" id="Tacos" name="" />{" "}
                      <label for="Tacos">Tacos</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Lasagna" name="" />{" "}
                      <label for="Lasagna">Lasagna </label>
                    </li>
                    <li>
                      <input type="checkbox" id="Pizza" name="" />{" "}
                      <label for="Sushi">Sushi</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Pasta" name="" />{" "}
                      <label for="Pasta">Pasta</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Sides" name="" />{" "}
                      <label for="Sides">Sides </label>
                    </li>
                  </ul>
                </li>

                <li
                  className=" dropdown toshow togalmenu3"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  >
                    Cuisines{" "}
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </a>
                  <ul
                    className="dropdown-menu dropdowninpou"
                    aria-labelledby="dropdownMenuClinside"
                  >
                    <li>
                      <input type="checkbox" id="Breakfast" name="" />{" "}
                      <label for="Breakfast">Breakfast</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Brunch" name="" />{" "}
                      <label for="Brunch">Brunch</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Lunch" name="" />{" "}
                      <label for="Lunch">Lunch</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Snacks" name="" />{" "}
                      <label for="Snacks">Snacks</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Dinner" name="" />{" "}
                      <label for="Dinner">Dinner</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Dessert" name="" />{" "}
                      <label for="Dessert">Dessert</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Friendly" name="" />{" "}
                      <label for="Friendly">Kid Friendly</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Salad" name="" />{" "}
                      <label for="Salad">Salad</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Sandwich" name="" />{" "}
                      <label for="Sandwich">Sandwich</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Pizza" name="" />{" "}
                      <label for="Pizza">Pizza</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Tacos" name="" />{" "}
                      <label for="Tacos">Tacos</label>
                    </li>
                  </ul>
                </li>
                <li
                  className="  dropdown toshow togalmenu4"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Diet <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </a>
                  <ul
                    className="dropdown-menu dropdowninpou"
                    aria-labelledby="dropdownMenuClinside"
                  >
                    <li>
                      <input type="checkbox" id="Vegan" name="" />{" "}
                      <label for="Vegan">Vegan</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Lacto" name="" />{" "}
                      <label for="Lacto">Lacto Vegan</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Ovo" name="" />{" "}
                      <label for="Ovo">Ovo Vegan</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Vegana" name="" />{" "}
                      <label for="Vegana">Lacto Ovo Vegan</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Paleo" name="" />{" "}
                      <label for="Paleo">Paleo</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Pescatarian" name="" />{" "}
                      <label for="Pescatarian">Pescatarian</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Pollotarian" name="" />{" "}
                      <label for="Pollotarian">Pollotarian </label>
                    </li>
                    <li>
                      <input type="checkbox" id="Flexitarian" name="" />{" "}
                      <label for="Flexitarian">Flexitarian</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Ketogenic" name="" />{" "}
                      <label for="Ketogenic">Ketogenic </label>
                    </li>
                    <li>
                      <input type="checkbox" id="Beegan" name="" />{" "}
                      <label for="Beegan">Beegan</label>
                    </li>
                    <li>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        More
                      </button>
                    </li>
                  </ul>
                </li>
                <li
                  className="dropdown toshow togalmenu5"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dessert{" "}
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </a>
                  <ul
                    className="dropdown-menu dropdowninpou"
                    aria-labelledby="dropdownMenuClinside"
                  >
                    <li>
                      <input type="checkbox" id="Cake" name="" />{" "}
                      <label for="Cake">Cake</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Pie" name="" />{" "}
                      <label for="Pie">Pie</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Ice" name="" />{" "}
                      <label for="Ice">Ice Cream</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Cheese" name="" />{" "}
                      <label for="Cheese">Cheese Cake</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Cup" name="" />{" "}
                      <label for="Cup">Cup Cake</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Cookies" name="" />{" "}
                      <label for="Cookies">Cookies</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Brownies" name="" />{" "}
                      <label for="Brownies">Brownies</label>
                    </li>
                  </ul>
                </li>
                <li
                  className=" dropdown toshow togalmenu6"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Drinks <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </a>
                  <ul
                    className="dropdown-menu dropdowninpou"
                    aria-labelledby="dropdownMenuClinside"
                  >
                    <li>
                      <input type="checkbox" id="Barista" name="" />{" "}
                      <label for="Barista">Barista(alcohol)</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Juice" name="" />{" "}
                      <label for="Juice">Juice</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Coffee" name="" />{" "}
                      <label for="Coffee">Coffee</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Tea" name="" />{" "}
                      <label for="Tea">Tea</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Chocolate" name="" />{" "}
                      <label for="Chocolate">Hot Chocolate</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Detox" name="" />{" "}
                      <label for="Detox">Detox Drinks</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Workout" name="" />{" "}
                      <label for="Workout">Workout Drinks </label>
                    </li>
                    <li>
                      <input type="checkbox" id="Carbonated" name="" />{" "}
                      <label for="Carbonated">Carbonated</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Drinks" name="" />{" "}
                      <label for="Drinks">Drinks</label>
                    </li>
                  </ul>
                </li>
                <li
                  className="dropdown toshow togalmenu7"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Ingredients{" "}
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </a>
                  <ul
                    className="dropdown-menu dropdowninpou"
                    aria-labelledby="dropdownMenuClinside"
                  >
                    <li>
                      <input type="checkbox" id="Apple" name="" />{" "}
                      <label for="Apple">Apple</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Asparagus" name="" />{" "}
                      <label for="Asparagus">Asparagus</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Bagel" name="" />{" "}
                      <label for="Bagel">Bagel</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Bacon" name="" />{" "}
                      <label for="Bacon">Bacon</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Beans" name="" />{" "}
                      <label for="Beans">Beans</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Beef" name="" />{" "}
                      <label for="Beef">Beef</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Bread" name="" />{" "}
                      <label for="Bread">Bread </label>
                    </li>
                    <li>
                      <input type="checkbox" id="Broccoli" name="" />{" "}
                      <label for="Broccoli">Broccoli</label>
                    </li>
                    <li>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalmeat"
                      >
                        More
                      </button>
                    </li>
                  </ul>
                </li>
                <li
                  className="dropdown toshow togalmenu8"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Meat <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </a>
                  <ul
                    className="dropdown-menu dropdowninpou"
                    aria-labelledby="dropdownMenuClinside"
                  >
                    <li>
                      <input type="checkbox" id="Chicken" name="" />{" "}
                      <label for="Chicken">Chicken</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Beef" name="" />{" "}
                      <label for="Beef">Beef</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Pig" name="" />{" "}
                      <label for="Pig">Pig</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Turkey" name="" />{" "}
                      <label for="Turkey">Turkey</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Goat" name="" />{" "}
                      <label for="Goat">Goat</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Sheep" name="" />{" "}
                      <label for="Sheep">Sheep</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Gator" name="" />{" "}
                      <label for="Gator">Gator </label>
                    </li>
                    <li>
                      <input type="checkbox" id="Deer" name="" />{" "}
                      <label for="Deer">Deer</label>
                    </li>
                    <li>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalmeat"
                      >
                        More
                      </button>
                    </li>
                  </ul>
                </li>

                <li
                  className="  dropdown toshow togalmenu9"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Meal type{" "}
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </a>
                  <ul
                    className="dropdown-menu dropdowninpou"
                    aria-labelledby="dropdownMenuClinside"
                  >
                    <li>
                      <input type="checkbox" id="Vegan" name="" />{" "}
                      <label for="Vegan">Vegan</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Lacto" name="" />{" "}
                      <label for="Lacto">Lacto Vegan</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Ovo" name="" />{" "}
                      <label for="Ovo">Ovo Vegan</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Vegana" name="" />{" "}
                      <label for="Vegana">Lacto Ovo Vegan</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Paleo" name="" />{" "}
                      <label for="Paleo">Paleo</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Pescatarian" name="" />{" "}
                      <label for="Pescatarian">Pescatarian</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Pollotarian" name="" />{" "}
                      <label for="Pollotarian">Pollotarian </label>
                    </li>
                    <li>
                      <input type="checkbox" id="Flexitarian" name="" />{" "}
                      <label for="Flexitarian">Flexitarian</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Ketogenic" name="" />{" "}
                      <label for="Ketogenic">Ketogenic </label>
                    </li>
                    <li>
                      <input type="checkbox" id="Beegan" name="" />{" "}
                      <label for="Beegan">Beegan</label>
                    </li>
                    <li>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        More
                      </button>
                    </li>
                  </ul>
                </li>
                <li
                  className=" dropdown toshow togalmenu10"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Medicinal{" "}
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </a>
                  <ul
                    className="dropdown-menu dropdowninpou"
                    aria-labelledby="dropdownMenuClinside"
                  >
                    <li>
                      <input type="checkbox" id="Migraines" name="" />{" "}
                      <label for="Migraines">Headache (Migraines)</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Stomach" name="" />{" "}
                      <label for="Stomach">Stomach Pain</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Fatigue" name="" />{" "}
                      <label for="Fatigue">Fatigue</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Diabetes" name="" />{" "}
                      <label for="Diabetes">Diabetes</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Blood" name="" />{" "}
                      <label for="Blood">High Blood pressure</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Anxiety" name="" />{" "}
                      <label for="Anxiety">Anxiety</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Stress" name="" />{" "}
                      <label for="Stress">Stress</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Cannabis" name="" />{" "}
                      <label for="Cannabis">Cannabis</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Lupus" name="" />{" "}
                      <label for="Lupus">Lupus</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Sickle" name="" />{" "}
                      <label for="Sickle">Sickle Cell</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Inflammation" name="" />{" "}
                      <label for="Inflammation">Inflammation</label>
                    </li>
                  </ul>
                </li>
                <li
                  className="  dropdown toshow togalmenu17"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Lab<i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </a>
                  <ul
                    className="dropdown-menu dropdowninpou"
                    aria-labelledby="dropdownMenuClinside"
                  >
                    <li>
                      <input type="checkbox" id="Fermenting" name="" />{" "}
                      <label for="Fermenting">Fermenting</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Canning" name="" />{" "}
                      <label for="Canning">Canning</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Pickling" name="" />{" "}
                      <label for="Pickling">Pickling</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Can" name="" />{" "}
                      <label for="Can">Can Food Recipe</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Mixing" name="" />{" "}
                      <label for="MixingMixing">Food MixingMixing</label>
                    </li>
                    <li>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalmeat"
                      >
                        More
                      </button>
                    </li>
                  </ul>
                </li>
                <li
                  className=" dropdown toshow togalmenu11"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Member Feed{" "}
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="  dropdown toshow togalmenu12"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Prep Time{" "}
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="container-fluid">
            <div className="page_fliter">
              <div className="page_fliter_width">
                <div className="page_fliter_search">
                  <div className="page_fliter_select">
                    <select>
                      <option>Food</option>
                    </select>
                  </div>
                  <div className="page_fliter_input">
                    <input type="text" placeholder="" />
                    <button>
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
                <div className="page_fliter_data">
                  <span>
                    <i className="fa fa-align-center" aria-hidden="true"></i>
                    Filter
                  </span>
                </div>
              </div>
              <div className="page_fliter_value">
                <ul>
                  <li>
                    Toaster Oven
                    <span>
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </span>
                  </li>
                  <li>
                    Lunch
                    <span>
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </span>
                  </li>
                  <li>
                    Lunch
                    <span>
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </span>
                  </li>
                  <li className="catared">
                    Milk
                    <span>
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="full-page-display  full-page-inner">
          <div className="container-fluid">
            <div className="full-page-sidebar">
              <div className="full-sidebar-data">
                <h3>Suggestions For You</h3>

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
            </div>

            <div className="full-page-fullbar">
              <div className="full-page-member">
                <div className="row">
                  <div className="col-sm-6 col-md-3">
                    <div className="full-page-member-block">
                      <a href="#">
                        <div className="full-page-food">
                          <span>
                            <img src="images/Group208.png" />
                          </span>

                          <div className="full-page-front">
                            <h3>Breakfast</h3>
                            <h5>
                              45 <small>Recipe’s</small>
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="full-page-member-block">
                      <a href="#">
                        <div className="full-page-food">
                          <span>
                            <img src="images/Group208.png" />
                          </span>

                          <div className="full-page-front">
                            <h3>Breakfast</h3>
                            <h5>
                              45 <small>Recipe’s</small>
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="full-page-member-block">
                      <a href="#">
                        <div className="full-page-food">
                          <span>
                            <img src="images/Group208.png" />
                          </span>

                          <div className="full-page-front">
                            <h3>Breakfast</h3>
                            <h5>
                              45 <small>Recipe’s</small>
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="full-page-member-block">
                      <a href="#">
                        <div className="full-page-food">
                          <span>
                            <img src="images/Group208.png" />
                          </span>

                          <div className="full-page-front">
                            <h3>Breakfast</h3>
                            <h5>
                              45 <small>Recipe’s</small>
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="full-page-member-block">
                      <a href="#">
                        <div className="full-page-food">
                          <span>
                            <img src="images/Group208.png" />
                          </span>

                          <div className="full-page-front">
                            <h3>Breakfast</h3>
                            <h5>
                              45 <small>Recipe’s</small>
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="full-page-member-block">
                      <a href="#">
                        <div className="full-page-food">
                          <span>
                            <img src="images/Group208.png" />
                          </span>

                          <div className="full-page-front">
                            <h3>Breakfast</h3>
                            <h5>
                              45 <small>Recipe’s</small>
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="full-page-member-block">
                      <a href="#">
                        <div className="full-page-food">
                          <span>
                            <img src="images/Group208.png" />
                          </span>

                          <div className="full-page-front">
                            <h3>Breakfast</h3>
                            <h5>
                              45 <small>Recipe’s</small>
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="full-page-member-block">
                      <a href="#">
                        <div className="full-page-food">
                          <span>
                            <img src="images/Group208.png" />
                          </span>

                          <div className="full-page-front">
                            <h3>Breakfast</h3>
                            <h5>
                              45 <small>Recipe’s</small>
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="full-page-member-block">
                      <a href="#">
                        <div className="full-page-food">
                          <span>
                            <img src="images/Group208.png" />
                          </span>

                          <div className="full-page-front">
                            <h3>Breakfast</h3>
                            <h5>
                              45 <small>Recipe’s</small>
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="full-page-member-block">
                      <a href="#">
                        <div className="full-page-food">
                          <span>
                            <img src="images/Group208.png" />
                          </span>

                          <div className="full-page-front">
                            <h3>Breakfast</h3>
                            <h5>
                              45 <small>Recipe’s</small>
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="full-page-member-block">
                      <a href="#">
                        <div className="full-page-food">
                          <span>
                            <img src="images/Group208.png" />
                          </span>

                          <div className="full-page-front">
                            <h3>Breakfast</h3>
                            <h5>
                              45 <small>Recipe’s</small>
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="full-page-member-block">
                      <a href="#">
                        <div className="full-page-food">
                          <span>
                            <img src="images/Group208.png" />
                          </span>

                          <div className="full-page-front">
                            <h3>Breakfast</h3>
                            <h5>
                              45 <small>Recipe’s</small>
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="full-Recipe-Food">
                  <div className="">
                    <div className="full-Weekly-heading">
                      <h2>All Recipe’s</h2>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 col-md-3">
                        <div className="full-page-member-block">
                          <div className="full-page-member-product">
                            <img src="images/Group208.png" />
                            <ul>
                              <li>
                                <span>
                                  <img src="images/fave.png" />
                                </span>{" "}
                                <small>1400</small>
                              </li>
                              <li>
                                <span>
                                  <img src="images/bucket.png" />
                                </span>{" "}
                                <small>300</small>
                              </li>
                              <li>
                                <span>
                                  <img src="images/mealplanner.png" />
                                </span>{" "}
                                <small>200</small>
                              </li>
                              <li>
                                <span>
                                  <img src="images/like.png" />
                                </span>{" "}
                                <small>100</small>
                              </li>
                            </ul>
                          </div>
                          <div className="full-page-member-data">
                            <div className="full-page-member-img">
                              <span>
                                <img src="images/pop.png" />
                              </span>
                            </div>

                            <div className="full-page-member-name">
                              <strong>
                                Diana Pink <img src="images/IMG_4254.png" />
                              </strong>
                              <small>@Pink_vegan</small>
                              <label>Thai Basil Tofu Stir Fry</label>
                            </div>
                            <div className="full-page-start">
                              <span>
                                <img src="images/star.png" /> 4.1
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3">
                        <div className="full-page-member-block">
                          <div className="full-page-member-product">
                            <img src="images/Group208.png" />
                            <ul>
                              <li>
                                <span>
                                  <img src="images/fave.png" />
                                </span>{" "}
                                <small>1400</small>
                              </li>
                              <li>
                                <span>
                                  <img src="images/bucket.png" />
                                </span>{" "}
                                <small>300</small>
                              </li>
                              <li>
                                <span>
                                  <img src="images/mealplanner.png" />
                                </span>{" "}
                                <small>200</small>
                              </li>
                              <li>
                                <span>
                                  <img src="images/like.png" />
                                </span>{" "}
                                <small>100</small>
                              </li>
                            </ul>
                          </div>
                          <div className="full-page-member-data">
                            <div className="full-page-member-img">
                              <span>
                                <img src="images/pop.png" />
                              </span>
                            </div>

                            <div className="full-page-member-name">
                              <strong>
                                Diana Pink <img src="images/IMG_4254.png" />
                              </strong>
                              <small>@Pink_vegan</small>
                              <label>Thai Basil Tofu Stir Fry</label>
                            </div>
                            <div className="full-page-start">
                              <span>
                                <img src="images/star.png" /> 4.1
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3">
                        <div className="full-page-member-block">
                          <div className="full-page-member-product">
                            <img src="images/Group208.png" />
                            <ul>
                              <li>
                                <span>
                                  <img src="images/fave.png" />
                                </span>{" "}
                                <small>1400</small>
                              </li>
                              <li>
                                <span>
                                  <img src="images/bucket.png" />
                                </span>{" "}
                                <small>300</small>
                              </li>
                              <li>
                                <span>
                                  <img src="images/mealplanner.png" />
                                </span>{" "}
                                <small>200</small>
                              </li>
                              <li>
                                <span>
                                  <img src="images/like.png" />
                                </span>{" "}
                                <small>100</small>
                              </li>
                            </ul>
                          </div>
                          <div className="full-page-member-data">
                            <div className="full-page-member-img">
                              <span>
                                <img src="images/pop.png" />
                              </span>
                            </div>

                            <div className="full-page-member-name">
                              <strong>
                                Diana Pink <img src="images/IMG_4254.png" />
                              </strong>
                              <small>@Pink_vegan</small>
                              <label>Thai Basil Tofu Stir Fry</label>
                            </div>
                            <div className="full-page-start">
                              <span>
                                <img src="images/star.png" /> 4.1
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3">
                        <div className="full-page-member-block">
                          <div className="full-page-member-product">
                            <img src="images/Group208.png" />
                            <ul>
                              <li>
                                <span>
                                  <img src="images/fave.png" />
                                </span>{" "}
                                <small>1400</small>
                              </li>
                              <li>
                                <span>
                                  <img src="images/bucket.png" />
                                </span>{" "}
                                <small>300</small>
                              </li>
                              <li>
                                <span>
                                  <img src="images/mealplanner.png" />
                                </span>{" "}
                                <small>200</small>
                              </li>
                              <li>
                                <span>
                                  <img src="images/like.png" />
                                </span>{" "}
                                <small>100</small>
                              </li>
                            </ul>
                          </div>
                          <div className="full-page-member-data">
                            <div className="full-page-member-img">
                              <span>
                                <img src="images/pop.png" />
                              </span>
                            </div>

                            <div className="full-page-member-name">
                              <strong>
                                Diana Pink <img src="images/IMG_4254.png" />
                              </strong>
                              <small>@Pink_vegan</small>
                              <label>Thai Basil Tofu Stir Fry</label>
                            </div>
                            <div className="full-page-start">
                              <span>
                                <img src="images/star.png" /> 4.1
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Application Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body modalfoo-bg">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <div className="modalfoodleft">
                  <ul className="dropdowninpou" aria-labelledby="">
                    <li>
                      <input type="checkbox" id="Vegan" name="" />{" "}
                      <label for="Vegan">Vegan</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Lacto" name="" />{" "}
                      <label for="Lacto">Lacto Vegan</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Ovo" name="" />{" "}
                      <label for="Ovo">Ovo Vegan</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Vegana" name="" />{" "}
                      <label for="Vegana">Lacto Ovo Vegan</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Paleo" name="" />{" "}
                      <label for="Paleo">Paleo</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Pescatarian" name="" />{" "}
                      <label for="Pescatarian">Pescatarian</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Pollotarian" name="" />{" "}
                      <label for="Pollotarian">Pollotarian </label>
                    </li>
                    <li>
                      <input type="checkbox" id="Flexitarian" name="" />{" "}
                      <label for="Flexitarian">Flexitarian</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Ketogenic" name="" />{" "}
                      <label for="Ketogenic">Ketogenic </label>
                    </li>
                    <li>
                      <input type="checkbox" id="Beegan" name="" />{" "}
                      <label for="Beegan">Beegan</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Vegan" name="" />{" "}
                      <label for="Vegan">Vegan</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Lacto" name="" />{" "}
                      <label for="Lacto">Lacto Vegan</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Ovo" name="" />{" "}
                      <label for="Ovo">Ovo Vegan</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Vegana" name="" />{" "}
                      <label for="Vegana">Lacto Ovo Vegan</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Paleo" name="" />{" "}
                      <label for="Paleo">Paleo</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Pescatarian" name="" />{" "}
                      <label for="Pescatarian">Pescatarian</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Pollotarian" name="" />{" "}
                      <label for="Pollotarian">Pollotarian </label>
                    </li>
                    <li>
                      <input type="checkbox" id="Flexitarian" name="" />{" "}
                      <label for="Flexitarian">Flexitarian</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Ketogenic" name="" />{" "}
                      <label for="Ketogenic">Ketogenic </label>
                    </li>
                    <li>
                      <input type="checkbox" id="Beegan" name="" />{" "}
                      <label for="Beegan">Beegan</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Vegan" name="" />{" "}
                      <label for="Vegan">Vegan</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Lacto" name="" />{" "}
                      <label for="Lacto">Lacto Vegan</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Ovo" name="" />{" "}
                      <label for="Ovo">Ovo Vegan</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Vegana" name="" />{" "}
                      <label for="Vegana">Lacto Ovo Vegan</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Paleo" name="" />{" "}
                      <label for="Paleo">Paleo</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Pescatarian" name="" />{" "}
                      <label for="Pescatarian">Pescatarian</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Pollotarian" name="" />{" "}
                      <label for="Pollotarian">Pollotarian </label>
                    </li>
                    <li>
                      <input type="checkbox" id="Flexitarian" name="" />{" "}
                      <label for="Flexitarian">Flexitarian</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Ketogenic" name="" />{" "}
                      <label for="Ketogenic">Ketogenic </label>
                    </li>
                    <li>
                      <input type="checkbox" id="Beegan" name="" />{" "}
                      <label for="Beegan">Beegan</label>
                    </li>
                  </ul>
                </div>
                <div className="modalfoodright">
                  <div className="ingredients_inou">
                    <input type="text" placeholder="Exclude/Allergic" />
                    <button>
                      <img src="images/Maskgroup-13.png" />
                    </button>
                  </div>
                  <div className="Substitutiossn">
                    <div className="Subpo">
                      <h4>
                        Substitution <img src="images/subicon-4.png" />
                      </h4>
                      <div className="Cocktail_check Cocktail_check2">
                        <label className="switch">
                          <input type="checkbox" checked="" />
                          <span className="slider round"></span>
                        </label>
                      </div>
                      <h5>
                        This will allow recipe’s with excluded ingredients that
                        has substitution
                      </h5>
                    </div>
                  </div>
                  <div className="Exact-rangdatae">
                    <div className="Exact-range-data">
                      <h5>By Calories</h5>
                      <div className="Calories">
                        <span className="left-1">0</span>
                        <span id="demo"></span>
                        <span className="right-1">3000+</span>
                      </div>
                      <div className="slidecontainer">
                        <input
                          type="range"
                          min="1"
                          max="100"
                          value="50"
                          className="slidermy"
                          id="myRange"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="Range-range-full">
                    <div className="Exact-range-half">
                      <strong>Spicy level</strong>
                      <div className="Cocktail_check Cocktail_check4">
                        <label className="switch">
                          <input type="checkbox" checked="" />
                          <span className="slider round"></span>
                        </label>
                      </div>

                      <img src="images/chili.png" />
                    </div>

                    <div className="Exactt">
                      (Exact level{" "}
                      <div className="Cocktail_check Cocktail_check3">
                        <label className="switch">
                          <input type="checkbox" checked="" />
                          <span className="slider round"></span>
                        </label>
                      </div>{" "}
                      in Range)
                    </div>
                  </div>

                  <div className="levelon">
                    Spicy level on will find spicy recipe upto that level with
                    it off all recipe types will display in range
                  </div>
                  <div className="Range-range-full">
                    <div className="Exact-range-half">
                      <strong>Recipe by level</strong>
                      <div className="Cocktail_check Cocktail_check5">
                        <label className="switch">
                          <input type="checkbox" checked="" />
                          <span className="slider round"></span>
                        </label>
                      </div>

                      <img src="images/starating.png" />
                    </div>

                    <div className="Exactt">
                      (Exact level{" "}
                      <div className="Cocktail_check Cocktail_check3">
                        <label className="switch">
                          <input type="checkbox" checked="" />
                          <span className="slider round"></span>
                        </label>
                      </div>{" "}
                      in Range)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModalmeat"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body modalfoo-bg">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <div className="modalfoodleft">
                  <ul className=" dropdowninpou Conventional" aria-labelledby="">
                    <li>
                      <strong>Conventional</strong>
                    </li>
                    <li>
                      <input type="checkbox" id="Chicken" name="" />{" "}
                      <label for="Chicken">Chicken</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Beefs" name="" />{" "}
                      <label for="Beefs">Beef</label>
                    </li>
                    <li>
                      <input type="checkbox" id="PigOvo" name="" />{" "}
                      <label for="PigOvo">Pig</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Turkeya" name="" />{" "}
                      <label for="Turkeya">Turkey</label>
                    </li>
                    <li>
                      <input type="checkbox" id="PGoato" name="" />{" "}
                      <label for="PGoato">Goat</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Sheepn" name="" />{" "}
                      <label for="Sheepn">Sheep</label>
                    </li>
                  </ul>
                  <ul className="dropdowninpou Conventional" aria-labelledby="">
                    <li>
                      <strong>Non-Conventional</strong>
                    </li>
                    <li>
                      <input type="checkbox" id="Gator" name="" />{" "}
                      <label for="Gator">Gator</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Crocodile" name="" />{" "}
                      <label for="Crocodile">Crocodile</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Snake" name="" />{" "}
                      <label for="Snake">Snake</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Deer" name="" />{" "}
                      <label for="Deer">Deer</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Turtle" name="" />{" "}
                      <label for="Turtle">Turtle</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Cammel" name="" />{" "}
                      <label for="Cammel">Cammel</label>
                    </li>

                    <li>
                      <input type="checkbox" id="Ostrige" name="" />{" "}
                      <label for="Ostrige">Ostrige</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Ginnie" name="" />{" "}
                      <label for="Ginnie">Ginnie Pig</label>
                    </li>
                    <li>
                      <input type="checkbox" id="Frog" name="" />{" "}
                      <label for="Frog">Frog</label>
                    </li>
                  </ul>
                </div>
                <div className="modalfoodright">
                  <div className="ingredients_inou">
                    <input type="text" placeholder="Find" />
                    <button>
                      <img src="images/adding.png" />
                    </button>
                  </div>

                  <div className="willfood">
                    Conventional more normalized food, Non Conventional not
                    normalized. <img src="images/p6.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Food2;
