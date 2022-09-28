import React from "react";

export default class Skills extends React.Component {
  render() {
    const { languages, technologies } = this.props.skills;

    return (
      <div className="w-100 mb-2">
        <div className="section-header fw-bold gray">Skills</div>
        <hr />
        <div className="section-content">
          <div>
            <span className="fw-bold">Languages:&emsp;&emsp;</span>
            <span>{languages}</span>
          </div>
          <div>
            <span className="fw-bold">Technologies:&emsp;</span>
            <span>{technologies}</span>
          </div>
        </div>
      </div>
    );
  }
}
