import React from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import demo from "./components/demo";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resume: demo,
    };

    this.updateInput = this.updateInput.bind(this);
    this.updateEntry = this.updateEntry.bind(this);
    this.setPresentDate = this.setPresentDate.bind(this);
  }

  updateInput(event, sectionName) {
    const target = event.target;
    const name = target.id;
    const value = target.value;

    const resume = this.state.resume;
    resume[sectionName][name] = value;

    this.setState({
      resume: resume,
    });
  }

  updateEntry(event, sectionName, entryID) {
    const target = event.target;
    const name = target.id;
    const value = target.value;

    const resume = this.state.resume;
    const section = resume[sectionName];
    const entry = section.filter((entry) => entry.id === entryID)[0];
    entry[name] = value;

    this.setState({
      resume: resume,
    });
  }

  setPresentDate(sectionName, entryID) {
    const resume = this.state.resume;
    const section = resume[sectionName];
    const entry = section.filter((entry) => entry.id === entryID)[0];
    entry.endMonth = "Present";
    entry.endYear = "";

    this.setState({
      resume: resume,
    });
  }

  render() {
    const resume = this.state.resume;
    const handleChange = {
      updateInput: this.updateInput,
      updateEntry: this.updateEntry,
      setPresentDate: this.setPresentDate,
    };

    return (
      <div className="d-flex flex-column justify-content-center min-vh-100">
        <Nav />
        <div className="container-lg px-4 py-5">
          <div className="row justify-content-center align-items-start gap-4">
            <Form resume={resume} handleChange={handleChange} />
            <Resume resume={resume} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
