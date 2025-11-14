
import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

interface GalleryPageProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ products, onViewDetails }) => {
  const categories = useMemo(() => ['Semua', ...new Set(products.map(p => p.kategori))], [products]);
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Semua') {
      return products;
    }
    return products.filter(product => product.kategori === activeCategory);
  }, [products, activeCategory]);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Galeri Produk</h1>
        <p className="mt-3 text-lg text-gray-600">
          Setiap produk adalah sebuah cerita. Temukan yang paling berkesan untuk Anda.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 text-sm font-semibold rounded-full border-2 transition-all duration-300 transform hover:scale-105 ${
              activeCategory === category
                ? 'bg-[#E2962E] text-white border-[#E2962E] shadow-md'
                : 'bg-white text-gray-700 border-gray-300 hover:border-[#E2962E] hover:text-[#E2962E]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onViewDetails={onViewDetails} />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <p className="text-gray-500 text-lg">
              Tidak ada produk yang cocok dengan filter ini.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;