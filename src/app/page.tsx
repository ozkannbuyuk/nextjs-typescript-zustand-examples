"use client";

import useBearStore from "@/store/bears";
import useProductStore from "@/store/products";

export default function Home() {
  const { bears, increase, decrease } = useBearStore();
  const { products, setProducts } = useProductStore();

  return (
    <>
      <div className="bg-yellow-400 text-center text-2xl font-bold p-4">
        {bears}
      </div>
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => increase(5)}
          className="bg-white text-black rounded-lg font-sm p-3"
        >
          Increase
        </button>
        <button
          onClick={() => decrease(5)}
          className="bg-white text-black rounded-lg font-sm p-3"
        >
          Decrease
        </button>
      </div>

      <hr className="my-10 bg-yellow-400 h-1" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => {
          return (
            <div
              key={index}
              className="bg-white text-black p-4 rounded-lg shadow-md"
            >
              <div className="font-bold">{product.title}</div>
              <p className="text-sm">{product.description}</p>
              <span className="text-lg font-bold">{product.price}</span>
              <hr className="my-2 bg-yellow-400 h-1" />
              <button
                className="bg-black text-white rounded-lg font-sm p-3 mt-2"
                onClick={() => setProducts(product)}
              >
                Copy
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
