import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FunctionComponent, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface SectionProps {
  title: string;
  child: JSX.Element;
}

export const Section: FunctionComponent<SectionProps> = ({ title, child }) => {
  const [isSectionActive, setSectionActive] = useState(false);

  return (
    <Container sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#EFEFEF",
          padding: "16px 16px",
          margin: "8px 0",
          cursor: "pointer",
        }}
        onClick={() => {
          setSectionActive(!isSectionActive);
        }}
      >
        <Typography>{title}</Typography>
        {isSectionActive ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      </Box>
      {isSectionActive ? <Box>{child}</Box> : null}
    </Container>
  );
};
