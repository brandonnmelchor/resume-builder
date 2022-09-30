import React from "react";

export default class FormNav extends React.Component {
  render() {
    const { sectionNumber, prevSection, nextSection } = this.props;

    return (
      <div className="w-100 d-flex flex-column mt-5">
        <hr className="mb-3" />
        <div className="w-100 d-flex ">
          {sectionNumber > 1 && (
            <button
              type="button"
              className="btn btn-outline-secondary nav-button gray-border"
              onClick={() => {
                prevSection();
              }}>
              Back
            </button>
          )}
          <button
            type="button"
            className="btn btn-secondary nav-button gray-border ms-auto"
            onClick={() => {
              nextSection();
            }}>
            Continue
          </button>
        </div>
      </div>
    );
  }
}
