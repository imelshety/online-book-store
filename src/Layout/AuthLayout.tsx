import { Outlet } from "react-router-dom"
import loginLogo from "/assets/login-logo.png";
import { Stack } from "@mui/material";

const AuthLayout = () => {
  return (
    <Stack
    className="w-full h-screen"
    direction={{ xs: "column", sm: "column", lg: "row" }}
    justifyContent="start"
    alignItems="center"
    spacing={0}
  >
    <img src={loginLogo} alt="logo-img" className="max-w-full" />
    <Outlet/>
    </Stack>


  )
}

export default AuthLayout