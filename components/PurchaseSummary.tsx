import { FunctionComponent, useState } from "react";
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";
import { PurchaseSummaryItem } from "./PurchaseSummaryItem";

interface PurchaseSummaryProps {
  subtotal?: number;
  taxes?: number;
  voucher?: number;
  voucherTitle?: string;
  total?: number;
}

export const PurchaseSummary: FunctionComponent<PurchaseSummaryProps> = ({
  subtotal,
  taxes,
  voucher,
  voucherTitle,
  total,
}) => {
  return (
    <Container>
      <Typography sx={{ marginBottom: "24px" }}>RESUMO DA COMPRA </Typography>
      <PurchaseSummaryItem title="Subtotal" value={subtotal} />
      <PurchaseSummaryItem title="Taxas" value={taxes} />
      <PurchaseSummaryItem
        title={`Cupom${voucherTitle != null ? `(${voucherTitle})` : ""}`}
        value={voucher}
      />
      <Box
        sx={{
          width: "95%",
          height: "1px",
          backgroundColor: "#BDBDBD",
          margin: "16px auto",
        }}
      />
      <PurchaseSummaryItem title="TOTAL" value={total} />
    </Container>
  );
};
