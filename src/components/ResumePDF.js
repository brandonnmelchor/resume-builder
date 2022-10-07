import React from "react";
import PersonalPDF from "./pdf_components/PersonalPDF";
import EducationPDF from "./pdf_components/EducationPDF";
import SkillsPDF from "./pdf_components/SkillsPDF";
import ExperiencePDF from "./pdf_components/ExperiencePDF";
import ProjectsPDF from "./pdf_components/ProjectsPDF";
import "../styles/resumePDF.css";

export default class ResumePDF extends React.Component {
  componentDidMount() {
    const setPrintRef = this.props.handleChange.setPrintRef;
    setPrintRef(this);
  }

  render() {
    const { personal, education, skills, experience, projects } = this.props.resume;

    return (
      <div className="resume-pdf" id="resume">
        <PersonalPDF personal={personal} />
        <EducationPDF education={education} />
        <SkillsPDF skills={skills} />
        <ExperiencePDF experience={experience} />
        <ProjectsPDF projects={projects} />
      </div>
    );
  }
}
