import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

export default function SkillsResume(props) {
  const { languages, frameworks, technologies } = props.skills;

  return (
    <Box className="page-break" mb={1}>
      <Box className="resume-header gray" sx={{ fontWeight: "bold" }}>
        Skills
      </Box>
      <Divider className="resume-divider" />
      <Box className="resume-content">
        {languages.length > 0 && (
          <Stack direction="row">
            <Box sx={{ width: "13%", fontWeight: "bold" }}>Languages:</Box>
            <Box sx={{ width: "87%" }}>{languages}</Box>
          </Stack>
        )}
        {frameworks.length > 0 && (
          <Stack direction="row">
            <Box sx={{ width: "13%", fontWeight: "bold" }}>Frameworks:</Box>
            <Box sx={{ width: "87%" }}>{frameworks}</Box>
          </Stack>
        )}
        {technologies.length > 0 && (
          <Stack direction="row">
            <Box sx={{ width: "13%", fontWeight: "bold" }}>Technologies:</Box>
            <Box sx={{ width: "87%" }}>{technologies}</Box>
          </Stack>
        )}
      </Box>
    </Box>
  );
}
