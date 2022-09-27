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
        </div>
      </Navbar>
    );
  }
}
