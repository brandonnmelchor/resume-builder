import React from "react";

export default class EducationResume extends React.Component {
  render() {
    const education = this.props.education;

    return (
      <div className="w-100 mb-2">
        <div className="resume-header fw-bold gray">Education</div>
        <hr />
        <div className="resume-content">
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
    let { schoolName, degree, major, startMonth, startYear, endMonth, endYear } = this.props.educationEntry;
    degree = degree.length ? `-- ${degree}` : "";
    major = major.length ? `in ${major}` : "";
    endMonth = endMonth.length ? `- ${endMonth}` : "";

    return (
      <div className="d-flex justify-content-between">
        <div className="fw-bold">
          {schoolName} {degree} {major}
        </div>
        <div className="gray" style={{ width: "120px" }}>
          {startMonth} {startYear} {endMonth} {endYear}
        </div>
      </div>
    );
  }
}
