import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { GrayTextField, MonthSelect } from "../../styles/custom";

export default class EducationForm extends React.Component {
  render() {
    const education = this.props.resume.education;
    const { entryMode, targetEntry } = this.props.entryMode;
    const handleChange = this.props.handleChange;
    let display;

    if (entryMode) {
      const entry = education.filter((entry) => entry.id === targetEntry)[0];
      display = <EntryForm key={entry.id} educationEntry={entry} handleChange={handleChange} />;
    } else {
      display = (
        <Stack spacing={4}>
          {education.map((entry) => (
            <EntryCard key={entry.id} educationEntry={entry} handleChange={handleChange} />
          ))}
          <AddEntry handleChange={handleChange} />
        </Stack>
      );
    }

    return (
      <Stack>
        <Typography variant="h5" className="gray" sx={{ fontWeight: 500 }} component="h2">
          Education
        </Typography>
        <Divider className="form-divider" sx={{ mb: 5 }} />
        {display}
      </Stack>
    );
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
    editEntry("education", entryID);
  }

  deleteEntry(event) {
    const deleteEntry = this.props.handleChange.deleteEntry;
    const entryID = event.target.parentElement.attributes.entry.value;
    deleteEntry("education", entryID);
  }

  render() {
    let { id, schoolName, degree, major, startMonth, startYear, endMonth, endYear } = this.props.educationEntry;
    major = major.length ? `in ${major}` : "";
    endMonth = endMonth.length ? `- ${endMonth}` : "";

    return (
      <Paper variant="outlined" className="card" sx={{ p: 2 }}>
        <Box sx={{ userSelect: "none" }}>
          <Typography variant="h6" sx={{ fontWeight: 500 }} component="h3">
            {schoolName}
          </Typography>
          <Typography variant="subtitle1" className="gray" sx={{ fontWeight: 500 }} component="p">
            {degree} {major}
          </Typography>
          <Typography variant="subtitle1" component="p" sx={{ mt: 2 }}>
            {startMonth} {startYear} {endMonth} {endYear}
          </Typography>
        </Box>
        <ButtonGroup variant="text" orientation="vertical" className="button-group">
          <Button color="inherit" entry={id} onClick={this.editEntry}>
            <i className="bi bi-pencil-square"></i>
          </Button>
          <Button color="inherit" entry={id} onClick={this.deleteEntry}>
            <i className="bi bi-trash"></i>
          </Button>
        </ButtonGroup>
      </Paper>
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
    addEntry("education");
  }

  render() {
    return (
      <Button variant="text" onClick={this.addEntry} sx={{ textTransform: "none" }}>
        <Box className="gray" sx={{ fontSize: 30 }}>
          <i className="bi bi-plus fs-3"></i>
        </Box>
        <Typography variant="subtitle1" className="gray" sx={{ fontWeight: 500 }} component="p">
          Add education
        </Typography>
      </Button>
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
    const handleEntry = this.props.handleChange.handleEntry;
    const entryID = event.target.form.id;
    handleEntry(event, "education", entryID);
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
    const handleChange = this.props.handleChange;

    return (
      <Box>
        <Box id={id} component="form">
          <Box sx={{ mb: 4 }}>
            <GrayTextField
              type="text"
              variant="outlined"
              size="small"
              fullWidth
              id="schoolName"
              label="School Name"
              value={schoolName}
              onChange={this.handleChange}
              inputProps={{ maxLength: 40 }}
            />
          </Box>
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={6}>
              <GrayTextField
                type="text"
                variant="outlined"
                size="small"
                fullWidth
                id="degree"
                label="Degree"
                value={degree}
                onChange={this.handleChange}
                inputProps={{ maxLength: 25 }}
              />
            </Grid>
            <Grid item xs={6}>
              <GrayTextField
                type="text"
                variant="outlined"
                size="small"
                fullWidth
                id="major"
                label="Major"
                value={major}
                onChange={this.handleChange}
                inputProps={{ maxLength: 25 }}
              />
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={6}>
              <MonthSelect section="education" entry={id} id="startMonth" label="Start Month" value={startMonth} handleChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <GrayTextField
                type="number"
                variant="outlined"
                size="small"
                fullWidth
                id="startYear"
                label="Start Year"
                value={startYear}
                onChange={this.handleChange}
                inputProps={{ maxLength: 4 }}
              />
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>
            <Grid item xs={6}>
              <MonthSelect
                section="education"
                entry={id}
                id="endMonth"
                label="End Month"
                value={endMonth}
                handleChange={handleChange}
                disabled={currentSchool}
              />
            </Grid>
            <Grid item xs={6}>
              <GrayTextField
                type="number"
                variant="outlined"
                size="small"
                fullWidth
                id="endYear"
                label="End Year"
                value={endYear}
                onChange={this.handleChange}
                inputProps={{ maxLength: 4 }}
                disabled={currentSchool}
              />
            </Grid>
          </Grid>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox id="currentSchool" onChange={this.setCurrentSchool} checked={currentSchool} sx={{ color: "#bac1c8" }} />}
              label="I currently study here"
            />
          </FormGroup>
        </Box>
      </Box>
    );
  }
}
