import { create } from "zustand";

interface IProduct {
  title: string;
  description: string;
  price: number;
}

interface ProductState {
  products: IProduct[];
  setProducts: (product: IProduct) => void;
}

const useProductStore = create<ProductState>()((set) => ({
  products: [
    {
      title: "Zustand",
      description: "Zustand",
      price: 100,
    },
    {
      title: "React",
      description: "A JavaScript library for building user interfaces",
      price: 200,
    },
    {
      title: "Vue.js",
      description: "The Progressive JavaScript Framework",
      price: 300,
    },
    {
      title: "Angular",
      description:
        "A platform for building mobile and desktop web applications",
      price: 400,
    },
    {
      title: "Svelte",
      description: "Cybernetically enhanced web apps",
      price: 500,
    },
  ],
  setProducts: (product) =>
    set((state) => ({ products: [...state.products, product] })),
}));

export default useProductStore;
