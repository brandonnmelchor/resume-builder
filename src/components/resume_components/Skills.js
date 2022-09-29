import React from "react";

export default class Skills extends React.Component {
  render() {
    const { languages, technologies } = this.props.skills;

    return (
      <div className="w-100 mb-2">
        <div className="section-header fw-bold gray">Skills</div>
        <hr />
        <div className="section-content">
          <div className="d-flex">
            <div className="fw-bold skills-tab">Languages:</div>
            <div>{languages}</div>
          </div>
          <div className="d-flex">
            <div className="fw-bold skills-tab">Technologies:</div>
            <div>{technologies}</div>
          </div>
        </div>
      </div>
    );
  }
}
