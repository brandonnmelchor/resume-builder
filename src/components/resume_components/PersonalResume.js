import React from "react";

export default class PersonalResume extends React.Component {
  render() {
    let { firstName, lastName, phone, email, linkedin, github } = this.props.personal;
    firstName = firstName.length ? firstName : "First";
    lastName = lastName.length ? lastName : "Last";
    email = email.length ? `| ${email}` : "";
    github = github.length ? `| ${github}` : "";

    return (
      <div className="w-100 mb-2">
        <div className="resume-header fw-bold gray">
          {firstName} {lastName}
        </div>
        <hr />
        <div className="resume-content">
          {phone} {email}
        </div>
        <div className="resume-content">
          {linkedin} {github}
        </div>
      </div>
    );
  }
}
