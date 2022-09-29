import React from "react";

export default class Experience extends React.Component {
  render() {
    const experience = this.props.experience;

    return (
      <div className="w-100 mb-2">
        <div className="section-header fw-bold gray">Experience</div>
        <hr />
        <div className="section-content">
          {experience.map((entry) => (
            <ExperienceEntry key={entry.id} experienceEntry={entry} />
          ))}
        </div>
      </div>
    );
  }
}

class ExperienceEntry extends React.Component {
  render() {
    const { company, title, startDate, endDate, details } = this.props.experienceEntry;

    return (
      <div>
        <div className="d-flex justify-content-between">
          <div>
            <span className="fw-bold">{company}</span>
            <span> | {title}</span>
          </div>
          <div className="fw-bold gray" style={{ width: "120px" }}>
            {startDate} - {endDate}
          </div>
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
