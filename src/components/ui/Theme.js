import { createMuiTheme } from "@material-ui/core/styles";

const Blue = "#2176a7";
const Green = "#21c3b5";
const DarkBlue = "#1A5E86";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${Blue}`,
      green: `${Green}`,
      darkBlue: `${DarkBlue}`,
    },
    primary: { main: `${Blue}` },
    secondary: { main: `${Green}` },
  },
  typography: {
    // h3:{fontWeight:500},
    tab: {
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: "400",
      textTransform: "none",
      color: "white",
    },
  },
});
