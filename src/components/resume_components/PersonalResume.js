import React from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { blueGrey } from "@mui/material/colors";

export default class PersonalResume extends React.Component {
  render() {
    let { firstName, lastName, phone, email, linkedin, github } = this.props.personal;
    firstName = firstName.length ? firstName : "First";
    lastName = lastName.length ? lastName : "Last";
    email = email.length ? `| ${email}` : "";
    github = github.length ? `| ${github}` : "";

    return (
      <Box className="page-break" mb={1}>
        <Box className="resume-header" sx={{ color: blueGrey[500], fontWeight: 500 }}>
          {firstName} {lastName}
        </Box>
        <Divider sx={{ marginBottom: "3px", borderColor: blueGrey[300] }} />
        <Box className="resume-content">
          {phone} {email}
        </Box>
        <Box className="resume-content">
          {linkedin} {github}
        </Box>
      </Box>
    );
  }
}
