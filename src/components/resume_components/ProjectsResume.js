import React from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

export default function ProjectsResume(props) {
  const projects = props.projects;

  return (
    <Box className="page-break">
      <Box className="resume-header gray" sx={{ fontWeight: "bold" }}>
        Projects
      </Box>
      <Divider className="resume-divider" />
      <Box className="resume-content">
        {projects.map((entry) => (
          <ProjectEntry key={entry.id} projectEntry={entry} />
        ))}
      </Box>
    </Box>
  );
}

function ProjectEntry(props) {
  const { projectName, url, tech, details } = props.projectEntry;

  return (
    <Box>
      <Box>
        <Box sx={{ display: "inline", fontWeight: "bold" }}>{projectName} </Box>
        {url.length > 0 && (
          <Box sx={{ display: "inline" }}>
            <Link color="inherit" href={url} target="_blank" rel="noreferrer" sx={{ textDecoration: "none" }}>
              | Demo
            </Link>
          </Box>
        )}
      </Box>
      <Box className="gray" sx={{ fontStyle: "italic" }}>
        {tech}
      </Box>
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
