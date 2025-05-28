import React from 'react';
import { SendIcon } from 'lucide-react';
const Berlanggan= () => {
  return <section className="py-16 bg-pink-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">
            Dapatkan Inspirasi & Penawaran Spesial
          </h1>
          <p className="mb-8">
            Berlangganan newsletter kami untuk mendapatkan inspirasi rangkaian
            bunga dan penawaran menarik setiap bulannya.
          </p>
          <h1 className="flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="Masukkan email Anda" className="bg-white px-4 py-2 rounded-md text-gray-900 flex-grow max-w-md focus:outline-none focus:ring-2 focus:ring-white" />
            <button type="submit" className="bg-white  hover:text-pink-400 text-pink-500 px-6 py-2 rounded-md font-medium inline-flex items-center justify-center gap-2 hover:bg-pink-50 transition-colors">
              <SendIcon size={18} />
              Berlangganan
            </button>
          </h1>
        </div>
      </div>
    </section>;
};
export default Berlanggan;