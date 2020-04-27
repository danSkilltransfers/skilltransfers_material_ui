import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("sm")]: { marginBottom: "2em" },
    [theme.breakpoints.down("xs")]: { marginBottom: "1em" },
  },
  logo: {
    height: "6em",
    [theme.breakpoints.down("sm")]: { height: "5em" },
    [theme.breakpoints.down("xs")]: { height: "4em" },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: { ...theme.typography.tab, minWidth: 10, marginLeft: "25px" },
  menu: {
    backgroundColor: theme.palette.common.blue,
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": { opacity: 1 },
  },
  drawerIconContainer: {
    "&:hover": { backgroundColor: "transparent" },
    marginLeft: "auto",
  },
  drawerIcon: { height: "50px", width: "50px" },
  drawer: { backgroundColor: theme.palette.common.blue },
  drawerItemText: { ...theme.typography.tab, opacity: 0.7 },
  drawerItemSelectedText: { "& .MuiListItemText-root": { opacity: 1 } },
  appbar: { zIndex: theme.zIndex.modal + 1 },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return <Slide in={!trigger}>{children}</Slide>;
}

export default function Header(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
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
    props.setSelectedIndex(i);
  };

  const menuOptions = [
    { name: "Projects", link: "/projects", activeIndex: 3, selectedIndex: 0 },
    { name: "Project 1", link: "/project1", activeIndex: 3, selectedIndex: 1 },
    { name: "Project 2", link: "/project2", activeIndex: 3, selectedIndex: 2 },
    { name: "Project 3", link: "/project3", activeIndex: 3, selectedIndex: 3 },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    { name: "Training", link: "/training", activeIndex: 1 },
    { name: "Skills", link: "/skills", activeIndex: 2 },
    {
      name: "Projects",
      link: "/projects",
      activeIndex: 3,
      ariaOwns: anchorEl ? "projects-menu" : undefined,
      ariaHaspopup: anchorEl ? "true" : undefined,
      onMouseOver: (e) => handleClick(e),
    },
    { name: "Contact", link: "/contact", activeIndex: 4 },
  ];

  const tabs = (
    <>
      <Tabs
        className={classes.tabContainer}
        value={props.value}
        onChange={handleChange}>
        {routes.map((route) => (
          <Tab
            key={`${route}`}
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

      <Menu
        style={{ zIndex: 1302 }}
        classes={{ paper: classes.menu }}
        elevation={0}
        id="projects-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}>
        {menuOptions.map((option, i) => (
          <MenuItem
            classes={{ root: classes.menuItem }}
            selected={i === props.selectedIndex && props.value === 3}
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            onClick={(e) => {
              handleMenuItemClick(e, i);
              props.setValue(3);
              handleClose();
            }}>
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => setOpenDrawer(!openDrawer)}
        classes={{ paper: classes.drawer }}>
        <List disablePadding>
          <div className={classes.toolbarMargin} />
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              button
              divider
              component={Link}
              to={route.link}
              selected={props.value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelectedText }}
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(route.activeIndex);
              }}>
              <ListItemText className={classes.drawerItemText}>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
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
          <Toolbar>
            <Button component={Link} to="/" onClick={() => props.setValue(0)}>
              <img src={logo} alt="logo" className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
