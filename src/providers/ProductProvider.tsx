import {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useContainer } from "./ContainerProvider";

interface ProductContextProps {
  product: {
    id: number;
    vindi_id: number;
    code: string;
    name: string;
    description: string;
    thumbnail: string;
    price: number;
  };
  getProduct: (id: number) => void;
}

const ProductContext = createContext<ProductContextProps>({
  product: {
    id: 0,
    vindi_id: 0,
    code: "",
    name: "",
    description: "",
    thumbnail: "",
    price: 0,
  },
  getProduct: () => {},
});

interface ProductProps {
  children: JSX.Element;
}

export const ProductProvider: FunctionComponent<ProductProps> = ({
  children,
}) => {
  const [product, setProduct] = useState({
    id: 0,
    vindi_id: 0,
    code: "",
    name: "",
    description: "",
    thumbnail: "",
    price: 0,
  });

  const { productApiService } = useContainer();

  const getProduct = useCallback(
    async (id: number) => {
      try {
        const product = await productApiService.fetchProduct(id);

        setProduct(product);
      } catch (error: any) {
        console.error(`[ProductProvider][getProduct]: ${error.message}`);

        throw error;
      }
    },
    [setProduct, productApiService]
  );

  const value = useMemo(
    () => ({
      product,
      getProduct,
    }),
    [product, getProduct]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    throw new Error(
      "useProduct was called without being nested in ProductProvider"
    );
  }

  return productContext;
};
