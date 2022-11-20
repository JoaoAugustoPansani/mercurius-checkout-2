import { Box, Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Voucher } from "../forms/Voucher";
import { Section } from "../Section";
import { PersonalInfo } from "../forms/PersonalInfo";
import { PaymentMethod } from "../forms/PaymentMethod";

export const FirstStep = () => {
  return (
    <Box sx={{ width: "70%" }}>
      <Container sx={{ margin: "12px 0" }}>
        <Typography>Etapas 1 de 2</Typography>
      </Container>
      <Section child={<Voucher />} title="CUPOM DE DESCONTO" />
      <Section child={<PersonalInfo />} title="INFORMAÇÕES PESSOAIS" />
      {/* <Section child={<PurchaseAddress />} title="ENDEREÇO DE COBRANÇA" /> */}
      <Section child={<PaymentMethod />} title="MÉTODOS DE PAGAMENTO" />
      <Container sx={{ display: "flex", width: "100%", marginTop: "32px" }}>
        <Button
          size="large"
          variant="contained"
          disabled={true}
          sx={{ marginLeft: "auto" }}
        >
          Seguir para pagamento
        </Button>
      </Container>
    </Box>
  );
};
