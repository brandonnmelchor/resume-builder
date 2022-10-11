import React from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ClearAllOutlinedIcon from "@mui/icons-material/ClearAllOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import FileDownloadDoneOutlinedIcon from "@mui/icons-material/FileDownloadDoneOutlined";

class AppBarA extends React.Component {
  render() {
    const { firstName, lastName } = this.props.resume.personal;
    const printRef = this.props.printRef;
    const { clearResume, resetDemo } = this.props.handleChange;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-auto">
        <div className="container-lg">
          <a className="navbar-brand" role="button">
            <span className="fs-1 fw-bold">
              <i className="bi bi-file-code"></i>
            </span>
            <span className="fs-2 fw-bold"> CS Resume Builder</span>
          </a>
          <ul className="navbar-nav d-flex justify-content-between">
            <div className="nav-item fs-5 text-white user-select-none me-3" onClick={clearResume} style={{ cursor: "pointer" }}>
              <span className="nav-link">
                <i className="bi bi-file-break"></i> Clear
              </span>
            </div>
            <div className="nav-item fs-5 text-white user-select-none me-3" onClick={resetDemo} style={{ cursor: "pointer" }}>
              <span className="nav-link">
                <i className="bi bi-file-person"></i> Demo
              </span>
            </div>
            <ReactToPrint content={() => printRef} documentTitle={`${firstName}${lastName}_Resume`}>
              <PrintContextConsumer>
                {({ handlePrint }) => (
                  <div className="nav-item fs-5 text-white user-select-none" onClick={handlePrint} style={{ cursor: "pointer" }}>
                    <span className="nav-link">
                      <i className="bi bi-download"></i> Save
                    </span>
                  </div>
                )}
              </PrintContextConsumer>
            </ReactToPrint>
          </ul>
        </div>
      </nav>
    );
  }
}

export default class Nav extends React.Component {
  render() {
    const { firstName, lastName } = this.props.resume.personal;
    const printRef = this.props.printRef;
    const { clearResume, resetDemo } = this.props.handleChange;

    return (
      <Box mb={"auto"}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <Stack direction="row" justifyContent="center" alignItems="center">
                <ClearAllOutlinedIcon sx={{ fontSize: "100px" }} />
                <Typography variant="h4" sx={{ fontWeight: "500" }} component="h1">
                  CS Resume Builder
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="center" alignItems="center">
                <Box mr={2}>
                  <Button color="inherit" sx={{ fontSize: "20px" }}>
                    <RestartAltOutlinedIcon sx={{ fontSize: "30px", marginRight: "5px" }} />
                    Clear
                  </Button>
                </Box>
                <Box mr={2}>
                  <Button color="inherit" sx={{ fontSize: "20px" }}>
                    <CodeOutlinedIcon sx={{ fontSize: "30px", marginRight: "5px" }} />
                    Demo
                  </Button>
                </Box>
                <Box>
                  <Button color="inherit" sx={{ fontSize: "20px" }}>
                    <FileDownloadDoneOutlinedIcon sx={{ fontSize: "30px", marginRight: "5px" }} />
                    Save
                  </Button>
                </Box>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    );
  }
}
