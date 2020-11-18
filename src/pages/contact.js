import React from "react"
import { Col, Row } from "react-bootstrap"
import Layout from "../Components/Layout"

function Contact() {
  return (
    <Layout>
      <Row className="p-2">
        <Col md={6}>
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Name:</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Email address:</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Message:</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group">
              <button className="btn btn-primary form-control">Submit</button>
            </div>
          </form>
        </Col>
        <Col md={6} className="pt-5">
          <p>
            3 Moshalashi Close, Beside Anifowose Upholstery, off Onilude street,
            Sango Ile-dudu, Badagry, Lagos
          </p>
          <p>
            <a
              className="text-dark"
              href="mailto:info@kappohotel.com"
              target="blank"
              style={{ textDecoration: "none" }}
            >
              info@kappohotel.com
            </a>
          </p>
          <p>
            <a
              className="text-dark"
              href="tel:+2349040075259"
              target="blank"
              style={{ textDecoration: "none" }}
            >
              09040075259
            </a>
          </p>
          <p>
            <a
              className="text-dark"
              href="tel:+2349029925550"
              target="blank"
              style={{ textDecoration: "none" }}
            >
              09029925550
            </a>
          </p>
        </Col>
      </Row>
    </Layout>
  )
}

export default Contact
