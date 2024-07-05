import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionNavigations4 from '../components/navigations/IndexSectionNavigations4';
import MembershipsSectionCta4 from '../components/cta/MembershipsSectionCta4';
import MembershipsSectionPricing2 from '../components/pricing/MembershipsSectionPricing2';
import IndexSectionFooters9 from '../components/footers/IndexSectionFooters9';

const meta = {
  title:
    'Planes\u0020de\u0020Membres\u00EDa\u0020en\u0020Novo\u0020Vida\u003A\u0020Encuentra\u0020el\u0020Ideal\u0020para\u0020Ti',
  meta: [
    {
      name: 'keywords',
      content:
        'membres\u00EDa\u0020de\u0020gimnasio,\u0020planes\u0020de\u0020membres\u00EDa,\u0020descuentos,\u0020promociones,\u0020gimnasio\u0020econ\u00F3mico',
    },
    {
      name: 'description',
      content:
        'Conoce\u0020los\u0020diferentes\u0020planes\u0020de\u0020membres\u00EDa\u0020de\u0020Novo\u0020Vida.\u0020Ofrecemos\u0020opciones\u0020flexibles\u0020para\u0020todos\u0020los\u0020presupuestos\u0020y\u0020necesidades.\u0020\u00DAnete\u0020hoy\u0020y\u0020transforma\u0020tu\u0020vida.',
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function Memberships() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionNavigations4 />
      <MembershipsSectionCta4 />
      <MembershipsSectionPricing2 />
      <IndexSectionFooters9 />
    </React.Fragment>
  );
}

