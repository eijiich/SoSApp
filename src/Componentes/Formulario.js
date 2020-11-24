import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '30ch',
      },
    }
  }));


  

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Adicionar novo Curso
      </Button>
      <Button variant="outlined" color="secondary">
        Remover Curso
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Adicionar novo curso</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha o formulário abaixo com as informações do novo curso
          </DialogContentText>
         
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                label="Título do Curso"
                type="text"
              />

              <TextField
                label="Subtitulo"
                type="text"
              />
              
              <TextField
                label="Descrição do curso"
                type="text"
                multiline
                rowsMax={4}
              />

              <TextField
                label="Texto alternativo pra imagem"
                type="text"
                multiline
                rowsMax={4}
              />
              
              <TextField
                label="Preço"
                type="text"
              />

              <TextField
                label="Professor"
                type="text"
              />
                
            </div>
          </form>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            CANCELAR
          </Button>
          <Button onClick={handleClose} color="primary">
            ADICIONAR
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}