import { StepContext } from "@mui/material";
import { FunctionComponent } from "react";
import { CardTypeProvider } from "./CardTypeProvider";
import { PaymentMethodProvider } from "./PaymentMethodProvider";
import { PersonalInfoProvider } from "./PersonalInfoProvider";
import { StepProvider } from "./StepProvider";

interface AllProvidersProps {
  children: JSX.Element;
}

export const AllProviders: FunctionComponent<AllProvidersProps> = ({
  children,
}) => {
  return (
    <PersonalInfoProvider>
      <PaymentMethodProvider>
        <CardTypeProvider>
          <StepProvider>{children}</StepProvider>
        </CardTypeProvider>
      </PaymentMethodProvider>
    </PersonalInfoProvider>
  );
};
