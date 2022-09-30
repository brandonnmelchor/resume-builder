import React from "react";
import { TextInput, NumberInput, SelectInput, CheckboxInput } from "./FormInputs";

export default class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = { editMode: true };
    // this.prevSection = this.prevSection.bind(this);
  }

  render() {
    const editMode = this.state.editMode;
    const education = this.props.education;
    const secondEntry = education[1].id;
    let display;

    if (editMode) {
      const entry = education.filter((entry) => entry.id === secondEntry)[0];
      display = <EntryForm key={entry.id} educationEntry={entry} />;
    } else display = education.map((entry) => <EntryCard key={entry.id} educationEntry={entry} />);

    return <div className="w-100 d-flex flex-column gap-3">{display}</div>;
  }
}

class EntryCard extends React.Component {
  render() {
    const { id, schoolName, degree, major, startMonth, startYear, endMonth, endYear } = this.props.educationEntry;

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
          <button
            type="button"
            className="btn gray px-1"
            entry={id}
            onClick={(event) => {
              console.log(event.target.attributes.entry.value);
            }}>
            <i className="bi bi-pencil-square"></i>
          </button>
          <button
            type="button"
            className="btn gray px-1"
            entry={id}
            onClick={(event) => {
              console.log("test");
            }}>
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}

class EntryForm extends React.Component {
  render() {
    const { id, schoolName, degree, major, startMonth, startYear, endMonth, endYear } = this.props.educationEntry;
    const currentYear = new Date().getFullYear();

    return (
      <div className="w-100">
        <form>
          <div className="mb-4">
            <TextInput label="School Name" type="text" id="schoolName" value={schoolName} update={DOMRectReadOnly} length="25" />
          </div>
          <div className="row justify-content-center align-items-center mb-4">
            <div className="col">
              <TextInput label="Degree" type="text" id="degree" value={degree} update={DOMRectReadOnly} length="25" />
            </div>
            <div className="col">
              <TextInput label="Major" type="text" id="major" value={major} update={DOMRectReadOnly} length="25" />
            </div>
          </div>
          <div className="row justify-content-center align-items-center mb-4">
            <div className="col">
              <SelectInput label="Start Month" id="startMonth" value={startMonth} update={DOMRectReadOnly} />
            </div>
            <div className="col">
              <NumberInput label="Start Year" id="startYear" value={startYear} update={DOMRectReadOnly} min="1900" max={currentYear} />
            </div>
          </div>
          <div className="row justify-content-center align-items-center mb-4">
            <div className="col">
              <SelectInput label="End Month" id="endMonth" value={endMonth} update={DOMRectReadOnly} />
            </div>
            <div className="col">
              <NumberInput label="End Year" id="endYear" value={endYear} update={DOMRectReadOnly} min="1900" max={currentYear} />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <CheckboxInput label="I currently study here" id="noEndDate" update={(event) => console.log(event.target.checked)} />
            </div>
            <div>
              <button
                type="button"
                className="btn btn-outline-secondary gray-border"
                onClick={(event) => {
                  console.log(event.target);
                }}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
