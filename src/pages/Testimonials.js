import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionNavigations4 from '../components/navigations/IndexSectionNavigations4';
import TestimonialsSectionTestimonials3 from '../components/testimonials/TestimonialsSectionTestimonials3';
import TestimonialsSectionTestimonials2 from '../components/testimonials/TestimonialsSectionTestimonials2';
import TestimonialsSectionFooters4 from '../components/footers/TestimonialsSectionFooters4';

const meta = {
  title:
    'Testimonios\u0020de\u0020Nuestros\u0020Miembros\u0020en\u0020Novo\u0020Vida',
  meta: [
    {
      name: 'keywords',
      content:
        'testimonios,\u0020historias\u0020de\u0020\u00E9xito,\u0020opiniones\u0020de\u0020miembros,\u0020experiencias,\u0020gimnasio\u0020Novo\u0020Vid',
    },
    {
      name: 'description',
      content:
        'Lee\u0020las\u0020historias\u0020de\u0020\u00E9xito\u0020y\u0020los\u0020testimonios\u0020de\u0020nuestros\u0020miembros.\u0020Descubre\u0020c\u00F3mo\u0020Novo\u0020Vida\u0020ha\u0020transformado\u0020sus\u0020vidas\u0020a\u0020trav\u00E9s\u0020del\u0020fitness\u0020y\u0020el\u0020bienestar.',
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function Testimonials() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionNavigations4 />
      <TestimonialsSectionTestimonials3 />
      <TestimonialsSectionTestimonials2 />
      <TestimonialsSectionFooters4 />
    </React.Fragment>
  );
}

