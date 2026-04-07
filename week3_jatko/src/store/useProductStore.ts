import { create } from 'zustand';
import type {Product} from '../types/'


interface ProductState {
  products: Product[];
  isLoading: boolean;
  cart: Product[];

  fetchProducts: () => Promise<void>;
  addToCart: (product : Product) => void;
  clearCart: () => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  isLoading: false,

  cart: [],

  fetchProducts: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      set({ products: data.products, isLoading: false });
    } catch (error) {
      console.error("Virhe haettaessa tuotteita:", error);
      set({ isLoading: false });
    }
  },

  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),

    clearCart: () => set({ cart: []}),

}));