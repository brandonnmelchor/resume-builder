import React, { useState } from "react";
import PersonalForm from "./form_components/PersonalForm";
import EducationForm from "./form_components/EducationForm";
import SkillsForm from "./form_components/SkillsForm";
import ExperienceForm from "./form_components/ExperienceForm";
import ProjectsForm from "./form_components/ProjectsForm";

import Grid from "@mui/material/Grid";

export default function Form(props) {
  const [section, setSection] = useState(() => 1);
  const resume = props.resume;
  const entryMode = props.entryMode;
  const handleChange = props.handleChange;

  const sectionNav = {
    section,

    prevSection() {
      setSection((section) => section - 1);
    },

    nextSection() {
      setSection((section) => section + 1);
    },
  };

  let display;
  if (section === 1) display = <PersonalForm resume={resume} handleChange={handleChange} sectionNav={sectionNav} />;
  else if (section === 2) display = <EducationForm resume={resume} entryMode={entryMode} handleChange={handleChange} sectionNav={sectionNav} />;
  else if (section === 3) display = <SkillsForm resume={resume} handleChange={handleChange} sectionNav={sectionNav} />;
  else if (section === 4) display = <ExperienceForm resume={resume} entryMode={entryMode} handleChange={handleChange} sectionNav={sectionNav} />;
  else if (section === 5) display = <ProjectsForm resume={resume} entryMode={entryMode} handleChange={handleChange} sectionNav={sectionNav} />;

  return (
    <Grid item sm={10} lg={5} id="form" mr={5} p={2}>
      {display}
    </Grid>
  );
}
