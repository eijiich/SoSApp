import React, { useEffect, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import clsx from 'clsx';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { createBrowserHistory } from "history";
import { useParams, useHistory } from "react-router-dom";
import { Button, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { getCartSlice } from '../Store/CartSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
}));


export default function RadioButtonsGroup() {
    const classes = useStyles();
    let history = useHistory();
    const [currentCartCourses, setCurrentCartCourses] = useState([]);
    const [formState, setFormState] = useState({ payMethod: "cartao" });

    useEffect(() => {
        setCurrentCartCourses(getCartSlice());
    }, [getCartSlice().length])

    let totalPriceCart = currentCartCourses.reduce((acumulator, current) => {
        return acumulator + Number(current.price.substring(2).replace(",", "."));
    }, 0);

    let paymentRender = null;

    if (formState.payMethod === "cartao") {
        paymentRender =
            <div className={classes.root}>
                <TextField
                    fullWidth
                    label="Digite o número do seu cartão"
                    id="card"
                    margin="normal"
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                    type="number"
                />

                <TextField
                    fullWidth
                    label="Digite seu nome completo"
                    id="nomeCartao"
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                    type="text"
                />

                <TextField
                    fullWidth
                    label="Validade  do cartao"
                    id="validade"
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="Código de segurança"
                    id="codigo"
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                />

                <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    style={{ textTransform: "none" }}
                    onClick={() => {
 
                    }}
                    className={clsx(classes.margin, classes.textField)}

                >
                    Confirmar
        </Button>
            </div>

    } else {
        paymentRender =
            <div>
                <h3>Código do boleto:</h3>
                <h1>456436484634168468465416584635</h1>

                <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    style={{ textTransform: "none" }}
                    onClick={() => {
                        return (
                            <h1>
                                Obrigado por sua compra!
                            </h1>
                        );
                    }}
                    className={clsx(classes.margin, classes.textField)}

                >
                    Finalizar
        </Button>
            </div>;
    }


    return (

        <Container maxWidth="sm">
            <FormControl component="fieldset">
                <FormLabel component="legend">Forma de pagamento</FormLabel>
                <RadioGroup value={formState.payMethod} aria-label="formaPagamento" name="pagamento">
                    <FormControlLabel
                        onClick={() => { setFormState({ ...formState, payMethod: "cartao" }) }}
                        value="cartao" control={<Radio />} label="Cartão de crédito" />
                    <FormControlLabel
                        onClick={() => { setFormState({ ...formState, payMethod: "boleto" }) }}
                        value="boleto" control={<Radio />} label="Boleto Bancário" />

                    <h1>Valor total: R${totalPriceCart}</h1>

                </RadioGroup>
            </FormControl>

            {paymentRender}
        </Container>

    );
}