export type VindiCostumer = {
  code?: string;
  document?: string;
  name?: string;
  type?: string;
  email?: string;
  document_type?: string;
  gender?: string;
  address?: {
    country: string;
    state: string;
    city: string;
    zip_code: string;
    line_1: string;
  };
  phones: [
    {
      mobile_phone: {
        country_code: string;
        area_code: string;
        number: string;
      };
    }
  ];
};
