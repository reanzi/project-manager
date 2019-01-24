import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup } from "../../store/actions/authActions";

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signup(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit} autoComplete="off">
          <h5 className="grey-text text-darken-3">
            Sign Up -- Join Us for Free
          </h5>
          <br />
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              onChange={this.handleChange}
              value={this.state.lasttName}
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <div className="input-field">
            <button className="btn pink ligthen-1 z-depth-0">Join</button>
          </div>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: newUser => dispatch(signup(newUser))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
