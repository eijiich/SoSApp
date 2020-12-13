import { Button, Card, CardMedia, Grid, CardContent, Typography, Container } from "@material-ui/core";

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createBrowserHistory } from "history";
import { useParams, useHistory } from "react-router-dom";

import { getCartSlice } from '../Store/CartSlice'
import { UserSlice } from '../Store/UserSlice'

const useStyles = makeStyles({
  card: {
    minWidth: "100%",
    minHeight: "40vh",
    border: "solid 3px #adb5bd",
    boxShadow: "4px 4px 7px #495057",
  },
  container: {
    marginBottom: "120px",
  },
  courseCard: {
    marginTop: "20px",
    border: "solid 2px lightgrey",
  },
  cardMedia: {
    minHeight: 100,
  },
  cardContent: {
    minWidth: "100%",
    minHeight: "40vh",
    border: "solid 3px #adb5bd",
    boxShadow: "4px 4px 7px #495057",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
  },

  cardContentItem: {
    flexGrow: 1
  },
  totalPrice: {
    fontSize: 30,
    marginTop: "auto",
    marginBottom: "auto",
    fontWeight: "bold",
    textAlign: "center",

  },
  cardTitle: {
    fontSize: 20,
  },
  coursePrice: {
    fontSize: 20,
    textAlign: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: "5vh",
    textAlign: 'center',

  },
  secTitle: {
    fontSize: 20,
    fontWeight: "800",

  },
  pos: {
    marginBottom: 12,
  },
  finalizarCompra: {
    marginTop: "3vh",

  },

});

export default function CartView() {
  let history = useHistory();
  const classes = useStyles();
  const [currentCartCourses, setCurrentCartCourses] = useState([]);


  useEffect(() => {
    setCurrentCartCourses(getCartSlice());
  }, [getCartSlice().length])

  const courseDisplay = currentCartCourses.map((course) => {
    return (
      <Card className={classes.courseCard}>
        <Typography color="textSecondary" className={classes.cardTitle}>
          {course.title}
        </Typography>
        <CardMedia style={{ height: "50px" }} image={course.imageUrl} imageAlt={course.imageAlt} className={classes.cardMedia} />
        <Typography color="textSecondary" className={classes.coursePrice}>
          {course.price}
        </Typography>
      </Card>
    )
  })

  let totalPriceCart = currentCartCourses.reduce((acumulator, current) => {
    return acumulator + Number(current.price.substring(2).replace(",", "."));
  }, 0);


  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography className={classes.title} color="textPrimary" gutterBottom="true">
        Carrinho de compras
      </Typography>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={12} md={6}>
          <Card variant="outlined" color="secondary" className={classes.card}>
            <CardContent>
              <Typography className={classes.secTitle} color="textSecondary" gutterBottom="true">
                Sua lista de compras
              </Typography>
              {courseDisplay}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Card variant="outlined" color="secondary" className={classes.cardContent}>
            <Typography className={classes.secTitle} color="textSecondary" gutterBottom="true">
              Resumo das compras
              </Typography>
            <Typography className={classes.totalPrice}>
              Preço total: R${totalPriceCart.toFixed(2)}
            </Typography>
            <Button size="big" variant='contained' color="primary" className={classes.finalizarCompra} onClick={() => {
              history.push(`/pagamento`)
            }} >
              Finalizar compra
              </Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
