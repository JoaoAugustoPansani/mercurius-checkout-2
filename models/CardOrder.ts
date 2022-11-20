export type CreditCardOrder = {
  customer: {
    code: string;
    document: string;
    address: {
      country: string;
      state: string;
      city: string;
      zip_code: string;
      line_1: string;
    };
    phones: {
      mobile_phone: {
        country_code: string;
        area_code: string;
        number: string;
      };
    };
    name: string;
    type: string;
    email: string;
    document_type: string;
    gender?: string;
  };
  items: [object];
  payments: [
    {
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
    }
  ];
};
