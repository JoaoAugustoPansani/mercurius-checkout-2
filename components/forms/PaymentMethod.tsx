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

export const PaymentMethod = () => {
  const [value, setValue] = useState("");

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
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
            console.log(value);
          }}
        >
          <PaymentOption icon={<CreditCardIcon />} label="CARTÃO" />
          <PaymentOption icon={<PixIcon />} label="PIX" />
          <PaymentOption icon={<ArticleIcon />} label="BOLETO" />
          <PaymentOption icon={<CurrencyBitcoinIcon />} label="CRYPTO" />
        </RadioGroup>
      </FormGroup>
    </Box>
  );
};
