import React from "react";
import { TextInput, NumberInput, SelectInput, CheckboxInput } from "./FormInputs";

export default class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      currentEntry: "",
    };

    this.editEntry = this.editEntry.bind(this);
    this.saveEntry = this.saveEntry.bind(this);
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
    const { editMode, currentEntry } = this.state;
    const education = this.props.education;
    const updateInput = this.props.updateInput;
    const presentDate = this.props.presentDate;
    let display;

    if (editMode) {
      const entry = education.filter((entry) => entry.id === currentEntry)[0];
      display = <EntryForm key={entry.id} educationEntry={entry} updateInput={updateInput} presentDate={presentDate} saveEntry={this.saveEntry} />;
    } else display = education.map((entry) => <EntryCard key={entry.id} educationEntry={entry} editEntry={this.editEntry} />);

    return <div className="w-100 d-flex flex-column gap-3">{display}</div>;
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

class EntryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attending: this.props.educationEntry.endMonth === "Present" ? true : false,
    };

    this.isAttending = this.isAttending.bind(this);
  }

  isAttending(event) {
    const presentDate = this.props.presentDate;
    presentDate(event, "education");

    this.setState((state) => {
      return { attending: !state.attending };
    });
  }

  render() {
    const attending = this.state.attending;
    const { id, schoolName, degree, major, startMonth, startYear, endMonth, endYear } = this.props.educationEntry;
    const updateInput = this.props.updateInput;
    const saveEntry = this.props.saveEntry;

    return (
      <div className="w-100">
        <form id={id}>
          <div className="mb-4">
            <TextInput label="School Name" type="text" id="schoolName" value={schoolName} updateInput={updateInput} length="40" />
          </div>
          <div className="row justify-content-center align-items-center mb-4">
            <div className="col">
              <TextInput label="Degree" type="text" id="degree" value={degree} updateInput={updateInput} length="25" />
            </div>
            <div className="col">
              <TextInput label="Major" type="text" id="major" value={major} updateInput={updateInput} length="25" />
            </div>
          </div>
          <div className="row justify-content-center align-items-center mb-4">
            <div className="col">
              <SelectInput label="Start Month" id="startMonth" value={startMonth} updateInput={updateInput} disabled={false} />
            </div>
            <div className="col">
              <NumberInput label="Start Year" id="startYear" value={startYear} updateInput={updateInput} disabled={false} />
            </div>
          </div>
          <div className="row justify-content-center align-items-center mb-4">
            <div className="col">
              <SelectInput label="End Month" id="endMonth" value={endMonth} updateInput={updateInput} disabled={attending} />
            </div>
            <div className="col">
              <NumberInput label="End Year" id="endYear" value={endYear} updateInput={updateInput} disabled={attending} />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <CheckboxInput label="I currently study here" id="attending" updateInput={this.isAttending} checked={attending} />
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
