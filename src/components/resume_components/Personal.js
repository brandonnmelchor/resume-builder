import React from "react";

export default class Personal extends React.Component {
  render() {
    const { firstName, lastName, phone, email, linkedin, github } = this.props.personal;

    return (
      <div className="w-100 pb-2">
        <div className="section-header fw-bold gray">
          {firstName} {lastName}
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
