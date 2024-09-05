
import { Stack, Badge } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { useSelector } from "react-redux";
import { RootState } from "../../../../rtk/store";
import { Link } from "react-router-dom";

const HeaderIcons = () => {
  const theme = useTheme();
  const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

  const textColor = theme.palette.mode === "dark" ? "#ffffff" : "#393280";
  const hoverColor = theme.palette.mode === "dark" ? "#ffffff" : "#EF6B4A";
  const borderColor = theme.palette.mode === "dark" ? "#ffffff" : "#EF6B4A";

  const icons = [
    { icon: <CiUser />, label: "user", href: "/" },
    { 
      icon: (
        <Badge
          badgeContent={totalQuantity > 0 ? totalQuantity : 0}
          color="secondary"
        >
          <CiShoppingCart />
        </Badge>
      ), 
      label: "cart", 
      href: "/home/cart" 
    },
    { icon: <CiHeart />, label: "love", href: "/" },
  ];

  return (
    <Stack
      spacing={3}
      direction='row'
      justifyContent="center"
      alignItems="center"
      paddingRight={3}
      marginTop={{ xs: 2, sm: 0 }}
    >
      {icons.map((icon, index) => (
        <Stack
          key={icon.label}
         sx={{
            position: 'relative',
            color: textColor,
            fontSize: 24,
            transition: 'color 0.5s ease, transform 0.5s ease',
            textDecoration: 'none',
            paddingRight: index !== icons.length - 1 ? '10px' : '0',
            borderRight: index !== icons.length - 1 ? `1px solid ${borderColor}` : 'none',
            display: 'flex',
            alignItems: 'center',
            '&:hover': {
              color: hoverColor,
            },
          }}
        >
         <Link to={icon.href}>{icon.icon}</Link> 
        </Stack>
      ))}
    </Stack>
  );
};

export default HeaderIcons;
