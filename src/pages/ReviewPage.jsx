import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";

function ReviewPage() {
  return (
    <div className="flex flex-col min-h-screen bg-pink-50">
      <Navbar />
      <div className="flex-grow py-8">
        <div>
          <h1 className="font-bold text-5xl py-7 text-center">
            Ulasan Dari Pelanggan
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {[
              {
                name: "Inayah",
                review:
                  "Rangkaian bunganya cantik banget dan sesuai dengan yang saya pesan! Pelayanannya juga ramah dan pengirimannya cepat. Bener-bener bikin ulang tahun sahabat saya jadi lebih berkesan. Terima kasih.",
                rating: 5,
                image: "/",
              },
              {
                name: "Setya",
                review:
                  "Saya pesan bunga duka cita untuk rekan kerja, dan hasilnya sangat elegan dan sopan. Bunganya segar, dan pengirimannya tepat waktu. Recommended banget!",
                rating: 5,
                image: "/fajars.jpg",
              },
              {
                name: "fayza",
                review:
                  "Saya suka sekali dengan detail rangkaiannya. Terlihat dibuat dengan sepenuh hati. Adminnya juga sabar dan sangat membantu saat saya bingung memilih jenis bunga.",
                rating: 5,
                image: "/",
              },
              {
                name: "Meru",
                review:
                  "Tiap kali butuh bunga untuk acara keluarga, pasti pesan di sini. Kualitasnya nggak pernah mengecewakan, dan selalu bikin acara jadi lebih spesial",
                rating: 5,
                image: "/andre2.jpg",
              },
              {
                name: "Kurniawan",
                review:
                  "Pernah pesan dadakan, dan mereka tetap bisa layani dengan cepat tanpa mengorbankan kualitas. Pelayanan super dan hasil rangkaiannya luar biasa!",
                rating: 5,
                image: "/",
              },
              {
                name: "Adan",
                review:
                  "Saya pesan bunga untuk acara lamaran, dan hasilnya benar-benar memukau! Warnanya lembut, bunganya segar, dan penataannya elegan. Semua tamu memuji! Terima kasih sudah bikin hari bahagia saya makin sempurna.",
                rating: 5,
                image: "/fajar.jpg",
              },
              {
                name: "Mayla",
                review:
                  "Sudah beberapa kali order dan selalu puas! Entah untuk ibu, pasangan, atau teman, hasil rangkaiannya selalu cocok dengan momen. Timnya sangat komunikatif juga. Top banget!",
                rating: 5,
                image: "/",
              },
              {
                name: "Agus",
                review:
                  "Saya suka karena bunganya nggak cuma indah, tapi juga punya makna. Waktu saya bilang mau kirim untuk minta maaf, mereka bantu pilihkan yang paling cocok. Servisnya personal sekali!",
                rating: 5,
                image: "/andre1.jpg",
              },
              {
                name: "Asep",
                review:
                  "Website-nya mudah digunakan, pengiriman cepat, dan hasil rangkaiannya bahkan lebih bagus dari foto. Pokoknya nggak nyesel order di sini. Pasti akan repeat order!",
                rating: 5,
                image: "/",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col min-h-[220px]"
              >
                <div className="flex items-center mb-3 gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover "
                  />
                  <span className="font-semibold text-lg">{item.name}</span>
                  <span className="ml-auto flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < item.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                      </svg>
                    ))}
                  </span>
                </div>
                <p className="text-gray-700">{item.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ReviewPage;
