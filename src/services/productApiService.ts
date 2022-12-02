import axios from "axios";

const ProductApiService = () => {
  const getProduct = async (id: number) => {
    const { data: product } = await axios.get(
      `http://127.0.0.1:8000/product/${id}`
    );

    return product;
  };

  return { getProduct };
};

export default ProductApiService;
