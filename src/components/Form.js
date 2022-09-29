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
    if (this.state.sectionNumber < 5) {
      this.setState((state) => {
        return { sectionNumber: state.sectionNumber + 1 };
      });
    }
  }

  render() {
    const { sectionNumber } = this.state;
    let currentSection;

    if (sectionNumber === 1) currentSection = <Personal />;
    else if (sectionNumber === 2) currentSection = <Education />;
    else if (sectionNumber === 3) currentSection = <Skills />;
    else if (sectionNumber === 4) currentSection = <Experience />;
    else if (sectionNumber === 5) currentSection = <Projects />;

    return (
      <div className="col-5 d-flex flex-column justify-content-center p-4" style={{ aspectRatio: "1 / 1" }}>
        {currentSection}
        <FormNav sectionNumber={sectionNumber} prevSection={this.prevSection} nextSection={this.nextSection} />
      </div>
    );
  }
}
