import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color='primary'>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 0),
    margin: '16vh 0vh 0vh 0vh',
    position: 'fixed',
    bottom:'0',
    width:'100%',
    color:'white',
    backgroundColor: theme.palette.grey[600],
  },
  container: {
    textAlign:'center',
  },
}));

export default function Footer1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container className={classes.container} maxWidth="sm" >
          <Typography variant="body1">Footer Salva o Semestre</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}