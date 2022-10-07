import React from "react";

export default class PersonalResume extends React.Component {
  render() {
    const { firstName, lastName, phone, email, linkedin, github } = this.props.personal;

    return (
      <div className="w-100 mb-2">
        <div className="resume-header fw-bold resume-gray">
          {firstName} {lastName}
        </div>
        <hr />
        <div className="resume-content">
          {phone} | {email}
        </div>
        <div className="resume-content">
          {linkedin} | {github}
        </div>
      </div>
    );
  }
}
