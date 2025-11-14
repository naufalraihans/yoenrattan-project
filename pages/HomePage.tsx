import React from 'react';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

interface HomePageProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
  onGoToGallery: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ products, onViewDetails, onGoToGallery }) => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Keindahan Abadi dari Alam
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Yoenrattan menghadirkan furnitur rotan pilihan yang dibuat dengan cinta oleh pengrajin ahli, memadukan desain modern dengan kearifan lokal.
          </p>
          <button 
            onClick={onGoToGallery}
            className="mt-8 bg-[#E2962E] text-white font-bold py-3 px-8 rounded-md text-lg transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Jelajahi Koleksi
          </button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">Produk Unggulan</h2>
        <p className="mt-2 text-center text-gray-500 max-w-2xl mx-auto">
          Temukan item favorit yang akan mempercantik setiap sudut ruangan Anda.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} onViewDetails={onViewDetails} />
          ))}
        </div>
        <div className="text-center mt-12">
            <button
                onClick={onGoToGallery}
                className="text-[#E2962E] font-semibold hover:underline"
            >
                Lihat Semua Produk &rarr;
            </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;