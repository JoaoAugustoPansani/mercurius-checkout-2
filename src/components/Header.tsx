import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export const Header = () => {
  return (
    <Container sx={{ display: "flex", alignItems: "center", margin: "12px 0" }}>
      <Box component="img" src="/merc_logo.svg" alt="Logo Mercurius Crypto" />
      <Box
        sx={{
          height: "20px",
          width: "1px",
          backgroundColor: "#BDBDBD",
          margin: "0 12px",
        }}
      />
      <Typography>CHECKOUT</Typography>
    </Container>
  );
};
