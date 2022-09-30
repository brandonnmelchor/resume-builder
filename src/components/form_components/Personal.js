import React from "react";

export default class Personal extends React.Component {
  render() {
    const { firstName, lastName, phone, email, linkedin, github } = this.props.personal;
    const update = this.props.update;

    return (
      <div className="w-100">
        <form>
          <div className="row justify-content-center align-items-center mb-4">
            <div className="col">
              <TextInput label="First Name" type="text" id="firstName" value={firstName} update={update} length="25" />
            </div>
            <div className="col">
              <TextInput label="Last Name" type="text" id="lastName" value={lastName} update={update} length="25" />
            </div>
          </div>
          <div className="mb-4">
            <TextInput label="Phone" type="tel" id="phone" value={phone} update={update} length="25" />
          </div>
          <div className="mb-4">
            <TextInput label="Email" type="email" id="email" value={email} update={update} length="50" />
          </div>
          <div className="mb-4">
            <TextInput label="LinkedIn" type="url" id="linkedin" value={linkedin} update={update} length="50" />
          </div>
          <div>
            <TextInput label="GitHub" type="url" id="github" value={github} update={update} length="50" />
          </div>
        </form>
      </div>
    );
  }
}

class TextInput extends React.Component {
  render() {
    const { label, type, id, value, update, length } = this.props;

    return (
      <div>
        <label htmlFor={id} className="form-label fw-bold">
          {label}
        </label>
        <input type={type} className="form-control" id={id} value={value} onChange={update} maxLength={length} />
      </div>
    );
  }
}
