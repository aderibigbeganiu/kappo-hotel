import { Link } from "gatsby"
import React from "react"
import navStyle from "./navStyle.module.scss"

const Navbar = () => {
  return (
    <>
      <span className="d-none d-md-block">
        <nav className="navbar navbar-expand-md m-0 p-0">
          <Link className="navbar-brand" to="/">
            <img
              src="https://kappohotels.com/wp-content/uploads/2020/05/cropped-hotel-LOGO-scaled-1-192x192.jpg"
              alt="home"
              height="80"
              width="100"
            />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link
                  className={navStyle.navItem}
                  activeClassName={navStyle.activeNavItem}
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={navStyle.navItem}
                  activeClassName={navStyle.activeNavItem}
                  to="/gallery"
                >
                  GALLERY
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={navStyle.navItem}
                  activeClassName={navStyle.activeNavItem}
                  to="/about"
                >
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={navStyle.navItem}
                  activeClassName={navStyle.activeNavItem}
                  to="services"
                >
                  SERVICES & AMENITIES
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={navStyle.navItem}
                  activeClassName={navStyle.activeNavItem}
                  to="/contact"
                >
                  CONTACT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={navStyle.navItem}
                  activeClassName={navStyle.activeNavItem}
                  to="/Offer"
                >
                  OFFERS
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </span>
      <nav class="navbar navbar-dark d-sm-block d-md-none">
        <Link class="navbar-brand" to="/">
          <img
            src="https://kappohotels.com/wp-content/uploads/2020/05/cropped-hotel-LOGO-scaled-1-192x192.jpg"
            alt="home"
            height="50"
            width="60"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample01"
          aria-controls="navbarsExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ outline: "none" }}
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/gallery">
                GALLERY
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                ABOUT US
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/services">
                SERVICES & AMENITIES
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">
                CONTACT US
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/offer">
                OFFER
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
