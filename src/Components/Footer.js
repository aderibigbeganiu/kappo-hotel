import { Link } from "gatsby"
import React from "react"
import footerStyle from "./footerStyle.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <div className="row">
        <div className="col-12 col-md text-left">
          <ul className="list-unstyled text-small">
            <li className="m-3 text-white">
              <i className="fas fa-map-marker-alt m-2"></i>3 Moshalashi Close,
              Beside Anifowose Upholstery, off Onilude street, Sango Ile-dudu,
              Badagry, Lagos
            </li>
            <li className="m-3">
              <a
                className="text-white"
                href="mailto:info@kappohotel.com"
                target="blank"
                style={{ textDecoration: "none" }}
              >
                <i className="fas fa-envelope m-2"></i>
                info@kappohotel.com
              </a>
            </li>

            <li className="m-3">
              <p>
                <a
                  className="text-white"
                  href="tel:+2349040075259"
                  target="blank"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fas fa-phone-alt m-2"></i>
                  09040075259
                </a>
              </p>
              <p>
                <a
                  className="text-white"
                  href="tel:+2349029925550"
                  target="blank"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fas fa-phone-alt m-2"></i>
                  09029925550
                </a>
              </p>
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
            <li className="list-inline-item text-white">
              <span className={footerStyle.round}>
                <i className="fab fa-twitter" style={{ width: "15px" }}></i>
              </span>
            </li>
            <a
              href="https://m.facebook.com/StandardHotelinTheHeartOfBadagry/"
              target="blank"
              className="text-white"
            >
              <li className="list-inline-item text-white">
                <span className={footerStyle.round}>
                  <i
                    className="fab fa-facebook-f"
                    style={{ width: "15px" }}
                  ></i>
                </span>
              </li>
            </a>
            <li className="list-inline-item text-white">
              <span className={footerStyle.round}>
                <i className="fab fa-youtube" style={{ width: "15px" }}></i>
              </span>
            </li>
            <li className="list-inline-item text-white">
              <span className={footerStyle.round}>
                <i className="fab fa-linkedin-in" style={{ width: "15px" }}></i>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md">
          <ul className="list-unstyled text-small text-center">
            <li className="m-3">
              <Link
                className="text-white"
                to="/about"
                style={{ textDecoration: "none" }}
              >
                About
              </Link>
            </li>
            <li className="m-3">
              <Link
                className="text-white"
                to="/contact"
                style={{ textDecoration: "none" }}
              >
                Contact
              </Link>
            </li>
            <li className="m-3">
              <Link
                className="text-white"
                to="/services"
                style={{ textDecoration: "none" }}
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="text-white d-sm-block d-md-none" />
      <div className="text-center text-small text-secondary mt-3">
        <small>© 2020 BY KAPPO HOTELS & SUITES. ALL RIGHTS RESERVED</small>
      </div>
    </footer>
  )
}

export default Footer
