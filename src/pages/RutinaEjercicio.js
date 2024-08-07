import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import IndexSectionNavigations4 from "../components/navigations/IndexSectionNavigations4";
import BlogSectionBlog2 from "../components/blog/BlogSectionBlog2";
import IndexSectionFooters9 from "../components/footers/IndexSectionFooters9";

const meta = {
  title:
    "Blog de Fitness y Salud de Novovida - Cómo Crear una Rutina de Ejercicios Eficaz",
  meta: [
    {
      name: "keywords",
      content:
        "blog de fitness, consejos de salud, rutina de ejercicios, ejercicio eficaz, bienestar, gimnasio Novovida",
    },
    {
      name: "description",
      content:
        "Descubre cómo diseñar una rutina de ejercicios eficaz que se adapte a tus objetivos y nivel de condición física. Lee más en el blog de Novovida.",
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
      <div className="p-6 bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mt-6">
            Cómo Crear una Rutina de Ejercicios Eficaz
          </h1>
          <div className="w-full mt-6">
            <img
              src="pexels-pixabay-260352.jpg"
              alt="Exercise Routine"
              className="w-full lg:w-1/3 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6 float-left"
              style={{ float: "left", margin: "0 20px 20px 0" }} // Increased margin
            />
            <p className="text-lg text-justify mb-4">
              Diseñar una rutina de ejercicios efectiva puede parecer un
              desafío, especialmente si eres principiante, pero con algunos
              pasos sencillos puedes crear un plan que se adapte a tus objetivos
              y nivel de condición física. Primero, es crucial definir tus
              objetivos de manera clara y alcanzable, ya sea perder peso, ganar
              músculo o simplemente mejorar tu salud general.
            </p>
            <p className="text-lg text-justify mb-4">
              Luego, debes considerar los diferentes tipos de ejercicios:
              cardio, fuerza, flexibilidad y equilibrio, y cómo equilibrarlos en
              tu rutina. La frecuencia y duración de cada sesión de ejercicio
              deben ajustarse a tus necesidades y capacidades, aumentando
              gradualmente la intensidad para evitar lesiones y asegurar el
              progreso. No olvides la importancia de la recuperación; el
              descanso adecuado es esencial para permitir que tu cuerpo se
              recupere y se fortalezca.
            </p>
            <p className="text-lg text-justify mb-4">
              Con un plan bien estructurado, maximizarás los beneficios de tu
              tiempo en el gimnasio y alcanzarás tus objetivos de fitness de
              manera más efectiva. En Novovida, te ofrecemos el apoyo y los
              recursos necesarios para que diseñes una rutina que funcione para
              ti. ¡Empieza hoy mismo y descubre cómo una buena planificación
              puede transformar tu vida!
            </p>
          </div>
        </div>
      </div>
      <IndexSectionFooters9 />
    </React.Fragment>
  );
}
