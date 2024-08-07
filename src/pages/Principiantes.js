import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import IndexSectionNavigations4 from "../components/navigations/IndexSectionNavigations4";
import BlogSectionBlog2 from "../components/blog/BlogSectionBlog2";
import IndexSectionFooters9 from "../components/footers/IndexSectionFooters9";

const meta = {
  title: "Blog de Fitness y Salud de Novovida - Ejercicios Específicos para Principiantes",
  meta: [
    {
      name: "keywords",
      content: "blog de fitness, consejos de salud, ejercicios para principiantes, rutina de ejercicios, bienestar, gimnasio Novovida",
    },
    {
      name: "description",
      content: "Descubre una lista de ejercicios básicos ideales para principiantes y aprende cómo construir una rutina de ejercicios efectiva. Lee más en el blog de Novovida.",
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
            Ejercicios Específicos para Principiantes
          </h1>
          <div className="w-full mt-6">
            <img
              src="pexels-victorfreitas-2261484.webp"
              alt="Beginner Exercises"
              className="w-full lg:w-1/3 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6 float-left"
              style={{ float: 'left', margin: '0 20px 20px 0' }} // Increased margin
            />
            <p className="text-lg text-justify mb-4">
              Si eres nuevo en el mundo del fitness, puede resultar abrumador saber por dónde empezar. Comenzar con ejercicios básicos es una excelente manera de construir una base sólida y prevenir lesiones. Los ejercicios de calentamiento son esenciales para preparar tu cuerpo para la actividad física, ayudando a aumentar la temperatura corporal y la flexibilidad muscular.
            </p>
            <p className="text-lg text-justify mb-4">
              Ejercicios de fuerza simples, como sentadillas, flexiones y levantamiento de pesas ligeras, son perfectos para principiantes. Para mejorar tu resistencia cardiovascular, actividades accesibles como caminar, trotar y saltar la cuerda son ideales. No olvides incluir ejercicios de flexibilidad, como estiramientos básicos, para mejorar la movilidad y prevenir rigidez muscular.
            </p>
            <p className="text-lg text-justify mb-4">
              Una rutina sugerida para principiantes podría incluir una combinación de estos ejercicios a lo largo de la semana, asegurando un equilibrio entre fuerza, cardio y flexibilidad. Comenzar con ejercicios básicos y progresar gradualmente te ayudará a construir una base sólida y alcanzar tus metas de fitness de manera segura y efectiva. En Novovida, estamos aquí para apoyarte en cada paso de tu viaje hacia un estilo de vida más saludable.
            </p>
          </div>
        </div>
      </div>
      <IndexSectionFooters9 />
    </React.Fragment>
  );
}
