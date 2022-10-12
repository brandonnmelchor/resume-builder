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

export default class ExperienceForm extends React.Component {
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
        <Stack spacing={4}>
          {experience.map((entry) => (
            <EntryCard key={entry.id} experienceEntry={entry} handleChange={handleChange} />
          ))}
          <AddEntry handleChange={handleChange} />
        </Stack>
      );
    }

    return (
      <Stack>
        <Typography variant="h5" className="gray" sx={{ fontWeight: 500 }} component="h2">
          Experience
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
    editEntry("experience", entryID);
  }

  deleteEntry(event) {
    const deleteEntry = this.props.handleChange.deleteEntry;
    const entryID = event.target.parentElement.attributes.entry.value;
    deleteEntry("experience", entryID);
  }

  render() {
    let { id, company, title, startMonth, startYear, endMonth, endYear } = this.props.experienceEntry;
    endMonth = endMonth.length ? `- ${endMonth}` : "";

    return (
      <Paper variant="outlined" className="card" sx={{ p: 2 }}>
        <Box sx={{ userSelect: "none" }}>
          <Typography variant="h6" sx={{ fontWeight: 500 }} component="h3">
            {company}
          </Typography>
          <Typography variant="subtitle1" className="gray" sx={{ fontWeight: 500 }} component="p">
            {title}
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
    addEntry("experience");
  }

  render() {
    return (
      <Button variant="text" onClick={this.addEntry} sx={{ textTransform: "none" }}>
        <Box className="gray" sx={{ fontSize: 30 }}>
          <i className="bi bi-plus fs-3"></i>
        </Box>
        <Typography variant="subtitle1" className="gray" sx={{ fontWeight: 500 }} component="p">
          Add work experience
        </Typography>
      </Button>
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
      <Box>
        <Box id={id} component="form">
          <Box sx={{ mb: 4 }}>
            <GrayTextField
              type="text"
              variant="outlined"
              size="small"
              fullWidth
              id="company"
              label="Company Name"
              value={company}
              onChange={this.handleChange}
              inputProps={{ maxLength: 50 }}
            />
          </Box>
          <Box sx={{ mb: 4 }}>
            <GrayTextField
              type="text"
              variant="outlined"
              size="small"
              fullWidth
              id="title"
              label="Title"
              value={title}
              onChange={this.handleChange}
              inputProps={{ maxLength: 50 }}
            />
          </Box>
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={6}>
              <MonthSelect section="experience" entry={id} id="startMonth" label="Start Month" value={startMonth} handleChange={handleChange} />
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
                section="experience"
                entry={id}
                id="endMonth"
                label="End Month"
                value={endMonth}
                handleChange={handleChange}
                disabled={currentWork}
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
                disabled={currentWork}
              />
            </Grid>
          </Grid>
          <FormGroup sx={{ mb: 4 }}>
            <FormControlLabel
              control={<Checkbox id="currentWork" onChange={this.setCurrentWork} checked={currentWork} sx={{ color: "#bac1c8" }} />}
              label="I currently work here"
            />
          </FormGroup>
          <Stack spacing={4}>
            {details.map((detailsEntry) => (
              <DetailsForm key={detailsEntry.id} detailsEntry={detailsEntry} entryID={id} handleChange={handleChange} />
            ))}
            <AddDetails entryID={id} handleChange={handleChange} />
          </Stack>
        </Box>
      </Box>
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
    handleDetails(event, "experience", entryID, detailsID);
  }

  deleteDetails(event) {
    const deleteDetails = this.props.handleChange.deleteDetails;
    const entryID = this.props.entryID;
    const detailsID = event.target.parentElement.attributes.id.value;
    deleteDetails("experience", entryID, detailsID);
  }

  render() {
    const { id, text } = this.props.detailsEntry;

    return (
      <Stack direction="row" justifyContent="space-between">
        <Box sx={{ width: "90%" }}>
          <GrayTextField
            type="text"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            id={id}
            label="Details"
            value={text}
            onChange={this.handleChange}
            inputProps={{ maxLength: 110 }}
          />
        </Box>
        <Button color="inherit" id={id} onClick={this.deleteDetails}>
          <i className="bi bi-trash"></i>
        </Button>
      </Stack>
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
      <Button variant="text" onClick={this.addDetails} sx={{ textTransform: "none" }}>
        <Box className="gray" sx={{ fontSize: 30 }}>
          <i className="bi bi-plus fs-3"></i>
        </Box>
        <Typography variant="subtitle1" className="gray" sx={{ fontWeight: 500 }} component="p">
          Add experience details
        </Typography>
      </Button>
    );
  }
}
