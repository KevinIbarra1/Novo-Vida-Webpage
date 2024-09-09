import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import IndexSectionNavigations4 from "../components/navigations/IndexSectionNavigations4";
import BlogSectionBlog2 from "../components/blog/BlogSectionBlog2";
import IndexSectionFooters9 from "../components/footers/IndexSectionFooters9";

const meta = {
  title: "Blog de Novovida - Cómo el Ejercicio Regular Mejora la Calidad del Sueño",
  meta: [
    {
      name: "keywords",
      content: "ejercicio y sueño, calidad del sueño, ritmo circadiano, reducción de estrés, eficiencia del sueño, salud mental",
    },
    {
      name: "description",
      content: "Explora cómo el ejercicio regular puede mejorar significativamente tu calidad del sueño a través de varios mecanismos fisiológicos y psicológicos. Lee más en nuestro blog.",
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function SleepAndExerciseBlog() {
  return (
    <>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionNavigations4 />
      <div className="p-6 bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mt-6">
            Cómo el Ejercicio Regular Mejora la Calidad del Sueño
          </h1>
          <div className="w-full mt-6">
            <img
              src="pexels-julieaagaard-1374125.jpg"
              alt="Ejercicio y sueño"
              className="w-full lg:w-1/3 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6 float-left"
              style={{ float: 'left', margin: '0 20px 20px 0' }}
            />
            <p className="text-lg text-justify mb-4">
              El ejercicio regular puede mejorar la calidad del sueño de varias formas. Ayuda a sincronizar el reloj interno del cuerpo, conocido como ritmo circadiano, facilitando que te sientas alerta durante el día y más somnoliento por la noche. Además, libera endorfinas y disminuye los niveles de cortisol, mejorando el estado anímico y reduciendo la ansiedad, que son factores clave para un buen descanso. Aquellos que ejercitan regularmente suelen disfrutar de una mayor eficiencia del sueño, pasando más tiempo en las etapas profundas del sueño que son cruciales para la recuperación física y mental. El cansancio físico resultante del ejercicio facilita conciliar el sueño más rápido y disfrutar de un descanso continuo, mientras que el aumento y posterior descenso de la temperatura corporal post-ejercicio puede inducir una sensación de somnolencia. Además, el ejercicio puede ser un tratamiento complementario efectivo para personas con insomnio o apnea del sueño leve, al mejorar la duración y la calidad del sueño.
            </p>
            <p className="text-lg text-justify mb-4">
              Es recomendable no realizar ejercicio muy cerca de la hora de dormir, ya que esto podría causar un estado de alerta que dificulte conciliar el sueño. Lo ideal es ejercitarse al menos 3-4 horas antes de acostarse.
            </p>
          </div>
        </div>
      </div>
      <IndexSectionFooters9 />
    </>
  );
}
