import { useState } from "react";
import { Flower2, Heart, ShoppingCart, User, Menu } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 border bg-white/65 border-gray-300 shadow-lg z-50">
      <div className="flex max-w-7xl mx-auto justify-between h-16 items-center px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Flower2 size={32} />
          <h1 className="font-bold text-xl text-black">Six Petals.</h1>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6">
          <li>
            <a href="/" className="hover:text-pink-400">
              Home
            </a>
          </li>
          <li>
            <a href="About" className="hover:text-pink-400">
              About
            </a>
          </li>
          <li>
            <a href="Product" className="hover:text-pink-400">
              Product
            </a>
          </li>
          <li>
            <a href="Review" className="hover:text-pink-400">
              Review
            </a>
          </li>
          <li>
            <a href="Contact" className="hover:text-pink-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Icon group */}
        <div className="flex items-center gap-3">
          <a href="/" className="hover:text-pink-400">
            <Heart />
          </a>
          <a href="/" className="hover:text-pink-400">
            <ShoppingCart />
          </a>
          <a href="/" className="hover:text-pink-400">
            <User />
          </a>

          {/* Hamburger - only on mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile nav menu (toggle) */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-4 bg-pink-50 border-t border-gray-300">
          <li>
            <a href="/" className="hover:text-pink-400">
              Home
            </a>
          </li>
          <li>
            <a href="About" className="hover:text-pink-400">
              About
            </a>
          </li>
          <li>
            <a href="Product" className="hover:text-pink-400">
              Product
            </a>
          </li>
          <li>
            <a href="Review" className="hover:text-pink-400">
              Review
            </a>
          </li>
          <li>
            <a href="Contact" className="hover:text-pink-400">
              Contact
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;
