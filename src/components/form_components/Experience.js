import React from "react";
import { TextInput, TextAreaInput, YearInput, MonthSelectInput, CheckboxInput } from "./FormInputs";

export default class Experience extends React.Component {
  render() {
    const experience = this.props.resume.experience;
    const { entryMode, targetEntry } = this.props.entryMode;
    const handleChange = this.props.handleChange;
    let display;

    if (entryMode) {
      // const entry = experience.filter((entry) => entry.id === targetEntry)[0];
      // display = <EntryForm key={entry.id} educationEntry={entry} handleChange={handleChange} />;
    } else {
      display = (
        <div className="d-flex flex-column gap-3">
          {experience.map((entry) => (
            <EntryCard key={entry.id} educationEntry={entry} handleChange={handleChange} />
          ))}
          {/* <AddEntry handleChange={handleChange} /> */}
        </div>
      );
    }

    return <div className="w-100 d-flex flex-column">{display}</div>;
  }
}

class EntryCard extends React.Component {
  constructor(props) {
    super(props);
    this.editEntry = this.editEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  editEntry(event) {
    const editEntry = this.props.handleChange.editEntry;
    const entryID = event.target.parentElement.attributes.entry.value;
    editEntry("experience", entryID);
  }

  deleteEntry(event) {
    const deleteEntry = this.props.handleChange.deleteEntry;
    const entryID = event.target.parentElement.attributes.entry.value;
    deleteEntry("experience", entryID);
  }

  render() {
    const { id, company, title, startMonth, startYear, endMonth, endYear } = this.props.educationEntry;

    return (
      <div className="card d-flex flex-row justify-content-between p-3">
        <div className="user-select-none">
          <div className="fw-bold">{company}</div>
          <div className="fw-bold gray">{title}</div>
          <div className="mt-3">
            {startMonth} {startYear} - {endMonth} {endYear}
          </div>
        </div>
        <div>
          <button type="button" className="btn gray px-1" entry={id} onClick={this.editEntry}>
            <i className="bi bi-pencil-square"></i>
          </button>
          <button type="button" className="btn gray px-1" entry={id} onClick={this.deleteEntry}>
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}
