import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Footer(props) {
  const github = "https://github.com/brandonnmelchor";
  const linkedin = "https://www.linkedin.com/in/brandonnmelchor/";

  return (
    <Box mt={"auto"} sx={{ backgroundColor: "primary.main", color: "white" }}>
      <Container maxWidth="xl" fixed sx={{ padding: 1 }}>
        <Stack direction="row" justifyContent="end" alignItems="center">
          <Typography variant="body1" component="p" sx={{ fontSize: 16 }}>
            &copy; 2022 Brandonn Melchor
            <Link color="inherit" href={github} target="_blank" rel="noreferrer" sx={{ marginLeft: 1, marginRight: 1 }}>
              <i className="bi bi-github"></i>
            </Link>
            <Link color="inherit" href={linkedin} target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin"></i>
            </Link>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
