import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    // console.log(state);
    const { projects, auth, notifications } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container dashboard">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { projects } = state.firestore.ordered;
  const { auth } = state.firebase;
  const { notifications } = state.firestore.ordered;
  // console.log(projects);
  return {
    // projects: state.project.projects  // local data
    projects, // from firestore
    auth,
    notifications
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects" },
    { collection: "notifications", limit: 4 }
  ])
)(Dashboard);
