import {
  Button,
  Checkbox,
  FormControl,
  Grid,
  Icon,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import * as React from "react";
import { useCardType } from "../../providers/CardTypeProvider";
import { cardRegex } from "../../utils/cardRegex";
import { CardType } from "../../utils/constants";
import { CardCustomMask, CPFCustomMask } from "../TextMaskCustom";

export const Card = () => {
  const { cardType, cardTypeHandler } = useCardType();

  const [cardHolderLogoSrc, setCardHolderLogoSrc] = React.useState<
    string | undefined
  >("");

  const [checked, setChecked] = React.useState(true);

  const [CPFValue, setCPFValue] = React.useState("");
  const [cardValue, setCardValue] = React.useState("");

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCPFValue(event.target.value);
  };

  const handleCardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardValue(event.target.value);
    handleCardHolder(event.target.value);
  };

  const handleCardHolder = (value: string) => {
    cardTypeHandler(value);

    switch (cardType) {
      case CardType.Visa:
        setCardHolderLogoSrc("/visa.svg");
        break;

      case CardType.MasterCard:
        setCardHolderLogoSrc("/master.svg");
        break;

      case CardType.Amex:
        setCardHolderLogoSrc("/amex.svg");
        break;

      case CardType.Diners:
        setCardHolderLogoSrc("/dinersclub.svg");
        break;

      case CardType.Hipercard:
        setCardHolderLogoSrc("/hipercard.svg");
        break;

      case CardType.Elo:
        setCardHolderLogoSrc("/elo.svg");
        break;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        marginTop: "24px",
        marginBottom: "48px",
        marginLeft: "8px",
      }}
    >
      <Typography>
        Estes dados serão usados para realizar o seu pagamento
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "4px",
        }}
      >
        <Checkbox
          checked={checked}
          onChange={handleCheck}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Typography>
          Utilizar informações pessoais para validar pagamento
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <TextField label="Nome no cartão" variant="outlined" fullWidth />
        <FormControl fullWidth>
          <InputLabel
            htmlFor="formatted-text-mask-input"
            sx={{ backgroundColor: "white", padding: "0 4px" }}
          >
            CPF do titular
          </InputLabel>
          <OutlinedInput
            onChange={handleCPFChange}
            value={CPFValue}
            name="textmask"
            id="formatted-text-mask-input"
            inputComponent={CPFCustomMask as any}
          />
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <FormControl fullWidth>
          <InputLabel
            htmlFor="formatted-text-mask-input"
            sx={{ backgroundColor: "white", padding: "0 4px" }}
          >
            Número do cartão
          </InputLabel>
          <OutlinedInput
            value={cardValue}
            onChange={handleCardChange}
            name="textmask"
            id="formatted-text-mask-input"
            inputComponent={CardCustomMask as any}
            endAdornment={
              cardType != undefined ? (
                <Icon>
                  <Image
                    src={
                      cardHolderLogoSrc != undefined ? cardHolderLogoSrc : ""
                    }
                    alt={`${cardType} logo`}
                    width={24}
                    height={24}
                  />
                </Icon>
              ) : null
            }
          />
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <TextField label="Data de vencimento" variant="outlined" fullWidth />
        <TextField label="CVV" variant="outlined" fullWidth />
      </Box>
    </Box>
  );
};
