import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import s from "./s.module.scss";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={s.layout}>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
      </div>
    );
  }
}
