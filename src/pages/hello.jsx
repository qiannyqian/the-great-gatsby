import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class HelloPage extends Component {
  render() {
    return (
      <Layout>
        <div className="hello-container">
          HELLO
        </div>
      </Layout>
    );
  }
}

export default HelloPage;
