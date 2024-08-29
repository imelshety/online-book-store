import React, { ReactNode, useState } from "react";
import HeaderTop from "./Subcomponents/HeaderTop";
import HeaderLogo from "./Subcomponents/HeaderLogo";
import HeaderIcons from "./Subcomponents/HeaderIcons";
import HeaderNav from "./Subcomponents/HeaderNav";

import { AiFillCloseCircle } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import { useTheme } from "@mui/material/styles";

type HeaderProps = {
  children: ReactNode;
};

type HeaderComponent = React.FC<HeaderProps> & {
  HeaderTop: React.FC;
  Logo: React.FC;
  Icons: React.FC;
  Nav: React.FC;
};

const Header: HeaderComponent = ({ children }) => {
  const [active, setActive] = useState(false);
  const theme = useTheme();
  
  const headerBgColor = theme.palette.mode === 'dark' ? '#EF6B4A' : '#ffffff';

  return (
    <>
      {/* Desktop Header */}
      <header
        style={{ backgroundColor: headerBgColor }}
        className={`z-[9999] w-full hidden lg:flex fixed left-0 right-0 top-0 mb-8 justify-between items-center flex-wrap gap-4 shadow-lg ${
          active ? "hidden" : ""
        }`}
      >
        {children}
      </header>
      
      {/* Mobile Header */}
      <header
        className="fixed lg:hidden top-0 left-0 right-0 flex justify-between items-center p-3 z-50"
        style={{ backgroundColor: headerBgColor }}
      >
        <HeaderLogo />
        <button
          className="text-[#061C2B] text-4xl"
          onClick={() => setActive(!active)}
          aria-label={active ? "Close menu" : "Open menu"}
        >
          {active ? <AiFillCloseCircle /> : <HiBars3 />}
        </button>
      </header>
      
      {/* Mobile Menu */}
      <div
        className={`lg:hidden w-screen h-screen py-10 fixed z-[998] left-0 right-0 backdrop-blur-sm duration-300 scroll-auto ${
          active ? "top-[110px]" : "-top-[110vh]"
        }`}
        style={{ backgroundColor: headerBgColor }}
      >
        <HeaderNav />
        <HeaderIcons />
      </div>
    </>
  );
};

Header.HeaderTop = HeaderTop;
Header.Logo = HeaderLogo;
Header.Icons = HeaderIcons;
Header.Nav = HeaderNav;

export default Header;
