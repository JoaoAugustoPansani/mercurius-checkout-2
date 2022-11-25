import { Button, Checkbox, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const PersonalInfo = () => {
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
        <TextField label="Primeiro Nome" variant="outlined" fullWidth />
        <TextField label="Sobrenome" variant="outlined" fullWidth />
      </Box>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <TextField label="Telefone" variant="outlined" fullWidth />
        <TextField label="CPF" variant="outlined" fullWidth />
      </Box>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <TextField label="Email" variant="outlined" fullWidth />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
        <Checkbox defaultChecked />
        <Typography>Aceitos os Termos de Uso e Condições</Typography>
      </Box>
    </Box>
  );
};
