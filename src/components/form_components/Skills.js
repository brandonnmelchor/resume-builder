import React from "react";
import { TextAreaInput } from "./FormInputs";

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const updateInput = this.props.handleChange.updateInput;
    updateInput(event, "skills");
  }

  render() {
    const { languages, technologies } = this.props.resume.skills;

    return (
      <div className="w-100">
        <form>
          <div className="mb-4">
            <TextAreaInput label="Languages" id="languages" value={languages} handleChange={this.handleChange} length="100" />
          </div>
          <div>
            <TextAreaInput label="Technologies" id="technologies" value={technologies} handleChange={this.handleChange} length="100" />
          </div>
        </form>
      </div>
    );
  }
}
