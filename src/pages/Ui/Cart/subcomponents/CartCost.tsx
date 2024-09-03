import { Grid, Typography, Stack } from '@mui/material';

const CartCost = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const tax = total * 0.1; // Example tax calculation (10%)
  const totalCost = total + tax;

  return (
    <Grid item xs={12} md={4}>
      <Stack spacing={2}>
        <Typography variant="h6">Cart Total Cost</Typography>
        <Typography variant="body1">Total: ${total.toFixed(2)}</Typography>
        <Typography variant="body1">Tax: ${tax.toFixed(2)}</Typography>
        <Typography variant="body1">Total Cost: ${totalCost.toFixed(2)}</Typography>
      </Stack>
    </Grid>
  );
};

export default CartCost;
