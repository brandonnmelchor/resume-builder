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
            <ProjectEntry key={entry.id} projectEntry={entry} />
          ))}
        </div>
      </div>
    );
  }
}

class ProjectEntry extends React.Component {
  render() {
    const { projectName, url, details } = this.props.projectEntry;

    return (
      <div>
        <div>
          <span className="fw-bold">{projectName} </span>
          <a className="text-decoration-none gray" href={url} target="_blank" rel="noreferrer">
            | Link
          </a>
        </div>
        <ul style={{ margin: "0" }}>
          {details.map((entry) => (
            <DetailsEntry key={entry.id} detailsEntry={entry.text} />
          ))}
        </ul>
      </div>
    );
  }
}

class DetailsEntry extends React.Component {
  render() {
    const detailsEntry = this.props.detailsEntry;
    return <li>{detailsEntry}</li>;
  }
}
