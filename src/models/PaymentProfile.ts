export type PaymentProfile = {
  holder_name: string;
  registry_code: string;
  bank_branch: string;
  bank_account: string;
  card_expiration: string;
  allow_as_fallback: true;
  card_number: string;
  card_cvv: string;
  payment_method_code: string;
  payment_company_code: string;
  card_renewed_at: string;
  gateway_token: string;
  customer_id: number;
};
