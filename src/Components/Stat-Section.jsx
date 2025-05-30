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
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-12">
        Mengapa Toko Bunga Kami Lebih Spesial? 
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {datakonten.map((item, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">{item.ikon}</div>
            <h3 className="text-xl font-semibold mb-3">{item.judul}</h3>
            <p className="text-gray-600">{item.deskripsi}</p>
          </div>)}
      </div>
    </div>
  </section>
  );
}
export default StatSection;
