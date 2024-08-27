import { Stack, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";

const HeaderIcons = () => {
  const theme = useTheme();

  const icons = [
    { icon: <CiUser />, label: "user", href: "/" },
    { icon: <CiShoppingCart />, label: "cart", href: "/" },
    { icon: <CiHeart />, label: "love", href: "/" },
  ];

  const activeColor = theme.palette.mode === "dark" ? "#ffffff" : "#EF6B4A"; // Color for active link
  const textColor = theme.palette.mode === "dark" ? "#ffffff" : "#393280";
  const hoverColor = theme.palette.mode === "dark" ? "#ffffff" : "#EF6B4A";
  const borderColor = theme.palette.mode === "dark" ? "#ffffff" : "#EF6B4A";

  return (
    <Stack
      spacing={3}
      direction='row'
      justifyContent="center"
      alignItems="center"
      paddingRight={3}
      marginTop={{xs: 2, sm:0}}
    >
      {icons.map((icon, index) => (
        <Link
          key={icon.label}
          href={icon.href}
          className="uppercase"
          sx={{
            position: 'relative',
            color:  textColor,
            fontSize: 24, 
            transition: 'color 0.5s ease, transform 0.5s ease',
            textDecoration: 'none',
            paddingRight: index !== icons.length - 1 ? '10px' : '0',
            borderRight: index !== icons.length - 1 ? `1px solid ${borderColor}` : 'none',
            display: 'flex',
            alignItems: 'center',
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
          {icon.icon}
        </Link>
      ))}
    </Stack>
  );
};

export default HeaderIcons;
