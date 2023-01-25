import { PaymentProfile } from "../models/PaymentProfile";
import { api } from "../utils/api";

export const PaymentProfileApiService: () => {
  createPaymentProfile: Function;
} = () => {
  const createPaymentProfile: Function = async (
    paymentProfile: PaymentProfile
  ) => {
    const response = "";
  };

  return { createPaymentProfile };
};
