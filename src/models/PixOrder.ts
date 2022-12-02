export type PixOrder = {
  customer_id: number;
  due_at: string;
  billing_at: string;
  payment_method_code: string;
  bill_items: [
    {
      product_id: number;
      amount: number;
      quantity: number;
      pricing_schema: {
        price: number;
        schema_type: string;
      };
    }
  ];
};
