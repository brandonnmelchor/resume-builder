import React from "react";
import { SectionNavB, EntryNav } from "./FormNav";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { GrayTextField } from "../../styles/custom";

export default class ProjectsForm extends React.Component {
  render() {
    const projects = this.props.resume.projects;
    const { entryMode, targetEntry } = this.props.entryMode;
    const handleChange = this.props.handleChange;
    const sectionNav = this.props.sectionNav;
    let display;

    if (entryMode) {
      const entry = projects.filter((entry) => entry.id === targetEntry)[0];
      display = <EntryForm key={entry.id} projectEntry={entry} handleChange={handleChange} />;
    } else {
      display = (
        <Box>
          <Stack spacing={4}>
            {projects.map((entry) => (
              <EntryCard key={entry.id} projectEntry={entry} handleChange={handleChange} />
            ))}
            <AddEntry handleChange={handleChange} />
          </Stack>
          <SectionNavB sectionNav={sectionNav} />
        </Box>
      );
    }

    return (
      <Stack>
        <Typography variant="h5" className="gray" sx={{ fontWeight: 500 }} component="h2">
          Projects
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

  editEntry() {
    const editEntry = this.props.handleChange.editEntry;
    const entryID = this.props.projectEntry.id;
    editEntry("projects", entryID);
  }

  deleteEntry() {
    const deleteEntry = this.props.handleChange.deleteEntry;
    const entryID = this.props.projectEntry.id;
    deleteEntry("projects", entryID);
  }

  render() {
    const { id, projectName, url, tech } = this.props.projectEntry;

    return (
      <Paper variant="outlined" className="card" sx={{ p: 2 }}>
        <Box sx={{ userSelect: "none" }}>
          <Typography variant="h6" sx={{ fontWeight: 500 }} component="h3">
            {projectName}{" "}
            {url.length > 0 && (
              <Link color="inherit" href={url} target="_blank" rel="noreferrer" sx={{ fontWeight: 400, textDecoration: "none" }}>
                | Demo
              </Link>
            )}
          </Typography>
          <Typography variant="subtitle1" className="gray" component="p" sx={{ mt: 2 }}>
            {tech}
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
    addEntry("projects");
  }

  render() {
    return (
      <Button variant="text" onClick={this.addEntry} sx={{ textTransform: "none" }}>
        <Box className="gray" sx={{ fontSize: 30 }}>
          <i className="bi bi-plus fs-3"></i>
        </Box>
        <Typography variant="subtitle1" className="gray" sx={{ fontWeight: 500 }} component="p">
          Add project
        </Typography>
      </Button>
    );
  }
}

class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const handleEntry = this.props.handleChange.handleEntry;
    const entryID = event.target.form.id;
    handleEntry(event, "projects", entryID);
  }

  handleSubmit(event) {
    event.preventDefault();
    const saveEntry = this.props.handleChange.saveEntry;
    saveEntry();
  }

  render() {
    const { id, projectName, url, tech, details } = this.props.projectEntry;
    const handleChange = this.props.handleChange;

    return (
      <Box>
        <Box id={id} component="form" onSubmit={this.handleSubmit}>
          <Box sx={{ mb: 4 }}>
            <GrayTextField
              type="text"
              variant="outlined"
              size="small"
              fullWidth
              id="projectName"
              label="Project"
              value={projectName}
              onChange={this.handleChange}
              inputProps={{ maxLength: 50 }}
              required
              InputLabelProps={{ required: false }}
            />
          </Box>
          <Box sx={{ mb: 4 }}>
            <GrayTextField
              type="text"
              variant="outlined"
              size="small"
              fullWidth
              id="url"
              label="Link"
              value={url}
              onChange={this.handleChange}
              inputProps={{ maxLength: 50 }}
              required
              InputLabelProps={{ required: false }}
            />
          </Box>
          <Box sx={{ mb: 4 }}>
            <GrayTextField
              type="text"
              variant="outlined"
              size="small"
              fullWidth
              id="tech"
              label="Technologies"
              value={tech}
              onChange={this.handleChange}
              inputProps={{ maxLength: 50 }}
              required
              InputLabelProps={{ required: false }}
            />
          </Box>
          <Stack spacing={4}>
            {details.map((detailsEntry) => (
              <DetailsForm key={detailsEntry.id} detailsEntry={detailsEntry} entryID={id} handleChange={handleChange} />
            ))}
            <AddDetails entryID={id} handleChange={handleChange} />
          </Stack>
          <EntryNav handleChange={handleChange} />
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
    handleDetails(event, "projects", entryID, detailsID);
  }

  deleteDetails() {
    const deleteDetails = this.props.handleChange.deleteDetails;
    const entryID = this.props.entryID;
    const detailsID = this.props.detailsEntry.id;
    deleteDetails("projects", entryID, detailsID);
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
            required
            InputLabelProps={{ required: false }}
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
    addDetails("projects", entryID);
  }

  render() {
    return (
      <Button variant="text" onClick={this.addDetails} sx={{ textTransform: "none" }}>
        <Box className="gray" sx={{ fontSize: 30 }}>
          <i className="bi bi-plus fs-3"></i>
        </Box>
        <Typography variant="subtitle1" className="gray" sx={{ fontWeight: 500 }} component="p">
          Add project details
        </Typography>
      </Button>
    );
  }
}
