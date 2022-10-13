import React from "react";
import PersonalForm from "./form_components/PersonalForm";
import EducationForm from "./form_components/EducationForm";
import SkillsForm from "./form_components/SkillsForm";
import ExperienceForm from "./form_components/ExperienceForm";
import ProjectsForm from "./form_components/ProjectsForm";

import Grid from "@mui/material/Grid";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { section: 3 };

    this.prevSection = this.prevSection.bind(this);
    this.nextSection = this.nextSection.bind(this);
  }

  prevSection() {
    this.setState((state) => {
      return { section: state.section - 1 };
    });
  }

  nextSection() {
    this.setState((state) => {
      return { section: state.section + 1 };
    });
  }

  render() {
    const section = this.state.section;
    const sectionNav = {
      section: this.state.section,
      prevSection: this.prevSection,
      nextSection: this.nextSection,
    };

    const resume = this.props.resume;
    const entryMode = this.props.entryMode;
    const handleChange = this.props.handleChange;

    let display;
    if (section === 1) display = <PersonalForm resume={resume} handleChange={handleChange} sectionNav={sectionNav} />;
    else if (section === 2) display = <EducationForm resume={resume} entryMode={entryMode} handleChange={handleChange} sectionNav={sectionNav} />;
    else if (section === 3) display = <SkillsForm resume={resume} handleChange={handleChange} sectionNav={sectionNav} />;
    else if (section === 4) display = <ExperienceForm resume={resume} entryMode={entryMode} handleChange={handleChange} sectionNav={sectionNav} />;
    else if (section === 5) display = <ProjectsForm resume={resume} entryMode={entryMode} handleChange={handleChange} sectionNav={sectionNav} />;

    return (
      <Grid item xs={10} lg={5} id="form" mr={5} p={2}>
        {display}
      </Grid>
    );
  }
}
