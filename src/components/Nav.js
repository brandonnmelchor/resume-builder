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
                  <Button color="inherit" sx={{ fontSize: "20px" }} onClick={clearResume}>
                    <RestartAltOutlinedIcon sx={{ fontSize: "30px", marginRight: "5px" }} />
                    Clear
                  </Button>
                </Box>
                <Box mr={2}>
                  <Button color="inherit" sx={{ fontSize: "20px" }} onClick={resetDemo}>
                    <CodeOutlinedIcon sx={{ fontSize: "30px", marginRight: "5px" }} />
                    Demo
                  </Button>
                </Box>
                <Box>
                  <ReactToPrint content={() => printRef} documentTitle={`${firstName}${lastName}_Resume`}>
                    <PrintContextConsumer>
                      {({ handlePrint }) => (
                        <Button color="inherit" sx={{ fontSize: "20px" }} onClick={handlePrint}>
                          <FileDownloadDoneOutlinedIcon sx={{ fontSize: "30px", marginRight: "5px" }} />
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
