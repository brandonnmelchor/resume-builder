import React from "react";
import Navbar from "react-bootstrap/Navbar";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";

export default class Nav extends React.Component {
  render() {
    const { firstName, lastName } = this.props.resume.personal;
    const printRef = this.props.printRef;

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
            <ReactToPrint content={() => printRef} documentTitle={`${firstName}${lastName}_Resume`}>
              <PrintContextConsumer>
                {({ handlePrint }) => (
                  <div className="nav-item fs-5 text-white user-select-none" onClick={handlePrint} style={{ cursor: "pointer" }}>
                    <span className="nav-link">
                      <i className="bi bi-download"></i> Save
                    </span>
                  </div>
                )}
              </PrintContextConsumer>
            </ReactToPrint>
          </ul>
        </div>
      </Navbar>
    );
  }
}
