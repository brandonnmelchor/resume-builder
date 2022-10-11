import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { GrayTextField } from "../../styles/styles";

export default class PersonalForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const handleInput = this.props.handleChange.handleInput;
    handleInput(event, "personal");
  }

  render() {
    const { firstName, lastName, phone, email, linkedin, github } = this.props.resume.personal;

    return (
      <Box>
        <Typography variant="h5" className="gray" sx={{ fontWeight: 500 }} component="h2">
          Personal
        </Typography>
        <Divider className="form-divider" sx={{ mb: 5 }} />
        <Box component="form">
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
              inputProps={{ maxLength: 40 }}
            />
          </Box>
          <Box sx={{ mb: 4 }}>
            <GrayTextField
              type="url"
              variant="outlined"
              size="small"
              fullWidth
              id="linkedin"
              label="LinkedIn"
              value={linkedin}
              onChange={this.handleChange}
              inputProps={{ maxLength: 40 }}
            />
          </Box>
          <Box>
            <GrayTextField
              type="url"
              variant="outlined"
              size="small"
              fullWidth
              id="github"
              label="GitHub"
              value={github}
              onChange={this.handleChange}
              inputProps={{ maxLength: 40 }}
            />
          </Box>
        </Box>
      </Box>
    );
  }
}
