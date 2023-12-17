import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-logo">
                <Link href="/AccLandingPage">
                  <img src="images/footer-logo.png" />
                </Link>

                <h3>All Rights Reserved. </h3>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="footer-nav">
                <h3>Fresh Recipe</h3>
                <ul>
                  <li>
                    <Link href="/Food">Recipes</Link>
                  </li>
                  <li>
                    <Link href="/Medicinal">Medicinal Recipe’s</Link>
                  </li>
                  <li>
                    <Link href="#">Copy Cat Recipe’s</Link>
                  </li>
                  <li>
                    <Link href="#">Fermentation</Link>
                  </li>
                  <li>
                    <Link href="#">Meal Plan</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="footer-nav">
                <h3>In News </h3>
                <ul>
                  <li>
                    <Link href="/Articles">Articles</Link>
                  </li>
                  <li>
                    <Link href="/AccAffiliates">
                      Become a Affiliate{" "}
                      <span>
                        <img src="images/image343.png" />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Report">Report</Link>
                  </li>
                  <li>
                    <Link href="/Booking_creat">Join bookings</Link>
                  </li>
                  <li>
                    <Link href="/Terms">Terms Of Service</Link>
                  </li>
                  <li>
                    <Link href="/Privacy">Private Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="footer-nav">
                <h3>About US</h3>
                <ul>
                  <li>
                    <Link href="/Holiday">Holiday</Link>
                  </li>
                  <li>
                    <Link href="/Faqs">FAQs</Link>
                  </li>
                  <li>
                    <Link href="">Advertise</Link>
                  </li>
                  <li>
                    <Link href="">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="">Mobile</Link>
                  </li>
                  <li>
                    <Link href="/Renew" className="premiumsub">
                      <img src="images/premiumsub.png" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-Newsletter">
                <h3>Join Our Newsletter</h3>
                <div className="Newsletter">
                  <input type="text" placeholder="Email" name="" />
                  <button>
                    <img src="images/news.png" />
                  </button>
                </div>
              </div>
              <div className="footer-social">
                <ul>
                  <li>
                    <Link href="">
                      <img src="images/facebook.png" />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <img src="images/insta.png" />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <img src="images/twt.png" />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <img src="images/pin.png" />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <img src="images/youtube.png" />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <img src="images/tiktok.png" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
