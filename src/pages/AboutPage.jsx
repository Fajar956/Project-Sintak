import React from 'react'
import Navbar from '../Components/navbar';
import Footer from '../Components/Footer';

function AboutPage() {
return (
    <div className="flex flex-col min-h-screen">
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
                        <h2 className="text-2xl font-semibold mb-4">Sejarah Dibalik Kelopak Bunga</h2>
                        <p className="text-gray-700 mb-4">
                            Sejak tahun 2010, kami telah menyediakan bunga-bunga segar dan
                            rangkaian indah untuk berbagai acara penting. Dimulai dari toko
                            kecil, kini kami telah berkembang menjadi salah satu penyedia
                            bunga terpercaya di kota ini.
                        </p>
                        <p className="text-gray-700">
                            Kami berkomitmen untuk memberikan produk berkualitas tinggi
                            dengan harga yang terjangkau, didukung oleh tim yang
                            berpengalaman dalam seni merangkai bunga.
                        </p>
                    </div>
                </div>
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-center">
                        Visi & Misi
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-pink-50 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-medium mb-2 text-pink-700">Visi</h3>
                            <p className="text-gray-700">
                                Menjadi penyedia bunga terdepan yang membawa keindahan dan
                                kebahagiaan ke dalam kehidupan setiap pelanggan melalui
                                rangkaian bunga yang indah dan berkualitas.
                            </p>
                        </div>
                        <div className="bg-pink-50 p-6 rounded-lg shadow">
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
                    <h2 className="text-2xl font-semibold mb-6 text-center">
                        Tim Kami
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Siti Rahayu",
                                position: "Pendiri & Desainer Utama",
                                image:
                                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                            },
                            {
                                name: "Budi Santoso",
                                position: "Manajer Operasional",
                                image:
                                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                            },
                            {
                                name: "Dewi Lestari",
                                position: "Desainer Rangkaian Bunga",
                                image:
                                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                            },
                        ].map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow overflow-hidden"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-4 text-center">
                                    <h3 className="font-semibold text-lg">{member.name}</h3>
                                    <p className="text-gray-600">{member.position}</p>
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