import React from "react";
import { TextInput } from "./FormInputs";

export default class Personal extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const handleInput = this.props.handleChange.handleInput;
    handleInput(event, "personal");
  }

  render() {
    const { firstName, lastName, phone, email, linkedin, github } = this.props.resume.personal;

    return (
      <div className="w-100">
        <div className="fs-4 fw-bold gray">Personal</div>
        <hr className="mb-4" />
        <form>
          <div className="row justify-content-center align-items-center mb-4">
            <div className="col">
              <TextInput label="First Name" type="text" id="firstName" value={firstName} handleChange={this.handleChange} length="25" />
            </div>
            <div className="col">
              <TextInput label="Last Name" type="text" id="lastName" value={lastName} handleChange={this.handleChange} length="25" />
            </div>
          </div>
          <div className="mb-4">
            <TextInput label="Phone" type="tel" id="phone" value={phone} handleChange={this.handleChange} length="25" />
          </div>
          <div className="mb-4">
            <TextInput label="Email" type="email" id="email" value={email} handleChange={this.handleChange} length="50" />
          </div>
          <div className="mb-4">
            <TextInput label="LinkedIn" type="url" id="linkedin" value={linkedin} handleChange={this.handleChange} length="50" />
          </div>
          <div>
            <TextInput label="GitHub" type="url" id="github" value={github} handleChange={this.handleChange} length="50" />
          </div>
        </form>
      </div>
    );
  }
}
