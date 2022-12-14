import React from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function EducationResume(props) {
  const education = props.education;

  return (
    <Box className="page-break" mb={1}>
      <Box className="resume-header gray" sx={{ fontWeight: "bold" }}>
        Education
      </Box>
      <Divider className="resume-divider" />
      <Box className="resume-content">
        {education.map((entry) => (
          <EducationEntry key={entry.id} educationEntry={entry} />
        ))}
      </Box>
    </Box>
  );
}

function EducationEntry(props) {
  let { schoolName, degree, major, startMonth, startYear, endMonth, endYear } = props.educationEntry;
  degree = degree.length ? `-- ${degree}` : "";
  major = major.length ? `in ${major}` : "";
  endMonth = endMonth.length ? `- ${endMonth}` : "";

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ fontWeight: "bold" }}>
        {schoolName} {degree} {major}
      </Box>
      <Box className="resume-dates gray">
        {startMonth} {startYear} {endMonth} {endYear}
      </Box>
    </Box>
  );
}
