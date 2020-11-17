import { Link } from "gatsby"
import React from "react"
import footerStyle from "./footerStyle.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <div className="row">
        <div className="col-12 col-md text-left">
          <ul className="list-unstyled text-small">
            <a
              className="text-white m-1"
              href="https://goo.gl/maps/wvynpGGm28codXdZ6"
              target="blank"
            >
              <i class="fal fa-map-marker-alt"></i>
              <li>Shop 3 Block N Joke Plaza Bodija, Ibadan Oyo</li>
            </a>
            <a
              className="text-white m-1"
              href="mailto:info@lakerscreative.com"
              target="blank"
            >
              <i class="far fa-envelope-open"></i>
              <li>info@lakerscreative.com</li>
            </a>
            <a
              className="text-white m-1"
              href="tel:+2347047434853"
              target="blank"
            >
              <i class="fal fa-phone"></i>
              <li>+2347047434853</li>
            </a>
          </ul>
        </div>
        <div className="col-12 col-md text-center">
          <Link to="/">
            <img
              className="mt-5 mb-3"
              src="https://kappohotels.com/wp-content/uploads/2020/05/cropped-hotel-LOGO-scaled-1-192x192.jpg"
              alt="logo"
              width="100"
              height="100"
            />
          </Link>
          <ul>
            <li>twitter</li>
            <li>facebook</li>
            <li>youtube</li>
            <li>linkedin</li>
          </ul>
        </div>
        <div className="col-12 col-md text-right">
          <ul className="list-unstyled text-small">
            <Link className="text-white m-1" to="/about">
              <li>About</li>
            </Link>
            <Link className="text-white m-1" to="/contact">
              <li>Contact</li>
            </Link>
            <Link className="text-white m-1" to="/services">
              <li>Services</li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
