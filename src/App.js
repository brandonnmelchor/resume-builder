import React from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { newResume, demoResume, educationEntry, experienceEntry, projectEntry, entryDetails, newEntryMode } from "./components/state";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#30475e",
    },
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: demoResume(),
      entryMode: newEntryMode(),
      printRef: "",
    };

    this.clearResume = this.clearResume.bind(this);
    this.resetDemo = this.resetDemo.bind(this);

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

  clearResume() {
    this.setState({ resume: newResume(), entryMode: newEntryMode() });
  }

  resetDemo() {
    this.setState({ resume: demoResume() });
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
      clearResume: this.clearResume,
      resetDemo: this.resetDemo,
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
      <Box id="app">
        <ThemeProvider theme={theme}>
          <Nav resume={resume} printRef={printRef} handleChange={handleChange} />
          <Container maxWidth="xl" fixed sx={{ marginTop: 7, marginBottom: 7 }}>
            <Grid container direction="row" justifyContent="center" alignItems="flex-start">
              <Form resume={resume} entryMode={entryMode} handleChange={handleChange} />
              <Resume resume={resume} handleChange={handleChange} />
            </Grid>
          </Container>
          <Footer />
        </ThemeProvider>
      </Box>
    );
  }
}
