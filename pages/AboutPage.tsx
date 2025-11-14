import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Tentang Yoenrattan</h1>
            <p className="mt-4 text-lg text-gray-600">
              Yoenrattan lahir dari kecintaan kami terhadap keindahan alam dan warisan kerajinan tangan Indonesia. Kami percaya bahwa setiap rumah berhak memiliki sentuhan kehangatan dan keunikan yang hanya bisa diberikan oleh material alami seperti rotan.
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#E2962E]">Visi Kami</h3>
                <p className="mt-2 text-gray-600">
                  Menjadi jembatan antara pengrajin lokal berbakat dengan Anda yang menghargai kualitas dan desain otentik. Kami berkomitmen untuk melestarikan teknik anyaman tradisional sambil mengadaptasinya ke dalam desain yang modern dan fungsional.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#E2962E]">Kualitas Produk</h3>
                <p className="mt-2 text-gray-600">
                  Setiap produk Yoenrattan adalah hasil dari proses kurasi yang ketat, mulai dari pemilihan bahan baku rotan terbaik hingga pengerjaan detail oleh tangan-tangan terampil. Kami memastikan setiap item tidak hanya indah secara visual, tetapi juga kuat dan tahan lama.
                </p>
              </div>
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-3 w-full rounded-lg overflow-hidden shadow-xl">
            <img src="https://yzeokojpmqtpbldsqrzf.supabase.co/storage/v1/object/public/files/yoenrattanLogo.jpg" alt="Yoenrattan workshop" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;