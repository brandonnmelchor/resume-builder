import React from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default class SkillsResume extends React.Component {
  render() {
    const { languages, frameworks, technologies } = this.props.skills;

    return (
      <Box className="page-break" mb={1}>
        <Box className="resume-header gray" sx={{ fontWeight: "bold" }}>
          Skills
        </Box>
        <Divider className="resume-divider" />
        <Box className="resume-content">
          {languages.length > 0 && (
            <Box>
              <Box sx={{ display: "inline", fontWeight: "bold" }}>Languages:&emsp;&emsp;</Box>
              <Box sx={{ display: "inline" }}>{languages}</Box>
            </Box>
          )}
          {frameworks.length > 0 && (
            <Box>
              <Box sx={{ display: "inline", fontWeight: "bold" }}>Frameworks:&emsp;&ensp;</Box>
              <Box sx={{ display: "inline" }}>{frameworks}</Box>
            </Box>
          )}
          {technologies.length > 0 && (
            <Box>
              <Box sx={{ display: "inline", fontWeight: "bold" }}>Technologies:&emsp;</Box>
              <Box sx={{ display: "inline" }}>{technologies}</Box>
            </Box>
          )}
        </Box>
      </Box>
    );
  }
}
