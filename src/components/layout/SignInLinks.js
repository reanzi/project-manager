import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signout } from "../../store/actions/authActions";

const SignInLinks = props => {
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
          <a href="#" onClick={props.signout}>
            Log Out
          </a>
        </li>
      </ul>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    signout: () => dispatch(signout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignInLinks);
