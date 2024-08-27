import { Link, Stack } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

const HeaderNav = () => {
  const [activeLink, setActiveLink] = useState('home');
  const theme = useTheme();

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const links = [
    { label: 'home', href: '/' },
    { label: 'about us', href: '/' },
    { label: 'books', href: '/' },
    { label: 'new release', href: '/' },
    { label: 'contact us', href: '/' },
    { label: 'blog', href: '/' },
  ];

  const activeColor = theme.palette.mode === 'dark' ? '#ffffff' : '#EF6B4A'; // Color for active link
  const textColor = theme.palette.mode === 'dark' ? '#ffffff' : '#000000';
  const hoverColor = theme.palette.mode === 'dark' ? '#ffffff' : '#EF6B4A'; 
  const borderColor = theme.palette.mode === 'dark' ? '#ffffff' : '#EF6B4A';

  return (
    <Stack  spacing={3} direction={{ xs: 'column', sm: 'row' }} justifyContent='center' alignItems='center'>
      {links.map((link, index) => (
        <Link
          key={link.label}
          href={link.href}
          onClick={() => handleLinkClick(link.label)}
          className="uppercase"
          sx={{
            position: 'relative',
            color: activeLink === link.label ? activeColor : textColor,
            fontSize : 18, 
            fontWeight: 400,
            borderRight: index !== links.length - 1 ? `1px solid ${borderColor}` : 'none',
            paddingRight: '10px',
            textDecoration: 'none',
            transition: 'color 0.5s ease, transform 0.5s ease',
            '&::before': {
              content: '""',
              position: 'absolute',
              left: 0,
              bottom: -5,
              width: '100%',
              height: '2px',
              backgroundColor: activeColor,
              transform: 'scaleX(0)',
              transformOrigin: 'bottom right',
              transition: 'transform 0.5s ease',
            },
            '&:hover': {
              color: hoverColor,
              '&::before': {
                transform: 'scaleX(1)',
                transformOrigin: 'bottom left',
              },
            },
          }}
        >
          {link.label}
        </Link>
      ))}
    </Stack>
  );
};

export default HeaderNav;
