import TextField from "@mui/material/TextField";
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
    color: "596b7e",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "949fab",
    },
  },
});

export { theme, GrayTextField };
