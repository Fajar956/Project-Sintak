import React from "react";

const ProductUnggulan = () => {
  const datakonten = [
    {
      name: "Buket Bunga",
      image: "/buketbunga.jpg",
      description: "Buket cantik untuk hadiah spesial.",
    },
    {
      name: "Rangkaian Bunga Meja",
      image: "/rangkaianmeja.jpeg",
      description: "Hiasan meja elegan untuk acara formal.",
    },
    {
      name: "Dekorasi Pernikahan",
      image: "/dekorasipernikahan.webp",
      description: "Dekorasi romantis untuk hari istimewa.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          Produk Unggulan
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {datakonten.map((item) => (
            <div
              key={item.name}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group bg-white"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-white text-xl font-semibold">
                    {item.name}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/Product"
            className="inline-block bg-pink-100 text-pink-700 hover:bg-pink-200 px-6 py-2 rounded-md font-medium transition-colors"
          >
            Lihat Semua Produk
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductUnggulan;
