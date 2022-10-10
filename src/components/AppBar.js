import React from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";

export default class AppBar extends React.Component {
  render() {
    const { firstName, lastName } = this.props.resume.personal;
    const printRef = this.props.printRef;
    const { clearResume, resetDemo } = this.props.handleChange;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-auto">
        <div className="container-lg">
          <a className="navbar-brand" role="button">
            <span className="fs-1 fw-bold">
              <i className="bi bi-file-code"></i>
            </span>
            <span className="fs-2 fw-bold"> CS Resume Builder</span>
          </a>
          <ul className="navbar-nav d-flex justify-content-between">
            <div className="nav-item fs-5 text-white user-select-none me-3" onClick={clearResume} style={{ cursor: "pointer" }}>
              <span className="nav-link">
                <i className="bi bi-file-break"></i> Clear
              </span>
            </div>
            <div className="nav-item fs-5 text-white user-select-none me-3" onClick={resetDemo} style={{ cursor: "pointer" }}>
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
      </nav>
    );
  }
}
