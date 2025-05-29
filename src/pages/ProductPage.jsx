import React, { useState } from "react";
import {
  ShoppingCartIcon,
  HeartIcon,
  SearchIcon,
  FilterIcon,
} from "lucide-react";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  const categories = [
    { id: "all", name: "Semua" },
    { id: "bouquet", name: "Buket" },
    { id: "arrangement", name: "Rangkaian" },
    { id: "decoration", name: "Dekorasi" },
  ];

  const products = [
    {
      id: 1,
      name: "Buket Mawar Merah",
      price: 150000,
      image: "/buketmawarmerah.webp",
      category: "bouquet",
      isBestSeller: true,
    },
    {
      id: 2,
      name: "Buket Bunga Segar",
      price: 120000,
      image: "/buket.webp", 
      category: "bouquet"
    },
    {
      id: 3,
      name: "Buket Bunga Kering",
      price: 100000,
      image: "/buketbungakering.jpg",
      category: "bouquet"
    },
    {
      id: 4,
      name: "Buket Mawar Campur",
      price: 135000,
      image: "/buketmawarcampur.jpg",
      category: "bouquet",
      isBestSeller: true,
    },
    {
      id: 5,
      name: "Rangkaian Lily Elegan",
      price: 180000,
      image: "/rangkain.jpg",
      category: "arrangement"
    },
    {
      id: 6,
      name: "Rangkaian Bunga Meja",
      price: 165000,
      image: "/rangkaianmeja.jpeg",
      category: "arrangement",
      isBestSeller: true
    },
    {
      id: 7,
      name: "Dekorasi Wedding",
      price: 5000000,
      image: "/wedding.jpg",
      category: "decoration",
      isBestSeller: true
    },
    {
      id: 8,
      name: "Dekorasi Pernikahan Premium",
      price: 8000000,
      image: "/dekorasipernikahan.webp",
      category: "decoration",
      isBestSeller: true
    }
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className=" bg-white rounded-lg shadow overflow-hidden group relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.isBestSeller && (
          <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
            Best Seller
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <p className="text-pink-600 font-bold mb-2">
          Rp {product.price.toLocaleString("id-ID")}
        </p>
        <div className="flex justify-between items-center mt-4">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded flex items-center gap-1 transition-colors">
            <ShoppingCartIcon size={16} />
            <span>Beli</span>
          </button>
          <button className="text-gray-500 hover:text-pink-500 transition-colors">
            <HeartIcon size={20} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-pink-50">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Temukan Bunga Favoritmu</h1>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Cari bunga..."
              className="w-full px-4 py-2 pl-10 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <FilterIcon size={18} className="text-gray-500 flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  category === cat.id
                    ? "bg-pink-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filteredProducts.length === 0 && (
            <p className="text-center col-span-full text-gray-500">
              Tidak ada produk yang ditemukan.
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;
