import React from "react";

export default class Personal extends React.Component {
  render() {
    const { firstName, lastName, phone, email, linkedin, github } = this.props.personal;

    return (
      <div className="w-100 mb-2">
        <div className="section-header fw-bold gray">
          {firstName.length ? firstName : "First"} {lastName.length ? lastName : "Last"}
        </div>
        <hr />
        <div className="section-content">
          {phone} | {email}
        </div>
        <div className="section-content">
          {linkedin} | {github}
        </div>
      </div>
    );
  }
}
