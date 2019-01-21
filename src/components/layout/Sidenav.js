import React from "react";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <ul className="sidenav" id="mobile-demo">
      <li>
        <NavLink to="/signup">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Login</NavLink>
      </li>
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
    </ul>
  );
};
export default Sidenav;
