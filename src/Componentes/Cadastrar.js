import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Button, Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";


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

export default function InputAdornments() {
    const classes = useStyles();
    let history = useHistory();

    const [values, setValues] = React.useState({
        password: '',
        repassword: '',
        showPassword: false,
        showrePassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handlereChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleClickShowrePassword = () => {
        setValues({ ...values, showrePassword: !values.showrePassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseDownrePassword = (event) => {
        event.preventDefault();
    };

    return (
        <Container maxWidth="sm">
            <div className={classes.root}>
                <TextField
                    fullWidth
                    label="Digite seu nome"
                    id="nome"
                    margin="normal"
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                />

                <TextField
                    fullWidth
                    label="Digite seu e-mail"
                    id="email"
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                />

                <TextField
                    fullWidth
                    label="Digite seu zap"
                    id="zap"
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                />

                <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Digite sua senha</InputLabel>
                    <OutlinedInput
                        fullWidth
                        id="password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>


                <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-repassword">Repita sua senha</InputLabel>
                    <OutlinedInput
                        fullWidth
                        id="repassword"
                        type={values.showrePassword ? 'text' : 'password'}
                        value={values.repassword}
                        onChange={handlereChange('repassword')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle repassword visibility"
                                    onClick={handleClickShowrePassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showrePassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    style={{ textTransform: "none" }}
                    onClick={() => { history.push("/login"); }}
                    className={clsx(classes.margin, classes.textField)}

                >
                    Cadastrar
            </Button>
            </div>
        </Container>
    );
}
