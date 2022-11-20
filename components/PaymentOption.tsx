import {
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { FunctionComponent, useState } from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";

interface PaymentOptionProps {
  label: string;
  icon: JSX.Element;
}

export const PaymentOption: FunctionComponent<PaymentOptionProps> = ({
  label,
  icon,
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginLeft: "8px" }}>
      <FormControlLabel value={label} control={<Radio />} label={label} />
      {icon}
    </Box>
  );
};
