import React from "react";
import uniqid from "uniqid";

export default class Experience extends React.Component {
  render() {
    const experience = this.props.experience;

    return (
      <div className="w-100 mb-2">
        <div className="section-header fw-bold gray">Experience</div>
        <hr />
        <div className="section-content">
          {experience.map((entry) => (
            <ExperienceEntry key={uniqid()} experienceDetails={entry} />
          ))}
        </div>
      </div>
    );
  }
}

class ExperienceEntry extends React.Component {
  render() {
    const { company, title, startDate, endDate, description } = this.props.experienceDetails;

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
          {description.map((entry) => (
            <DescriptionEntry key={uniqid()} descriptionDetails={entry} />
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
