import { FunctionComponent } from "react";
import { IMaskInput } from "react-imask";
import * as React from "react";
import { CardType } from "../utils/constants";
import { BreakfastDiningOutlined } from "@mui/icons-material";
import { useCardType } from "../providers/CardTypeProvider";

interface TextMaskCustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export const CEPCustomMask = React.forwardRef<HTMLElement, TextMaskCustomProps>(
  function TextMaskCustom(props) {
    const { onChange, ...other } = props;
    const ref = React.createRef();

    return (
      <IMaskInput
        {...other}
        mask="00000-000"
        definitions={{
          "#": /[1-9]/,
        }}
        // inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);

export const CPFCustomMask = React.forwardRef<HTMLElement, TextMaskCustomProps>(
  function TextMaskCustom(props) {
    const { onChange, ...other } = props;
    const ref = React.createRef();

    return (
      <IMaskInput
        {...other}
        mask="000.000.000-00"
        definitions={{
          "#": /[1-9]/,
        }}
        // inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);

export const CardCustomMask = React.forwardRef<
  HTMLElement,
  TextMaskCustomProps
>(function TextMaskCustom(props) {
  const { onChange, ...other } = props;
  const ref = React.createRef();

  const { cardType } = useCardType();

  return (
    <IMaskInput
      {...other}
      mask={
        cardType == CardType.Amex ? "0000 000000 00000" : "0000 0000 0000 0000"
      }
      // inputRef={ref}
      onAccept={(value: any) => {
        onChange({ target: { name: props.name, value } });
      }}
      overwrite
    />
  );
});

export const PhoneCustomMask = React.forwardRef<
  HTMLElement,
  TextMaskCustomProps
>(function TextMaskCustom(props) {
  const { onChange, ...other } = props;
  const ref = React.createRef();

  return (
    <IMaskInput
      {...other}
      mask={"00 0 0000-0000"}
      // inputRef={ref}
      onAccept={(value: any) => {
        onChange({ target: { name: props.name, value } });
      }}
      overwrite
    />
  );
});
