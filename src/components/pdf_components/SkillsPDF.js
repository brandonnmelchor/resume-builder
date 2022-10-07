import React from "react";
import "../../styles/resumePDF.css";

export default class SkillsResume extends React.Component {
  render() {
    const { languages, frameworks, technologies } = this.props.skills;

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
            <span className="fw-bold">Frameworks:&emsp;&ensp;</span>
            <span>{frameworks}</span>
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
