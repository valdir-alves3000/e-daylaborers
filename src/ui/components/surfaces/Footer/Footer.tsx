import React from "react";
import { Box, Typography } from "@mui/material";
import {
  AppList,
  FooterContainer,
  FooterStyled,
  FooterTitle,
} from "./Footer.style";

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography textAlign={"justify"} variant={"body2"} sx={{ mt: 2 }}>
            E-Diaristas te ajuda a encontrar um profissional perfeito para
            realizar a limpeza de sua casa. Garantimos a melhor profissonal com
            total segurança e praticidade! São milhares de clientes satisfeitos
            por todo o país.
          </Typography>
        </Box>

        <div>
          <Typography>Baixe nossos aplicativos</Typography>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"App Store"} />
              </a>
            </li>

            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/google-play.png"} alt={"App Store"} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
