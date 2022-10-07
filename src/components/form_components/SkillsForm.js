import React from "react";
import { TextAreaInput } from "./FormInputs";

export default class SkillsForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const handleInput = this.props.handleChange.handleInput;
    handleInput(event, "skills");
  }

  render() {
    const { languages, frameworks, technologies } = this.props.resume.skills;

    return (
      <div className="w-100">
        <div className="fs-4 fw-bold gray">Skills</div>
        <hr className="mb-4" />
        <form>
          <div className="mb-4">
            <TextAreaInput label="Languages" id="languages" value={languages} handleChange={this.handleChange} length="100" />
          </div>
          <div className="mb-4">
            <TextAreaInput label="Frameworks" id="frameworks" value={frameworks} handleChange={this.handleChange} length="100" />
          </div>
          <div>
            <TextAreaInput label="Technologies" id="technologies" value={technologies} handleChange={this.handleChange} length="100" />
          </div>
        </form>
      </div>
    );
  }
}