import { Product as IProduct } from "../common/types/CartDetails";
import { ProductDetails } from "./ProductDetails";

interface Props {
  product?: IProduct;
}

export const Product = ({ product }: Props) => {
  return <ProductDetails product={product} />;
};
