import React, { useState, useEffect } from 'react';
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
  card: {
    boxShadow: "4px 4px 7px #495057",
  },
  outerContainer: {
    marginLeft: "0px",
    marginRight: "0px",
  },
  cardContent: {
    textAlign: "center",
    minHeight: "25vh",
  },
  buttonContent: {
    textAlign: "center",
    justifyContent: "center",
  },
  container: {
    marginTop: "2vh",
    marginBottom: "120px",
  },
  rating: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  price: {
    marginTop: "2vh",
    marginBottom: "1vh",
  },
}));

const Conteudo = nomeCurso => {
  let history = useHistory();
  const classes = useStyles();
  const [dadosCurso, setarDadosCurso] = useState(listaCursos);

  useEffect(() => {
    fetch('/cursos').
      then((response) => {
        response.json().then((data) => {
          if (data)
            setarDadosCurso(data);
        });
      })
  }, [setarDadosCurso])

  const getCurso = nomeCurso => { //função
    const { title, description, imageUrl, imageAlt, price, estrelas, _id } = dadosCurso[nomeCurso];
    return (

      <Grid item xs={12} sm={6} md={4} key={nomeCurso} className={classes.outerContainer}>
        <Card className={classes.card} onClick={() => history.push(`/cursos/${_id}`)}>
          <CardActionArea>
            <CardMedia style={{ height: "150px" }} image={imageUrl} imageAlt={imageAlt} className={classes.cardMedia} />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
              <Typography className={classes.price} variant="h7" component="h3">
                {price}
              </Typography>
              <Typography className={classes.rating} variant="h7" component="h4">
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