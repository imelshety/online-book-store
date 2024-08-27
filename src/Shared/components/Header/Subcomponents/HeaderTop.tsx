import { Stack, Link, useTheme } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { FaBehance, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const HeaderTop = () => {
  const theme = useTheme();

  // Define background and text colors based on the current theme mode
  const backgroundColor = theme.palette.mode === 'dark' ? '#ffffff' : '#061C2B';
  const textColor = theme.palette.mode === 'dark' ? '#000000' : '#ffffff';

  // Define icon colors based on the current theme mode
  const iconColor = theme.palette.mode === 'dark' ? '#EF6B4A' : '#ffffff';
  return (
    <Stack
      className="px-5 w-full h-[56px] hidden lg:block"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      style={{ backgroundColor }}
    >
      <Stack direction="row" alignItems="center" spacing={1} className="font-semibold" style={{ color: textColor }}>
        <LocalPhoneIcon />
        <span>+91 8374902234</span>
      </Stack>
      <Stack direction='row' spacing={8}>
        <Link href='/' >
          <FaFacebookF
            className='transition-all duration-150'
            style={{ color: iconColor }}
            
          />
        </Link>
        <Link href='/'  >
          <FaInstagram
            className='transition-all duration-150'
            style={{ color: iconColor }}
           
          />
        </Link>
        <Link href='/' >
          <FaLinkedin
            className='transition-all duration-150'
            style={{ color: iconColor }}
            
          />
        </Link>
        <Link href='/' 
            >
          <FaTwitter
            className='transition-all duration-150'
            style={{ color: iconColor }}
            
          />
        </Link>
        <Link href='/' >
          <FaBehance
            className='transition-all duration-150'
            style={{ color: iconColor }}
            
          />
        </Link>
      </Stack>
    </Stack>
  );
};

export default HeaderTop;
