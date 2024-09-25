import React, { useState } from "react";
import { Box, Button, Modal, Typography, useTheme } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripePaymentForm from "../../../../Shared/components/StripePaymentForm";
interface CartCostProps {
  subtotal: number;
}

const CartCost: React.FC<CartCostProps> = ({ subtotal }) => {
  const tax = subtotal * 0.05; // Assuming a 5% tax rate
  const totalCost = subtotal + tax;
  const theme = useTheme(); // Access the current theme
  const isDarkMode = theme.palette.mode === "dark";
 // Modal state
 const [open, setOpen] = useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 const stripePromise = loadStripe("pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8");

  return (
    <Box
      sx={{
        background: "linear-gradient(45deg, #FFE5E5, #F5FFFE)",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
      className="shadow-2xl rounded-2xl w-full"
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: "#393280", fontWeight: "bold" }}
      >
        Cart Total Cost
      </Typography>
      <Typography variant="body1" gutterBottom>
        Total: {subtotal.toFixed(2)} $
      </Typography>
      <Typography variant="body1" gutterBottom>
        Tax: {tax.toFixed(2)} $
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ fontWeight: "bold" }}>
        Total Cost: {totalCost.toFixed(2)} $
      </Typography>
      <Button
         sx={{
          fontSize:'18px',
          border: '1px solid',
          color: isDarkMode ? '#ED553B' : '#061C2B',
          borderColor: isDarkMode ? '#ED553B' : '#061C2B',
          '&:hover': {
            color: isDarkMode ? '#ED553B' : 'white',
            backgroundColor: isDarkMode ? 'white' : '#061C2B',
          },
          borderWidth: '2px',
          borderRadius: '7px',
          mt:4,
          py: 2, // paddingY equivalent to py-4 in Tailwind
          px: 8, // paddingX equivalent to px-7 in Tailwind
          textTransform: 'uppercase',
          display: 'flex',
          gap: 2,
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.5s ease-out',
        }}
        onClick={handleOpen}
      >pay</Button>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="stripe-payment-modal"
        aria-describedby="stripe-payment-form"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: '8px',
            boxShadow: 24,
            p: 4,
            display:'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems:'center'
          }}
        >
          <Typography  sx={{ fontSize: 18, color: "#061C2B", fontWeight:'bold' }}
           id="stripe-payment-modal" variant="h6" gutterBottom>
            Complete Payment
          </Typography>
          <Elements stripe={stripePromise} >
            <StripePaymentForm />
          </Elements>
        </Box>
      </Modal>
    </Box>
  );
};

export default CartCost;
