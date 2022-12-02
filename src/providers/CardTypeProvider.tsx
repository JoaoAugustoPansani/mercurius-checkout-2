import {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { cardRegex } from "../utils/cardRegex";
import { CardType } from "../utils/constants";

interface CardTypeContextProps {
  cardType: CardType | undefined;
  cardTypeHandler: (value: string) => void;
}

const CardTypeContext = createContext<CardTypeContextProps>({
  cardType: undefined,
  cardTypeHandler: () => {},
});

interface CardTypeProps {
  children: JSX.Element;
}

export const CardTypeProvider: FunctionComponent<CardTypeProps> = ({
  children,
}) => {
  const [cardType, setCardType] = useState<CardType | undefined>(undefined);

  const cardTypeHandler = useCallback(
    (value: string) => {
      const cardType = (() => {
        if (value.replaceAll(" ", "").match(cardRegex.visa)) {
          return CardType.Visa;
        } else if (value.replaceAll(" ", "").match(cardRegex.mastercard)) {
          return CardType.MasterCard;
        } else if (value.replaceAll(" ", "").match(cardRegex.amex)) {
          return CardType.Amex;
        } else if (value.replaceAll(" ", "").match(cardRegex.diners)) {
          return CardType.Diners;
        } else if (value.replaceAll(" ", "").match(cardRegex.hipercard)) {
          return CardType.Hipercard;
        } else if (value.replaceAll(" ", "").match(cardRegex.elo)) {
          return CardType.Elo;
        }
      })();

      setCardType(cardType);
    },
    [setCardType]
  );

  const value = useMemo(
    () => ({ cardType, cardTypeHandler }),
    [cardType, cardTypeHandler]
  );

  return (
    <CardTypeContext.Provider value={value}>
      {children}
    </CardTypeContext.Provider>
  );
};

export const useCardType = () => {
  const cardTypeContext = useContext(CardTypeContext);

  if (!cardTypeContext) {
    throw new Error(
      "useCardType was called without being nested in CardTypeProvider"
    );
  }

  return cardTypeContext;
};
