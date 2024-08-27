import { useState } from "react";
import {
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  IconButton,
  Stack,
  Typography,
  Button,
  FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import logoImage from "/assets/Logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AUTH_URLS } from "../../Shared/constant/Api";

type Inputs = {
  email: string;
  password: string;
  otp: number;
};

const ChangePassword = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await axios.post(
        `${AUTH_URLS.changePassword}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
      navigate("/signin");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <Stack
      paddingTop={12}
      width="100%"
      height="100%"
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      spacing={2}
    >
      <img src={logoImage} alt="logo-img" />
      <div>
        <Typography
          sx={{ fontSize: 14, color: theme.typography.body1.color }}
          color="#09093799"
        >
          Welcome Back !
        </Typography>
        <Typography
          variant="h2"
          style={{ color: theme.typography.h2.color }}
          sx={{
            fontSize: 32,
            marginTop: 2,
            fontWeight: "700",
            lineHeight: "43.71px",
          }}
        >
          Reset Your Password
        </Typography>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2">
        
        <FormControl fullWidth sx={{ marginTop: 2 }} error={!!errors.password}>
          <InputLabel htmlFor="password-input" sx={{ paddingTop: 1 }}>
           old Password
          </InputLabel>
          <Controller
            name="password"
            control={control}
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <OutlinedInput
                {...field}
                id="password-input"
                type={showPassword ? "text" : "password"}
                aria-describedby="password-helper-text"
                sx={{
                  borderRadius: 2,
                  borderColor: errors.password ? "red" : "#6251DD",
                  paddingInline: 2,
                  paddingTop: 1,
                  backgroundColor: "#F4F4FF",
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                      sx={{ color: "#6251DD" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            )}
          />
          <FormHelperText id="password-helper-text">
            {errors.password?.message}
          </FormHelperText>
        </FormControl>
        <FormControl fullWidth sx={{ marginTop: 2 }} error={!!errors.password}>
          <InputLabel htmlFor="password-input" sx={{ paddingTop: 1 }}>
           new Password
          </InputLabel>
          <Controller
            name="password"
            control={control}
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <OutlinedInput
                {...field}
                id="password-input"
                type={showPassword ? "text" : "password"}
                aria-describedby="password-helper-text"
                sx={{
                  borderRadius: 2,
                  borderColor: errors.password ? "red" : "#6251DD",
                  paddingInline: 2,
                  paddingTop: 1,
                  backgroundColor: "#F4F4FF",
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                      sx={{ color: "#6251DD" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            )}
          />
          <FormHelperText id="password-helper-text">
            {errors.password?.message}
          </FormHelperText>
        </FormControl>

        <Button
          type="submit"
          fullWidth
          sx={{
            fontWeight: "bold",
            marginTop: 2,
            backgroundColor: "#EF6B4A",
            paddingY: 2.5,
            color: "white",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#d44a3a",
            },
          }}
        >
          Save
        </Button>
      </form>
    </Stack>
  );
};

export default ChangePassword;
