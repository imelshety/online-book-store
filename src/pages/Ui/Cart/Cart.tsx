import  { useState } from 'react';
import { Box, Grid } from '@mui/material';
import Header from '../../../Shared/components/Header/Header';
import CartDetails from './subcomponents/CartDetails';
import CartCost from './subcomponents/CartCost';

const Cart = () => {
  const [subtotal, setSubtotal] = useState(0); // State to store the subtotal

  const handleSubtotalChange = (newSubtotal: number) => {
    setSubtotal(newSubtotal); // Update subtotal whenever it changes in CartDetails
  };

  return (
    <>
      <Header>
        <Header.HeaderTop />
        <Header.Actions />
        <Header.Logo />
        <Header.Icons />
      </Header>
      <Box sx={{ flexGrow: 1, my: '12rem', px: '2rem' }}>
        <Grid container spacing={2}>
          <CartDetails onSubtotalChange={handleSubtotalChange} /> {/* Pass the subtotal change handler */}
          <Grid item xs={12} md={4}>
            <CartCost subtotal={subtotal} /> {/* Pass the subtotal to CartCost */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Cart;
