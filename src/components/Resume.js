import React from "react";
import PersonalResume from "./resume_components/PersonalResume";
import EducationResume from "./resume_components/EducationResume";
import SkillsResume from "./resume_components/SkillsResume";
import ExperienceResume from "./resume_components/ExperienceResume";
import ProjectsResume from "./resume_components/ProjectsResume";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default class Resume extends React.Component {
  componentDidMount() {
    const setPrintRef = this.props.handleChange.setPrintRef;
    setPrintRef(this);
  }

  render() {
    const { personal, education, skills, experience, projects } = this.props.resume;

    return (
      <Grid item sm={10} lg={6}>
        <Paper id="resume" variant="outlined">
          <PersonalResume personal={personal} />
          <EducationResume education={education} />
          <SkillsResume skills={skills} />
          <ExperienceResume experience={experience} />
          <ProjectsResume projects={projects} />
        </Paper>
      </Grid>
    );
  }
}
