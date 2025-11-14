
import React from 'react';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import EmailIcon from '../components/icons/EmailIcon';

export const ContactPage: React.FC = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=628118552014&text=${encodeURIComponent("Halo, saya ingin bertanya tentang produk Yoenrattan.")}`;
    
    const emailAddress = 'yoenrattan@gmail.com';
    const emailSubject = 'Pertanyaan Mengenai Produk Yoenrattan';
    const emailBody = `Halo Tim Yoenrattan,

Saya ingin bertanya tentang...

(Mohon jelaskan pertanyaan atau pesanan Anda di sini)

Terima kasih,
[Nama Anda]`;

    const emailUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;


  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Hubungi Kami</h1>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          Kami senang mendengar dari Anda! Baik itu pertanyaan, masukan, atau sekadar ingin menyapa.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact via Email */}
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 flex flex-col justify-center text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Hubungi via Email</h2>
            <p className="text-gray-600 mb-6">
                Punya pertanyaan lebih detail? Klik tombol di bawah untuk mengirimkan email langsung kepada kami melalui aplikasi email Anda.
            </p>
            <a
                href={emailUrl}
                className="inline-flex items-center justify-center w-full bg-[#E2962E] text-white font-bold py-3 px-6 rounded-md transition-opacity hover:opacity-90"
            >
                <EmailIcon className="w-5 h-5 mr-3" />
                Buka Aplikasi Email
            </a>
        </div>


        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-[#E2962E]">Informasi Kontak</h3>
            <div className="mt-4 space-y-3 text-gray-600">
              <p><strong>Alamat:</strong><br />Gang H. Eko, Rt.004 Rw.008 No.84, Kel. Jatikramat Kec. Jatiasih, Kota Bekasi, 17421, Jawa Barat (Workshop) </p>
              <p><strong>Jam Operasional:</strong><br />Senin - Sabtu: 09:00 - 17:00 WIB<br />Minggu: Tutup</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#E2962E]">Layanan Cepat</h3>
             <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center bg-[#03AC0E] text-white font-bold py-3 px-6 rounded-md transition-transform duration-300 hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
