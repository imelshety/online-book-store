import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CssBaseline from '@mui/material/CssBaseline';
import { Stack, Typography, useTheme, Divider, Button, TextField } from '@mui/material';
import { useState } from 'react';

const drawerWidth = 240;

export default function PreSlider() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const [expandedPanel, setExpandedPanel] = useState<string | false>(false);

  const handleAccordionChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  const DrawerList = (
    <Box
      sx={{
        width: drawerWidth,
        backgroundColor: isDarkMode ? 'white' : '#061C2B',
        color: isDarkMode ? '#061C2B' : 'white',
        padding: 2,
        height: '100%',
        marginY : '12rem',
        overflowY: 'hidden',
      }}
      role="presentation"
    >
      <Box sx={{ mb: 2 }}>
        <Typography variant='h6' sx={{ color: isDarkMode ? '#061C2B' : '#ED553B' }}>Price</Typography>
        <Divider  sx={{ color: isDarkMode ? '#061C2B' : '#ED553B' }} />
        <Stack direction="row" spacing={1} alignItems="center" >
        <TextField
            id="outlined-basic"
            label="$"
            variant="outlined"
            size="small"
            sx={{
              flex: 1,
              color: isDarkMode ? '#061C2B' : '#ED553B',
              border: '1px solid',
              borderColor: !isDarkMode ? '#ED553B' : '#061C2B',
              '& .MuiInputLabel-root': {
                color: '#ED553B', // Label color always #ED553B
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: !isDarkMode ? '#ED553B' : '#061C2B', // Outline border color
                },
                '&:hover fieldset': {
                  borderColor: '#ED553B', // Hover state color
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#ED553B', // Focus state color
                },
                '&.MuiOutlinedInput-root-focused ' :{
                  color :  '#ED553B',
                }
              },
            }}
          />
          <Typography sx={{ color: isDarkMode ? '#061C2B' : '#ED553B' }}>to</Typography>
          <TextField
            id="outlined-basic"
            label="$"
            variant="outlined"
            size="small"
            sx={{
              flex: 1,
              color: isDarkMode ? '#061C2B' : '#ED553B',
              border: '1px solid',
              borderColor: !isDarkMode ? '#ED553B' : '#061C2B',
              '& .MuiInputLabel-root': {
                color: '#ED553B', // Label color always #ED553B
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: !isDarkMode ? '#ED553B' : '#061C2B', // Outline border color
                },
                '&:hover fieldset': {
                  borderColor: '#ED553B', // Hover state color
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#ED553B', // Focus state color
                },
                '&.MuiOutlinedInput-root-focused ' :{
                  color :!isDarkMode ? '#ED553B' : '#061C2B',
                }
              },
            }}
          />
        </Stack>
        <Button variant="contained" sx={{backgroundColor:!isDarkMode?'white': '#061C2B' , color : !isDarkMode ? '#061C2B':'white' ,mt:3}} fullWidth>
          Filter
        </Button>
      </Box>

      {['Product type', 'Availability', 'Brand', 'Color'].map((filterName, index) => (
        <Accordion
          key={index}
          expanded={expandedPanel === `panel${index}`}
          onChange={handleAccordionChange(`panel${index}`)}
          sx={{ backgroundColor: "transparent", color: isDarkMode ? '#061C2B' : '#ED553B', boxShadow: 'none' }}
        >
          <AccordionSummary
            expandIcon={expandedPanel === `panel${index}` ? (
              <RemoveIcon sx={{ color: isDarkMode ? '#061C2B' : '#ED553B' }} />
            ) : (
              <AddIcon sx={{ color: isDarkMode ? '#061C2B' : '#ED553B' }} />
            )}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{ paddingLeft: 0 }}
          >
            <Typography variant='h6'>{filterName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='body2'>Filter options go here...</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );

  return (
    <Box sx={{ display: { xs: 'none', lg: 'flex' }, height: '100%', backgroundColor: isDarkMode ? '#061C2B' : 'white' }}>
      <CssBaseline />
      <Drawer
        variant="persistent"
        anchor="left"
        open={true}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            backgroundColor: isDarkMode ? 'white' : '#061C2B',
            color: isDarkMode ? '#061C2B' : 'white',
            height: '100%',
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </Box>
  );
}
