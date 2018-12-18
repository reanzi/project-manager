import React from "react";

const ProjectDetails = props => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title -{id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vitae
            beatae reprehenderit quidem adipisci, nisi fuga, totam pariatur
            suscipit dignissimos maiores quasi distinctio possimus eligendi
            nulla perferendis quod porro accusantium.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Rahel Nizku</div>
          <div>3rd November, 7am</div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
