import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const Voucher = () => {
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
      <Typography>Digite aqui seu cupom Mercurius</Typography>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <TextField label="Digite seu cupom" variant="outlined" fullWidth />
        <Button size="medium" variant="contained" sx={{ minWidth: "154px" }}>
          Aplicar Cupom
        </Button>
      </Box>
    </Box>
  );
};
