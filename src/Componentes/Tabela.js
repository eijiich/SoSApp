import React from 'react';
import { Grid } from '@material-ui/core'; 
import Conteudo from './Conteudo'


const Tabela = () => {
    return(
        <Grid container direction="column">
            <Grid item container>
                <Grid item sm={1} xs={0} />
                    <Grid item sm={10} xs={12}>
                        <Conteudo />
                    </Grid>
                <Grid item sm={1} xs={0}/>
            </Grid>
        </Grid>
    );
}

export default Tabela;