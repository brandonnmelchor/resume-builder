import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#30475e",
    },
  },
});

const GrayTextField = styled(TextField)({
  "& label": {
    color: "#596b7e",
  },
  "& input": {
    color: "#30475e",
  },
  "& textArea": {
    color: "#30475e",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#bac1c8",
    },
  },
});

class MonthSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { section, entry, id } = this.props;
    const value = event.target.value;
    const handleEntry = this.props.handleChange.handleEntry;
    const customEvent = { target: { id, value } };
    handleEntry(customEvent, section, entry);
  }

  render() {
    const { id, label, value, disabled } = this.props;

    return (
      <Box>
        <FormControl size="small" fullWidth>
          <InputLabel id={label}>{label}</InputLabel>
          <Select labelId={label} id={id} value={value} label={label} onChange={this.handleChange} disabled={disabled}>
            <MenuItem value="Present" sx={{ display: "none" }}></MenuItem>
            <MenuItem value="Jan">January</MenuItem>
            <MenuItem value="Feb">February</MenuItem>
            <MenuItem value="Mar">March</MenuItem>
            <MenuItem value="Apr">April</MenuItem>
            <MenuItem value="May">May</MenuItem>
            <MenuItem value="Jun">June</MenuItem>
            <MenuItem value="Jul">July</MenuItem>
            <MenuItem value="Aug">August</MenuItem>
            <MenuItem value="Sep">September</MenuItem>
            <MenuItem value="Oct">October</MenuItem>
            <MenuItem value="Nov">November</MenuItem>
            <MenuItem value="Dec">December</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }
}

export { theme, GrayTextField, MonthSelect };
