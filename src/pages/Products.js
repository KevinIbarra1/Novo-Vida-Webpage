import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title:
    'Productos\u0020de\u0020Fitness\u0020y\u0020Salud\u0020en\u0020Novo\u0020Vida',
  meta: [
    {
      name: 'keywords',
      content:
        'productos\u0020de\u0020fitness,\u0020tienda\u0020de\u0020salud,\u0020art\u00EDculos\u0020de\u0020gimnasio,\u0020equipamiento\u0020de\u0020fitness,\u0020compra\u0020de\u0020productos',
    },
    {
      name: 'description',
      content:
        'Compra\u0020productos\u0020de\u0020fitness\u0020y\u0020salud\u0020de\u0020alta\u0020calidad\u0020en\u0020Novo\u0020Vida.\u0020Ofrecemos\u0020una\u0020selecci\u00F3n\u0020de\u0020art\u00EDculos\u0020que\u0020te\u0020ayudar\u00E1n\u0020a\u0020mejorar\u0020tu\u0020rendimiento\u0020y\u0020bienestar.',
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function Products() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
    </React.Fragment>
  );
}

