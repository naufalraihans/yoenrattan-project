
import React, { useState, useCallback, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { Product, Page } from './types';

// Supabase Configuration
const supabaseUrl = 'https://yzeokojpmqtpbldsqrzf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6ZW9rb2pwbXF0cGJsZHNxcnpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxNDI4NDYsImV4cCI6MjA3ODcxODg0Nn0.7gUGcn4X8ci9piwT-fuxt0imcyIW8JbsZH22RRnjslE';
const supabase = createClient(supabaseUrl, supabaseKey);

const imageBaseUrl = 'https://yzeokojpmqtpbldsqrzf.supabase.co/storage/v1/object/public/files/foto/';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data, error: dbError } = await supabase
          .from('fotoObjek')
          .select('*')
          .order('id', { ascending: true });

        if (dbError) {
          throw dbError;
        }

        if (data) {
          const mappedProducts: Product[] = data.map((p: any) => ({
            id: p.id,
            nama: p.productName,
            harga: `Rp ${p.price}`,
            gambar: `${imageBaseUrl}${p.fileName}.jpg`,
            deskripsi: p.productDescription,
            kategori: p.category,
          }));
          setProducts(mappedProducts);
        }
      } catch (err: any) {
        setError(err.message || 'An unknown error occurred.');
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const navigateTo = useCallback((page: Page) => {
    setSelectedProduct(null);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const handleViewDetails = useCallback((product: Product) => {
    setSelectedProduct(product);
    window.scrollTo(0, 0);
  }, []);
  
  const handleBackToGallery = useCallback(() => {
    setSelectedProduct(null);
    setCurrentPage(Page.Gallery);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    if (selectedProduct) {
      return <ProductDetailPage product={selectedProduct} onBack={handleBackToGallery} />;
    }

    switch (currentPage) {
      case Page.Home:
        return <HomePage products={products} onViewDetails={handleViewDetails} onGoToGallery={() => navigateTo(Page.Gallery)} />;
      case Page.Gallery:
        return <GalleryPage products={products} onViewDetails={handleViewDetails} />;
      case Page.About:
        return <AboutPage />;
      case Page.Contact:
        return <ContactPage />;
      default:
        return <HomePage products={products} onViewDetails={handleViewDetails} onGoToGallery={() => navigateTo(Page.Gallery)} />;
    }
  };
  
  if (loading) {
    return (
      <div className="bg-white text-gray-800 min-h-screen flex flex-col">
        <Header currentPage={currentPage} navigateTo={navigateTo} />
        <main className="flex-grow flex items-center justify-center">
            <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="mt-4 text-xl text-gray-600">Loading Products...</p>
            </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white text-gray-800 min-h-screen flex flex-col">
        <Header currentPage={currentPage} navigateTo={navigateTo} />
        <main className="flex-grow flex items-center justify-center p-6">
            <div className="text-center bg-red-50 p-8 rounded-lg border border-red-200">
                <h2 className="text-2xl font-bold text-red-700 mb-2">Failed to load products</h2>
                <p className="text-gray-600 mb-4">There was an issue connecting to the database. Please try again later.</p>
                <pre className="p-3 bg-red-100 text-red-800 rounded-md text-left text-sm whitespace-pre-wrap">{error}</pre>
            </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <Header currentPage={currentPage} navigateTo={navigateTo} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;