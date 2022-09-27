import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default class Nav extends React.Component {
  render() {
    return (
      <Navbar className="mb-auto" bg="dark" variant="dark">
        <div className="container-lg px-4 py-2">
          <Navbar.Brand role="button">
            <span className="fs-2 fw-bold">
              <i className="bi bi-file-code"></i> CS Resume Builder
            </span>
          </Navbar.Brand>
        </div>
      </Navbar>
    );
  }
}
