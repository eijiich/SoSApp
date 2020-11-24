import React, { useState } from 'react';

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import { Avatar, IconButton, CardMedia, Grid } from "@material-ui/core";
import listaCursos from "../Componentes/constants";
import { addCourseToCart } from '../Store/CartSlice';
import Conteudo from '../Componentes/Conteudo';

const useStyles = makeStyles({
  topico: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "3vw",
    marginTop: "5vh",
  },

  grid: {
    marginBottom: "120px",
  },
});


const Admin = props => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.grid}>
      <Grid item container>
        <Grid item sm={1} xs={0} />
        <Grid item sm={10} xs={12}>
          <Typography variant="h3">
            Gerenciar Cursos
          </Typography>
          <Conteudo />
        </Grid>
        <Grid item sm={1} xs={0} />
      </Grid>
    </Grid >
  );
};

export default Admin;
