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
import { CardType } from "../../utils/constants";
import { CardCustomMask, CPFCustomMask } from "../TextMaskCustom";

export const Card = () => {
  const [cardHolder, setCardHolder] = React.useState<CardType>();
  const [cardHolderLogoSrc, setCardHolderSrc] = React.useState("");

  const [CPFValue, setCPFValue] = React.useState("");
  const [cardValue, setCardValue] = React.useState("");

  const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCPFValue(event.target.value);
  };

  const handleCardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardValue(event.target.value);
    cardHolderHandler(event.target.value);
  };

  const cardMatches = {
    visa: new RegExp(/^4[0-9]{12}(?:[0-9]{3})?$/),
    mastercard: new RegExp(/^5[1-5][0-9]{14}$/),
    amex: new RegExp(/^3[47][0-9]{13}$/),
    diners: new RegExp(/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/),
    hipercard: new RegExp(/^(606282d{10}(d{3})?)|(3841d{15})$/),
    elo: new RegExp(
      /^((((636368)|(438935)|(504175)|(451416)|(636297))d{0,10})|((5067)|(4576)|(4011))d{0,12})$/
    ),
  };

  const cardHolderHandler = (value: string) => {
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

    // setCardHolder(cardType.type);
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
      <Box sx={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
        <Checkbox defaultChecked />
        <Typography>Utilizar informações pessoais</Typography>
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
                  <Image alt={`${cardHolder} logo`} src="" />
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
