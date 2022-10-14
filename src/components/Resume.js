/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import PersonalResume from "./resume_components/PersonalResume";
import EducationResume from "./resume_components/EducationResume";
import SkillsResume from "./resume_components/SkillsResume";
import ExperienceResume from "./resume_components/ExperienceResume";
import ProjectsResume from "./resume_components/ProjectsResume";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function Resume(props) {
  const { personal, education, skills, experience, projects } = props.resume;
  const printRef = useRef();

  useEffect(() => {
    const updatePrintRef = props.handleChange.updatePrintRef;
    updatePrintRef(printRef);
  }, []);

  return (
    <Grid ref={printRef} item sm={10} lg={6}>
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
