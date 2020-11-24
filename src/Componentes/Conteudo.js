import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from '@material-ui/core/CardActionArea';
import { CardMedia, Button } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import StarRateIcon from '@material-ui/icons/StarRate';
import { Container } from '@material-ui/core';
import listaCursos from "./constants";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",


  },
  buttonContent: {
    textAlign: "center",
    justifyContent: "center",
  },
  container: {
    marginTop: "2vh",
    marginBottom: "120px",
  },
}));

const Conteudo = nomeCurso => {
  let history = useHistory();
  const classes = useStyles();
  const [dadosCurso, setarDadosCurso] = useState(listaCursos);

  const getCurso = nomeCurso => { //função
    const { title, subtitle, description, imageUrl, imageAlt, price, professor, estrelas, tempo } = dadosCurso[nomeCurso];
    return (
      <Grid item xs={12} sm={6} md={4} key={nomeCurso}>
        <Card onClick={() => history.push(`/cursos/${nomeCurso}`)}>
          <CardActionArea>
            <CardMedia style={{ height: "150px" }} image={imageUrl} imageAlt={imageAlt} className={classes.cardMedia} />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
              <Typography gutterBottom variant="h7" component="h3">
                {price}
              </Typography>
              <Typography gutterBottom variant="h7" component="h4">
                <StarRateIcon /> {estrelas}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <Button size="small" color="primary" className={classes.buttonContent}>
              Mais detalhes
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  };

  return (
    <Grid container spacing={4} className={classes.container}>
      {Object.keys(dadosCurso).map(nomeCurso =>
        getCurso(nomeCurso))}
    </Grid>
  );

};

export default Conteudo;