import { Box, Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { Section } from "../Section";
import { Address } from "../forms/Address";
import { Card } from "../forms/Card";
import { usePaymentMethod } from "../../providers/PaymentMethodProvider";
import { FunctionComponent, useState } from "react";
import { SuperExpression } from "typescript";
import { useStep } from "../../providers/StepProvider";

export const SecondStep: FunctionComponent = () => {
  const { paymentMethod } = usePaymentMethod();
  const { actualStep, stepHandler } = useStep();

  const SecondSection = () => {
    switch (paymentMethod) {
      case "card":
        return <Section child={<Card />} title="INFORMAÇÕES DE PAGAMENTO" />;

      case "pix":
        return <Typography>PIX</Typography>;

      case "ticket":
        return <Typography>TICKET</Typography>;

      case "crypto":
        return <Typography>CRYPTO</Typography>;
    }

    return <></>;
  };

  return (
    <Box
      sx={
        actualStep == 2
          ? { width: "70%", padding: "16px 0" }
          : { display: "none" }
      }
    >
      <Container sx={{ margin: "12px 0" }}>
        <Typography>Etapas 2 de 2</Typography>
      </Container>
      <Container sx={{ margin: "12px 0" }}>
        <Typography
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
            textDecoration: "underline",
            color: "#1565c0",
          }}
          onClick={() => {
            stepHandler(1);
          }}
        >
          Voltar a primeira etapa
        </Typography>
      </Container>
      <Section child={<Address />} title="ENDEREÇO DE COBRANÇA" />
      <SecondSection />
    </Box>
  );
};
