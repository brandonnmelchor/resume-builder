import React from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function PersonalResume(props) {
  let { firstName, lastName, phone, email, linkedin, github } = props.personal;
  firstName = firstName.length ? firstName : "First";
  lastName = lastName.length ? lastName : "Last";
  email = email.length ? `| ${email}` : "";
  github = github.length ? `| ${github}` : "";

  return (
    <Box className="page-break" mb={1}>
      <Box className="resume-header gray" sx={{ fontWeight: "bold" }}>
        {firstName} {lastName}
      </Box>
      <Divider className="resume-divider" />
      <Box className="resume-content">
        {phone} {email}
      </Box>
      <Box className="resume-content">
        {linkedin} {github}
      </Box>
    </Box>
  );
}
