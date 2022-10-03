import React from "react";
import Personal from "./form_components/Personal";
import Education from "./form_components/Education";
import Skills from "./form_components/Skills";
import Experience from "./form_components/Experience";
import Projects from "./form_components/Projects";
import FormNav from "./form_components/FormNav";

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
    if (this.state.sectionNumber < 5) {
      this.setState((state) => {
        return { sectionNumber: state.sectionNumber + 1 };
      });
    }
  }

  render() {
    const sectionNumber = this.state.sectionNumber;
    const { personal, education, skills, experience, projects } = this.props.resume;
    const { updateInput, updateEntry, setPresentDate } = this.props.handleChange;
    let currentSection;

    if (sectionNumber === 1) currentSection = <Personal personal={personal} handleChange={{ updateInput }} />;
    else if (sectionNumber === 2) currentSection = <Education education={education} handleChange={{ updateEntry, setPresentDate }} />;
    else if (sectionNumber === 3) currentSection = <Skills skills={skills} handleChange={{ updateInput }} />;
    else if (sectionNumber === 4) currentSection = <Experience experience={experience} />;
    else if (sectionNumber === 5) currentSection = <Projects projects={projects} />;

    return (
      <div className="card col-5 d-flex flex-column justify-content-center p-4">
        {currentSection}
        <FormNav sectionNumber={sectionNumber} prevSection={this.prevSection} nextSection={this.nextSection} />
      </div>
    );
  }
}
