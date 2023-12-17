import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

const Report = () => {
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
          <div className="PoliceBadge">
            <img src="images/PoliceBadge.png" />
            <h2>Report User</h2>
            <span>Why are you reporting this account?</span>
            <small>
              We won't let them know if you take any of these actions.
            </small>
          </div>

          <div className="Barista-Spam">
            <ul>
              <li>
                <span>Spam</span>
                <input type="checkbox" id="checkboxspan" />
                <label for="checkboxspan"></label>
              </li>
              <li>
                <span>Copyright Material </span>
                <input type="checkbox" id="checkboxspan2" />
                <label for="checkboxspan2"></label>
              </li>
              <li>
                <span>Abusive & Threatening</span>
                <input type="checkbox" id="checkboxspan3" />
                <label for="checkboxspan3"></label>
              </li>
              <li>
                <span>Made me uncomfortable</span>
                <input type="checkbox" id="checkboxspan4" />
                <label for="checkboxspan4"></label>
              </li>
              <li>
                <span>Inappropriate content or behavior </span>
                <input type="checkbox" id="checkboxspan5" />
                <label for="checkboxspan5"></label>
              </li>
              <li>
                <span>Harassment </span>
                <input type="checkbox" id="checkboxspan6" />
                <label for="checkboxspan6"></label>
              </li>
              <li>
                <span>Other </span>
                <input type="checkbox" id="checkboxspan7" />
                <label for="checkboxspan7"></label>
              </li>
            </ul>
          </div>

          <div className="Barista-test">
            <ul>
              <li>
                <a href="">
                  <img src="images/video-camera.png" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="images/folder.png" />
                </a>
              </li>
            </ul>
            <textarea></textarea>

            <button>
              <Link href="/Thanks">Submit</Link>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Report;
