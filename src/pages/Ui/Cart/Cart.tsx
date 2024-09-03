import { Box, Grid } from '@mui/material';
import CartDetails from './subcomponents/CartDetails';
import CartCost from './subcomponents/CartCost';
import Header from '../../../Shared/components/Header/Header';

const Cart = () => {
  // Example dynamic data for cart items
  const cartItems = [
    { name: 'Frozen yoghurt', quantity: 2, price: 3.5 },
    { name: 'Ice cream sandwich', quantity: 1, price: 5.0 },
    { name: 'Eclair', quantity: 3, price: 2.0 },
  ];

  return (
    <>
      <Header>
        <Header.HeaderTop />
        <Header.Actions />
        <Header.Logo />
        <Header.Icons />
      </Header>
      <Box 
      sx={{ 
          flexGrow: 1, 
          my: '12rem', 
          px :'2rem'
        }}>
        <Grid container spacing={2}>
          <CartDetails cartItems={cartItems} />
          <CartCost cartItems={cartItems} />
        </Grid>
      </Box>
    </>
  );
};

export default Cart;
