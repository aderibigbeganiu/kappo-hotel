import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
        <Link to="/">Go Back Home</Link>
      </Layout>
    )
  }
}

export default NotFoundPage
