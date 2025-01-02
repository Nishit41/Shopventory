import { ICart } from "../common/types/CartDetails";
import { Product } from "./Product";

interface Props {
  cart: ICart;
}
export const CartDetails = ({ cart }: Props) => {
  const { products } = cart;
  return products?.map((product) => <Product product={product} />);
};
