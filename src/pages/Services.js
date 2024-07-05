import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import IndexSectionNavigations4 from "../components/navigations/IndexSectionNavigations4";
import ServicesSectionCta3 from "../components/cta/ServicesSectionCta3";
import ServicesSectionFeatures2 from "../components/features/ServicesSectionFeatures2";
import ServicesSectionCta5 from "../components/cta/ServicesSectionCta5";
import IndexSectionFooters9 from "../components/footers/IndexSectionFooters9";

const meta = {
  title:
    "Servicios\u0020de\u0020Fitness\u0020y\u0020Bienestar\u0020en\u0020Novo\u0020Vida",
  meta: [
    {
      name: "keywords",
      content:
        "servicios\u0020de\u0020fitness,\u0020entrenamientos\u0020personalizados,\u0020pesas",
    },
    {
      name: "description",
      content:
        "\u0022Explora\u0020los\u0020servicios\u0020que\u0020Novo\u0020Vida\u0020ofrece.\u0020Mejora\u0020tu\u0020salud\u0020con\u0020nosotros.",
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function Services() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionNavigations4 />
      <ServicesSectionCta3 />

      <ServicesSectionFeatures2 />
      <ServicesSectionCta5 />
      <IndexSectionFooters9 />
    </React.Fragment>
  );
}
