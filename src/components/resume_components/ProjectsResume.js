import React from "react";

export default class ProjectsResume extends React.Component {
  render() {
    const projects = this.props.projects;

    return (
      <div className="w-100">
        <div className="resume-header fw-bold resume-gray">Projects</div>
        <hr />
        <div className="resume-content">
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
    const { projectName, url, tech, details } = this.props.projectEntry;

    return (
      <div>
        <div>
          <span className="fw-bold">{projectName} | </span>
          <a className="text-decoration-none" href={url} target="_blank" rel="noreferrer">
            Demo
          </a>
        </div>
        <div className="fst-italic resume-gray">{tech}</div>
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
