import React from "react";
import Personal from "./form_components/Personal";
import Education from "./form_components/Education";
import Skills from "./form_components/Skills";
import Experience from "./form_components/Experience";
import Projects from "./form_components/Projects";

export default class Form extends React.Component {
  render() {
    return (
      <div className="card col-5" style={{ aspectRatio: "1 / 1.3" }}>
        <Personal />
        <Education />
        <Skills />
        <Experience />
        <Projects />
      </div>
    );
  }
}
