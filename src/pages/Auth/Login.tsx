import  { useState } from 'react';
import { FormControl, InputLabel, InputAdornment, OutlinedInput, IconButton, Stack, Typography, Button, FormHelperText, Checkbox, FormControlLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useForm, Controller , SubmitHandler} from 'react-hook-form';
import logoImage from '/assets/Logo.png';
import axios from 'axios';
import {  Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../services/Api';

type Inputs = {
  email:string ;
  password: string;
};
const Login = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/auth/login`, data);
      console.log('Response:', response.data);
  
      const profile = response.data?.data.profile;
      if (profile && profile.first_name) {
        toast.success(`Welcome Back ${profile.first_name} ${profile.last_name}`);
        console.log('Profile:', profile);
        navigate("/home");
      } else {
        toast.error('Login failed: Invalid response');
        console.log('Invalid profile:', profile);
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Failed to sign in');
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
        <Typography sx={{ fontSize: 14, color: theme.typography.body1.color }} color="#09093799">
          Welcome Back !
        </Typography>
        <Typography variant="h2" style={{ color: theme.typography.h2.color }} sx={{ fontSize: 32, marginTop: 2, fontWeight: '700', lineHeight: '43.71px' }}>
          Login to your account
        </Typography>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2">
        <FormControl fullWidth error={!!errors.email}>
          <InputLabel htmlFor="email-input" sx={{ paddingTop: 1 }}>
            Email address
          </InputLabel>
          <Controller
            name="email"
            control={control}
            rules={{ required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' } }}
            render={({ field }) => (
              <OutlinedInput
                {...field}
                id="email-input"
                aria-describedby="email-helper-text"
                sx={{
                  borderRadius: 2,
                  borderColor: errors.email ? 'red' : '#6251DD',
                  paddingInline: 2,
                  paddingTop: 1,
                }}
                label="Email address"
              />
            )}
          />
          <FormHelperText id="email-helper-text">
            {errors.email?.message}
          </FormHelperText>
        </FormControl>
        <FormControl fullWidth sx={{ marginTop: 2 }} error={!!errors.password}>
          <InputLabel htmlFor="password-input" sx={{ paddingTop: 1 }}>
            Password
          </InputLabel>
          <Controller
            name="password"
            control={control}
            rules={{ required: 'Password is required' }}
            render={({ field }) => (
              <OutlinedInput
                {...field}
                id="password-input"
                type={showPassword ? 'text' : 'password'}
                aria-describedby="password-helper-text"
                sx={{
                  borderRadius: 2,
                  borderColor: errors.password ? 'red' : '#6251DD',
                  paddingInline: 2,
                  paddingTop: 1,
                  backgroundColor: '#F4F4FF',
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                      sx={{ color: '#6251DD' }}
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
        <FormControl fullWidth sx={{ marginTop: 2 }}>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Remember me"
          />
        </FormControl>
        <Button
          type="submit"
          fullWidth
          sx={{
            fontWeight: 'bold',
            marginTop: 2,
            backgroundColor: "#EF6B4A",
            paddingY:2.5 ,
            color: "white",
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: '#d44a3a',
            },
          }}
        >
          Login
        </Button>
        <Button
          type="button"
          fullWidth
          sx={{
            fontWeight: 'bold',
            marginTop: 2,
            backgroundColor: "#FFFFFF",
            border: 2,
            borderColor: "#6251DD",
            color: "#6251DD",
            paddingY:2 ,
            transition: 'background-color 0.3s ease, color 0.3s ease',
            '&:hover': {
              backgroundColor: '#d44a3a',
              color: '#FFFFFF',
            },
          }}
        >
          <Link to='/signup'>Register</Link>
        </Button>
      </form>
    </Stack>
  );
};

export default Login; 