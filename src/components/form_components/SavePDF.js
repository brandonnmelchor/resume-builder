import React from "react";
import ResumePDF from "../ResumePDF";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";

export default class SavePDF extends React.Component {
  constructor(props) {
    super(props);
    this.savePDF = this.savePDF.bind(this);
  }

  async savePDF() {
    const blob = await pdf(<ResumePDF />).toBlob();
    saveAs(blob, "cv.pdf");
  }

  render() {
    return (
      <div className="w-100">
        <div className="fs-4 fw-bold gray">Save PDF</div>
        <hr className="mb-4" />
        <div className="user-select-none" onClick={this.savePDF} style={{ cursor: "pointer" }}>
          <span className="d-flex align-items-center fw-bold gray">
            <i className="bi bi-file-earmark fs-3 me-2"></i> Save as PDF
          </span>
        </div>
      </div>
    );
  }
}
