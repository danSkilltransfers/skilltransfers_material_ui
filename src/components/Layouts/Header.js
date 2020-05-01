import React, { useState, useEffect } from "react";
import {
  AppBar,
  useScrollTrigger,
  Slide,
  Tabs,
  Tab,
  Button,
  MenuItem,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
  Grid,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuList,
  Box,
  Hidden,
  Typography,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import imageGroup from "../../assets/imageGroup.png";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: { marginBottom: ".7rem" },
    [theme.breakpoints.down("xs")]: { marginBottom: ".5rem" },
  },
  logo: {
    height: "3em",
    [theme.breakpoints.down("sm")]: { height: "2rem" },
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 8,
    opacity: 1,
    "&:hover": { opacity: 0.8 },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    borderRadius: "0px",
    zIndex: 1302,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 1,
    "&:hover": { opacity: 0.8 },
  },
  drawerIconContainer: {
    "&:hover": { backgroundColor: "transparent" },
  },
  drawerIcon: { height: "40px", width: "40px" },
  drawer: { backgroundColor: theme.palette.common.blue, minWidth: "30vw" },
  drawerItemText: {
    ...theme.typography.tab,
    opacity: 1,
    "&:hover": { opacity: 0.8 },
  },
  drawerItemSelectedText: { "& .MuiListItemText-root": { opacity: 0.8 } },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
  maincontainer: {
    minHeight: "5rem",
    [theme.breakpoints.down("sm")]: { minHeight: "3rem" },
  },
  signinbutton: {
    border: `1px solid ${theme.palette.common.lightblue}`,
    borderRadius: "40px",
    backgroundColor: theme.palette.common.white,
    padding: "4px 16px",
    color: theme.palette.common.lightblue,
    textTransform: "none",
    "&:hover": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.common.darkblue,
    },
  },
  banner: {
    height: "30rem",
  },
  searchfield: { width: "31rem", paddingTop: "4rem" },

  textfield: {
    backgroundColor: theme.palette.common.white,
    width: "100%",
    height: "4rem",
    borderRadius: "3px",
  },
  bannerbutton: {
    width: "10rem",
    height: "4rem",
    background: theme.palette.common.lightblue,
    "&:hover": { background: theme.palette.common.darkblue },
    color: theme.palette.common.white,
    borderRadius: "3px",
    textTransform: "none",
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: "20px",
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return <Slide in={!trigger}>{children}</Slide>;
}

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openBanner, setOpenBanner] = useState(false);

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
    setOpenBanner(false);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setOpenBanner(true);
    props.setSelectedIndex(i);
  };
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenMenu(false);
    }
  }

  const menuOptions = [
    { name: "Tester", link: "/tester", activeIndex: 1, selectedIndex: 0 },
    { name: "Developer", link: "/developer", activeIndex: 1, selectedIndex: 1 },
  ];

  const routes = [
    { name: "About Us", link: "/about-us", activeIndex: 0 },
    {
      name: "Courses",
      link: "/courses",
      activeIndex: 1,
      ariaOwns: anchorEl ? "courses-menu" : undefined,
      ariaHaspopup: anchorEl ? "true" : undefined,
      onMouseOver: (e) => handleClick(e),
    },
    { name: "Our Teachers", link: "/our-teachers", activeIndex: 2 },
    { name: "Our Students", link: "/our-students", activeIndex: 3 },
  ];

  const tabs = (
    <>
      <Tabs value={props.value} onChange={handleChange}>
        {routes.map((route) => (
          <Tab
            key={`${route.name}`}
            className={classes.tab}
            label={route.name}
            component={Link}
            to={route.link}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaHaspopup}
            onMouseOver={route.onMouseOver}
          />
        ))}
      </Tabs>
      <Popper
        open={openMenu}
        anchorEl={anchorEl}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal>
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "bottom-end",
            }}>
            <Paper classes={{ root: classes.menu }} elevation={0}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  onMouseLeave={handleClose}
                  disablePadding
                  autoFocusItem={false}
                  id="courses-menu"
                  onKeyDown={handleListKeyDown}>
                  {menuOptions.map((option, i) => (
                    <MenuItem
                      classes={{ root: classes.menuItem }}
                      selected={i === props.selectedIndex && props.value === 1}
                      key={`${option}${i}`}
                      component={Link}
                      to={option.link}
                      onClick={(e) => {
                        handleMenuItemClick(e, i);
                        props.setValue(1);
                        handleClose();
                      }}>
                      {option.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: classes.drawer }}>
        <List disablePadding>
          <div className={classes.toolbarMargin} />
          {[...routes, ...menuOptions]
            .sort((a, b) => a.activeIndex - b.activeIndex)
            .map((route) => (
              <ListItem
                key={`${route}${route.activeIndex}${route.selectedIndex}`}
                button
                divider
                component={Link}
                to={route.link}
                selected={
                  props.value === route.activeIndex &&
                  props.selectedIndex === route.selectedIndex
                }
                classes={{ selected: classes.drawerItemSelectedText }}
                onClick={() => {
                  setOpenDrawer(false);
                  props.setValue(route.activeIndex);
                  props.setSelectedIndex(route.selectedIndex);
                }}>
                <ListItemText className={classes.drawerItemText}>
                  {route.name}
                </ListItemText>
              </ListItem>
            ))}
        </List>
      </SwipeableDrawer>
    </>
  );

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;

        default:
          break;
      }
    });
  }, [props.value, menuOptions, props.selectedIndex, routes, props]);

  return (
    <>
      <HideOnScroll>
        <AppBar className={classes.appbar}>
          <Container>
            <Grid container direction="column">
              <Grid
                item
                container
                justify="space-around"
                alignItems="center"
                className={classes.maincontainer}>
                <Grid item>
                  <Hidden mdUp>
                    <IconButton
                      onClick={() => setOpenDrawer(!openDrawer)}
                      disableRipple
                      className={classes.drawerIconContainer}>
                      {openDrawer ? (
                        <MenuOpenIcon className={classes.drawerIcon} />
                      ) : (
                        <MenuIcon className={classes.drawerIcon} />
                      )}
                    </IconButton>
                  </Hidden>
                  <Button
                    component={Link}
                    to="/landing"
                    onClick={() => props.setValue(null)}>
                    <img src={logo} alt="logo" className={classes.logo} />
                  </Button>
                </Grid>
                <Grid item>{matches ? drawer : tabs}</Grid>
                <Grid item>
                  <Button className={classes.signinbutton} variant="outlined">
                    Sign In
                  </Button>
                </Grid>
              </Grid>

              <Grid item>
                <Box
                  component="div"
                  visibility="visible"
                  display={openBanner && !matches ? "block" : "none"}>
                  <Container>
                    <Grid
                      container
                      className={classes.banner}
                      justify="space-between"
                      direction="row">
                      <Grid
                        item
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        md={6}>
                        <Grid item style={{ width: "31rem" }}>
                          <Typography variant="h3">
                            <b>Skilltransfers</b> delivers <b>In-Person</b>{" "}
                            <br />
                            training for ambitious <br />
                            <b>
                              Full Stack{" "}
                              {window.location.pathname === "/tester"
                                ? "Testers"
                                : "Developers"}
                            </b>
                          </Typography>
                        </Grid>

                        <Grid item container className={classes.searchfield}>
                          <Grid item sm={7}>
                            <TextField
                              InputProps={{ disableUnderline: true }}
                              id="outlined-basic"
                              className={classes.textfield}
                            />
                          </Grid>
                          <Grid item sm={4}>
                            <Button className={classes.bannerbutton}>
                              Find Your Skill
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item md={6}>
                        <img src={imageGroup} alt="banner" width={"100%"} />
                      </Grid>
                    </Grid>
                  </Container>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
