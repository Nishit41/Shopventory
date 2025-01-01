export interface Product {
    productId: number;
    quantity: number;
}

export interface ICart {
    id: number;
    userId: number;
    date: string;
    products: Product[];
}