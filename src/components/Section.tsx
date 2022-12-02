import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FunctionComponent, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LockIcon from "@mui/icons-material/Lock";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface SectionProps {
  title: string;
  child: JSX.Element;
  isBlockable?: boolean;
  blockParam?: boolean;
  isValid?: boolean;
}

export const Section: FunctionComponent<SectionProps> = ({
  title,
  child,
  isBlockable,
  blockParam,
  isValid,
}) => {
  const [isSectionActive, setSectionActive] = useState(false);

  return (
    <Container sx={{ width: "100%" }}>
      <Box
        sx={{
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#FFFFFF",
          padding: "16px 16px",
          margin: "8px 0",
          cursor: "pointer",
        }}
        onClick={() => {
          if (blockParam || blockParam == undefined) {
            setSectionActive(!isSectionActive);
          }
        }}
      >
        <Box sx={{ display: "flex", gap: "4px" }}>
          <Typography>{title}</Typography>
          {isBlockable ? (
            blockParam ? null : (
              <LockIcon sx={{ width: "16px" }} />
            )
          ) : null}
          {isValid ? (
            <CheckCircleOutlineIcon color="success" sx={{ width: "16px" }} />
          ) : null}
        </Box>
        {isSectionActive ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      </Box>
      <Box
        sx={
          isSectionActive && (blockParam || blockParam == undefined)
            ? {}
            : { display: "none" }
        }
      >
        {child}
      </Box>
    </Container>
  );
};
