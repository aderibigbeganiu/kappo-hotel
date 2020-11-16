import { Link } from "gatsby"
import React from "react"
import navStyle from "./navStyle.module.scss"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg m-0 p-0">
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
  )
}

export default Navbar
