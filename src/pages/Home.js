import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 14)));
  }, []);

  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto ">
     
  

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <div className="p-4 flex-1 flex flex-col">
              {/* Header: image + title + category */}
              <div className="flex items-center mb-4">
                {/* Bigger image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-28 h-28 object-contain rounded-md flex-shrink-0"
                />
                {/* Title and category */}
                <div className="ml-4 flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                    {product.title}
                  </h3>
                  <span className="mt-1 text-xs uppercase font-semibold text-indigo-600 dark:text-indigo-400">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow line-clamp-3">
                {product.description}
              </p>
            </div>

            <div className="p-4 border-t dark:border-gray-600 flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                ${product.price}
              </span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm transition">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
