import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import Layout from "../Components/Layout"
import axios from "axios"

export class contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      message: "",
      isLoading: false,
      response: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {
    const { name, email, message } = this.state
    this.setState({ isLoading: true })
    axios
      .post(`https://backend.kappohotel.com/api/contact/`, {
        name,
        email,
        message,
      })
      .then(res => {
        this.setState({
          isLoading: false,
          response: "Message was sent successfuly",
        })
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          response: "Message was not sent",
        })
      })
    e.preventDefault()
  }

  render() {
    const { name, email, message, isLoading, response } = this.state
    return (
      <Layout name="Contact">
        <Row className="p-2">
          <Col md={6}>
            {isLoading === true && "Sending message..."}
            {response ? (
              <div className="text-center">{response}</div>
            ) : (
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Name:</label>
                  <input
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">
                    Email address:
                  </label>
                  <input
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Message:</label>
                  <textarea
                    name="message"
                    value={message}
                    onChange={this.handleChange}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-primary form-control"
                    name="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </Col>
          <Col md={6} className="pt-5">
            <p>
              3 Moshalashi Close, Beside Anifowose Upholstery, off Onilude
              street, Sango Ile-dudu, Badagry, Lagos
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
}

export default contact
