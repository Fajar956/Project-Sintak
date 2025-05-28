import React from 'react'

function HeroSection() {
  return (
    <section>
      <div>
        <div
          className="relative bg-pink-50 w-full"
          style={{
            height: "33vh",
            minHeight: "300px",
          }}
        >
          {/* Background Image Container */}
          <div className="absolute inset-0">
            <img
              src="./mawarmerah.webp"
              alt="hamparan bunga"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  bg-opacity-40" />
          </div>

          {/* Content Container */}
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-gray-200">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Six Petals
              </h1>
              <p className="text-xl mb-6">
                Rangkaian bunga segar untuk momen spesial Anda. Kualitas terbaik
                dengan harga terjangkau.
              </p>

              {/* Buttons Container */}
              <div className="flex flex-wrap gap-4">
                <a
                  href='/'
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Lihat Produk Kami
                </a>
                <a
                  href='/'
                  className="bg-white hover:bg-gray-400 text-pink-600 px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection