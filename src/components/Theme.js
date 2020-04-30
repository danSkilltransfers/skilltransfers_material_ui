import { createMuiTheme } from "@material-ui/core/styles";

const Blue = "#2176a7";
const LightBlue = "#0ab5fe";
const DarkBlue = "#1A5E86";
const Green = "#21c3b5";
const White = "#ffffff";
const BannerBlue =
  "linear-gradient(136.88deg, #2176A7 41.34%, #0AB5FE 102.25%)";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${Blue}`,
      lightblue: `${LightBlue}`,
      darkblue: `${DarkBlue}`,
      green: `${Green}`,
      white: `${White}`,
      bannerblue: `${BannerBlue}`,
    },
    primary: { main: `${Blue}` },
    secondary: { main: `${Green}` },
  },
  typography: {
    h3: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "27px",
      lineHeight: "38px",
    },
    tab: {
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: "400",
      textTransform: "none",
      color: "white",
    },
  },
});
