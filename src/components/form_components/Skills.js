import React from "react";

export default class Skills extends React.Component {
  render() {
    const { languages, technologies } = this.props.skills;
    const update = this.props.update;

    return (
      <div className="w-100">
        <form>
          <div className="mb-4">
            <InputGroup label="Languages" id="languages" value={languages} update={update} length="100" />
          </div>
          <div>
            <InputGroup label="Technologies" id="technologies" value={technologies} update={update} length="100" />
          </div>
        </form>
      </div>
    );
  }
}

class InputGroup extends React.Component {
  render() {
    const { label, id, value, update, length } = this.props;

    return (
      <div>
        <label htmlFor={id} className="form-label fw-bold">
          {label}
        </label>
        <textarea className="form-control" id={id} value={value} onChange={update} maxLength={length} rows="3" />
      </div>
    );
  }
}
