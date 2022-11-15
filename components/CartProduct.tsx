import { Box } from "@mui/system";
import { FunctionComponent, useState } from "react";
import { Typography } from "@mui/material";

interface CartProductProps {
  title: string;
  thumbnail: string;
}

export const CartProduct: FunctionComponent<CartProductProps> = ({
  title,
  thumbnail,
}) => {
  return (
    <Box sx={{ display: "flex", gap: "12px" }}>
      <Box
        component="img"
        alt={title}
        src={thumbnail}
        sx={{
          borderRadius: "8px",
          backgroundColor: "#040006",
          width: "56px",
          height: "56px",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
        <Typography
          sx={{
            textDecoration: "underline",
            color: "red",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          Remover
        </Typography>
      </Box>
    </Box>
  );
};
