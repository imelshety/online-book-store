import React from 'react';
import { Box, Typography } from '@mui/material';

interface CartCostProps {
  subtotal: number;
}

const CartCost: React.FC<CartCostProps> = ({ subtotal }) => {
  const tax = subtotal * 0.05; // Assuming a 5% tax rate
  const totalCost = subtotal + tax;

  return (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #FFE5E5, #F5FFFE)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}
    className="shadow-2xl rounded-2xl w-full"
    >
      <Typography variant="h6" gutterBottom sx={{ color: '#393280', fontWeight: 'bold' }}>
        Cart Total Cost
      </Typography>
      <Typography variant="body1" gutterBottom>
        Total: {subtotal.toFixed(2)} $
      </Typography>
      <Typography variant="body1" gutterBottom>
        Tax: {tax.toFixed(2)} $
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' }}>
        Total Cost: {totalCost.toFixed(2)} $
      </Typography>
    </Box>
  );
};

export default CartCost;
