import { Link } from "gatsby"
import React from "react"
import footerStyle from "./footerStyle.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <div className="row">
        <div className="col-12 col-md text-left">
          <ul className="list-unstyled text-small">
            <li className="m-3">
              <a
                className="text-white"
                href="https://goo.gl/maps/wvynpGGm28codXdZ6"
                target="blank"
              >
                <i class="fal fa-map-marker-alt"></i>
                Shop 3 Block N Joke Plaza Bodija, Ibadan Oyo
              </a>
            </li>
            <li className="m-3">
              <a
                className="text-white"
                href="mailto:info@lakerscreative.com"
                target="blank"
              >
                <i class="far fa-envelope-open"></i>
                info@lakerscreative.com
              </a>
            </li>

            <li className="m-3">
              <a
                className="text-white"
                href="tel:+2347047434853"
                target="blank"
              >
                <i class="fal fa-phone"></i>
                +2347047434853
              </a>
            </li>
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
          <ul className="list-inline">
            <li className="list-inline-item text-white">twitter</li>
            <li className="list-inline-item text-white">facebook</li>
            <li className="list-inline-item text-white">youtube</li>
            <li className="list-inline-item text-white">linkedin</li>
          </ul>
        </div>
        <div className="col-12 col-md">
          <ul className="list-unstyled text-small">
            <li className="m-3">
              <Link className="text-white" to="/about">
                About
              </Link>
            </li>
            <li className="m-3">
              <Link className="text-white" to="/contact">
                Contact
              </Link>
            </li>
            <li className="m-3">
              <Link className="text-white" to="/services">
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
