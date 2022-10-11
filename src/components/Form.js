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
    this.state = { sectionNumber: 1 };

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
      <Grid item lg={5} sx={{ mr: 5 }} className="col-12 col-xl-5 d-flex flex-column justify-content-center p-4">
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
      <div className="w-100 d-flex flex-column mt-5">
        <hr className="mb-3" />
        <div className="w-100 d-flex ">
          <button type="button" className="btn btn-outline-secondary nav-button gray-border" onClick={cancelEntry}>
            Cancel
          </button>
          <button type="button" className="btn btn-secondary nav-button gray-border ms-auto" onClick={saveEntry}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

class FormNav extends React.Component {
  render() {
    const { sectionNumber, prevSection, nextSection } = this.props;

    return (
      <div className="w-100 d-flex flex-column mt-5">
        <hr className="mb-3" />
        <div className="w-100 d-flex ">
          {sectionNumber > 1 && (
            <button
              type="button"
              className="btn btn-outline-secondary nav-button gray-border"
              onClick={() => {
                prevSection();
              }}>
              Back
            </button>
          )}
          {sectionNumber < 5 && (
            <button
              type="button"
              className="btn btn-secondary nav-button gray-border ms-auto"
              onClick={() => {
                nextSection();
              }}>
              Continue
            </button>
          )}
        </div>
      </div>
    );
  }
}
