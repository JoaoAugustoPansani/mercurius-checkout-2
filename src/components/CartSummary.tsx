import { FunctionComponent, useState } from "react";
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";
import { CartProduct } from "./CartProduct";
import { useProduct } from "../providers/ProductProvider";

interface CartSummaryProps {}

export const CartSummary: FunctionComponent<CartSummaryProps> = ({}) => {
  const { product } = useProduct();

  return (
    <Container>
      <Typography sx={{ marginBottom: "24px" }}>RESUMO DA SACOLA</Typography>
      <CartProduct title={product.name} thumbnail={product.thumbnail} />
    </Container>
  );
};
