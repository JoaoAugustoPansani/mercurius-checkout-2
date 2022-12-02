import { FunctionComponent } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

interface PurchaseSummaryItemProps {
  title: string;
  value?: number;
}

export const PurchaseSummaryItem: FunctionComponent<
  PurchaseSummaryItemProps
> = ({ title, value }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: "8px",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>{title} </Typography>
      <Typography sx={{ fontWeight: "bold" }}>
        {value != null ? value : "-"}
      </Typography>
    </Box>
  );
};
