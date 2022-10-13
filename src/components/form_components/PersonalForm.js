import React from "react";
import { SectionNavA } from "./FormNav";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { GrayTextField } from "../../styles/custom";

export default class PersonalForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const handleInput = this.props.handleChange.handleInput;
    handleInput(event, "personal");
  }

  handleSubmit(event) {
    event.preventDefault();
    const nextSection = this.props.sectionNav.nextSection;
    nextSection();
  }

  render() {
    const { firstName, lastName, phone, email, linkedin, github } = this.props.resume.personal;
    const sectionNav = this.props.sectionNav;

    return (
      <Box>
        <Typography variant="h5" className="gray" sx={{ fontWeight: 500 }} component="h2">
          Personal
        </Typography>
        <Divider className="form-divider" sx={{ mb: 5 }} />
        <Box component="form" onSubmit={this.handleSubmit}>
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={6}>
              <GrayTextField
                type="text"
                variant="outlined"
                size="small"
                fullWidth
                id="firstName"
                label="First Name"
                value={firstName}
                onChange={this.handleChange}
                inputProps={{ maxLength: 25 }}
                required
                InputLabelProps={{ required: false }}
              />
            </Grid>
            <Grid item xs={6}>
              <GrayTextField
                type="text"
                variant="outlined"
                size="small"
                fullWidth
                id="lastName"
                label="Last Name"
                value={lastName}
                onChange={this.handleChange}
                inputProps={{ maxLength: 25 }}
                required
                InputLabelProps={{ required: false }}
              />
            </Grid>
          </Grid>
          <Box sx={{ mb: 4 }}>
            <GrayTextField
              type="tel"
              variant="outlined"
              size="small"
              fullWidth
              id="phone"
              label="Phone"
              value={phone}
              onChange={this.handleChange}
              inputProps={{ maxLength: 25 }}
              required
              InputLabelProps={{ required: false }}
            />
          </Box>
          <Box sx={{ mb: 4 }}>
            <GrayTextField
              type="email"
              variant="outlined"
              size="small"
              fullWidth
              id="email"
              label="Email"
              value={email}
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
              id="linkedin"
              label="LinkedIn"
              value={linkedin}
              onChange={this.handleChange}
              inputProps={{ maxLength: 50 }}
            />
          </Box>
          <Box>
            <GrayTextField
              type="text"
              variant="outlined"
              size="small"
              fullWidth
              id="github"
              label="GitHub"
              value={github}
              onChange={this.handleChange}
              inputProps={{ maxLength: 50 }}
            />
          </Box>
          <SectionNavA sectionNav={sectionNav} />
        </Box>
      </Box>
    );
  }
}
