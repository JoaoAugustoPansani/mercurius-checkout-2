import { Box, Container } from "@mui/system";
import { Header } from "../../components/Header";
import Image from "next/image";
import { CartSummary } from "../../components/CartSummary";
import { EmptyContainer } from "../../components/EmptyContainer";
import { PurchaseSummary } from "../../components/PurchaseSummary";
import { FirstStep } from "../../components/steps/FirstStep";
import { SecondStep } from "../../components/steps/SecondStep";
import { useRouter } from "next/router";
import { useProduct } from "../../providers/ProductProvider";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

const Checkout = () => {
  const router = useRouter();
  const slug = router.query.slug;

  const { getProduct } = useProduct();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        switch (slug) {
          case "test":
            getProduct(1);
            break;

          case "PRO":
            getProduct(2);
            break;
        }

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setIsLoading, getProduct, slug]);

  return (
    <Container>
      <Header />
      {isLoading ? (
        <Container>
          <CircularProgress />
        </Container>
      ) : (
        <Box sx={{ display: "flex" }}>
          <FirstStep />
          <SecondStep />
          <Box sx={{ width: "30%" }}>
            <PurchaseSummary
              subtotal={undefined}
              taxes={undefined}
              voucher={undefined}
              voucherTitle={undefined}
              total={undefined}
            />
            <Box sx={{ marginTop: "48px" }}>
              <CartSummary />
            </Box>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Checkout;
