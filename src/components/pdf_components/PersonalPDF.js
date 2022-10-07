import React from "react";

export default class PersonalPDF extends React.Component {
  render() {
    let { firstName, lastName, phone, email, linkedin, github } = this.props.personal;
    firstName = firstName.length ? firstName : "First";
    lastName = lastName.length ? lastName : "Last";
    email = email.length ? `| ${email}` : "";
    github = github.length ? `| ${github}` : "";

    return (
      <div className="w-100 mb-2">
        <div className="pdf-header fw-bold pdf-gray">
          {firstName} {lastName}
        </div>
        <hr />
        <div className="pdf-content">
          {phone} {email}
        </div>
        <div className="pdf-content">
          {linkedin} {github}
        </div>
      </div>
    );
  }
}
