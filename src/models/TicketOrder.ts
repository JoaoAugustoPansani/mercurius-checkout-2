export type BoletoOrder = {
  customer: {
    code?: string;
    document?: string;
    address?: {
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
    name?: string;
    type?: string;
    email?: string;
    document_type?: string;
    gender?: string;
  };
  items: [object];
  payments: [
    {
      boleto: {
        bank: string;
        instructions: string;
        type?: string;
        nosso_numero: string;
        document_number: string;
      };
      payment_method: string;
    }
  ];
};
