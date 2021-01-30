import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartReducer/action.js'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 400,
  },
});

function ProductCard({product}) {
  const [image, setImage] = useState([])
  const dispatch = useDispatch();
  const classes = useStyles();
  const {
    id,
    name,
    description,
    price,
    //stock,
    //image,
    //rating,
    //sale,
    //featured,
    //createdAt,
  } = product;
  
  useEffect(() => {
    axios.get(`/dashboard/image/${id}`).then(res => {
      setImage(res.data[0].images)})
      // eslint-disable-next-line
  }, [])
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="ProductCard"
          className={classes.media}
          src={image.length ? image[0].url : ""}
          title="ProductCard"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography variant="h5" color="textSecondary" component="p">
            $ {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component={Link} to={{pathname: `product/${id}`, state: { product, image}}}>
          Ver Más
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(addItem(product))}>
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
