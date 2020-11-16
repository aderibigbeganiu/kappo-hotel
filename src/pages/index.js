import React from "react"
import Layout from "../Components/Layout"
import { Col, Row } from "react-bootstrap"
import indexStyle from "./indexStyle.module.scss"
const Home = () => {
  return (
    <Layout name="Home">
      <Row className={indexStyle.row}>
        <Col md={6} className="p-5">
          <img
            src="https://thegeorgelagos.com/wp-content/uploads/2018/10/about-us-1.png"
            alt="fancy-img"
            className="img-fluid"
            height="652"
            width="602"
          />
        </Col>
        <Col md={6} className="p-5">
          <h2 className={indexStyle.staySafe}>Stay Safe!</h2>
          <h4 className={indexStyle.welcome}>Welcome to</h4>
          <h1 className={indexStyle.title}>KAPPO HOTEL & SUITES</h1>
          <p className={indexStyle.p}>
            Curabitur aliquet quam id dui posuere blandit. Nulla porttitor
            accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula
            elementum sed sit amet dui. Pellentesque in ipsum id orci porta
            dapibus. Curabitur non nulla sit amet nisl Curabitur aliquet quam id
            dui posuere blandit. Pellentesque in ipsum id orci porta dapibus.
            Sed porttitor lectus nibh. Proin eget tortor risus. Donec
            sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl
            tempus
          </p>
        </Col>
      </Row>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            className="nav-link active"
            id="nav-home-tab"
            data-toggle="tab"
            href="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Home
          </a>
          <a
            className="nav-link"
            id="nav-profile-tab"
            data-toggle="tab"
            href="#nav-profile"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Profile
          </a>
          <a
            className="nav-link"
            id="nav-contact-tab"
            data-toggle="tab"
            href="#nav-contact"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Contact
          </a>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          Home
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          Profile
        </div>
        <div
          className="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          Contact
        </div>
      </div>
    </Layout>
  )
}

export default Home
