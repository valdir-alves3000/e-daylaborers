import { styled } from "@mui/material";
import { TextField } from "@mui/material";

export const TextFieldStyled = styled(TextField)`
  .MuiInputBase-root {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }

  .MuiOutLineInput-notchedOutLine {
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
