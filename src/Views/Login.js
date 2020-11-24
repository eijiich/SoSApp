import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  ListItemText,
  List,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { Face, Fingerprint } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import BookIcon from '@material-ui/icons/Book';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


import { UserSlice } from '../Store/UserSlice'
import { useHistory } from "react-router-dom";


import React, { useState, useEffect } from 'react';



const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "80px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "30vw",
    minWidth: "400px",

    boxShadow: "5px 5px 2px #8888884f",
  },
  cadatradoClasse: {
    alignText: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },

}));

export default function LoginView() {
  const classes = useStyles();

  const userStore = UserSlice();
  const [formState, setFormState] = useState({})
  let history = useHistory();


  if (userStore.getLogin()) {
    if (userStore.getLogin() === 'admin') {
      history.push("/admin");
    }

    return (
      <div className={classes.cadatradoClasse}>
        <Typography variant="h3">
          Bem vindo ao SoS, {userStore.getLogin()}! Aqui você vai:
        </Typography>
        <List>
          <ListItem>
            <AccessTimeIcon fontSize="large" color='primary' />
            <Typography variant="h5">
              Economizar tempo!
            </Typography>
          </ListItem>
          <ListItem>
            <BookIcon fontSize="large" color='primary' />
            <Typography variant="h5">
              Aprender melhor!
            </Typography>
          </ListItem>
          <ListItem>
            <InsertEmoticonIcon fontSize="large" color='primary' />
            <Typography variant="h5">
              E ser aprovado nas matérias!
            </Typography>
          </ListItem>
        </List>

        <Button
          color="primary"
          style={{ textTransform: "none" }}
          onClick={() => { history.push("/cursos"); }}
        >
          Veja nossos cursos!
        </Button>
      </div>
    )
  }

  return (
    <div className={classes.mainContainer}>
      <Paper>
        <div>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Face />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="username"
                label="Username"
                type="email"
                autoFocus
                required
                onChange={(event) => { setFormState({ ...formState, login: event.target.value }) }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Fingerprint />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="password"
                label="Password"
                type="password"
                required
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" justify="space-between" style={{ marginTop: "10px", marginLeft: "10px", marginRight: "10px" }}>
            <Grid item>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Lembre-se de mim"
              />
            </Grid>
            <Grid item>
              <Button
                disableFocusRipple
                disableRipple
                style={{ textTransform: "none" }}
                variant="text"
                color="primary"
              >
                esqueceu sua senha?
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: "5px" }}>
            <Grid item>
              <Button
                color="primary"
                style={{ textTransform: "none" }}
                onClick={() => { history.push("/cadastrar"); }}
              >
                Criar uma conta
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: "10px", marginBottom: "10px" }}>
            <Button
              variant="outlined"
              color="primary"
              style={{ textTransform: "none" }}
              onClick={() => {
                userStore.setLogin(formState.login);
                if (formState.login === 'admin') history.push("/admin");
              }}
            >
              Login
            </Button>
          </Grid>
        </div>
      </Paper>
    </div >
  );
}
