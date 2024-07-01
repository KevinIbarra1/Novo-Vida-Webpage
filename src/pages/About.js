import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutSectionNavigations1 from '../components/navigations/AboutSectionNavigations1';
import AboutSectionCta10 from '../components/cta/AboutSectionCta10';
import AboutSectionTeams9 from '../components/teams/AboutSectionTeams9';
import AboutSectionCta12 from '../components/cta/AboutSectionCta12';
import AboutSectionContact11 from '../components/contact/AboutSectionContact11';
import AboutSectionFooters5 from '../components/footers/AboutSectionFooters5';

const meta = {
  title:
    'Conoce\u0020a\u0020Novo\u0020Vida\u003A\u0020Nuestra\u0020Historia\u0020y\u0020Misi\u00F3n',
  meta: [
    {
      name: 'keywords',
      content:
        'sobre\u0020nosotros,\u0020misi\u00F3n,\u0020historia,\u0020equipo\u0020de\u0020Novo\u0020Vida,\u0020gimnasio',
    },
    {
      name: 'description',
      content:
        'Descubre\u0020la\u0020historia\u0020y\u0020misi\u00F3n\u0020de\u0020Novo\u0020Vida.\u0020Conoce\u0020a\u0020nuestro\u0020equipo\u0020y\u0020nuestra\u0020dedicaci\u00F3n\u0020para\u0020ayudarte\u0020a\u0020alcanzar\u0020tus\u0020metas\u0020de\u0020fitness\u0020y\u0020bienestar.',
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function About() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <AboutSectionNavigations1 />
      <AboutSectionCta10 />
      <AboutSectionTeams9 />
      <AboutSectionCta12 />
      <AboutSectionContact11 />
      <AboutSectionFooters5 />
    </React.Fragment>
  );
}

