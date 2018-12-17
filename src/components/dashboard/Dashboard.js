import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

class Dashboard extends Component {
  render() {
    return (
      <div className="container dashboard">
        <div className="row">
          <div className="col s12 m6">
            <h2 className="center">Project List</h2>
            <ProjectList />
          </div>
          <div className="col s12 m5 offset-m1">
            <h3 className="center">Notification</h3>
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
