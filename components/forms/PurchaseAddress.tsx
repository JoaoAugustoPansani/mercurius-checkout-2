import { Button, Grid, TextField, Checkbox, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const PurchaseAddress = () => {
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
      <Typography>Estes dados serão usados para validar o pagamento</Typography>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <TextField label="Endereço" variant="outlined" fullWidth />
      </Box>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <TextField label="Complemento" variant="outlined" fullWidth />
        <TextField label="Número" variant="outlined" />
      </Box>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <TextField label="Cidade" variant="outlined" fullWidth />
        <Box sx={{ display: "flex", gap: "12px" }}>
          <TextField label="CEP" variant="outlined" />
          <TextField label="UF" variant="outlined" />
        </Box>
      </Box>
    </Box>
  );
};
