import React from "react";
import { TextInput } from "./FormInputs";

export default class Personal extends React.Component {
  render() {
    const { firstName, lastName, phone, email, linkedin, github } = this.props.personal;
    const updateInput = this.props.updateInput;

    return (
      <div className="w-100">
        <form>
          <div className="row justify-content-center align-items-center mb-4">
            <div className="col">
              <TextInput label="First Name" type="text" id="firstName" value={firstName} updateInput={updateInput} length="25" />
            </div>
            <div className="col">
              <TextInput label="Last Name" type="text" id="lastName" value={lastName} updateInput={updateInput} length="25" />
            </div>
          </div>
          <div className="mb-4">
            <TextInput label="Phone" type="tel" id="phone" value={phone} updateInput={updateInput} length="25" />
          </div>
          <div className="mb-4">
            <TextInput label="Email" type="email" id="email" value={email} updateInput={updateInput} length="50" />
          </div>
          <div className="mb-4">
            <TextInput label="LinkedIn" type="url" id="linkedin" value={linkedin} updateInput={updateInput} length="50" />
          </div>
          <div>
            <TextInput label="GitHub" type="url" id="github" value={github} updateInput={updateInput} length="50" />
          </div>
        </form>
      </div>
    );
  }
}
