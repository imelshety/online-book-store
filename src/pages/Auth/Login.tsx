import { Stack } from "@mui/material";
import loginLogo from "/assets/login-logo.png"
const Login = () => {
  return (
    <Stack
    className="w-full"
      direction={{ xs: "column", sm: "column", lg: "row" }}
      justifyContent="center"
      alignItems="center"
      spacing={0}
    >
      <div className="w-1/2">
        <img src={loginLogo} alt="logo-img" />
      </div>
      <Stack
    className="w-1/2"
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <h2>asdasdas</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Stack>
    </Stack>
  );
};

export default Login;
