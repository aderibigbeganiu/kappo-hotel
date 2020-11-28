import React from "react"
import { Button, Col, Row } from "react-bootstrap"
import HomeLayout from "../Components/homeLayout"
import Gallery from "../Components/gallery"
import Event from "../Components/event"
import indexStyle from "./indexStyle.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import aboutUs from "../../static/about-us.png"
import Standard from "../../static/standard.jpeg"
import Classic from "../../static/classic.jpeg"
import Deluxe from "../../static/Deluxe.jpeg"
import Club from "../../static/club.jpeg"
import Bar from "../../static/bar.jpeg"

const Home = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          siteUrl
          image
        }
      }
    }
  `)
  const description = data.site.siteMetadata.description
  const title = data.site.siteMetadata.title
  const image = data.site.siteMetadata.image
  // const image = Img
  const pathname = location.pathname
  return (
    <HomeLayout name="Home">
      <Row className={indexStyle.row}>
        <Col md={6} className="p-5">
          <img
            src={aboutUs}
            alt="fancy-img"
            className="img-fluid"
            height="652"
            width="602"
          />
        </Col>
        <Col md={6} className="p-5">
          <h2 className={indexStyle.staySafe}>Stay Safe!</h2>
          <h4 className={indexStyle.welcome}>Welcome to</h4>
          <h1 className={indexStyle.title}>KAPPO HOTELS & SUITES</h1>
          {/* <p className={indexStyle.p}>
            Curabitur aliquet quam id dui posuere blandit. Nulla porttitor
            accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula
            elementum sed sit amet dui. Pellentesque in ipsum id orci porta
            dapibus. Curabitur non nulla sit amet nisl Curabitur aliquet quam id
            dui posuere blandit. Pellentesque in ipsum id orci porta dapibus.
            Sed porttitor lectus nibh. Proin eget tortor risus. Donec
            sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl
            tempus
          </p> */}
        </Col>
      </Row>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Club} class="mr-3" alt="Club" height="400" width="100%" />
            <div class="carousel-caption">
              <h3>Club </h3>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Bar} class="mr-3" alt="Club" height="400" width="100%" />
            <div class="carousel-caption">
              <h3>Bar </h3>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div className="container">
        <h1 className={indexStyle.accommodation}>Accommodation</h1>
        <nav className="mt-5">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              className="nav-link active"
              id="nav-standard-room-tab"
              data-toggle="tab"
              href="#nav-standard-room"
              role="tab"
              aria-controls="nav-standard-room"
              aria-selected="true"
            >
              Standard Room
            </a>
            <a
              className="nav-link"
              id="nav-classic-room-tab"
              data-toggle="tab"
              href="#nav-classic-room"
              role="tab"
              aria-controls="nav-classic-room"
              aria-selected="false"
            >
              Classic Room
            </a>
            <a
              className="nav-link"
              id="nav-deluxe-room-tab"
              data-toggle="tab"
              href="#nav-deluxe-room"
              role="tab"
              aria-controls="nav-deluxe-room"
              aria-selected="false"
            >
              Deluxe Room
            </a>
          </div>
        </nav>
        <div
          style={{
            border: "solid",
            borderWidth: "1px",
            borderColor: "#453435",
          }}
          className="tab-content"
          id="nav-tabContent"
        >
          <div
            className="tab-pane fade show active"
            id="nav-standard-room"
            role="tabpanel"
            aria-labelledby="nav-standard-room-tab"
          >
            <Row className="m-2" style={{ backgroundColor: "#E5E5E5" }}>
              <Col md={6}>
                <img src={Standard} alt="standard-room" className="img-fluid" />
              </Col>
              <Col md={6} className="mt-5 mb-2">
                <h4>Standard Room</h4>
                <p>From ₦7,000.00 / Night</p>
                {/* <p>
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                  Donec sollicitudin molestie malesuada. Curabitur arcu erat,
                  accumsan id imperdiet et, porttitor at sem.
                </p> */}
                <a href="tel:+2349040075259">
                  <Button varient="primary">Book Now</Button>
                </a>
              </Col>
            </Row>
          </div>
          <div
            className="tab-pane fade"
            id="nav-classic-room"
            role="tabpanel"
            aria-labelledby="nav-classic-room-tab"
          >
            <Row className="m-2" style={{ backgroundColor: "#E5E5E5" }}>
              <Col md={6}>
                <img src={Classic} alt="classic-room" className="img-fluid" />
              </Col>
              <Col md={6} className="mt-5 mb-2">
                <h4>Classic Room</h4>
                <p>From ₦8,000.00 / Night</p>
                {/* <p>
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                  Donec sollicitudin molestie malesuada. Curabitur arcu erat,
                  accumsan id imperdiet et, porttitor at sem.
                </p> */}
                <a href="tel:+2349040075259">
                  <Button varient="primary">Book Now</Button>
                </a>
              </Col>
            </Row>
          </div>
          <div
            className="tab-pane fade"
            id="nav-deluxe-room"
            role="tabpanel"
            aria-labelledby="nav-deluxe-room-tab"
          >
            <Row className="m-2" style={{ backgroundColor: "#E5E5E5" }}>
              <Col md={6}>
                <img src={Deluxe} alt="standard-room" className="img-fluid" />
              </Col>
              <Col md={6} className="mt-5 mb-2">
                <h4>Deluxe Room</h4>
                <p>From ₦10,000.00 / Night</p>
                {/* <p>
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                  Donec sollicitudin molestie malesuada. Curabitur arcu erat,
                  accumsan id imperdiet et, porttitor at sem.
                </p> */}
                <a href="tel:+2349040075259">
                  <Button varient="primary">Book Now</Button>
                </a>
              </Col>
            </Row>
          </div>
        </div>
        <div id="gallery" className="m-5">
          {/* <Gallery /> */}
        </div>
        <div id="event" className="m-5">
          <h1 className={indexStyle.events}>Events</h1>
          <Event />
        </div>
        <div id="youtube" className="m-5">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/SVH5sSrWeOc"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="m-1 d-flex justify-content-center">
          <h5>Night Club - Friday, Saturday and Sunday</h5>
        </div>
      </div>
    </HomeLayout>
  )
}

export default Home
