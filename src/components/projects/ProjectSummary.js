import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  // const content = project.content;
  // const truncate = function (content, 40) {

  // 	if (!elem || !limit) return;

  // };

  return (
    <div className="project-list section">
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>{project.content}</p> <br />
          <div className="divider" />
          <p>
            Posted by &nbsp;
            <span className="grey-text">
              {project.authorFirstName} {project.authorLastName}
            </span>
          </p>
          <p className="grey-text">
            {moment(project.createdAt.toDate()).calendar()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
