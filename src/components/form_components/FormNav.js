import React from "react";

export default class FormNav extends React.Component {
  render() {
    return (
      <div className="w-100 d-flex flex-column mt-auto">
        <hr className="mb-3" />
        <div className="w-100 d-flex ">
          <button
            type="button"
            className="btn btn-outline-secondary gray-border me-auto"
            onClick={() => {
              console.log("click!");
            }}>
            Back
          </button>
          <button
            type="button"
            className="btn btn-secondary gray-border"
            onClick={() => {
              console.log("click!");
            }}>
            Continue
          </button>
        </div>
      </div>
    );
  }
}
