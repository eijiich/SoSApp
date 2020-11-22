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
import listaCursos from "./constants";
import { createBrowserHistory } from "history";
import { addCourseToCart } from '../Store/CartSlice';



import { useParams, useHistory } from "react-router-dom";

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


const Curso = props => {
    const classes = useStyles();
    let history = useHistory();
    const { cursoId } = useParams();
    const [dadosCurso, setarDadosCurso] = useState(listaCursos[cursoId]);
    const { title, subtitle, description, imageUrl, imageAlt, price, professor, estrelas, tempo } = dadosCurso;

    return (

        <Grid container direction="column" >
            <Grid item container>
                <Grid item sm={1} xs={0} />
                <Grid item sm={10} xs={12}>

                    <Card>
                        <CardActionArea>
                            <CardMedia style={{ height: "150px" }} image={imageUrl} imageAlt={imageAlt} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => {
                                addCourseToCart(dadosCurso);
                                history.push(`/carrinho`)
                            }} >
                                Adicionar ao carrinho
                            </Button>
                        </CardActions>
                    </Card>

                    <Typography className={classes.topico}>
                        Descrição completa: {description}
                    </Typography>
                    <Typography className={classes.topico}>
                        Professor: {professor}
                    </Typography>
                    <Typography className={classes.topico}>
                        Estrelas: {estrelas}
                    </Typography>
                    <Typography className={classes.topico}>
                        Tempo: {tempo}
                    </Typography>
                    <Typography className={classes.topico}>
                        Preço: {price}
                    </Typography>
                    <Typography variant="body1"
                        style={{ whiteSpace: 'pre-line' }} />

                    <Button className={classes.topico} size="big" variant='contained' color="primary" onClick={() => {
                        addCourseToCart(dadosCurso);
                        history.push(`/carrinho`)
                    }} >
                        Adicionar ao carrinho
                    </Button>
                </Grid>
                <Grid item sm={1} xs={0} />
            </Grid>
        </Grid >
    );
};

export default Curso;