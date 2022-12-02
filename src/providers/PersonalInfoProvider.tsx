import {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface PersonalInfoContextProps {
  isPersonalInfoValid: boolean;
  validateForm: (value: boolean) => void;
}

const PersonalInfoContext = createContext<PersonalInfoContextProps>({
  isPersonalInfoValid: false,
  validateForm: () => {},
});

interface PersonalInfoProps {
  children: JSX.Element;
}

export const PersonalInfoProvider: FunctionComponent<PersonalInfoProps> = ({
  children,
}) => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    phone_number: "",
    email: "",
  });

  const [isPersonalInfoValid, setIsPersonalInfoValid] = useState(false);

  const validateForm = useCallback(
    (value: boolean) => {
      setIsPersonalInfoValid(value);
    },
    [setIsPersonalInfoValid]
  );

  const value = useMemo(
    () => ({ isPersonalInfoValid, validateForm }),
    [isPersonalInfoValid, validateForm]
  );

  return (
    <PersonalInfoContext.Provider value={value}>
      {children}
    </PersonalInfoContext.Provider>
  );
};

export const usePersonalInfo = () => {
  const personalInfoContext = useContext(PersonalInfoContext);

  if (!personalInfoContext) {
    throw new Error(
      "usePersonalInfo was called without being nested in PersonalInfoProvider"
    );
  }

  return personalInfoContext;
};
