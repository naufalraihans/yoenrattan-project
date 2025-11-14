
import React from 'react';
import { Product } from '../types';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, onBack }) => {
  const whatsappMessage = `Halo, saya tertarik dengan produk "${product.nama}" (${product.harga}). Apakah masih tersedia?`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=628118552014&text=${encodeURIComponent(whatsappMessage)}`;
  
  return (
    <div className="container mx-auto px-6 py-12">
       <button onClick={onBack} className="mb-8 text-gray-600 hover:text-[#E2962E] font-semibold transition-colors">
        &larr; Kembali ke Galeri
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div className="aspect-w-1 aspect-h-1 w-full rounded-lg overflow-hidden shadow-lg">
          <img src={product.gambar} alt={product.nama} className="w-full h-full object-cover object-center" />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">{product.nama}</h1>
          <p className="mt-4 text-3xl font-medium text-[#E2962E]">{product.harga}</p>
          <div className="mt-6 prose prose-lg text-gray-600">
            <p>{product.deskripsi}</p>
          </div>
          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full md:w-auto bg-[#03AC0E] text-white font-bold py-3 px-8 rounded-md text-lg transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <WhatsAppIcon className="w-6 h-6 mr-3" />
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
