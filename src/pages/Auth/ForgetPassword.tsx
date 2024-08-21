
import { FormControl, InputLabel, OutlinedInput, Stack, Typography, Button, FormHelperText} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useForm, Controller , SubmitHandler} from 'react-hook-form';
import logoImage from '/assets/Logo.png';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../services/Api';

type Inputs = {
  email:string ;
};
const ForgetPassword = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const { control, handleSubmit, formState: { errors } } = useForm<Inputs>();



  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/auth/forgot-password`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      
      console.log(response);
      navigate("/signin");
    } catch (error) {
      console.error('Registration error:', error);
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
        Forget Password  !!
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
        <Button
          type="submit"
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
          Send
        </Button>
      </form>
    </Stack>
  );
};

export default ForgetPassword; 