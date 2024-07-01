import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import ServicesPage from './pages/Services.js';
import AboutPage from './pages/About.js';
import ContactusPage from './pages/Contactus.js';
import MembershipsPage from './pages/Memberships.js';
import TestimonialsPage from './pages/Testimonials.js';
import BlogPage from './pages/Blog.js';
import ProductsPage from './pages/Products.js';

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
    </Routes>
  );
}

export default App;
