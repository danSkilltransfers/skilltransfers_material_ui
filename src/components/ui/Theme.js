import { createMuiTheme } from "@material-ui/core/styles";

const Blue = "#2176a7";
const LightBlue = "#0ab5fe";
const DarkBlue = "#1A5E86";
const Green = "#21c3b5";
const White = "#ffffff";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${Blue}`,
      lightblue: `${LightBlue}`,
      darkblue: `${DarkBlue}`,
      green: `${Green}`,
      white: `${White}`,
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
