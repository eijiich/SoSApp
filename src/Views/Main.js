import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { createBrowserHistory } from "history";
import { useParams, useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";

import Conteudo from '../Componentes/Conteudo';
import Carrosel from '..//Componentes/Carrosel';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    buttonCenter:{
        margin: "3vh 40% 0vh 0%",
    },
    dividerStyle:{
        margin: "3vh 0vh 3vh 0vh",
    },
    topico: {
        fontSize: 20,
        fontWeight: "fontWeightBold",
        marginLeft: "3vw",
        marginTop: "5vh",
    },
});


const Main = () => {
    let history = useHistory();
    const classes = useStyles();

    return (
        <Grid container direction="column" style={{marginBottom:"120px"}}>
            <Grid item container>
                <Grid item sm={1} xs={0} />
                <Grid item sm={10} xs={12}>
                    <Carrosel />
                    <Divider className={classes.dividerStyle} variant="middle" />                
                    <Button className={classes.buttonCenter} size="large" variant='contained' color="primary" onClick={() => {
                        history.push(`/cursos`)
                    }} >
                        Veja nossos cursos
                    </Button>
                    <Conteudo />
                </Grid>
                <Grid item sm={1} xs={0} />
            </Grid>
        </Grid >
    );
};

export default Main;