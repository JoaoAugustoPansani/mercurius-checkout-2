import { FunctionComponent } from "react";
import { PersonalInfoProvider } from "./PersonalInfoProvider";

interface AllProvidersProps {
  children: JSX.Element;
}

export const AllProviders: FunctionComponent<AllProvidersProps> = ({
  children,
}) => {
  return <PersonalInfoProvider>{children}</PersonalInfoProvider>;
};
