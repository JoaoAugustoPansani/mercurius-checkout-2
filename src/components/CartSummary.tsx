import { FunctionComponent, useState } from "react";
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";
import { CartProduct } from "./CartProduct";

interface CartSummaryProps {
  products: { id: number; title: string; thumbnail: string }[];
}

interface CartSummaryProps {}

export const CartSummary: FunctionComponent<CartSummaryProps> = ({
  products,
}) => {
  const CartProducts = () => {
    return (
      <Box>
        {products.map((product) => {
          return (
            <CartProduct
              key={product.id}
              title={product.title}
              thumbnail={product.thumbnail}
            />
          );
        })}
      </Box>
    );
  };

  return (
    <Container>
      <Typography sx={{ marginBottom: "24px" }}>RESUMO DA SACOLA</Typography>
      {products.length == 0 ? <Typography></Typography> : <CartProducts />}
    </Container>
  );
};
