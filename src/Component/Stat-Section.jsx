import {Flower2Icon, TruckIcon, HeartHandshakeIcon,ThumbsUpIcon,} from "lucide-react";
import React from "react";
  const datakonten = [
    {
      ikon: <Flower2Icon size={40} className="text-pink-500" />,
      judul: "Bunga Segar Setiap Hari",
      deskripsi:
        "Kami menjamin kesegaran bunga dengan pengiriman harian langsung dari kebun pilihan.",
    },
    {
      ikon: <TruckIcon size={40} className="text-pink-500" />,
      judul: "Pengiriman Cepat",
      deskripsi:
        "Layanan pengiriman express untuk menjaga kesegaran bunga sampai ke tangan Anda.",
    },
    {
      ikon: <HeartHandshakeIcon size={40} className="text-pink-500" />,
      judul: "Pelayanan Terbaik",
      deskripsi:
        "Tim kami siap membantu Anda memilih rangkaian bunga yang sempurna.",
    },
    {
      ikon: <ThumbsUpIcon size={40} className="text-pink-500" />,
      judul: "Garansi Kepuasan",
      deskripsi:
        "Kami menjamin kepuasan Anda dengan garansi pengembalian 100%.",
    },
  ]

  function StatSection() {
  return (
  <section className="py-16 bg-pink-50">
    <div className="flex flex-col container px-4 items-center justify-center max-w-7xl mx-auto mt-15">
      {/* Bagian judul*/}
      <div className="text-center space-y-2 mt-15">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-12">Mengapa Tokoh Bunga kami Lebih Spesial?</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {datakonten.map((item, index) => (
          <div key={index} className="text-center p-6 border-2 border-pink-200 rounded-lg hover:border-pink-400 transition-colors duration-300 shadow-sm">
            <div className="flex justify-center mb-4">{item.ikon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.judul}</h3>
            <p className="text-gray-600">{item.deskripsi}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};
export default StatSection;
