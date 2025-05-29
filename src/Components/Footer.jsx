import React from "react";
import {Instagram, Facebook, Youtube, Mail, Phone, MapPin, Flower2, X} from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h1 className="text-xl font-bold text-white mb-4">Six Petals </h1>
            <p className="mb-4">
              Menyediakan bunga segar dan rangkaian indah untuk segala acara
              spesial Anda.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                className="text-gray-300 hover:text-pink-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                className="text-gray-300 hover:text-pink-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://youtube.com"
                className="text-gray-300 hover:text-pink-400 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-white mb-4">
              Tautan Cepat
            </h1>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-pink-400 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="about"
                  className="hover:text-pink-400 transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="product"
                  className="hover:text-pink-400 transition-colors"
                >
                  Produk
                </a>
              </li>
              <li>
                <a
                  href="contact"
                  className="hover:text-pink-400 transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li>
                <a href="Product" className="hover:text-pink-400 transition-colors">
                  Rangkaian Bunga
                </a>
              </li>
              <li>
                <a href="Product" className="hover:text-pink-400 transition-colors">
                  Buket Bunga
                </a>
              </li>
              <li>
                <a href="Product" className="hover:text-pink-400 transition-colors">
                  Dekorasi Pernikahan
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 flex-shrink-0 mt-1" />
                <span>Jl. Mawar No. 123, Kota Palembang</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>info@SixPetals.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p className="flex items-center justify-center gap-2">
            <Flower2 className="w-4 h-4" />
            {new Date().getFullYear()} SixPetals.com
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
