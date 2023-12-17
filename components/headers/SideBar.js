import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";

const Sidebar = () => {
  
  return (
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
      <Link href="/Renew">
        <div className="full-sidebar-Premium">
          Premium{" "}
          <span>
            <img src="images/Subscriptionicon.png" />
          </span>{" "}
          ubscription
          <span>
            <img src="images/crown.png" />
          </span>
        </div>
      </Link>

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
            <Link href=" ">Meal Planner</Link>
          </li>
          <li>
            <Link href="">
              +Saved Fav Recipe’s
              <span>
                <img className="heart" src="images/MaskGroup-2.png" />
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="full-sidebar-box">
        <h3>Goals/Pref</h3>
        <ul>
          <li>
            <Link href="">Weight loss</Link>
          </li>
          <li>
            <Link href="">
              <span className="images-po">
                <img src="images/Cancel.png" />
              </span>{" "}
              Meat
            </Link>
          </li>
          <li>
            <Link href="">
              <span className="images-po">
                <img src="images/Cancel.png" />
              </span>{" "}
              Carbs
            </Link>
          </li>
          <li>
            <Link href="">
              <span className="images-po">
                <img src="images/NoEntry.png" />
              </span>{" "}
              Milk
            </Link>
          </li>
          <li>
            <Link href="">1,100 Daily Calories</Link>
          </li>
        </ul>
      </div>

      <div className="full-sidebar-box">
        <h3>Settings</h3>
        <ul>
          <li>
            <Link href="">Account, Preference, Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Sidebar;
