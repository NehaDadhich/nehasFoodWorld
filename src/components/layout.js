import React from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <>
    <div className="is-dark-blue-bg">
      <Header />
      </div>
      <main className="fixed-height pad-10-t is-white-bg">{children}</main>
      <Footer className="is-white-bg"/>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
