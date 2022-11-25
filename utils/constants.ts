import { EnumType } from "typescript";

export enum PaymentType {
  CreditCard,
  Pix,
  Ticket,
  Crypto,
}

export enum CardType {
  MasterCard = "mastercard",
  Visa = "visa",
  Amex = "amex",
  Diners = "diners",
  Hipercard = "hipercard",
  Elo = "elo",
}
