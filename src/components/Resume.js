import React from "react";
import PersonalResume from "./resume_components/PersonalResume";
import EducationResume from "./resume_components/EducationResume";
import SkillsResume from "./resume_components/SkillsResume";
import ExperienceResume from "./resume_components/ExperienceResume";
import ProjectsResume from "./resume_components/ProjectsResume";

export default class Resume extends React.Component {
  render() {
    const { personal, education, skills, experience, projects } = this.props.resume;

    return (
      <div className="card col-12 col-xl-6 user-select-none" style={{ aspectRatio: "1 / 1.3" }} id="resume">
        <PersonalResume personal={personal} />
        <EducationResume education={education} />
        <SkillsResume skills={skills} />
        <ExperienceResume experience={experience} />
        <ProjectsResume projects={projects} />
      </div>
    );
  }
}
