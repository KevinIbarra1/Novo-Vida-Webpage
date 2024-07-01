import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionNavigations4 from '../components/navigations/IndexSectionNavigations4';
import IndexSectionCta5 from '../components/cta/IndexSectionCta5';
import IndexSectionTestimonials7 from '../components/testimonials/IndexSectionTestimonials7';
import IndexSectionCta6 from '../components/cta/IndexSectionCta6';
import IndexSectionTestimonials8 from '../components/testimonials/IndexSectionTestimonials8';
import IndexSectionFaqs3 from '../components/faqs/IndexSectionFaqs3';
import IndexSectionFooters9 from '../components/footers/IndexSectionFooters9';

const meta = {
  title:
    'Bienvenido\u0020a\u0020Novo\u0020Vida\u003A\u0020Empieza\u0020tu\u0020Nueva\u0020Vida',
  meta: [
    {
      name: 'keywords',
      content:
        'gimnasio,\u0020fitness,\u0020bienestar,\u0020entrenamientos\u0020personalizados,\u0020equipos\u0020de\u0020gimnasio',
    },
    {
      name: 'description',
      content:
        'Descubre\u0020Novo\u0020Vida,\u0020el\u0020gimnasio\u0020l\u00EDder\u0020en\u0020fitness\u0020y\u0020bienestar.\u0020Ofrecemos\u0020equipos\u0020de\u0020\u00FAltima\u0020generaci\u00F3n,\u0020clases\u0020grupales\u0020y\u0020entrenamientos\u0020personalizados\u0020para\u0020ayudarte\u0020a\u0020alcanzar\u0020tus\u0020objetivos\u0020de\u0020salud.',
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  useEffect(() => {
    // Custom CSS classes for elements from the index.html
    let classes = document.body.classList;
    document.body.classList.remove(...classes);
    document.body.classList.add(...''.split(' '));
  });

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionNavigations4 />
      <IndexSectionCta5 />
      <IndexSectionTestimonials7 />
      <IndexSectionCta6 />
      <IndexSectionTestimonials8 />
      <IndexSectionFaqs3 />
      <IndexSectionFooters9 />
    </React.Fragment>
  );
}

