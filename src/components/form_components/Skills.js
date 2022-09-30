import React from "react";
import { TextAreaInput } from "./FormInputs";

export default class Skills extends React.Component {
  render() {
    const { languages, technologies } = this.props.skills;
    const updateInput = this.props.updateInput;

    return (
      <div className="w-100">
        <form>
          <div className="mb-4">
            <TextAreaInput label="Languages" id="languages" value={languages} updateInput={updateInput} length="100" />
          </div>
          <div>
            <TextAreaInput label="Technologies" id="technologies" value={technologies} updateInput={updateInput} length="100" />
          </div>
        </form>
      </div>
    );
  }
}
