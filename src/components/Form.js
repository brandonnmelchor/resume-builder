import React from "react";
import Personal from "./form_components/Personal";
import Education from "./form_components/Education";
import Skills from "./form_components/Skills";
import Experience from "./form_components/Experience";
import Projects from "./form_components/Projects";

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
    if (sectionNumber === 1) currentSection = <Personal resume={resume} handleChange={handleChange} />;
    else if (sectionNumber === 2) currentSection = <Education resume={resume} entryMode={entryMode} handleChange={handleChange} />;
    else if (sectionNumber === 3) currentSection = <Skills resume={resume} handleChange={handleChange} />;
    else if (sectionNumber === 4) currentSection = <Experience resume={resume} entryMode={entryMode} handleChange={handleChange} />;
    else if (sectionNumber === 5) currentSection = <Projects resume={resume} entryMode={entryMode} handleChange={handleChange} />;

    let formNav;
    if (entryMode.entryMode) formNav = <EntryNav handleChange={handleChange} />;
    else formNav = <FormNav sectionNumber={sectionNumber} prevSection={this.prevSection} nextSection={this.nextSection} />;

    return (
      <div className="card col-5 d-flex flex-column justify-content-center p-4">
        {currentSection}
        {formNav}
      </div>
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
