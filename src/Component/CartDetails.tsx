import { ICart } from "../common/types/CartDetails"
import useProductDetail from "../hooks/useProuductDetail"
import { ProductDetails } from "./ProductDetails"

interface Props{
    cart: ICart
}
export const CartDetails=({ cart }: Props)=> {
    const { products } = cart
    console.log("products",products)
    return <>
    {products?.map((product)=>{
     

    const { productdetails } = useProductDetail(product?.productId)
    return <>
     <ProductDetails product={productdetails} />
     </>})}
    </>
}