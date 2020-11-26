import React from "react"
import Layout from "../Components/Layout"
import Chairman from "../../static/chairman-kappo.jpeg"

const About = () => {
  return (
    <Layout name="About">
      <div className="d-flex justify-content-center">
        <img src={Chairman} height="250" width="200" className="m-2" />
      </div>
      <div className="d-flex justify-content-center">
        <h3>Chairman Kappo Hotels</h3>
      </div>
    </Layout>
  )
}

export default About
