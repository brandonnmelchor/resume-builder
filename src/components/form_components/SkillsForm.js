import React from "react";
import { SectionNavA } from "./FormNav";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { GrayTextField } from "../../styles/custom";

export default class SkillsForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const handleInput = this.props.handleChange.handleInput;
    handleInput(event, "skills");
  }

  handleSubmit(event) {
    event.preventDefault();
    const nextSection = this.props.sectionNav.nextSection;
    nextSection();
  }

  render() {
    const { languages, frameworks, technologies } = this.props.resume.skills;
    const sectionNav = this.props.sectionNav;

    return (
      <Box>
        <Typography variant="h5" className="gray" sx={{ fontWeight: 500 }} component="h2">
          Skills
        </Typography>
        <Divider className="form-divider" sx={{ mb: 5 }} />
        <Box component="form" onSubmit={this.handleSubmit}>
          <Box sx={{ mb: 4 }}>
            <GrayTextField
              type="text"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              id="languages"
              label="Languages"
              value={languages}
              onChange={this.handleChange}
              inputProps={{ maxLength: 100 }}
            />
          </Box>
          <Box sx={{ mb: 4 }}>
            <GrayTextField
              type="text"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              id="frameworks"
              label="Frameworks"
              value={frameworks}
              onChange={this.handleChange}
              inputProps={{ maxLength: 100 }}
            />
          </Box>
          <Box>
            <GrayTextField
              type="text"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              id="technologies"
              label="Technologies"
              value={technologies}
              onChange={this.handleChange}
              inputProps={{ maxLength: 100 }}
            />
          </Box>
          <SectionNavA sectionNav={sectionNav} />
        </Box>
      </Box>
    );
  }
}
