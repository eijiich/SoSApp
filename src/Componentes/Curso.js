import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { CardMedia, Grid } from "@material-ui/core";
import { createBrowserHistory } from "history";
import { addCourseToCart } from '../Store/CartSlice';

import listaCursos from "./constants";
import { useParams, useHistory } from "react-router-dom";

const useStyles = makeStyles({
    topico: {
        fontSize: 20,
        fontWeight: 500,
        marginBottom: "0.3em",
    },
    titulo: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: "0.9em",
    },
    grid: {
        marginBottom: "120px",
    },
});


const Curso = props => {
    const classes = useStyles();
    let history = useHistory();
    const { cursoId } = useParams();
    const [dadosCurso, setarDadosCurso] = useState({ title: '', subtitle: '', description: '', imageUrl: '', imageAlt: '', price: '', professor: '', estrelas: '', tempo: '' });

    const { title, subtitle, description, imageUrl, imageAlt, price, professor, estrelas, tempo } = dadosCurso;

    useEffect(() => {
        fetch(`/cursos/${cursoId}`).
            then((response) => {
                response.json().then((data) => {
                    setarDadosCurso({ ...dadosCurso, ...data });
                });

            })
    }, [cursoId]);

    return (
        <Container lg={12} style={{ marginBottom: "120px" }}>
            <Card>
                <CardMedia style={{ minHeight: "40vh" }} image={imageUrl} imageAlt={imageAlt} />
                <CardContent>

                    <Typography className={classes.titulo} variant="h5" component="h2">
                        {title}
                    </Typography>


                    <Typography className={classes.topico} variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>


                    <Typography className={classes.topico} variant="body2" color="textSecondary" component="p">
                        Descrição completa: {description}
                    </Typography>


                    <Typography className={classes.topico} variant="body2" color="textSecondary" component="p">
                        Professor: {professor}
                    </Typography>


                    <Typography className={classes.topico} variant="body2" color="textSecondary" component="p">
                        Estrelas: {estrelas}
                    </Typography>


                    <Typography className={classes.topico} variant="body2" color="textSecondary" component="p">
                        Tempo: {tempo}
                    </Typography>


                    <Typography className={classes.topico} variant="body2" color="textSecondary" component="p">
                        Preço: {price}
                    </Typography>


                    <Typography className={classes.topico} variant="body1"
                        style={{ whiteSpace: 'pre-line' }} />

                </CardContent>

                <CardActions>
                    <Button size="large" color="primary" onClick={() => {
                        addCourseToCart(dadosCurso);
                        history.push(`/carrinho`)
                    }} >
                        Adicionar ao carrinho
                                </Button>
                </CardActions>
            </Card>
        </Container >

    );
};

export default Curso;