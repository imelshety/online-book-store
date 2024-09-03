
import Header from "../../../Shared/components/Header/Header";
import PreSlider from "../../../Shared/components/PreSlider";
import BooksList from "./subcomponents/BooksList";
import { Box, useTheme } from '@mui/material';

const Books = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  return (
    <>
      <Header>
        <Header.HeaderTop />
        <Header.Actions />
        <Header.Logo />
        <Header.Icons />
      </Header>
      <Box sx={{ display: 'flex', marginTop: '12rem', overflow: 'hidden' }}>
        <PreSlider />
        <Box
          sx={{
            flexGrow: 1,
            overflowY: 'auto',
            height: '100%',
            '&::-webkit-scrollbar': {
              width: '15px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: isDarkMode ? '#061C2B' : 'transparent', 
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: isDarkMode ? '#ED553B' : '#061C2B', 
              borderRadius: '6px',
              border: `3px solid ${isDarkMode ? '#061C2B' : '#f1f1f1'}`, 
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: isDarkMode ? '#bb412b': '#15425f', 
            },
          }}
        >
          <BooksList />
        </Box>
      </Box>
    </>
  );
};

export default Books;
