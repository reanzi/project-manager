import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className="project-list section">
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>{project.content}</p>
          <p>
            Posted by{" "}
            <span className="text-text">
              {project.authorFirstName} {project.authorLastName}
            </span>
          </p>
          <p className="grey-text">2nd December, 8am</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
