import React from "react";
import "../../styles/resumePDF.css";

export default class EducationPDF extends React.Component {
  render() {
    const education = this.props.education;

    return (
      <div className="w-100 mb-2">
        <div className="pdf-header fw-bold gray">Education</div>
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
    const { schoolName, degree, major, startMonth, startYear, endMonth, endYear } = this.props.educationEntry;

    return (
      <div className="d-flex justify-content-between">
        <div className="fw-bold">
          {schoolName} -- {degree} in {major}
        </div>
        <div className="gray" style={{ width: "150px" }}>
          {startMonth} {startYear} - {endMonth} {endYear}
        </div>
      </div>
    );
  }
}
