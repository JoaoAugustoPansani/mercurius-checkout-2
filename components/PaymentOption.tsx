import { FormControlLabel, Radio } from "@mui/material";
import { Box } from "@mui/system";
import { FunctionComponent, useState } from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";

interface PaymentOptionProps {
  label: string;
  value: string;
  icon: JSX.Element;
}

export const PaymentOption: FunctionComponent<PaymentOptionProps> = ({
  label,
  icon,
  value,
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginLeft: "8px" }}>
      <FormControlLabel value={value} control={<Radio />} label={label} />
      {icon}
    </Box>
  );
};
