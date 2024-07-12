import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionNavigations4 from '../components/navigations/IndexSectionNavigations4';
import IndexSectionCta5 from '../components/cta/IndexSectionCta5';
import IndexSectionTestimonials7 from '../components/testimonials/IndexSectionTestimonials7';
import IndexSectionCta6 from '../components/cta/IndexSectionCta6';
import IndexSectionFaqs3 from '../components/faqs/IndexSectionFaqs3';
import IndexSectionFooters9 from '../components/footers/IndexSectionFooters9';
import TestimonialsSectionTestimonials3 from '../components/testimonials/TestimonialsSectionTestimonials3';

const meta = {
  title: 'Bienvenido a Novo Vida: Empieza tu Nueva Vida',
  meta: [
    {
      name: 'keywords',
      content: 'gimnasio, fitness, bienestar, entrenamientos personalizados, equipos de gimnasio',
    },
    {
      name: 'description',
      content: 'Descubre Novo Vida, el gimnasio líder en fitness y bienestar. Ofrecemos equipos de última generación, clases grupales y entrenamientos personalizados para ayudarte a alcanzar tus objetivos de salud.',
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  useEffect(() => {
    // Custom CSS classes for elements from the index.html
    document.body.className = ''; // Clear all classes from body
  }, []);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionNavigations4 />
      <IndexSectionCta5 />
      <IndexSectionTestimonials7 />
      <IndexSectionCta6 />
      <TestimonialsSectionTestimonials3 />
      <IndexSectionFaqs3 />
      <IndexSectionFooters9 />
    </React.Fragment>
  );
}
