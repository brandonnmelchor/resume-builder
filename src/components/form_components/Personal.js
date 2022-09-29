import React from "react";

export default class Personal extends React.Component {
  render() {
    const { firstName, lastName, phone, email, linkedin, github } = this.props.personal;
    const updatePersonal = this.props.updatePersonal;

    return (
      <div className="w-100">
        <form>
          <div className="mb-4">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input type="text" className="form-control" id="firstName" value={firstName} onChange={updatePersonal} />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input type="text" className="form-control" id="lastName" value={lastName} onChange={updatePersonal} />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input type="text" className="form-control" id="phone" value={phone} onChange={updatePersonal} />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="text" className="form-control" id="email" value={email} onChange={updatePersonal} />
          </div>
          <div className="mb-4">
            <label htmlFor="linkedin" className="form-label">
              LinkedIn
            </label>
            <input type="text" className="form-control" id="linkedin" value={linkedin} onChange={updatePersonal} />
          </div>
          <div className="mb-4">
            <label htmlFor="github" className="form-label">
              GitHub
            </label>
            <input type="text" className="form-control" id="github" value={github} onChange={updatePersonal} />
          </div>
        </form>
      </div>
    );
  }
}
