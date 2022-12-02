import {
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
  Input,
  InputLabel,
  OutlinedInput,
  FormControl,
} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { CEPCustomMask } from "../TextMaskCustom";

export const Address = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        marginTop: "24px",
        marginBottom: "48px",
        marginLeft: "8px",
      }}
    >
      <Typography>
        Estes dados serão usados para acessar o seu produto
      </Typography>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <TextField
          label="Endereço (rua/av, número)"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <TextField
          label="Complemento (apto, bloco, sala)"
          variant="outlined"
          fullWidth
        />
        <FormControl>
          <InputLabel
            htmlFor="formatted-text-mask-input"
            sx={{ backgroundColor: "white", padding: "0 4px" }}
          >
            CEP
          </InputLabel>
          <OutlinedInput
            onChange={handleChange}
            value={value}
            name="textmask"
            id="formatted-text-mask-input"
            inputComponent={CEPCustomMask as any}
          />
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <TextField label="Cidade" variant="outlined" fullWidth />
        <TextField label="UF" variant="outlined" />
      </Box>
    </Box>
  );
};
