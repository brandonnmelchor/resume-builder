import React from "react";

export default class Projects extends React.Component {
  render() {
    const projects = this.props.projects;

    return (
      <div className="w-100">
        <div className="section-header fw-bold gray">Projects</div>
        <hr />
        <div className="section-content">
          {projects.map((entry) => (
            <ProjectEntry key={entry.id} projectDetails={entry} />
          ))}
        </div>
      </div>
    );
  }
}

class ProjectEntry extends React.Component {
  render() {
    const { projectName, url, description } = this.props.projectDetails;

    return (
      <div>
        <div>
          <span className="fw-bold">{projectName} </span>
          <a className="text-decoration-none gray" href={url} target="_blank" rel="noreferrer">
            | Link
          </a>
        </div>
        <ul style={{ margin: "0" }}>
          {description.map((entry) => (
            <DescriptionEntry key={entry.id} descriptionDetails={entry.text} />
          ))}
        </ul>
      </div>
    );
  }
}

class DescriptionEntry extends React.Component {
  render() {
    const descriptionDetails = this.props.descriptionDetails;
    return <li>{descriptionDetails}</li>;
  }
}
