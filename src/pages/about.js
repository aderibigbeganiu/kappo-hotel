import React from "react"
import Layout from "../Components/Layout"
import Chairman from "../../static/chairman-kappo.jpeg"

const About = () => {
  return (
    <Layout name="About">
      <div className="d-flex justify-content-center">
        <img
          src={Chairman}
          height="250"
          width="200"
          className="m-2"
          alt="chair man"
        />
      </div>
      <div className="d-flex justify-content-center">
        <h5>Kappo Babatunde Nudewhenu</h5>
      </div>
      <div className="d-flex justify-content-center">
        <small>(Chairman Kappo Hotels)</small>
      </div>
    </Layout>
  )
}

export default About
