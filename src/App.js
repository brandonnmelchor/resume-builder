import React, { useState } from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { newResume, demoResume, educationEntry, experienceEntry, projectEntry, entryDetails, newEntryMode } from "./components/state";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/custom";

export default function App() {
  const [resume, setResume] = useState(() => demoResume());
  const [entryMode, setEntryMode] = useState(() => newEntryMode());
  const [printRef, setPrintRef] = useState(() => null);

  const handleChange = {
    clearResume() {
      setResume(newResume());
      setEntryMode(newEntryMode());
    },

    resetDemo() {
      setResume(demoResume());
      setEntryMode(newEntryMode());
    },

    addEntry(sectionName) {
      const updatedEntryMode = structuredClone(entryMode);
      const section = structuredClone(resume[sectionName]);
      updatedEntryMode.prevSectionName = sectionName;
      updatedEntryMode.prevSectionState = section;

      if (sectionName === "education") section.push(educationEntry());
      else if (sectionName === "experience") section.push(experienceEntry());
      else if (sectionName === "projects") section.push(projectEntry());

      const entryID = section[section.length - 1].id;
      updatedEntryMode.entryMode = true;
      updatedEntryMode.targetEntry = entryID;

      setResume((resume) => {
        return { ...resume, [sectionName]: section };
      });

      setEntryMode(updatedEntryMode);
    },

    editEntry(sectionName, entryID) {
      const updatedEntryMode = structuredClone(entryMode);
      const section = structuredClone(resume[sectionName]);

      updatedEntryMode.prevSectionName = sectionName;
      updatedEntryMode.prevSectionState = section;
      updatedEntryMode.entryMode = true;
      updatedEntryMode.targetEntry = entryID;

      setEntryMode(updatedEntryMode);
    },

    deleteEntry(sectionName, entryID) {
      const section = structuredClone(resume[sectionName]).filter((entry) => entry.id !== entryID);

      setResume((resume) => {
        return { ...resume, [sectionName]: section };
      });
    },

    saveEntry() {
      setEntryMode(newEntryMode());
    },

    cancelEntry() {
      const { prevSectionName, prevSectionState } = entryMode;

      setResume((resume) => {
        return { ...resume, [prevSectionName]: prevSectionState };
      });

      setEntryMode(newEntryMode());
    },

    addDetails(sectionName, entryID) {
      const section = structuredClone(resume[sectionName]);
      const entry = section.filter((entry) => entry.id === entryID)[0];
      entry.details.push(entryDetails());

      setResume((resume) => {
        return { ...resume, [sectionName]: section };
      });
    },

    deleteDetails(sectionName, entryID, detailsID) {
      const section = structuredClone(resume[sectionName]);
      const entry = section.filter((entry) => entry.id === entryID)[0];
      const details = entry.details.filter((entry) => entry.id !== detailsID);
      entry.details = details;

      setResume((resume) => {
        return { ...resume, [sectionName]: section };
      });
    },

    handleInput(event, sectionName) {
      const target = event.target;
      const name = target.id;
      const value = target.value;

      setResume((resume) => {
        return {
          ...resume,
          [sectionName]: {
            ...resume[sectionName],
            [name]: value,
          },
        };
      });
    },

    handleEntry(event, sectionName, entryID) {
      const target = event.target;
      const name = target.id;
      const value = target.value;

      const section = structuredClone(resume[sectionName]);
      const entry = section.filter((entry) => entry.id === entryID)[0];
      entry[name] = value;

      setResume((resume) => {
        return { ...resume, [sectionName]: section };
      });
    },

    handleDetails(event, sectionName, entryID, detailsID) {
      const target = event.target;
      const value = target.value;

      const section = structuredClone(resume[sectionName]);
      const entry = section.filter((entry) => entry.id === entryID)[0];
      const detailsEntry = entry.details.filter((detailsEntry) => detailsEntry.id === detailsID)[0];
      detailsEntry.text = value;

      setResume((resume) => {
        return { ...resume, [sectionName]: section };
      });
    },

    setPresentDate(sectionName, entryID) {
      const section = structuredClone(resume[sectionName]);
      const entry = section.filter((entry) => entry.id === entryID)[0];
      entry.endMonth = "Present";
      entry.endYear = "";

      setResume((resume) => {
        return { ...resume, [sectionName]: section };
      });
    },

    updatePrintRef(component) {
      setPrintRef(component);
    },
  };

  return (
    <Box>
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
      <Box id="small-screen" p={3}>
        <Typography variant="h4" sx={{ fontWeight: 500 }} component="p">
          The mobile view of this app isn't ready yet. Please view this app on a larger screen. Thank you!
        </Typography>
      </Box>
    </Box>
  );
}
