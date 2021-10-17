import React from "react";
import { styled } from "@mui/material";

export const SafeEnviromentContainer = styled("div")`
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.background.default};
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2)} 0;
  font-size: 12px;
`;
