import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionNavigations4 from '../components/navigations/IndexSectionNavigations4';
import BlogSectionBlog2 from '../components/blog/BlogSectionBlog2';
import BlogSectionFooters4 from '../components/footers/BlogSectionFooters4';
import IndexSectionFooters9 from '../components/footers/IndexSectionFooters9';

const meta = {
  title:
    'Blog\u0020de\u0020Fitness\u0020y\u0020Salud\u0020de\u0020Novo\u0020Vida',
  meta: [
    {
      name: 'keywords',
      content:
        'blog\u0020de\u0020fitness,\u0020consejos\u0020de\u0020salud,\u0020noticias\u0020de\u0020fitness,\u0020art\u00EDculos\u0020de\u0020bienestar,\u0020gimnasio\u0020Novo\u0020Vida',
    },
    {
      name: 'description',
      content:
        'Visita\u0020el\u0020blog\u0020de\u0020Novo\u0020Vida\u0020para\u0020obtener\u0020consejos\u0020de\u0020fitness,\u0020noticias\u0020y\u0020art\u00EDculos\u0020sobre\u0020salud\u0020y\u0020bienestar.\u0020Mantente\u0020informado\u0020y\u0020motivado\u0020con\u0020nuestros\u0020expertos.',
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function Blog() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionNavigations4 />
      <BlogSectionBlog2 />
      <IndexSectionFooters9 />
    </React.Fragment>
  );
}

