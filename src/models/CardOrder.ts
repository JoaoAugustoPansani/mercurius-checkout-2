export type CreditCardOrder = {
  credit_card: {
    card: {
      number: string;
      holder_name: string;
      holder_document: string;
      exp_month: string;
      exp_year: string;
      cvv: string;
    };
    operation_type: string;
    statement_descriptor: string;
  };
  payment_method: string;
};
