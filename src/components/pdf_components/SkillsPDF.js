import React from "react";

export default class SkillsPDF extends React.Component {
  render() {
    const { languages, frameworks, technologies } = this.props.skills;

    return (
      <div className="w-100 mb-2">
        <div className="pdf-header fw-bold pdf-gray">Skills</div>
        <hr />
        <div className="pdf-content">
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
