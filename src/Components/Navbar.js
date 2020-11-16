import { Link } from "gatsby"
import React from "react"
import navStyle from "./navStyle.module.scss"

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md m-0 p-0 d-none d-md-block">
        <Link className="navbar-brand" to="/">
          <img
            src="https://kappohotels.com/wp-content/uploads/2020/05/cropped-hotel-LOGO-scaled-1-192x192.jpg"
            alt="home"
            height="80"
            width="100"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
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
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdown01">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
