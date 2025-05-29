import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { BrowserRouter, Route, Routes } from "react-router";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import ReviewPage from "./pages/ReviewPage";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path='/Product' element={<ProductPage />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/Review' element={<ReviewPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
