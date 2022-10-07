import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default class Nav extends React.Component {
  render() {
    return (
      <Navbar className="mb-auto" bg="dark" variant="dark">
        <div className="container-lg">
          <Navbar.Brand role="button">
            <span className="fs-1 fw-bold">
              <i className="bi bi-file-code"></i>
            </span>
            <span className="fs-2 fw-bold"> CS Resume Builder</span>
          </Navbar.Brand>
          <ul className="navbar-nav d-flex justify-content-between">
            <div className="nav-item fs-5 text-white user-select-none me-3" style={{ cursor: "pointer" }}>
              <span className="nav-link">
                <i className="bi bi-file-break"></i> Clear
              </span>
            </div>
            <div className="nav-item fs-5 text-white user-select-none me-3" style={{ cursor: "pointer" }}>
              <span className="nav-link">
                <i className="bi bi-file-person"></i> Demo
              </span>
            </div>
            <div className="nav-item fs-5 text-white user-select-none" style={{ cursor: "pointer" }}>
              <span className="nav-link">
                <i className="bi bi-download"></i> Save
              </span>
            </div>
          </ul>
        </div>
      </Navbar>
    );
  }
}
