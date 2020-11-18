import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  IconButton,
  Button,
  Typography,
  Link,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkTitle: {
    color: "inherit",
    textDecoration: "none",
  },
}));

function NavBar(props) {
  const classes = useStyles();

  let navBarButtons = (
    <>
      <Button color="inherit" component={RouterLink} to="/login">
        SIGN UP
      </Button>
    </>
  );

  return (
    <AppBar className={classes.root} position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          <RouterLink to="/" className={classes.linkTitle}>
            PlaceHolder
          </RouterLink>
        </Typography>

        {navBarButtons}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
