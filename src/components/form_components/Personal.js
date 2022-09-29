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
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input type="text" className="form-control" id="firstName" value={firstName} onChange={updatePersonal} maxLength="25" />
            </div>
            <div className="col">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input type="text" className="form-control" id="lastName" value={lastName} onChange={updatePersonal} maxLength="25" />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input type="tel" className="form-control" id="phone" value={phone} onChange={updatePersonal} maxLength="25" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" value={email} onChange={updatePersonal} maxLength="50" />
          </div>
          <div className="mb-3">
            <label htmlFor="linkedin" className="form-label">
              LinkedIn
            </label>
            <input type="url" className="form-control" id="linkedin" value={linkedin} onChange={updatePersonal} maxLength="50" />
          </div>
          <div>
            <label htmlFor="github" className="form-label">
              GitHub
            </label>
            <input type="url" className="form-control" id="github" value={github} onChange={updatePersonal} maxLength="50" />
          </div>
        </form>
      </div>
    );
  }
}
