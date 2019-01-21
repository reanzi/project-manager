import React from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
import Sidenav from "./Sidenav";

const Navbar = () => {
  // $(document).ready(function() {
  //   $(".sidenav").sidenav();
  // });
  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper purple darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            weManage
          </Link>
          <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          <SignInLinks />
          <SignOutLinks />
          <Sidenav />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
