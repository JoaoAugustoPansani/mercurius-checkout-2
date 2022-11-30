import {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface StepContextProps {
  actualStep: number;
  stepHandler: (step: number) => void;
}

const StepContext = createContext<StepContextProps>({
  actualStep: 1,
  stepHandler: () => {},
});

interface StepProviderProps {
  children: JSX.Element;
}

export const StepProvider: FunctionComponent<StepProviderProps> = ({
  children,
}) => {
  const [actualStep, setActualStep] = useState<number>(1);

  const stepHandler = useCallback(
    (step: number) => {
      setActualStep(step);
    },
    [setActualStep]
  );

  const value = useMemo(
    () => ({
      actualStep,
      stepHandler,
    }),
    [actualStep, stepHandler]
  );

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};

export const useStep = () => {
  const stepContext = useContext(StepContext);

  if (!stepContext) {
    throw new Error("useStep was called without beign nested in StepProvider");
  }

  return stepContext;
};
