import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import { Avatar, IconButton, CardMedia } from "@material-ui/core";

const Curso = props => {
  const {title, subtitle, description, imageUrl, imageAlt, price, professor, estrelas, tempo } = props;
  return (
    <Card>
        <CardActionArea>
            <CardMedia style={{ height: "150px" }} image={imageUrl} imageAlt={imageAlt}/>
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
            <Button size="small" color="primary">
            Adicionar ao carrinho
            </Button>
            <Button size="small" color="primary">
            Mais detalhes
            </Button>
        </CardActions>
    </Card>
  );
};

export default Curso;