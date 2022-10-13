import React from "react";

import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

export class SectionNavA extends React.Component {
  render() {
    const { section, prevSection } = this.props.sectionNav;

    return (
      <Stack mt={5}>
        <Divider className="form-divider" sx={{ mb: 4 }} />
        <Stack direction="row">
          {section > 1 && (
            <Button
              variant="outlined"
              className="nav-button"
              onClick={() => {
                prevSection();
              }}>
              Back
            </Button>
          )}
          {section < 5 && (
            <Button type="submit" variant="contained" disableElevation className="nav-button" sx={{ ml: "auto" }}>
              Continue
            </Button>
          )}
        </Stack>
      </Stack>
    );
  }
}

export class SectionNavB extends React.Component {
  render() {
    const { section, prevSection, nextSection } = this.props.sectionNav;

    return (
      <Stack mt={5}>
        <Divider className="form-divider" sx={{ mb: 4 }} />
        <Stack direction="row">
          {section > 1 && (
            <Button
              variant="outlined"
              className="nav-button"
              onClick={() => {
                prevSection();
              }}>
              Back
            </Button>
          )}
          {section < 5 && (
            <Button
              variant="contained"
              disableElevation
              className="nav-button"
              onClick={() => {
                nextSection();
              }}
              sx={{ ml: "auto" }}>
              Continue
            </Button>
          )}
        </Stack>
      </Stack>
    );
  }
}

export class EntryNav extends React.Component {
  render() {
    const { saveEntry, cancelEntry } = this.props.handleChange;

    return (
      <Stack mt={5}>
        <Divider className="form-divider" sx={{ mb: 4 }} />
        <Stack direction="row">
          <Button
            variant="outlined"
            className="nav-button"
            onClick={() => {
              cancelEntry();
            }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            disableElevation
            className="nav-button"
            onClick={() => {
              saveEntry();
            }}
            sx={{ ml: "auto" }}>
            Save
          </Button>
        </Stack>
      </Stack>
    );
  }
}
