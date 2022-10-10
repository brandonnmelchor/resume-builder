import React from "react";
import { TextInput, YearInput, MonthSelectInput, CheckboxInput } from "./FormInputs";

export default class EducationForm extends React.Component {
  render() {
    const education = this.props.resume.education;
    const { entryMode, targetEntry } = this.props.entryMode;
    const handleChange = this.props.handleChange;
    let display;

    if (entryMode) {
      const entry = education.filter((entry) => entry.id === targetEntry)[0];
      display = <EntryForm key={entry.id} educationEntry={entry} handleChange={handleChange} />;
    } else {
      display = (
        <div className="d-flex flex-column gap-3">
          {education.map((entry) => (
            <EntryCard key={entry.id} educationEntry={entry} handleChange={handleChange} />
          ))}
          <AddEntry handleChange={handleChange} />
        </div>
      );
    }

    return (
      <div className="w-100 d-flex flex-column">
        <div className="fs-4 fw-bold gray">Education</div>
        <hr className="mb-4" />
        {display}
      </div>
    );
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
    editEntry("education", entryID);
  }

  deleteEntry(event) {
    const deleteEntry = this.props.handleChange.deleteEntry;
    const entryID = event.target.parentElement.attributes.entry.value;
    deleteEntry("education", entryID);
  }

  render() {
    let { id, schoolName, degree, major, startMonth, startYear, endMonth, endYear } = this.props.educationEntry;
    major = major.length ? `in ${major}` : "";
    endMonth = endMonth.length ? `- ${endMonth}` : "";

    return (
      <div className="card d-flex flex-row justify-content-between p-3">
        <div className="user-select-none">
          <div className="fw-bold">{schoolName}</div>
          <div className="fw-bold gray">
            {degree} {major}
          </div>
          <div className="mt-3">
            {startMonth} {startYear} {endMonth} {endYear}
          </div>
        </div>
        <div className="btn-group" role="group">
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

class AddEntry extends React.Component {
  constructor(props) {
    super(props);
    this.addEntry = this.addEntry.bind(this);
  }

  addEntry() {
    const addEntry = this.props.handleChange.addEntry;
    addEntry("education");
  }

  render() {
    return (
      <div className="user-select-none" onClick={this.addEntry} style={{ cursor: "pointer" }}>
        <span className="d-flex align-items-center fw-bold gray">
          <i className="bi bi-plus fs-3"></i> Add education
        </span>
      </div>
    );
  }
}

class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentSchool: this.props.educationEntry.endMonth === "Present" ? true : false };

    this.handleChange = this.handleChange.bind(this);
    this.setCurrentSchool = this.setCurrentSchool.bind(this);
  }

  handleChange(event) {
    const handleEntry = this.props.handleChange.handleEntry;
    const entryID = event.target.form.id;
    handleEntry(event, "education", entryID);
  }

  setCurrentSchool(event) {
    const setPresentDate = this.props.handleChange.setPresentDate;
    const entryID = event.target.form.id;
    if (this.state.currentSchool === false) setPresentDate("education", entryID);

    this.setState((state) => {
      return { currentSchool: !state.currentSchool };
    });
  }

  render() {
    const currentSchool = this.state.currentSchool;
    const { id, schoolName, degree, major, startMonth, startYear, endMonth, endYear } = this.props.educationEntry;

    return (
      <div>
        <form id={id}>
          <div className="mb-4">
            <TextInput label="School Name" type="text" id="schoolName" value={schoolName} handleChange={this.handleChange} length="40" />
          </div>
          <div className="row justify-content-center align-items-center mb-4">
            <div className="col">
              <TextInput label="Degree" type="text" id="degree" value={degree} handleChange={this.handleChange} length="25" />
            </div>
            <div className="col">
              <TextInput label="Major" type="text" id="major" value={major} handleChange={this.handleChange} length="25" />
            </div>
          </div>
          <div className="row justify-content-center align-items-center mb-4">
            <div className="col">
              <MonthSelectInput label="Start Month" id="startMonth" value={startMonth} handleChange={this.handleChange} disabled={false} />
            </div>
            <div className="col">
              <YearInput label="Start Year" id="startYear" value={startYear} handleChange={this.handleChange} disabled={false} />
            </div>
          </div>
          <div className="row justify-content-center align-items-center mb-2">
            <div className="col">
              <MonthSelectInput label="End Month" id="endMonth" value={endMonth} handleChange={this.handleChange} disabled={currentSchool} />
            </div>
            <div className="col">
              <YearInput label="End Year" id="endYear" value={endYear} handleChange={this.handleChange} disabled={currentSchool} />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <CheckboxInput label="I currently study here" id="currentSchool" handleChange={this.setCurrentSchool} checked={currentSchool} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}