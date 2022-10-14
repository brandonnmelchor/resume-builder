import React from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function ExperienceResume(props) {
  const experience = props.experience;

  return (
    <Box className="page-break" mb={1}>
      <Box className="resume-header gray" sx={{ fontWeight: "bold" }}>
        Experience
      </Box>
      <Divider className="resume-divider" />
      <Box className="resume-content">
        {experience.map((entry) => (
          <ExperienceEntry key={entry.id} experienceEntry={entry} />
        ))}
      </Box>
    </Box>
  );
}

function ExperienceEntry(props) {
  let { company, title, startMonth, startYear, endMonth, endYear, details } = props.experienceEntry;
  endMonth = endMonth.length ? `- ${endMonth}` : "";

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ fontWeight: "bold" }}>{company}</Box>
        <Box className="resume-dates gray">
          {startMonth} {startYear} {endMonth} {endYear}
        </Box>
      </Box>
      <Box className="gray">{title}</Box>
      <ul style={{ margin: 0, paddingLeft: 40 }}>
        {details.map((entry) => (
          <DetailsEntry key={entry.id} detailsEntry={entry.text} />
        ))}
      </ul>
    </Box>
  );
}

function DetailsEntry(props) {
  const detailsEntry = props.detailsEntry;
  return <li>{detailsEntry}</li>;
}
