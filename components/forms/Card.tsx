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
import { cardMatches } from "../../utils/cardMatches";
import { CardType } from "../../utils/constants";
import { CardCustomMask, CPFCustomMask } from "../TextMaskCustom";

export const Card = () => {
  const [cardHolder, setCardHolder] = React.useState<CardType | undefined>();
  const [cardHolderLogoSrc, setCardHolderLogoSrc] = React.useState<
    string | undefined
  >("");

  const [checked, setChecked] = React.useState(true);

  const [CPFValue, setCPFValue] = React.useState("");
  const [cardValue, setCardValue] = React.useState("");

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    console.log(checked);
  };

  const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCPFValue(event.target.value);
  };

  const handleCardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardValue(event.target.value);
    handleCardHolder(event.target.value);
  };

  const handleCardHolder = (value: string) => {
    const cardType = (() => {
      if (value.replaceAll(" ", "").match(cardMatches.visa)) {
        return { type: CardType.Visa, iconSrc: "/visa.svg" };
      } else if (value.replaceAll(" ", "").match(cardMatches.mastercard)) {
        return { type: CardType.MasterCard, iconSrc: "/master.svg" };
      } else if (value.replaceAll(" ", "").match(cardMatches.amex)) {
        return { type: CardType.Amex, iconSrc: "/amex.svg" };
      } else if (value.replaceAll(" ", "").match(cardMatches.diners)) {
        return { type: CardType.Diners, iconSrc: "/dinersclub.svg" };
      } else if (value.replaceAll(" ", "").match(cardMatches.hipercard)) {
        return { type: CardType.Hipercard, iconSrc: "/hipercard.svg" };
      } else if (value.replaceAll(" ", "").match(cardMatches.elo)) {
        return { type: CardType.Elo, iconSrc: "/elo.svg" };
      }
    })();

    setCardHolder(cardType?.type);
    setCardHolderLogoSrc(cardType?.iconSrc);
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
              cardHolder != undefined ? (
                <Icon>
                  <Image
                    src={
                      cardHolderLogoSrc != undefined ? cardHolderLogoSrc : ""
                    }
                    alt={`${cardHolder} logo`}
                    width={28}
                    height={28}
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
