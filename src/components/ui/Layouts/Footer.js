import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../../../assets/logo.svg";
import facebook from "../../../assets/logo-facebook.svg";
import github from "../../../assets/logo-github.svg";
import linkedin from "../../../assets/logo-linkedin.svg";
import wordpress from "../../../assets/logo-wordpress.svg";


import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  footer: { backgroundColor: theme.palette.common.blue, width: "100%" },
  privacy: {
    backgroundColor: theme.palette.common.darkblue,
  },
  copyright: {
    fontSize: "1em",
    color: "white",
    [theme.breakpoints.down("sm")]: { fontSize: ".8em" },
    [theme.breakpoints.down("xs")]: { fontSize: ".7em" },
  },
  logo: {
    width: "10em",
    [theme.breakpoints.down("sm")]: { width: "8em" },
    [theme.breakpoints.down("xs")]: { width: "6em" },
  },
  link: {
    padding: "1rem",
    color: "white",
    textDecoration: "none",
  },
  icon: {
    height: "2em",
    width: "2em",
    margin: ".5em",
    [theme.breakpoints.down("sm")]: {
      height: "2.5em",
      width: "2.5em",
      margin: ".5em",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container direction="column">
        <Grid item>
          <Grid container justify="space-evenly">
            <Hidden smDown>
              <Grid
                item
                component={Link}
                to="/training"
                className={classes.link}
                onClick={() => props.setValue(1)}>
                Training
              </Grid>
              <Grid
                item
                component={Link}
                to="/skills"
                className={classes.link}
                onClick={() => props.setValue(2)}>
                Skills
              </Grid>
              <Grid
                item
                component={Link}
                to="/projects"
                className={classes.link}
                onClick={() => {
                  props.setValue(3);
                  props.setSelectedIndex(0);
                }}>
                Projects
              </Grid>
              <Grid
                item
                component={Link}
                to="/contact"
                className={classes.link}
                onClick={() => props.setValue(4)}>
                Contact
              </Grid>
            </Hidden>
            <Grid item>
              <Grid container>
                <Grid
                  item
                  component={"a"}
                  href="https://www.facebook.com/"
                  rel="noopener noreferral"
                  target="_blank">
                  <img
                    src={facebook}
                    alt="facebook logo"
                    className={classes.icon}
                  />
                </Grid>
                <Grid
                  item
                  component={"a"}
                  href="https://github.com/"
                  rel="noopener noreferral"
                  target="_blank">
                  <img
                    src={github}
                    alt="github logo"
                    className={classes.icon}
                  />
                </Grid>
                <Grid
                  item
                  component={"a"}
                  href="/"
                  rel="noopener noreferral"
                  target="_blank">
                  <img
                    src={linkedin}
                    alt="linkedin logo"
                    className={classes.icon}
                  />
                </Grid>
                <Grid
                  item
                  component={"a"}
                  href="/"
                  rel="noopener noreferral"
                  target="_blank">
                  <img
                    src={wordpress}
                    alt="wordpress logo"
                    className={classes.icon}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid
            container
            justify="space-around"
            alignItems="center"
            className={classes.privacy}>
            <Grid item className={classes.copyright}>
              Skilltransfers &copy; 2020
            </Grid>
            <Grid item>
              <img src={logo} alt="logo" className={classes.logo} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}
