import React, { useState } from 'react';

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Conteudo from '../Componentes/Conteudo';
import Formulario from '../Componentes/Formulario';

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
          <Formulario />
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
