import React from 'react'
import ProductCards from '../product/ProductCards'
import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

// El Catalogo muestra una grilla de Componentes ProductCard.
// Recibe por props un arreglo de productos.

const Catalog = () => {
  return (
    <div>
      <Grid item container>
        <Grid item xs={2}>
          {/* Lo de abajo es info de Ejemplo para que se vea el componente */}
          <Typography variant="h4" color="textSecondary" component="p">
            Categorias
            <p></p>
          </Typography>
          <Grid item row>
            <Typography variant="body1" color="textSecondary" component="p">
              {/* Hacer petición a category para traer las categorías */}
              * Cat 1<p></p>* Cat 2<p></p>* Cat 3<p></p>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={10}>
          <ProductCards />
        </Grid>
      </Grid>
    </div>
  );
};

export default Catalog;