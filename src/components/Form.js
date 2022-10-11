import React from "react";
import PersonalForm from "./form_components/PersonalForm";
import EducationForm from "./form_components/EducationForm";
import SkillsForm from "./form_components/SkillsForm";
import ExperienceForm from "./form_components/ExperienceForm";
import ProjectsForm from "./form_components/ProjectsForm";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sectionNumber: 2 };

    this.prevSection = this.prevSection.bind(this);
    this.nextSection = this.nextSection.bind(this);
  }

  prevSection() {
    this.setState((state) => {
      return { sectionNumber: state.sectionNumber - 1 };
    });
  }

  nextSection() {
    this.setState((state) => {
      return { sectionNumber: state.sectionNumber + 1 };
    });
  }

  render() {
    const sectionNumber = this.state.sectionNumber;
    const resume = this.props.resume;
    const entryMode = this.props.entryMode;
    const handleChange = this.props.handleChange;

    let currentSection;
    if (sectionNumber === 1) currentSection = <PersonalForm resume={resume} handleChange={handleChange} />;
    else if (sectionNumber === 2) currentSection = <EducationForm resume={resume} entryMode={entryMode} handleChange={handleChange} />;
    else if (sectionNumber === 3) currentSection = <SkillsForm resume={resume} handleChange={handleChange} />;
    else if (sectionNumber === 4) currentSection = <ExperienceForm resume={resume} entryMode={entryMode} handleChange={handleChange} />;
    else if (sectionNumber === 5) currentSection = <ProjectsForm resume={resume} entryMode={entryMode} handleChange={handleChange} />;

    let formNav;
    if (entryMode.entryMode) formNav = <EntryNav handleChange={handleChange} />;
    else formNav = <FormNav sectionNumber={sectionNumber} prevSection={this.prevSection} nextSection={this.nextSection} />;

    return (
      <Grid item lg={5} sx={{ mr: 5 }} id="form" p={2}>
        {currentSection}
        {formNav}
      </Grid>
    );
  }
}

class EntryNav extends React.Component {
  render() {
    const { saveEntry, cancelEntry } = this.props.handleChange;

    return (
      <Stack mt={5}>
        <Divider className="form-divider" sx={{ mb: 3 }} />
        <Stack direction="row">
          <Button
            variant="outlined"
            className="nav-button"
            onClick={() => {
              cancelEntry();
            }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            disableElevation
            className="nav-button"
            onClick={() => {
              saveEntry();
            }}
            sx={{ ml: "auto" }}>
            Save
          </Button>
        </Stack>
      </Stack>
    );
  }
}

class FormNav extends React.Component {
  render() {
    const { sectionNumber, prevSection, nextSection } = this.props;

    return (
      <Stack mt={5}>
        <Divider className="form-divider" sx={{ mb: 3 }} />
        <Stack direction="row">
          {sectionNumber > 1 && (
            <Button
              variant="outlined"
              className="nav-button"
              onClick={() => {
                prevSection();
              }}>
              Back
            </Button>
          )}
          {sectionNumber < 5 && (
            <Button
              variant="contained"
              disableElevation
              className="nav-button"
              onClick={() => {
                nextSection();
              }}
              sx={{ ml: "auto" }}>
              Continue
            </Button>
          )}
        </Stack>
      </Stack>
    );
  }
}
