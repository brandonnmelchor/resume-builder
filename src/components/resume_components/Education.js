import React from "react";

export default class Education extends React.Component {
  render() {
    const education = this.props.education;

    return (
      <div className="w-100 mb-2">
        <div className="section-header fw-bold gray">Education</div>
        <hr />
        <div className="section-content">
          {education.map((entry) => (
            <EducationEntry key={entry.id} educationEntry={entry} />
          ))}
        </div>
      </div>
    );
  }
}

class EducationEntry extends React.Component {
  render() {
    const { schoolName, degree, major, startMonth, startYear, endMonth, endYear } = this.props.educationEntry;

    return (
      <div className="d-flex justify-content-between">
        <div className="fw-bold">
          {schoolName} -- {degree} in {major}
        </div>
        <div className="fw-bold gray" style={{ width: "120px" }}>
          {startMonth} {startYear} - {endMonth} {endYear}
        </div>
      </div>
    );
  }
}
