import React from "react";
import { Routes, Route } from "react-router-dom";

import IndexPage from "./pages/Index.js";
import ServicesPage from "./pages/Services.js";
import AboutPage from "./pages/About.js";
import ContactusPage from "./pages/Contactus.js";
import MembershipsPage from "./pages/Memberships.js";
import TestimonialsPage from "./pages/Testimonials.js";
import BlogPage from "./pages/Blog.js";
import ProductsPage from "./pages/Products.js";
import BajarDePeso from "./pages/bajarDePeso.js";
import Nutricion from "./pages/Nutricion.js";
import Principiantes from "./pages/Principiantes.js";
import RutinaEjercicio from "./pages/RutinaEjercicio.js";
import Sueño from "./pages/Sueño.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />

      <Route path="/services" element={<ServicesPage />} />

      <Route path="/about" element={<AboutPage />} />

      <Route path="/contactus" element={<ContactusPage />} />

      <Route path="/memberships" element={<MembershipsPage />} />

      <Route path="/testimonials" element={<TestimonialsPage />} />

      <Route path="/blog" element={<BlogPage />} />

      <Route path="/products" element={<ProductsPage />} />

      <Route path="/bajarDePeso" element={<BajarDePeso />} />

      <Route path="/nutricion" element={<Nutricion />} />
      

      <Route path="/principiantes" element={<Principiantes />} />

      <Route path="/rutinaEjercicio" element={<RutinaEjercicio />} />
      
      <Route path="/sueño" element={<Sueño />} />
    </Routes>
  );
}

export default App;
