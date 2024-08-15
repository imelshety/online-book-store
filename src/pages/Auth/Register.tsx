import { useState } from 'react';
import { FormControl, InputLabel, InputAdornment, OutlinedInput, IconButton, Stack, Typography, Button, FormHelperText, MenuItem, Select } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useForm, Controller } from 'react-hook-form';
import logoImage from '/assets/Logo.png';
import { Link } from 'react-router-dom';
type Inputs = {
  firstName : string,
  lastName : string,
  email:string ;
  password: string;
  role : []
};
const Register = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <Stack
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
          Create New Account
        </Typography>
        <Typography variant="h2" style={{ color: theme.typography.h2.color }} sx={{ fontSize: 32, marginTop: 2, fontWeight: '700', lineHeight: '43.71px' }}>
          Register
        </Typography>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2">
        <FormControl fullWidth error={!!errors.firstName} sx={{ marginTop: 2 }}>
          <InputLabel htmlFor="first-name-input" sx={{ paddingTop: 1 }}>
            First Name
          </InputLabel>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: 'First name is required' }}
            render={({ field }) => (
              <OutlinedInput
                {...field}
                id="first-name-input"
                aria-describedby="first-name-helper-text"
                sx={{
                  borderRadius: 2,
                  borderColor: errors.firstName ? 'red' : '#6251DD',
                  paddingInline: 2,
                  paddingTop: 1,
                  backgroundColor: '#F4F4FF',
                  '&::placeholder': {
                    color: '#000000',
                    opacity: 1,
                  }
                }}
                label="First Name"
              />
            )}
          />
          <FormHelperText id="first-name-helper-text">
            {errors.firstName?.message}
          </FormHelperText>
        </FormControl>
        <FormControl fullWidth error={!!errors.lastName} sx={{ marginTop: 2 }}>
          <InputLabel htmlFor="last-name-input" sx={{ paddingTop: 1 }}>
            Last Name
          </InputLabel>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: 'Last name is required' }}
            render={({ field }) => (
              <OutlinedInput
                {...field}
                id="last-name-input"
                aria-describedby="last-name-helper-text"
                sx={{
                  borderRadius: 2,
                  borderColor: errors.lastName ? 'red' : '#6251DD',
                  paddingInline: 2,
                  paddingTop: 1,
                  backgroundColor: '#F4F4FF',
                  '&::placeholder': {
                    color: '#000000',
                    opacity: 1,
                  }
                }}
                label="Last Name"
              />
            )}
          />
          <FormHelperText id="last-name-helper-text">
            {errors.lastName?.message}
          </FormHelperText>
        </FormControl>
        <FormControl fullWidth error={!!errors.email} sx={{ marginTop: 2 }}>
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
                  backgroundColor: '#F4F4FF',
                  '&::placeholder': {
                    color: '#000000',
                    opacity: 1,
                  }
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
                  '&::placeholder': {
                    color: '#000000',
                    opacity: 1,
                  }
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
        <FormControl fullWidth sx={{ marginTop: 2 }} error={!!errors.role}>
          <InputLabel htmlFor="role-select" sx={{ paddingTop: 1 }}>
            Role
          </InputLabel>
          <Controller
            name="role"
            control={control}
            rules={{ required: 'Role is required' }}
            render={({ field }) => (
              <Select
                {...field}
                id="role-select"
                label="Role"
                sx={{
                  borderRadius: 2,
                  borderColor: errors.role ? 'red' : '#6251DD',
                  paddingInline: 2,
                  paddingTop: 1,
                  backgroundColor: '#F4F4FF',
                  '&::placeholder': {
                    color: '#000000',
                    opacity: 1,
                  }
                }}
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="customer">Customer</MenuItem>
              </Select>
            )}
          />
          <FormHelperText id="role-helper-text">
            {errors.role?.message}
          </FormHelperText>
        </FormControl>
        <Button
          type="submit"
          fullWidth
          sx={{
            fontWeight: 'bold',
            marginTop: 2,
            backgroundColor: "#EF6B4A",
            paddingY: 2.5,
            color: "white",
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: '#d44a3a',
            },
          }}
        >
          Register
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
            paddingY: 2,
            transition: 'background-color 0.3s ease, color 0.3s ease',
            '&:hover': {
              backgroundColor: '#d44a3a',
              color: '#FFFFFF',
            },
          }}
        >
          <Link to='/'>LOGIN</Link>
        </Button>
      </form>
    </Stack>
  );
};

export default Register;
