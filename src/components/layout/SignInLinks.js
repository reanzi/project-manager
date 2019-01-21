import React from "react";
import { NavLink } from "react-router-dom";

const SignInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/profile" className="btn btn-floating pink lighten-1">
            RM
          </NavLink>
        </li>
      </ul>
      <ul className="right  hide-on-med-and-down">
        <li>
          <NavLink to="/create">New Project</NavLink>
        </li>
        <li>
          <NavLink to="/">Log Out</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default SignInLinks;
