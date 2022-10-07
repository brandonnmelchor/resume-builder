import React from "react";

export default class PersonalPDF extends React.Component {
  render() {
    const { firstName, lastName, phone, email, linkedin, github } = this.props.personal;

    return (
      <div className="w-100 mb-2">
        <div className="pdf-header fw-bold resume-gray">
          {firstName} {lastName}
        </div>
        <hr />
        <div className="pdf-content">
          {phone} | {email}
        </div>
        <div className="pdf-content">
          {linkedin} | {github}
        </div>
      </div>
    );
  }
}
