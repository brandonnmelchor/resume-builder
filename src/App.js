import React from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { demoState, educationEntry } from "./components/state";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: demoState(),
      entryMode: {
        addEntryMode: false,
        editEntryMode: false,
        targetEntry: "",
      },
    };

    this.addEntry = this.addEntry.bind(this);
    this.editEntry = this.editEntry.bind(this);
    this.saveEntry = this.saveEntry.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleEntry = this.handleEntry.bind(this);
    this.setPresentDate = this.setPresentDate.bind(this);
  }

  addEntry(sectionName) {
    const resume = this.state.resume;
    const section = resume[sectionName];
    section.push(educationEntry());

    const entryMode = this.state.entryMode;
    const entry = section[section.length - 1].id;
    entryMode.addEntryMode = true;
    entryMode.targetEntry = entry;

    this.setState({ resume: resume, entryMode: entryMode });
  }

  editEntry(event) {
    const target = event.target;
    const entry = target.parentElement.attributes.entry.value;

    const entryMode = this.state.entryMode;
    entryMode.editEntryMode = true;
    entryMode.targetEntry = entry;

    this.setState({ entryMode: entryMode });
  }

  saveEntry() {
    const entryMode = this.state.entryMode;
    entryMode.addEntryMode = false;
    entryMode.editEntryMode = false;

    this.setState({ entryMode: entryMode });
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

  setPresentDate(sectionName, entryID) {
    const resume = this.state.resume;
    const section = resume[sectionName];
    const entry = section.filter((entry) => entry.id === entryID)[0];
    entry.endMonth = "Present";
    entry.endYear = "";

    this.setState({ resume: resume });
  }

  render() {
    const resume = this.state.resume;
    const entryMode = this.state.entryMode;

    const handleChange = {
      addEntry: this.addEntry,
      editEntry: this.editEntry,
      saveEntry: this.saveEntry,
      handleInput: this.handleInput,
      handleEntry: this.handleEntry,
      setPresentDate: this.setPresentDate,
    };

    return (
      <div className="d-flex flex-column justify-content-center min-vh-100">
        <Nav />
        <div className="container-lg px-4 py-5">
          <div className="row justify-content-center align-items-start gap-4">
            <Form resume={resume} entryMode={entryMode} handleChange={handleChange} />
            <Resume resume={resume} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
