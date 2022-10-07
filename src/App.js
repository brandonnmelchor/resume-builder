import React from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Resume from "./components/Resume";
import ResumePDF from "./components/ResumePDF";
import Footer from "./components/Footer";
import { demoResume, educationEntry, experienceEntry, projectEntry, entryDetails, newEntryMode } from "./components/state";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: demoResume(),
      entryMode: newEntryMode(),
      printRef: "",
    };

    this.addEntry = this.addEntry.bind(this);
    this.editEntry = this.editEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.saveEntry = this.saveEntry.bind(this);
    this.cancelEntry = this.cancelEntry.bind(this);
    this.addDetails = this.addDetails.bind(this);
    this.deleteDetails = this.deleteDetails.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleEntry = this.handleEntry.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
    this.setPresentDate = this.setPresentDate.bind(this);
    this.setPrintRef = this.setPrintRef.bind(this);
  }

  addEntry(sectionName) {
    const { resume, entryMode } = this.state;
    const section = resume[sectionName];
    entryMode.prevSectionName = sectionName;
    entryMode.prevSectionState = structuredClone(section);

    if (sectionName === "education") section.push(educationEntry());
    else if (sectionName === "experience") section.push(experienceEntry());
    else if (sectionName === "projects") section.push(projectEntry());

    const entry = section[section.length - 1].id;
    entryMode.entryMode = true;
    entryMode.targetEntry = entry;

    this.setState({ resume: resume, entryMode: entryMode });
  }

  editEntry(sectionName, entryID) {
    const { resume, entryMode } = this.state;
    const section = resume[sectionName];

    entryMode.prevSectionName = sectionName;
    entryMode.prevSectionState = structuredClone(section);
    entryMode.entryMode = true;
    entryMode.targetEntry = entryID;

    this.setState({ entryMode: entryMode });
  }

  deleteEntry(sectionName, entryID) {
    const resume = this.state.resume;
    const section = resume[sectionName].filter((entry) => entry.id !== entryID);
    resume[sectionName] = section;

    this.setState({ resume: resume });
  }

  saveEntry() {
    this.setState({ entryMode: newEntryMode() });
  }

  cancelEntry() {
    const { resume, entryMode } = this.state;
    const { prevSectionName, prevSectionState } = entryMode;
    resume[prevSectionName] = prevSectionState;

    this.setState({ resume: resume, entryMode: newEntryMode() });
  }

  addDetails(sectionName, entryID) {
    const resume = this.state.resume;
    const section = resume[sectionName];
    const entry = section.filter((entry) => entry.id === entryID)[0];
    entry.details.push(entryDetails());

    this.setState({ resume: resume });
  }

  deleteDetails(sectionName, entryID, detailsID) {
    const resume = this.state.resume;
    const section = resume[sectionName];
    const entry = section.filter((entry) => entry.id === entryID)[0];
    const details = entry.details.filter((entry) => entry.id !== detailsID);
    entry.details = details;

    this.setState({ resume: resume });
  }

  handleInput(event, sectionName) {
    const target = event.target;
    const name = target.id;
    const value = target.value;

    const resume = this.state.resume;
    resume[sectionName][name] = value;

    this.setState({ resume: resume });
  }

  handleEntry(event, sectionName, entryID) {
    const target = event.target;
    const name = target.id;
    const value = target.value;

    const resume = this.state.resume;
    const section = resume[sectionName];
    const entry = section.filter((entry) => entry.id === entryID)[0];
    entry[name] = value;

    this.setState({ resume: resume });
  }

  handleDetails(event, sectionName, entryID, detailsID) {
    const target = event.target;
    const value = target.value;

    const resume = this.state.resume;
    const section = resume[sectionName];
    const entry = section.filter((entry) => entry.id === entryID)[0];
    const detailsEntry = entry.details.filter((detailsEntry) => detailsEntry.id === detailsID)[0];
    detailsEntry.text = value;

    this.setState({ resume: resume });
  }

  setPresentDate(sectionName, entryID) {
    const resume = this.state.resume;
    const section = resume[sectionName];
    const entry = section.filter((entry) => entry.id === entryID)[0];
    entry.endMonth = "Present";
    entry.endYear = "";

    this.setState({ resume: resume });
  }

  setPrintRef(component) {
    this.setState({ printRef: component });
  }

  render() {
    const resume = this.state.resume;
    const entryMode = this.state.entryMode;
    const printRef = this.state.printRef;
    const handleChange = {
      addEntry: this.addEntry,
      editEntry: this.editEntry,
      deleteEntry: this.deleteEntry,
      saveEntry: this.saveEntry,
      cancelEntry: this.cancelEntry,
      addDetails: this.addDetails,
      deleteDetails: this.deleteDetails,
      handleInput: this.handleInput,
      handleEntry: this.handleEntry,
      handleDetails: this.handleDetails,
      setPresentDate: this.setPresentDate,
      setPrintRef: this.setPrintRef,
    };

    return (
      <div className="d-flex flex-column justify-content-center min-vh-100">
        <Nav />
        <div className="container-lg px-4 py-5">
          <div className="row justify-content-center align-items-start gap-4">
            <Form resume={resume} entryMode={entryMode} printRef={printRef} handleChange={handleChange} />
            <Resume resume={resume} />
          </div>
        </div>
        <div className="d-flex justify-content-center py-5">
          <ResumePDF resume={resume} handleChange={handleChange} />
        </div>
        <Footer />
      </div>
    );
  }
}
