import {
    Paper,
    withStyles,
    Grid,
    TextField,
    Button,
    FormControlLabel,
    Checkbox,
  } from "@material-ui/core";
  
import { makeStyles } from "@material-ui/core/styles";
import { Face, Fingerprint } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
    footerStyle: {
      marginTop: "80px",
      width: "30vw",
      minWidth: "400px",
      border: "5px solid green",
    },
  }));

function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>


        </footer>
    );
}

export default Footer;