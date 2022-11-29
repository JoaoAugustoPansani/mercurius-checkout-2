import { Box, Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Voucher } from "../forms/Voucher";
import { Section } from "../Section";
import { PersonalInfo } from "../forms/PersonalInfo";
import { PaymentMethod } from "../forms/PaymentMethod";
import { Address } from "../forms/Address";
import { Card } from "../forms/Card";
import { usePersonalInfo } from "../../providers/PersonalInfoProvider";

export const FirstStep = () => {
  const { isPersonalInfoValid } = usePersonalInfo();

  return (
    <Box sx={{ width: "70%" }}>
      <Container sx={{ margin: "12px 0" }}>
        <Typography>Etapas 1 de 2</Typography>
      </Container>
      <Section child={<Voucher />} title="CUPOM DE DESCONTO" />
      <Section
        child={<PersonalInfo />}
        title="INFORMAÇÕES PESSOAIS"
        isValid={isPersonalInfoValid}
      />
      <Section
        child={<PaymentMethod />}
        isBlockable={true}
        blockParam={isPersonalInfoValid}
        title="MÉTODOS DE PAGAMENTO"
      />
      {/* <Section child={<Address />} title="ENDEREÇO DE COBRANÇA" /> */}
      {/* <Section child={<Card />} title="INFORMAÇÕES DE PAGAMENTO" /> */}
      <Container sx={{ display: "flex", width: "100%", marginTop: "32px" }}>
        <Button
          size="large"
          variant="contained"
          disabled={!isPersonalInfoValid}
          sx={{ marginLeft: "auto" }}
        >
          Seguir para pagamento
        </Button>
      </Container>
    </Box>
  );
};
