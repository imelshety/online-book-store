import React from "react";
import { Box, Button, useTheme } from "@mui/material";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
const StripePaymentForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const theme = useTheme(); // Access the current theme
  const isDarkMode = theme.palette.mode === "dark";
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Get the card element directly using CardElement
    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      console.error("Card element not found");
      return;
    }

    // Create a token using the card element
    const { error, token } = await stripe.createToken(cardElement);

    if (error) {
      console.error("[error]", error);
    } else {
      console.log("Token created successfully:", {token});
      // You can now send the token to your backend to process the payment
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ my: 3 }}>
        <CardElement />
      </Box>
      <Button
        type="submit"
        variant="outlined"
        sx={{
          fontSize: "18px",
          border: "1px",
          color: isDarkMode ? "#ED553B" : "#061C2B",
          borderColor: isDarkMode ? "#ED553B" : "#061C2B",
          "&:hover": {
            color: isDarkMode ? "#ED553B" : "white",
            backgroundColor: isDarkMode ? "white" : "#061C2B",
          },
          borderWidth: "2px",
          borderRadius: "7px",
          mx: "auto",
          py: 2, // paddingY equivalent to py-4 in Tailwind
          px: 8, // paddingX equivalent to px-7 in Tailwind
          textTransform: "uppercase",
          display: "flex",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.5s ease-out",
        }}
      >
        Pay Now
      </Button>
    </form>
  );
};

export default StripePaymentForm;
