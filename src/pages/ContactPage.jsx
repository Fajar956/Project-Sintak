import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  SendIcon,
} from "lucide-react";
import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";
const Contact = () => {
return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-12 flex-grow">
            <h1 className="text-4xl font-bold text-center mb-8">Hubungi Kami</h1>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-6">Kirim Pesan</h2>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    placeholder="Nama Anda"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    placeholder="email@example.com"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Subjek
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                placeholder="Subjek pesan"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Pesan
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                placeholder="Tulis pesan Anda di sini..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-pink-500 text-white px-6 py-2 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-pink-600 transition-colors"
                        >
                            <SendIcon size={18} />
                            Kirim Pesan
                        </button>
                    </form>
                </div>
                <div>
                    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <h2 className="text-2xl font-semibold mb-6">Informasi Kontak</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <MapPinIcon
                                    className="text-pink-500 flex-shrink-0"
                                    size={24}
                                />
                                <div>
                                    <h3 className="font-medium">Alamat</h3>
                                    <p className="text-gray-600">
                                        Jl. Mawar No. 123, Kota Palembang, Sumatera Selatan 519566
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <PhoneIcon
                                    className="text-pink-500 flex-shrink-0"
                                    size={24}
                                />
                                <div>
                                    <h3 className="font-medium">Telepon</h3>
                                    <p className="text-gray-600">+62 812 3456 7890</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MailIcon className="text-pink-500 flex-shrink-0" size={24} />
                                <div>
                                    <h3 className="font-medium">Email</h3>
                                    <p className="text-gray-600">info@SixPetals.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <ClockIcon
                                    className="text-pink-500 flex-shrink-0"
                                    size={24}
                                />
                                <div>
                                    <h3 className="font-medium">Jam Operasional</h3>
                                    <p className="text-gray-600">
                                        Senin - Sabtu: 08.00 - 20.00
                                    </p>
                                    <p className="text-gray-600">Minggu: 10.00 - 16.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 h-64 relative">
                        <h2 className="text-2xl font-semibold mb-4">Lokasi Kami</h2>
                        <div className="absolute inset-0 mt-16 bg-gray-200 rounded-xl">
                            <img
                                src="maps.jpg"
                                alt="Lokasi toko bunga"
                                className="w-full h-full object-cover rounded-b-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);
};
export default Contact;
