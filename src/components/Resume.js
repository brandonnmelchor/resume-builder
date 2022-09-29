import React from "react";
import Personal from "./resume_components/Personal";
import Education from "./resume_components/Education";
import Skills from "./resume_components/Skills";
import Experience from "./resume_components/Experience";
import Projects from "./resume_components/Projects";

export default class Resume extends React.Component {
  render() {
    const { personal, education, skills, experience, projects } = this.props.resume;

    return (
      <div className="card col-6 user-select-none" style={{ aspectRatio: "1 / 1.3" }} id="resume">
        <Personal personal={personal} />
        <Education education={education} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Projects projects={projects} />
      </div>
    );
  }
}
