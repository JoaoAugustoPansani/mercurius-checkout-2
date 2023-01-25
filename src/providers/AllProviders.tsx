import { StepContext } from "@mui/material";
import { FunctionComponent } from "react";
import { CardTypeProvider } from "./CardTypeProvider";
import { ContainerProvider } from "./ContainerProvider";
import { PaymentMethodProvider } from "./PaymentMethodProvider";
import { PersonalInfoProvider } from "./PersonalInfoProvider";
import { ProductProvider } from "./ProductProvider";
import { StepProvider } from "./StepProvider";

interface AllProvidersProps {
  children: JSX.Element;
}

export const AllProviders: FunctionComponent<AllProvidersProps> = ({
  children,
}) => {
  return (
    <ContainerProvider>
      <PersonalInfoProvider>
        <ProductProvider>
          <PaymentMethodProvider>
            <CardTypeProvider>
              <StepProvider>{children}</StepProvider>
            </CardTypeProvider>
          </PaymentMethodProvider>
        </ProductProvider>
      </PersonalInfoProvider>
    </ContainerProvider>
  );
};
