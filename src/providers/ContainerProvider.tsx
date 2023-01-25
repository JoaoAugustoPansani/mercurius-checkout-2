import { createContext, FunctionComponent, useContext } from "react";
import { container } from "../container";

const ContainerContext = createContext<any>({});

interface ContainerProps {
  children: JSX.Element;
}

export const ContainerProvider: FunctionComponent<ContainerProps> = ({
  children,
}) => {
  return (
    <ContainerContext.Provider value={container}>
      {children}
    </ContainerContext.Provider>
  );
};

export const useContainer = () => useContext(ContainerContext);
