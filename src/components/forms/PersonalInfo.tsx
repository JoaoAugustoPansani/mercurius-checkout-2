import {
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { usePersonalInfo } from "../../providers/PersonalInfoProvider";
import { isEmailValid } from "../../utils/validators";
import { PhoneCustomMask } from "../TextMaskCustom";

export const PersonalInfo = () => {
  const { validateForm } = usePersonalInfo();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [termsChecked, setTermsChecked] = useState(false);

  validateForm(true);

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
        Estes dados serão usados para acessar o seu produto
      </Typography>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <TextField
          label="Primeiro Nome"
          variant="outlined"
          fullWidth
          value={firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFirstName(e.target.value);
          }}
        />
        <TextField
          label="Sobrenome"
          variant="outlined"
          fullWidth
          value={lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setLastName(e.target.value);
          }}
        />
      </Box>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <FormControl fullWidth>
          <InputLabel
            htmlFor="formatted-text-mask-input"
            sx={{ backgroundColor: "white", padding: "0 4px" }}
          >
            Telefone
          </InputLabel>
          <OutlinedInput
            value={phoneNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPhoneNumber(
                e.target.value.replaceAll(" ", "").replaceAll("-", "")
              );
            }}
            name="textmask"
            id="formatted-text-mask-input"
            inputComponent={PhoneCustomMask as any}
          />
        </FormControl>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
        <Checkbox
          inputProps={{ "aria-label": "controlled" }}
          value={termsChecked}
          onChange={() => {
            setTermsChecked(!termsChecked);
          }}
        />
        <Typography>Aceitos os Termos de Uso e Condições</Typography>
      </Box>
      <Box sx={{ marginTop: "8px" }}>
        <Button
          size="large"
          variant="contained"
          onClick={() => {
            validateForm(
              firstName.length > 1 &&
                lastName.length > 1 &&
                phoneNumber.length == 11 &&
                isEmailValid(email) &&
                termsChecked
            );
          }}
        >
          Validar dados
        </Button>
      </Box>
    </Box>
  );
};
