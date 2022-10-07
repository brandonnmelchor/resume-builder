import React from "react";

export default class SavePDF extends React.Component {
  render() {
    return (
      <div className="w-100">
        <div className="fs-4 fw-bold gray">Save PDF</div>
        <hr className="mb-4" />
        <div className="user-select-none" style={{ cursor: "pointer" }}>
          <span className="d-flex align-items-center fw-bold gray">
            <i className="bi bi-printer fs-3 me-2"></i> Save as PDF
          </span>
        </div>
      </div>
    );
  }
}
