import React from "react";
import Personal from "./form_components/Personal";
import Education from "./form_components/Education";
import Skills from "./form_components/Skills";
import Experience from "./form_components/Experience";
import Projects from "./form_components/Projects";
import FormNav from "./form_components/FormNav";

export default class Form extends React.Component {
  render() {
    return (
      <div className="col-5 d-flex flex-column justify-content-center p-4" style={{ aspectRatio: "1 / 1" }}>
        <Personal />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <FormNav />
      </div>
    );
  }
}
