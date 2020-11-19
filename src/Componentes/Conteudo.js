import React from 'react';
import { Grid } from '@material-ui/core'; 
import Curso from './Curso';
import listaCursos from "./constants";


const Conteudo = () => {
    const getCursoMakerCard = cursoMakerObj => {
      return (
        <Grid item xs={12} sm={6} md={4}>
          <Curso {...cursoMakerObj} />
        </Grid>
      );
    };
  
    return (
      <Grid container spacing={4}>
        {listaCursos.map(cursoMakerObj => getCursoMakerCard(cursoMakerObj))}
      </Grid>
    );
  };

export default Conteudo;