import { Toolbar, Container } from "@mui/material";
import React from "react";
import { HeaderAppBar, HeaderLogo } from "./Header.style";

const Header: React.FC = () => {
  return (
    <HeaderAppBar position="sticky">
      <Toolbar component={Container}>
        <HeaderLogo src={"/img/logos/logo.svg"} />
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
