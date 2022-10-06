import React from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";

export default class Print extends React.Component {
  render() {
    const printRef = this.props.printRef;

    return (
      <div className="w-100">
        <div className="fs-4 fw-bold gray">All done!</div>
        <hr className="mb-4" />
        <ReactToPrint content={() => printRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <div className="user-select-none" onClick={handlePrint} style={{ cursor: "pointer" }}>
                <span className="d-flex align-items-center fw-bold gray">
                  <i className="bi bi-printer fs-3 me-2"></i> Print Resume
                </span>
              </div>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
      </div>
    );
  }
}
