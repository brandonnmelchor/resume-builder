import React from "react";
import uniqid from "uniqid";
import { educationEntry } from "../state";
import { TextInput, NumberInput, SelectInput, CheckboxInput } from "./FormInputs";

export default class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addMode: false,
      editMode: false,
      currentEntry: "",
    };

    this.addEntry = this.addEntry.bind(this);
    this.editEntry = this.editEntry.bind(this);
    this.saveEntry = this.saveEntry.bind(this);
  }

  addEntry(event) {
    this.setState({ addMode: true });
  }

  editEntry(event) {
    const target = event.target;
    const entry = target.parentElement.attributes.entry.value;

    this.setState({
      editMode: true,
      currentEntry: entry,
    });
  }

  saveEntry() {
    this.setState({ editMode: false });
  }

  render() {
    const { addMode, editMode, currentEntry } = this.state;
    const education = this.props.education;
    const handleChange = this.props.handleChange;
    let display;

    if (addMode) {
      const entryID = uniqid();
      const entry = educationEntry;
      display = <EntryForm key={entryID} educationEntry={entry} handleChange={handleChange} saveEntry={this.saveEntry} />;
    } else if (editMode) {
      const entry = education.filter((entry) => entry.id === currentEntry)[0];
      display = <EntryForm key={entry.id} educationEntry={entry} handleChange={handleChange} saveEntry={this.saveEntry} />;
    } else {
      display = (
        <div className="d-flex flex-column gap-3">
          {education.map((entry) => (
            <EntryCard key={entry.id} educationEntry={entry} editEntry={this.editEntry} />
          ))}
          <AddEntry addEntry={this.addEntry} />
        </div>
      );
    }

    return <div className="w-100 d-flex flex-column">{display}</div>;
  }
}

class EntryCard extends React.Component {
  render() {
    const { id, schoolName, degree, major, startMonth, startYear, endMonth, endYear } = this.props.educationEntry;
    const editEntry = this.props.editEntry;

    return (
      <div className="card d-flex flex-row justify-content-between p-3">
        <div className="user-select-none">
          <div className="fw-bold">{schoolName}</div>
          <div className="fw-bold gray">
            {degree} in {major}
          </div>
          <div className="mt-3">
            {startMonth} {startYear} - {endMonth} {endYear}
          </div>
        </div>
        <div>
          <button type="button" className="btn gray px-1" entry={id} onClick={editEntry}>
            <i className="bi bi-pencil-square"></i>
          </button>
          <button type="button" className="btn gray px-1" entry={id} onClick={editEntry}>
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}

class AddEntry extends React.Component {
  render() {
    const addEntry = this.props.addEntry;

    return (
      <div className="card user-select-none p-3" onClick={addEntry} style={{ cursor: "pointer" }}>
        <span className="d-flex align-items-center fw-bold gray">
          <i className="bi bi-plus fs-3"></i> Add more education
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
    const updateEntry = this.props.handleChange.updateEntry;
    const entryID = event.target.form.id;
    updateEntry(event, "education", entryID);
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
    const saveEntry = this.props.saveEntry;

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
              <SelectInput label="Start Month" id="startMonth" value={startMonth} handleChange={this.handleChange} disabled={false} />
            </div>
            <div className="col">
              <NumberInput label="Start Year" id="startYear" value={startYear} handleChange={this.handleChange} disabled={false} />
            </div>
          </div>
          <div className="row justify-content-center align-items-center mb-4">
            <div className="col">
              <SelectInput label="End Month" id="endMonth" value={endMonth} handleChange={this.handleChange} disabled={currentSchool} />
            </div>
            <div className="col">
              <NumberInput label="End Year" id="endYear" value={endYear} handleChange={this.handleChange} disabled={currentSchool} />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <CheckboxInput label="I currently study here" id="currentSchool" handleChange={this.setCurrentSchool} checked={currentSchool} />
            </div>
            <div>
              <button type="button" className="btn btn-outline-secondary nav-button gray-border" onClick={saveEntry}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
