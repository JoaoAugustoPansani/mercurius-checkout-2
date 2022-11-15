import { Box, Container } from "@mui/system";
import { Header } from "../components/Header";
import Image from "next/image";
import { CartSummary } from "../components/CartSummary";
import { EmptyContainer } from "../components/EmptyContainer";
import { PurchaseSummary } from "../components/PurchaseSummary";
import { Section } from "../components/Section";

const cartItems = [
  {
    id: 1,
    title: "Mercurius PRO",
    thumbnail:
      "https://i0.wp.com/holdmerc.com.br/wp-content/uploads/2022/07/mercurius-pro.png?fit=500%2C500&ssl=1",
  },
];

export default function Home() {
  return (
    <Container>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "70%" }}>
          <Section child={<EmptyContainer />} title="CUPOM DE DESCONTO" />
          <Section child={<EmptyContainer />} title="INFORMAÇÕES PESSOAIS" />
          <Section child={<EmptyContainer />} title="ENDEREÇO DE COBRANÇA" />
          <Section child={<EmptyContainer />} title="MÉTODOS DE PAGAMENTO" />
        </Box>
        <Box sx={{ width: "30%" }}>
          <PurchaseSummary
            subtotal={undefined}
            taxes={undefined}
            voucher={undefined}
            voucherTitle={undefined}
            total={undefined}
          />
          <Box sx={{ marginTop: "48px" }}>
            <CartSummary products={cartItems} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
