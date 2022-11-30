import {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface PaymentMethodContextProps {
  paymentMethod: string | undefined;
  paymentMethodHandler: (value: string) => void;
}

const PaymentMethodContext = createContext<PaymentMethodContextProps>({
  paymentMethod: undefined,
  paymentMethodHandler: () => {},
});

interface PaymentMethodProps {
  children: JSX.Element;
}

export const PaymentMethodProvider: FunctionComponent<PaymentMethodProps> = ({
  children,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<string | undefined>(
    undefined
  );

  const paymentMethodHandler = useCallback(
    (value: string) => {
      setPaymentMethod(value);
    },
    [setPaymentMethod]
  );

  const value = useMemo(
    () => ({ paymentMethod, paymentMethodHandler }),
    [paymentMethod, paymentMethodHandler]
  );

  return (
    <PaymentMethodContext.Provider value={value}>
      {children}
    </PaymentMethodContext.Provider>
  );
};

export const usePaymentMethod = () => {
  const paymentMethodContext = useContext(PaymentMethodContext);

  if (!paymentMethodContext) {
    throw new Error(
      "usePaymentMethod was called without being nested in PaymentMethodProvider"
    );
  }

  return paymentMethodContext;
};
