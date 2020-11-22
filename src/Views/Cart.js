import { Button, Card, CardMedia, Grid, CardContent, Typography } from "@material-ui/core";
import { getCartSlice } from '../Store/CartSlice'
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    maxWidth: "30%",
    marginLeft: "5vw",
    marginRight: "10vw",
    minWidth: "30vw",
    minHeight: "50vh",
    border: "solid 1px lightgrey",
  },
  courseCard: {
    marginTop: "20px",
    border: "solid 2px lightgrey",
  },
  cardMedia: {
    minHeight: 100,
  },
  cardTitle: {
    fontSize: 20,
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
});

export default function CartView() {
  const classes = useStyles();
  const [currentCartCourses, setCurrentCartCourses] = useState(null)

  useEffect(() => {
    setCurrentCartCourses(
      getCartSlice().map((course) => {
        return (
          <Card className={classes.courseCard}>
            <Typography color="textSecondary" className={classes.cardTitle}>
              {course.title}
            </Typography>
            <CardMedia style={{ height: "50px" }} image={course.imageUrl} imageAlt={course.imageAlt} className={classes.cardMedia} />
          </Card>
        )
      })
    )
  }, [getCartSlice().length])


  return (
    <div>
      <Typography className={classes.title} color="textPrimary" gutterBottom="true">
        Carrinho de compras
      </Typography>
      <Grid container spacing={10} alignItems="space-between">
        <Grid item>
          <Card variant="outlined" color="secondary" className={classes.card}>
            <CardContent>
              <Typography className={classes.secTitle} color="textSecondary" gutterBottom="true">
                Sua lista de compras
              </Typography>
              {currentCartCourses}
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card variant="outlined" color="secondary" className={classes.card}>
            <CardContent>
              <Typography className={classes.secTitle} color="textSecondary" gutterBottom="true">
                Resumo das compras
              </Typography>
              {/* adicionar aqui resumo dos custos*/}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
