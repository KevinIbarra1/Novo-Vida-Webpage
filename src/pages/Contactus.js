import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactusSectionNavigations1 from '../components/navigations/ContactusSectionNavigations1';
import ContactusSectionCta5 from '../components/cta/ContactusSectionCta5';
import ContactusSectionContact6 from '../components/contact/ContactusSectionContact6';
import ContactusSectionCta7 from '../components/cta/ContactusSectionCta7';
import ContactusSectionContact2 from '../components/contact/ContactusSectionContact2';
import ContactusSectionFooters3 from '../components/footers/ContactusSectionFooters3';

const meta = {
  title:
    'Contacto\u0020Novo\u0020Vida\u003A\u0020Estamos\u0020Aqu\u00ED\u0020para\u0020Ayudarte',
  meta: [
    {
      name: 'keywords',
      content:
        'contacto,\u0020informaci\u00F3n,\u0020consultas,\u0020atenci\u00F3n\u0020al\u0020cliente,\u0020gimnasio\u0020Novo\u0020Vida',
    },
    {
      name: 'description',
      content:
        'Ponte\u0020en\u0020contacto\u0020con\u0020Novo\u0020Vida\u0020para\u0020cualquier\u0020consulta\u0020o\u0020informaci\u00F3n.\u0020Estamos\u0020disponibles\u0020para\u0020ayudarte\u0020con\u0020todas\u0020tus\u0020necesidades\u0020de\u0020fitness\u0020y\u0020bienestar.',
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function Contactus() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <ContactusSectionNavigations1 />
      <ContactusSectionCta5 />
      <ContactusSectionContact6 />
      <ContactusSectionCta7 />
      <ContactusSectionContact2 />
      <ContactusSectionFooters3 />
    </React.Fragment>
  );
}

