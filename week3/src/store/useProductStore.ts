import { create } from 'zustand';

export interface Product {
    id: number;
    title: String;
    description: String;
    category: String;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: String;
    thumbnail: String;
    images: String[];
}
interface ProductStore {
    products: Product[];
    loading: boolean;
    error: String | null;
    fetchProducts: () => Promise<void>;
}