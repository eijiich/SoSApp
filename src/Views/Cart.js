import { Button, Card, CardMedia, Grid, CardContent, Typography } from "@material-ui/core";

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createBrowserHistory } from "history";
import { useParams, useHistory } from "react-router-dom";

import { getCartSlice } from '../Store/CartSlice'
import { UserSlice } from '../Store/UserSlice'

const useStyles = makeStyles({
  card: {
    maxWidth: "30%",
    marginLeft: "3vw",
    marginRight: "10vw",
    minWidth: "30vw",
    minHeight: "50vh",
    border: "solid 1px lightgrey",
  },
  courseCard: {
    marginTop: "20px",
    border: "solid 1px lightgrey",
  },
  cardMedia: {
    minHeight: 100,
  },
  totalPrice: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: "25vh",
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
    marginLeft: "3vw",
    marginTop: "5vh",

  },
  secTitle: {
    fontSize: 20,
    fontWeight: "800",
  },
  pos: {
    marginBottom: 12,
  },
  finalizarCompra: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  container: {
    marginBottom: "120px",
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
    <div className={classes.container}>
      <Typography className={classes.title} color="textPrimary" gutterBottom="true">
        Carrinho de compras
      </Typography>
      <Grid container spacing={10} alignItems="space-between" wrap="nowrap">
        <Grid item>
          <Card variant="outlined" color="secondary" className={classes.card}>
            <CardContent>
              <Typography className={classes.secTitle} color="textSecondary" gutterBottom="true">
                Sua lista de compras
              </Typography>
              {courseDisplay}
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card variant="outlined" color="secondary" className={classes.card}>
            <CardContent>
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
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
