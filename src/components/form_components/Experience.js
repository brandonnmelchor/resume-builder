import React from "react";
import { TextInput, YearInput, MonthSelectInput, CheckboxInput } from "./FormInputs";

export default class Experience extends React.Component {
  render() {
    const experience = this.props.resume.experience;
    const { entryMode, targetEntry } = this.props.entryMode;
    const handleChange = this.props.handleChange;
    let display;

    if (entryMode) {
      const entry = experience.filter((entry) => entry.id === targetEntry)[0];
      display = <EntryForm key={entry.id} experienceEntry={entry} handleChange={handleChange} />;
    } else {
      display = (
        <div className="d-flex flex-column gap-3">
          {experience.map((entry) => (
            <EntryCard key={entry.id} experienceEntry={entry} handleChange={handleChange} />
          ))}
          <AddEntry handleChange={handleChange} />
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
    const { id, company, title, startMonth, startYear, endMonth, endYear } = this.props.experienceEntry;

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

class AddEntry extends React.Component {
  constructor(props) {
    super(props);
    this.addEntry = this.addEntry.bind(this);
  }

  addEntry() {
    const addEntry = this.props.handleChange.addEntry;
    addEntry("experience");
  }

  render() {
    return (
      <div className="user-select-none" onClick={this.addEntry} style={{ cursor: "pointer" }}>
        <span className="d-flex align-items-center fw-bold gray">
          <i className="bi bi-plus fs-3"></i> Add work experience
        </span>
      </div>
    );
  }
}

class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentWork: this.props.experienceEntry.endMonth === "Present" ? true : false };

    this.handleChange = this.handleChange.bind(this);
    this.setCurrentWork = this.setCurrentWork.bind(this);
  }

  handleChange(event) {
    const handleEntry = this.props.handleChange.handleEntry;
    const entryID = event.target.form.id;
    handleEntry(event, "experience", entryID);
  }

  setCurrentWork(event) {
    const setPresentDate = this.props.handleChange.setPresentDate;
    const entryID = event.target.form.id;
    if (this.state.currentWork === false) setPresentDate("experience", entryID);

    this.setState((state) => {
      return { currentWork: !state.currentWork };
    });
  }

  render() {
    const currentWork = this.state.currentWork;
    const { id, company, title, startMonth, startYear, endMonth, endYear, details } = this.props.experienceEntry;
    const handleChange = this.props.handleChange;

    return (
      <div>
        <form id={id}>
          <div className="mb-4">
            <TextInput label="Company Name" type="text" id="company" value={company} handleChange={this.handleChange} length="50" />
          </div>
          <div className="mb-4">
            <TextInput label="Title" type="text" id="title" value={title} handleChange={this.handleChange} length="50" />
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
              <MonthSelectInput label="End Month" id="endMonth" value={endMonth} handleChange={this.handleChange} disabled={currentWork} />
            </div>
            <div className="col">
              <YearInput label="End Year" id="endYear" value={endYear} handleChange={this.handleChange} disabled={currentWork} />
            </div>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <div>
              <CheckboxInput label="I currently work here" id="currentWork" handleChange={this.setCurrentWork} checked={currentWork} />
            </div>
          </div>
          <div>
            <label className="form-label fw-bold">Details</label>
            <div className="d-flex flex-column gap-3">
              {details.map((detailsEntry) => (
                <DetailsForm key={detailsEntry.id} detailsEntry={detailsEntry} handleChange={handleChange} />
              ))}
              <AddDetails entryID={id} handleChange={handleChange} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

class DetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const handleDetails = this.props.handleChange.handleDetails;
    const entryID = event.target.form.id;
    const detailsID = event.target.id;
    handleDetails(event, "experience", entryID, detailsID);
  }

  render() {
    const { id, text } = this.props.detailsEntry;

    return (
      <div className="card flex-row justify-content-between">
        <div className="col-11">
          <textarea className="form-control details-form" id={id} value={text} onChange={this.handleChange} maxLength="110" rows="2" />
        </div>
        <div className="col-1 d-flex justify-content-center">
          <button type="button" className="btn gray px-1" entry={id}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
      </div>
    );
  }
}

class AddDetails extends React.Component {
  constructor(props) {
    super(props);
    this.addDetails = this.addDetails.bind(this);
  }

  addDetails() {
    const addDetails = this.props.handleChange.addDetails;
    const entryID = this.props.entryID;
    addDetails("experience", entryID);
  }

  render() {
    return (
      <div className="user-select-none" onClick={this.addDetails} style={{ cursor: "pointer" }}>
        <span className="d-flex align-items-center fw-bold gray">
          <i className="bi bi-plus fs-3"></i> Add experience details
        </span>
      </div>
    );
  }
}
