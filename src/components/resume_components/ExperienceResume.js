import React from "react";

export default class ExperienceResume extends React.Component {
  render() {
    const experience = this.props.experience;

    return (
      <div className="w-100 mb-2">
        <div className="resume-header fw-bold gray">Experience</div>
        <hr />
        <div className="resume-content">
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
    let { company, title, startMonth, startYear, endMonth, endYear, details } = this.props.experienceEntry;
    endMonth = endMonth.length ? `- ${endMonth}` : "";

    return (
      <div>
        <div className="d-flex justify-content-between">
          <div className="fw-bold">{company}</div>
          <div className="gray" style={{ width: "120px" }}>
            {startMonth} {startYear} {endMonth} {endYear}
          </div>
        </div>
        <div className="gray">{title}</div>
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
