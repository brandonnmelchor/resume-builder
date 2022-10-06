import React from "react";
import { TextInput } from "./FormInputs";

export default class Projects extends React.Component {
  render() {
    const projects = this.props.resume.projects;
    const { entryMode, targetEntry } = this.props.entryMode;
    const handleChange = this.props.handleChange;
    let display;

    if (entryMode) {
      const entry = projects.filter((entry) => entry.id === targetEntry)[0];
      display = <EntryForm key={entry.id} projectEntry={entry} handleChange={handleChange} />;
    } else {
      display = (
        <div className="d-flex flex-column gap-3">
          {projects.map((entry) => (
            <EntryCard key={entry.id} projectEntry={entry} handleChange={handleChange} />
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
    editEntry("projects", entryID);
  }

  deleteEntry(event) {
    const deleteEntry = this.props.handleChange.deleteEntry;
    const entryID = event.target.parentElement.attributes.entry.value;
    deleteEntry("projects", entryID);
  }

  render() {
    const { id, projectName, url } = this.props.projectEntry;

    return (
      <div className="card d-flex flex-row justify-content-between p-3">
        <div className="user-select-none">
          <div>
            <span className="fw-bold">{projectName} </span>
            <a className="text-decoration-none" href={url} target="_blank" rel="noreferrer">
              | Demo
            </a>
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
    addEntry("projects");
  }

  render() {
    return (
      <div className="user-select-none" onClick={this.addEntry} style={{ cursor: "pointer" }}>
        <span className="d-flex align-items-center fw-bold gray">
          <i className="bi bi-plus fs-3"></i> Add project
        </span>
      </div>
    );
  }
}

class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const handleEntry = this.props.handleChange.handleEntry;
    const entryID = event.target.form.id;
    handleEntry(event, "projects", entryID);
  }

  render() {
    const { id, projectName, url, tech, details } = this.props.projectEntry;
    const handleChange = this.props.handleChange;

    return (
      <div>
        <form id={id}>
          <div className="mb-4">
            <TextInput label="Project" type="text" id="projectName" value={projectName} handleChange={this.handleChange} length="50" />
          </div>
          <div className="mb-4">
            <TextInput label="Link" type="text" id="url" value={url} handleChange={this.handleChange} length="50" />
          </div>
          <div className="mb-4">
            <TextInput label="Technologies" type="text" id="tech" value={tech} handleChange={this.handleChange} length="50" />
          </div>
          <div>
            <label className="form-label fw-bold">Details</label>
            <div className="d-flex flex-column gap-3">
              {details.map((detailsEntry) => (
                <DetailsForm key={detailsEntry.id} detailsEntry={detailsEntry} entryID={id} handleChange={handleChange} />
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
    this.deleteDetails = this.deleteDetails.bind(this);
  }

  handleChange(event) {
    const handleDetails = this.props.handleChange.handleDetails;
    const entryID = event.target.form.id;
    const detailsID = event.target.id;
    handleDetails(event, "projects", entryID, detailsID);
  }

  deleteDetails(event) {
    const deleteDetails = this.props.handleChange.deleteDetails;
    const entryID = this.props.entryID;
    const detailsID = event.target.parentElement.attributes.id.value;
    deleteDetails("projects", entryID, detailsID);
  }

  render() {
    const { id, text } = this.props.detailsEntry;

    return (
      <div className="card flex-row justify-content-between">
        <div className="col-11">
          <textarea className="form-control details-form" id={id} value={text} onChange={this.handleChange} maxLength="110" rows="3" />
        </div>
        <div className="col-1 d-flex justify-content-center">
          <button type="button" className="btn gray px-1" id={id} onClick={this.deleteDetails}>
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
    addDetails("projects", entryID);
  }

  render() {
    return (
      <div className="user-select-none" onClick={this.addDetails} style={{ cursor: "pointer" }}>
        <span className="d-flex align-items-center fw-bold gray">
          <i className="bi bi-plus fs-3"></i> Add project details
        </span>
      </div>
    );
  }
}
