import React, { Component } from "react";
import { connect } from "react-redux";
import { signin } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
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
    // console.log(this.state);
    this.props.signin(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit} autoComplete="off">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <br />
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink ligthen-1 z-depth-0">Enter</button>
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
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signin: creds => dispatch(signin(creds))
  };
};

export default connect(
  mapStateToProps, //1st params is 'mapStateToProps
  mapDispatchToProps
)(SignIn);
