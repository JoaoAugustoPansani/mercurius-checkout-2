import { api } from "../utils/api";

export const ProductApiService: () => {
  fetchProduct: Function;
} = () => {
  const fetchProduct: Function = async (id: number) => {
    const { data: product } = await api.get(`/product/${id}`);

    return product;
  };

  return { fetchProduct };
};
