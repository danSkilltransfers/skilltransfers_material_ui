import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import facebook from "../../assets/logo-facebook.svg";
import github from "../../assets/logo-github.svg";
import linkedin from "../../assets/logo-linkedin.svg";
import wordpress from "../../assets/logo-wordpress.svg";

import { Grid, Hidden, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
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
    color: theme.palette.common.black,
    textDecoration: "none",
  },
  icon: {
    height: "2em",
    width: "2em",
    margin: " .5em 1em .5em 0",
    [theme.breakpoints.down("sm")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  section: {
    padding: "2rem",
    [theme.breakpoints.down("sm")]: { padding: "0" },
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container direction="column">
        <Container>
          <Grid container justify="space-evenly">
            <Hidden smDown>
              <Grid item className={classes.section}>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <Typography variant="h5">Good to know</Typography>
                  </Grid>
                  <Grid
                    item
                    component={Link}
                    to="/teaching-method"
                    className={classes.link}>
                    <Typography variant="h6">Teaching method</Typography>
                  </Grid>
                  <Grid
                    item
                    component={Link}
                    to="/privacy-policy"
                    className={classes.link}>
                    <Typography variant="h6">Privacy Policy</Typography>
                  </Grid>
                  <Grid
                    item
                    component={Link}
                    to="/pricing"
                    className={classes.link}>
                    <Typography variant="h6">Pricing</Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item className={classes.section}>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <Typography variant="h5">Join us</Typography>
                  </Grid>
                  <Grid
                    item
                    component={Link}
                    to="/enterprise-solutions"
                    className={classes.link}>
                    <Typography variant="h6">Enterprise solutions</Typography>
                  </Grid>
                  <Grid
                    item
                    component={Link}
                    to="/opportunities"
                    className={classes.link}>
                    <Typography variant="h6">Opportunities</Typography>
                  </Grid>
                  <Grid
                    item
                    component={Link}
                    to="/events"
                    className={classes.link}>
                    <Typography variant="h6">Events</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.section}>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <Typography variant="h5">Support</Typography>
                  </Grid>
                  <Grid item component={Link} to="faq" className={classes.link}>
                    <Typography variant="h6">FAQ</Typography>
                  </Grid>
                  <Grid
                    item
                    component={Link}
                    to="/blog"
                    className={classes.link}>
                    <Typography variant="h6">Blog</Typography>
                  </Grid>
                  <Grid
                    item
                    component={Link}
                    to="/whatsapp-group"
                    className={classes.link}>
                    <Typography variant="h6">Whatsapp Group</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Hidden>

            <Grid item className={classes.section}>
              <Grid container direction="column" spacing={1}>
                <Hidden smDown>
                  <Grid item md={3}>
                    <Typography variant="h5">Connect</Typography>
                  </Grid>
                </Hidden>
                <Grid item md={9}>
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
        </Container>
      </Grid>

      <Grid
        item
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
    </footer>
  );
}
