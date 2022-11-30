import {
  Button,
  Container,
  FormGroup,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ArticleIcon from "@mui/icons-material/Article";
import PixIcon from "@mui/icons-material/Pix";
import { PaymentOption } from "../PaymentOption";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import { useState } from "react";
import { usePaymentMethod } from "../../providers/PaymentMethodProvider";

export const PaymentMethod = () => {
  const { paymentMethod, paymentMethodHandler } = usePaymentMethod();

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
      <Typography>Selecione o método de pagamento</Typography>
      <FormGroup>
        <RadioGroup
          name="controlled-radio-buttons-group"
          value={paymentMethod}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            paymentMethodHandler(event.target.value);
          }}
        >
          <PaymentOption
            value={"card"}
            icon={<CreditCardIcon />}
            label="CARTÃO"
          />
          <PaymentOption value={"pix"} icon={<PixIcon />} label="PIX" />
          <PaymentOption
            value={"ticket"}
            icon={<ArticleIcon />}
            label="BOLETO"
          />
          <PaymentOption
            value={"crypto"}
            icon={<CurrencyBitcoinIcon />}
            label="CRYPTO"
          />
        </RadioGroup>
      </FormGroup>
    </Box>
  );
};
