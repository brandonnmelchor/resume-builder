import React from "react";

export default class EducationPDF extends React.Component {
  render() {
    const education = this.props.education;

    return (
      <div className="w-100 mb-2">
        <div className="pdf-header fw-bold pdf-gray">Education</div>
        <hr />
        <div className="pdf-content">
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
        <div className="pdf-gray" style={{ width: "150px" }}>
          {startMonth} {startYear} {endMonth} {endYear}
        </div>
      </div>
    );
  }
}
