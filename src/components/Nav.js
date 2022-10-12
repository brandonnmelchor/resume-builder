import React from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default class Nav extends React.Component {
  render() {
    const { firstName, lastName } = this.props.resume.personal;
    const printRef = this.props.printRef;
    const { clearResume, resetDemo } = this.props.handleChange;

    return (
      <Box mb={"auto"}>
        <AppBar elevation={0} position="static">
          <Container maxWidth="xl" fixed>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }} disableGutters>
              <Button color="inherit" sx={{ textTransform: "none" }}>
                <Box sx={{ fontSize: 45, marginRight: 1 }}>
                  <i className="bi bi-file-code"></i>
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 500 }} component="h1">
                  CS Resume Builder
                </Typography>
              </Button>
              <Stack direction="row" justifyContent="center" alignItems="center">
                <Box className="shrink-margin" mr={2}>
                  <Button color="inherit" sx={{ fontSize: 18 }} onClick={clearResume}>
                    <Box className="hide" sx={{ fontSize: 30, marginRight: 1 }}>
                      <i className="bi bi-file-break"></i>
                    </Box>
                    Clear
                  </Button>
                </Box>
                <Box className="shrink-margin" mr={2}>
                  <Button color="inherit" sx={{ fontSize: 18 }} onClick={resetDemo}>
                    <Box className="hide" sx={{ fontSize: 30, marginRight: 1 }}>
                      <i className="bi bi-file-person"></i>
                    </Box>
                    Demo
                  </Button>
                </Box>
                <Box>
                  <ReactToPrint content={() => printRef} documentTitle={`${firstName}${lastName}_Resume`}>
                    <PrintContextConsumer>
                      {({ handlePrint }) => (
                        <Button color="inherit" sx={{ fontSize: 18 }} onClick={handlePrint}>
                          <Box className="hide" sx={{ fontSize: 30, marginRight: 1 }}>
                            <i className="bi bi-file-check"></i>
                          </Box>
                          Save
                        </Button>
                      )}
                    </PrintContextConsumer>
                  </ReactToPrint>
                </Box>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    );
  }
}
