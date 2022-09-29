import React from "react";

export default class Personal extends React.Component {
  render() {
    const { firstName, lastName, phone, email, linkedin, github } = this.props.personal;
    const updatePersonal = this.props.updatePersonal;

    return (
      <div className="w-100">
        <form>
          <div className="row justify-content-center align-items-center mb-3">
            <div className="col">
              <InputGroup label="First Name" type="text" id="firstName" value={firstName} update={updatePersonal} length="25" />
            </div>
            <div className="col">
              <InputGroup label="Last Name" type="text" id="lastName" value={lastName} update={updatePersonal} length="25" />
            </div>
          </div>
          <div className="mb-3">
            <InputGroup label="Phone" type="tel" id="phone" value={phone} update={updatePersonal} length="25" />
          </div>
          <div className="mb-3">
            <InputGroup label="Email" type="email" id="email" value={email} update={updatePersonal} length="50" />
          </div>
          <div className="mb-3">
            <InputGroup label="LinkedIn" type="url" id="linkedin" value={linkedin} update={updatePersonal} length="50" />
          </div>
          <div>
            <InputGroup label="GitHub" type="url" id="github" value={github} update={updatePersonal} length="50" />
          </div>
        </form>
      </div>
    );
  }
}

class InputGroup extends React.Component {
  render() {
    const { label, type, id, value, update, length } = this.props;

    return (
      <div>
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <input type={type} className="form-control" id={id} value={value} onChange={update} maxLength={length} />
      </div>
    );
  }
}
