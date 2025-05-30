import React from 'react'
import Navbar from '../Components/navbar';
import Footer from '../Components/Footer';

function AboutPage() {
return (
  <div className="flex flex-col min-h-screen bg-pink-50">
    <Navbar />
    <div className="container mx-auto px-4 py-12 flex-grow">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Tentang Kami</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <div className="md:w-1/2">
            <img
              src="bungawarnawarni.jpg"
              alt="Toko bunga kami"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">
              Sejarah Dibalik Six Petals
            </h2>
            <p className="text-gray-700 mb-4">
              Semua berawal dari cinta kami terhadap keindahan alami. Pada tahun
              2006, dari sebuah toko kecil yang penuh harapan, kami mulai
              merangkai bunga untuk momen-momen paling berarti dalam hidup. Dari
              ulang tahun, pernikahan, hingga ucapan simpati — kami percaya
              bahwa bunga adalah bahasa paling tulus yang bisa disampaikan.
            </p>
            <p className="text-gray-700">
              Kini, kami tumbuh menjadi salah satu toko bunga terpercaya, namun
              tetap setia pada akar kami: merangkai dengan ketulusan dan
              menyentuh hati lewat keindahan.
            </p>
            <p className="text-gray-700">
              Setiap tangkai bunga kami pilih dengan hati, dan setiap rangkaian
              kami buat dengan cinta. Tim kami terdiri dari tangan-tangan
              terampil yang memahami bahwa setiap bunga membawa pesan, dan
              setiap pesan layak sampai dengan indah.
            </p>
            <p className="text-gray-700">
              Kami hadir bukan hanya untuk menjual bunga, tapi untuk membantu
              Anda menyampaikan perasaan, menciptakan senyum, dan menambahkan
              keindahan dalam setiap momen spesial.
            </p>
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Visi & Misi</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-medium mb-2 text-pink-700">Visi</h3>
              <p className="text-gray-700">
                Menjadi penyedia bunga terdepan yang membawa keindahan dan
                kebahagiaan ke dalam kehidupan setiap pelanggan melalui
                rangkaian bunga yang indah dan berkualitas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-medium mb-2 text-pink-700">Misi</h3>
              <p className="text-gray-700">
                Menyediakan bunga segar berkualitas tinggi, memberikan layanan
                pelanggan yang luar biasa, dan terus berinovasi dalam desain
                rangkaian bunga untuk berbagai acara.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Tim Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                name: "Andre Sotemeru",
                image: "/andre1.jpg",
              },
              {
                name: "Fajar Setyanusa",
                image: "/fajarfoto.png",
              },
              {
                name: "Adith Kurniawan",
                image:
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Muthia Maylafayza",
                image:
                  "/muteea.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow overflow-hidden group relative"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="p-4 text-center relative z-10">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-black">{member.position || ""}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
}

export default AboutPage