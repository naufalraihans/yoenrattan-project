
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const shortDescription = product.deskripsi.length > 100 ? product.deskripsi.substring(0, 100) + '...' : product.deskripsi;

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
      <div className="aspect-[4/5] w-full overflow-hidden">
        <img
          src={product.gambar}
          alt={product.nama}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800">{product.nama}</h3>
        <p className="text-sm text-gray-600 mt-2 flex-grow">{shortDescription}</p>
        <div className="mt-auto pt-4 border-t border-gray-100">
          <p className="text-lg font-semibold text-gray-800">{product.harga}</p>
          <button
            onClick={() => onViewDetails(product)}
            className="mt-3 w-full bg-transparent border-2 border-[#E2962E] text-[#E2962E] font-bold py-2 px-4 rounded-md transition-all duration-300 hover:bg-[#E2962E] hover:text-white"
          >
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
